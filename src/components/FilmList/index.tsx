import React from 'react';
import { FlatList, ActivityIndicator, StyleSheet, Text, View } from 'react-native';
import { graphql, usePaginationFragment } from 'react-relay';
import FilmCard from '../FilmCard'; // Assuming you have a FilmCard component to display each film

const FilmListFragment = graphql`
  fragment FilmListFragment on Root
    @refetchable(queryName: "FilmListPaginationQuery")
    @argumentDefinitions(
      first: { type: "Int", defaultValue: 5 }
      after: { type: "String" }
    ) {
    allFilms(first: $first, after: $after) @connection(key: "FilmList_allFilms") {
      edges {
        node {
          id
          title
          ...FilmCardFragment
        }
      }
      pageInfo {
        hasNextPage
        endCursor
      }
    }
  }
`;

export default function FilmList(props) {
  const { data, loadNext, hasNext, isLoadingNext } = usePaginationFragment(
    FilmListFragment,
    props.root
  );

  // Ensure data and allFilms are defined
  if (!data || !data.allFilms) {
    return (
      <View style={styles.errorContainer}>
        <Text style={styles.errorText}>Error loading data. Please try again later.</Text>
      </View>
    );
  }

  const films = data.allFilms.edges.map(edge => edge.node);

  // Load more films when the user scrolls to the end
  const handleLoadMore = () => {
    if (hasNext && !isLoadingNext) {
      loadNext(5); // Load 5 more items
    }
  };

  return (
    <FlatList
      data={films}
      keyExtractor={(item) => item.id}
      renderItem={({ item }) => <FilmCard film={item} />}
      contentContainerStyle={styles.listContainer}
      onEndReached={handleLoadMore}
      onEndReachedThreshold={0.5}
      ListFooterComponent={isLoadingNext ? <ActivityIndicator /> : null}
    />
  );
}

const styles = StyleSheet.create({
  listContainer: {
    backgroundColor: 'red',
    paddingBottom: 16,
  },
  errorContainer: {
    flex: 1,
    backgroundColor: 'white',
    justifyContent: 'center',
    alignItems: 'center',
  },
  errorText: {
    color: 'red',
  },
});
