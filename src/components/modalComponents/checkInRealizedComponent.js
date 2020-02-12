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

export default class CheckInRealizedModal extends Component {
  state = {
    top: new Animated.Value(Dimensions.get('window').height / 2 - 150),
    right: new Animated.Value(Dimensions.get('window').width / 2 - 130),
    bOpacity: new Animated.Value(1),
  };
  componentDidMount() {
    setTimeout(() => this.startAnimation(), 500);
  }
  startAnimation = () => {
    setTimeout(() => {
      this.props.navigation.navigate('FazerReservaScreen');
      this.props.setModalVisible();
    }, 500);
    Animated.parallel([
      Animated.timing(this.state.right, {
        toValue: -300,
        duration: 500,
      }),
      Animated.timing(this.state.bOpacity, {
        toValue: 0,
        duration: 500,
      }),
    ]).start();
  };
  render() {
    return (
      <Animated.View style={[styles.container, {opacity: this.state.bOpacity}]}>
        <StatusBar backgroundColor={'#47A3B3'} barStyle="light-content" />
        <Animated.View
          style={{
            width: 260,
            position: 'absolute',
            right: this.state.right,
            top: this.state.top,
          }}>
          <View style={styles.imageViewStyle}>
            <Image
              resizeMode="stretch"
              source={require('../../Logo/carRight.png')}
              style={{height: 140, width: '70%'}}
            />
          </View>
          <View
            style={{
              height: 50,
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            <Text style={{fontSize: LARGE, fontWeight: 'bold', color: WHITE}}>
              Check in realized
            </Text>
          </View>
        </Animated.View>
      </Animated.View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#47A3B3',
    justifyContent: 'center',
    alignItems: 'center',
  },
  imageViewStyle: {
    height: 150,
    width: '100%',
    alignSelf: 'center',
    justifyContent: 'center',
    alignItems: 'center',
    borderTopLeftRadius: 5,
    borderTopRightRadius: 5,
  },
});
