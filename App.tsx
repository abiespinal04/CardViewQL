// App.tsx
import React from 'react';
import { SafeAreaView, StatusBar, StyleSheet, useColorScheme } from 'react-native';
import FilmList from './src/components/FilmList';
import { Colors } from 'react-native/Libraries/NewAppScreen';
import { RelayEnvironmentProvider } from 'react-relay';
import RelayEnvironment from './src/relay/RelayEnvironment';

export default function App() {
  const isDarkMode = useColorScheme() === 'dark';
  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  return (
    <RelayEnvironmentProvider environment={RelayEnvironment}>
    <SafeAreaView style={[styles.container, backgroundStyle]}>
      <StatusBar
        barStyle={isDarkMode ? 'light-content' : 'dark-content'}
        backgroundColor={backgroundStyle.backgroundColor}
      />
      <FilmList />
    </SafeAreaView>
    </RelayEnvironmentProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
