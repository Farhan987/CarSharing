import React, {Component} from 'react';
import {StyleSheet, View} from 'react-native';
import AppContainer from './src/navigation/navigation';
import MainScreen from './src/components/modalComponents/checkInCanceledComponent';
import EstrelasScreen from './src/screens/estrelasScreen';
export default class App extends Component {
  render() {
    return (
      <View style={styles.container}>
        <AppContainer />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
