import React from 'react';
import { RelayEnvironmentProvider } from 'react-relay';
import RelayEnvironment from './src/relay/RelayEnvironment';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import HomeStackNavigator from './src/navigation/stacks/HomeStackNavigator';
import { Text } from 'react-native';

const Tab = createBottomTabNavigator();

export default function App() {

  return (
    <RelayEnvironmentProvider environment={RelayEnvironment}>
     <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen
          name="Home"
          component={HomeStackNavigator}
          options={{
            tabBarIcon: () => <Text style={{ fontSize: 24 }}>🏠</Text>,
            tabBarLabel: '', // Remove label text
          }}
        />
        <Tab.Screen
          name="Scan"
          component={HomeStackNavigator}
          options={{
            tabBarIcon: () => <Text style={{ fontSize: 24 }}>📷</Text>,
            tabBarLabel: '', // Remove label text
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
    </RelayEnvironmentProvider>
  );
}