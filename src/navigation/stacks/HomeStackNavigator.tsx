// HomeStackNavigator.js
import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from '../../screens/HomeScreen';
import FilmDetailsScreen from './../../screens/FilmDetailsScreen';

const HomeStack = createStackNavigator();

const HomeStackNavigator = () => {
    return (
        <HomeStack.Navigator screenOptions={{ headerShown: false }}>
          <HomeStack.Screen name="Home" component={HomeScreen} />
          <HomeStack.Screen name="FilmDetails" component={FilmDetailsScreen} />
        </HomeStack.Navigator>
      );
};

export default HomeStackNavigator;
