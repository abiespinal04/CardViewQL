import React from 'react';
import { RelayEnvironmentProvider } from 'react-relay';
import RelayEnvironment from './src/relay/RelayEnvironment';
import { NavigationContainer } from '@react-navigation/native';
import TabStackNavigator from './src/navigation/stacks/TabStackNavigator';

export default function App() {
  return (
    <RelayEnvironmentProvider environment={RelayEnvironment}>
    <NavigationContainer>
      <TabStackNavigator />
    </NavigationContainer>
  </RelayEnvironmentProvider>
  );
}
