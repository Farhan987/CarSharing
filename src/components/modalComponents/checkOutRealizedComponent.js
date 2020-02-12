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
export default class CheckOutRealizedComponent extends Component {
  componentDidMount() {
    // setTimeout(() => {
    //   this.props.setModalVisible;
    //   this.props.navigation.navigate('FazerReservaScreen');
    // }, 700);

    setTimeout(() => {
      this.startAnimation();
    }, 930);
  }
  state = {
    animationY: new Animated.Value(250),

    bOpacity: new Animated.Value(1),
  };
  startAnimation = () => {
    setTimeout(() => {
      this.props.navigation.navigate('EstrelasScreen');
      this.props.setModalVisible();
    }, 1000);
    Animated.parallel([
      Animated.timing(this.state.bOpacity, {
        toValue: 0,
        duration: 1000,
      }),
      Animated.timing(this.state.animationY, {
        toValue: 0,
        duration: 1000,
      }),
    ]).start();
  };
  render() {
    return (
      <Animated.View style={[styles.container, {opacity: this.state.bOpacity}]}>
        <StatusBar backgroundColor={'#47A3B3'} barStyle="light-content" />
        <Animated.View
          style={[
            styles.imageViewStyle,
            {
              position: 'absolute',
              bottom: this.state.animationY,
              left: Dimensions.get('window').width / 2 - 100,
            },
          ]}>
          <View
            style={{
              flex: 1,
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            <Image
              resizeMode="stretch"
              source={require('../../icons/carDown.png')}
              style={{height: 200, width: 130}}
            />
          </View>
          <Text
            style={{
              fontSize: LARGE,
              fontWeight: 'bold',
              color: WHITE,
              paddingLeft: 35,
            }}>
            Check out realized
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
    height: 350,
    width: 200,
    // top: '50%',
    // left: '50%',
  },
});
