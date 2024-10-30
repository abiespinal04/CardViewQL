import React, {useEffect} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {PersonDetailsScreenProps} from '../../navigation/stacks/HomeStackNavigator';

const PersonDetailsScreen: React.FC<PersonDetailsScreenProps> = ({route}) => {
  const {person} = route.params || {};
  const navigation = useNavigation();

  useEffect(() => {
    navigation.setOptions({title: person?.name});
  }, [navigation, person?.name]);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>{person?.name}</Text>
      <Text style={styles.detail}>Birth Year: {person?.birthYear}</Text>
      <Text style={styles.detail}>Gender: {person?.gender}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#f8f9fa',
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  detail: {
    fontSize: 18,
    marginBottom: 10,
  },
});

export default PersonDetailsScreen;
