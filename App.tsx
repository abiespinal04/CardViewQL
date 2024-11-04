import React from 'react';
import {RelayEnvironmentProvider} from 'react-relay';
import RelayEnvironment from './src/relay/RelayEnvironment';
import {NavigationContainer} from '@react-navigation/native';
import TabStackNavigator from './src/navigation/stacks/TabStackNavigator';
import {SafeAreaView, StyleSheet, Text, View} from 'react-native';
import {NetworkConsumer, NetworkProvider} from 'react-native-offline';

export default function App() {
  return (
    <RelayEnvironmentProvider environment={RelayEnvironment}>
      <NetworkProvider>
        <NetworkConsumer>
          {({isConnected}) => (
            <SafeAreaView style={styles.container}>
              {!isConnected && (
                <View style={styles.offlineContainer}>
                  <Text style={styles.offlineText}>
                    You are currently offline
                  </Text>
                </View>
              )}
              <NavigationContainer>
                <TabStackNavigator />
              </NavigationContainer>
            </SafeAreaView>
          )}
        </NetworkConsumer>
      </NetworkProvider>
    </RelayEnvironmentProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  offlineContainer: {
    backgroundColor: 'red',
    padding: 10,
    alignItems: 'center',
  },
  offlineText: {
    color: 'white',
  },
});
