import React from 'react';
import { StatusBar, SafeAreaView, StyleSheet } from 'react-native';

import NavigationContainer from './src/navigation/routes';

const App = () => {
  return (
    <SafeAreaView style={styles.topSpacingApp}>
      <StatusBar barStyle="default" />
      <NavigationContainer />
    </SafeAreaView>
  );
};

export default App;

const styles = StyleSheet.create({
  topSpacingApp: {
    flex: 1,
  },
});
