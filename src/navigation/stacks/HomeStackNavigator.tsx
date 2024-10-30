import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import HomeScreen from '../../screens/HomeScreen';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import PersonDetailsScreen from '../../screens/PersonDetailsScreen';
import { PersonCardProps } from '../../components/PersonCard/PersonCard';


export type RootStackParamList = {
  People?: undefined;
  PersonDetails?: PersonCardProps
};

export type PeopleScreenProps = NativeStackScreenProps<RootStackParamList, 'People'>;
export type PersonDetailsScreenProps = NativeStackScreenProps<RootStackParamList, 'PersonDetails'>;


const HomeStack = createStackNavigator<RootStackParamList>();

const HomeStackNavigator = () => {
  return (
    <HomeStack.Navigator>
      <HomeStack.Screen
        name="People"
        component={HomeScreen}
        options={{headerShown: false}}
      />
      <HomeStack.Screen
        name="PersonDetails"
        component={PersonDetailsScreen}
        options={{
          headerBackTitleVisible: false,
        }}
      />
    </HomeStack.Navigator>
  );
};

export default HomeStackNavigator;
