import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { graphql, useFragment } from 'react-relay';

const FilmCardFragment = graphql`
  fragment FilmCardFragment on Film {
    title
    episodeID
    director
    releaseDate
  }
`;

export default function FilmCard({ film }) {
  const data = useFragment(FilmCardFragment, film);

  return (
    <View style={styles.card}>
      <Text style={styles.title}>{data.title}</Text>
      <Text>Episode: {data.episodeID}</Text>
      <Text>Director: {data.director}</Text>
      <Text>Release Date: {data.releaseDate}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    padding: 16,
    backgroundColor: 'white',
    borderBottomWidth: 1,
    borderBottomColor: '#ddd',
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
  },
});
