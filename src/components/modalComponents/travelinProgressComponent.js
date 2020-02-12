import React, {Component} from 'react';
import {StyleSheet, StatusBar, Animated, Dimensions} from 'react-native';
import {WHITE} from '../../theme/colors';
import {LARGE, MEDIUM} from '../../theme/font';

export default class TravelinProgressModal extends Component {
  state = {
    c1X: new Animated.Value(Dimensions.get('window').width / 2 - 110),
    c2X: new Animated.Value(Dimensions.get('window').width / 2 - 110),
    c2Y: new Animated.Value(250),
    c1X2: new Animated.Value(Dimensions.get('window').width / 2 - 80),
    bOpacity: new Animated.Value(1),
  };
  startAnimation = () => {
    setTimeout(() => {
      this.props.navigation.navigate('ThirdProfileAuthorizerCheckInScreen');
    }, 400);
    setTimeout(() => {
      this.props.setModalVisible();
    }, 500);
    Animated.parallel([
      Animated.timing(this.state.c2Y, {
        toValue: Dimensions.get('window').height - 80,
        duration: 500,
      }),
      Animated.timing(this.state.bOpacity, {
        toValue: 0,
        duration: 500,
      }),
      Animated.timing(this.state.c1X, {
        toValue: -200,
        duration: 500,
      }),
      Animated.timing(this.state.c1X2, {
        toValue: -200,
        duration: 500,
      }),
    ]).start();
  };
  componentDidMount() {
    setTimeout(() => {
      this.startAnimation();
    }, 930);
  }

  render() {
    const left = Dimensions.get('window').width / 2 - 110;
    return (
      <Animated.View
        style={{
          flex: 1,
          backgroundColor: '#5D47B3',
          opacity: this.state.bOpacity,
        }}>
        <StatusBar backgroundColor={'#5D47B3'} barStyle="light-content" />
        <Animated.Image
          resizeMode="stretch"
          source={require('../../icons/travelProgress.png')}
          style={{
            height: 140,
            width: 220,
            position: 'absolute',
            top: 250,
            left: this.state.c1X,
          }}
        />
        <Animated.Text
          style={{
            height: 140,
            width: 220,
            position: 'absolute',
            top: 390,
            left: this.state.c1X2,
            fontSize: LARGE,
            fontWeight: 'bold',
            color: WHITE,
          }}>
          Travel in progress
        </Animated.Text>

        <Animated.Text
          style={{
            height: 140,
            width: 220,
            position: 'absolute',
            top: 415,
            left: this.state.c1X2,
            fontSize: MEDIUM,
            color: WHITE,
          }}>
          To check out fill out the
        </Animated.Text>
        <Animated.Text
          style={{
            height: 140,
            width: 220,
            position: 'absolute',
            top: 435,
            left: this.state.c1X2,
            fontSize: MEDIUM,
            color: WHITE,
          }}>
          mandatory information in the application.
        </Animated.Text>
      </Animated.View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    height: Dimensions.get('screen').height,
    backgroundColor: '#5D47B3',
  },
  imageViewStyle: {
    height: 300,
    width: 200,
    // top: '50%',
    // left: '50%',
  },
});
