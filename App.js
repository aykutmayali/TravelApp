import React from 'react';
import Home from './src/screens/Home';

import {
  SafeAreaView,
  StyleSheet, View
} from 'react-native';


const App = () => {
 return (
  <SafeAreaView style={styles.safeView}>
    <View style={styles.view}>
      <Home/>
    </View>
  </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  safeView: {
    flex: 1,
    backgroundColor: "yellow"
  },
  view: {
    flex: 1,
    backgroundColor: "red"
  }
});

export default App;
