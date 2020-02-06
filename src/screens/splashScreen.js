import React, {Component} from 'react';
import {View, ImageBackground, Image, Text} from 'react-native';
import {WHITE} from '../theme/colors';
class SplashScreen extends Component {
  componentDidMount() {
    setTimeout(() => this.props.navigation.navigate('LoginScreen'), 3000);
  }

  render() {
    return (
      <ImageBackground
        source={require('../Logo/bgImagee.jpg')}
        style={{
          flex: 1,
        }}>
        <View
          style={{
            flex: 1,
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <Image
            style={{
              width: 200,
              height: 200,
              alignSelf: 'center',
            }}
            source={require('../Logo/CarSharing1.png')}
          />
        </View>
      </ImageBackground>
    );
  }
}

export default SplashScreen;
