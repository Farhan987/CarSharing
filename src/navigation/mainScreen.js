import React, {Component} from 'react';
import {
  StyleSheet,
  View,
  ImageBackground,
  TouchableOpacity,
  Image,
  Text,
} from 'react-native';
import {LIGHT_BlUE, WHITE} from '../theme/colors';

export default class MainScreen extends Component {
  render() {
    return (
      <ImageBackground
        source={require('../Logo/bgImagee.jpg')}
        style={styles.container}>
        <TouchableOpacity
          style={styles.buttonPress}
          onPress={() => this.props.navigation.navigate('FirstProfileScreens')}>
          <Image
            style={styles.IconStyle}
            source={require('../Logo/logoImage.png')}
          />
          <Text style={styles.IconTextStyle}>Profile 1</Text>
        </TouchableOpacity>

        <View style={{height: 60}} />
        <TouchableOpacity
          onPress={() => this.props.navigation.navigate('SecondProfileScreens')}
          style={styles.buttonPress}>
          <Image
            style={styles.IconStyle}
            source={require('../Logo/logoImage.png')}
          />
          <Text style={styles.IconTextStyle}>Profile 2</Text>
        </TouchableOpacity>

        <View style={{height: 60}} />
        <TouchableOpacity
          onPress={() => this.props.navigation.navigate('ThirdProfileScreens')}
          style={styles.buttonPress}>
          <Image
            style={styles.IconStyle}
            source={require('../Logo/logoImage.png')}
          />
          <Text style={styles.IconTextStyle}>Profile 3</Text>
        </TouchableOpacity>
      </ImageBackground>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: LIGHT_BlUE,
  },
  buttonPress: {
    backgroundColor: WHITE,
    width: 100,
    height: 100,
    borderRadius: 100,
    alignSelf: 'center',
    justifyContent: 'center',
    alignItems: 'center',
  },
  IconStyle: {
    height: 45,
    width: 45,
  },
  IconTextStyle: {
    color: LIGHT_BlUE,
    paddingTop: 8,
  },
});
