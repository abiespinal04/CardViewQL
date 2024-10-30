import React from 'react';
import {RelayEnvironmentProvider} from 'react-relay';
import RelayEnvironment from './src/relay/RelayEnvironment';
import {NavigationContainer} from '@react-navigation/native';
import TabStackNavigator from './src/navigation/stacks/TabStackNavigator';
import {SafeAreaView} from 'react-native-safe-area-context';
import {StyleSheet} from 'react-native';

export default function App() {
  return (
    <RelayEnvironmentProvider environment={RelayEnvironment}>
      <SafeAreaView style={styles.container}>
        <NavigationContainer>
          <TabStackNavigator />
        </NavigationContainer>
      </SafeAreaView>
    </RelayEnvironmentProvider>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
