import React, {Component} from 'react';
import {
  StyleSheet,
  View,
  StatusBar,
  Image,
  Text,
  Animated,
  Dimensions,
} from 'react-native';
import {WHITE} from '../../theme/colors';
import {LARGE} from '../../theme/font';
export default class CheckInCanceledModal extends Component {
  componentDidMount() {
    setTimeout(() => {
      this.props.setModalVisible();
      this.props.navigation.navigate('ValidacaoDeCheckInScreen');
    }, 1600);
    startAnimation = () => {
      Animated.parallel([
        Animated.timing(this.state.bOpacity, {
          toValue: 0,
          duration: 900,
        }),
        Animated.timing(this.state.animationY, {
          toValue: 0,
          duration: 800,
        }),
      ]).start();
    };
    setTimeout(() => {
      startAnimation();
    }, 930);
  }
  state = {
    animationY: new Animated.Value(
      Dimensions.get('window').height - Dimensions.get('window').height / 2,
    ),
    animationX: new Animated.Value(100),
    bOpacity: new Animated.Value(1),
  };
  startAnimation = () => {
    Animated.parallel([
      Animated.timing(this.state.bOpacity, {
        toValue: 0,
        duration: 1000,
      }),
      Animated.timing(this.state.animationY, {
        toValue: 0,
        duration: 1000,
      }),
      Animated.timing(this.state.animationX, {
        toValue: 0,
        duration: 1000,
      }),
    ]).start();
  };
  render() {
    console.log(Dimensions.get('window').height);

    console.log(
      Dimensions.get('window').height - Dimensions.get('window').height / 2,
    );
    return (
      <Animated.View style={[styles.container, {opacity: this.state.bOpacity}]}>
        <StatusBar backgroundColor={'#47A3B3'} barStyle="light-content" />
        <Animated.View
          style={[
            styles.imageViewStyle,
            {
              top: this.state.animationY,
              marginLeft: Dimensions.get('window').width / 3.5,
            },
          ]}>
          <View
            style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
            <Image
              resizeMode="stretch"
              source={require('../../Logo/carUp.png')}
              style={{height: 200, width: 140}}
            />
          </View>
          <View style={{height: 40}}></View>
          <Text style={{fontSize: LARGE, fontWeight: 'bold', color: WHITE}}>
            Check in authorized
          </Text>
        </Animated.View>
      </Animated.View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#47A3B3',
  },
  imageViewStyle: {
    height: 250,
    width: 200,
    position: 'absolute',
    // top: '50%',
    // left: '50%',
  },
});
