import {useNavigation} from '@react-navigation/native';
import React, {useState} from 'react';
import {Text, StyleSheet, Pressable, View} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {RootStackParamList} from '../../navigation/stacks/HomeStackNavigator';

export type PersonType =
  | {
      readonly id: string;
      readonly name: string | null | undefined;
      readonly birthYear: string | null | undefined;
      readonly gender: string | null | undefined;
    }
  | null
  | undefined;

export type PersonCardProps = {
  person: PersonType;
};

const PersonCard: React.FC<PersonCardProps> = ({person}) => {
  const navigation =
    useNavigation<NativeStackNavigationProp<RootStackParamList>>();
  const [liked, setLiked] = useState(false);

  const navigateToPerson = React.useCallback(() => {
    navigation.navigate('PersonDetails', {person});
  }, [navigation, person]);

  const toggleLike = React.useCallback(() => {
    setLiked(!liked);
  }, [liked]);

  return (
    <Pressable
      testID="person-card"
      onPress={navigateToPerson}
      style={styles.card}>
      <View style={styles.cardHeader}>
        <Text testID="person-name" style={styles.name}>
          {person?.name}
        </Text>
        <Pressable
          testID="like-button"
          onPress={toggleLike}
          style={styles.likeButton}>
          <Icon name="heart" size={20} color={liked ? 'red' : 'gray'} />
        </Pressable>
      </View>

      <View style={styles.infoContainer}>
        <View style={styles.infoRow}>
          <Icon name="birthday-cake" size={16} color="#555" />
          <Text testID="person-birth-year" style={styles.infoText}>
            {' '}
            {person?.birthYear}
          </Text>
        </View>
        <View style={styles.infoRow}>
          <Icon name="user" size={16} color="#555" />
          <Text testID="person-gender" style={styles.infoText}>
            {' '}
            {person?.gender}
          </Text>
        </View>
      </View>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  card: {
    backgroundColor: 'white',
    padding: 16,
    borderBottomWidth: 1,
    borderBottomColor: '#ddd',
  },
  cardHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 12,
  },
  name: {
    fontWeight: '600',
    fontSize: 18,
    color: '#333',
  },
  likeButton: {
    padding: 8,
  },
  infoContainer: {
    borderTopWidth: 1,
    borderTopColor: '#eee',
    paddingTop: 8,
  },
  infoRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 4,
  },
  infoText: {
    fontSize: 14,
    color: '#555',
    marginLeft: 8,
  },
});

export default PersonCard;
