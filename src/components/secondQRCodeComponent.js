import React, {Component} from 'react';
import {
  StyleSheet,
  View,
  StatusBar,
  Image,
  Text,
  TouchableOpacity,
} from 'react-native';
import {WHITE} from '../theme/colors';
import {LARGE} from '../theme/font';
export default class SecondQRCodeComponent extends Component {
  componentDidMount() {
    setTimeout(() => {
      this.props.navigation.navigate('MyReservationSecondScreen'), 1500;
      this.props.setModalVisible;
    });
  }

  render() {
    return (
      <View style={styles.container}>
        <StatusBar backgroundColor={'#4B69A6'} barStyle="light-content" />
        <View style={styles.crossButtonStyle}>
          <TouchableOpacity onPress={this.props.setModalVisible}>
            <Image
              source={require('../icons/crossWhite.png')}
              style={{height: 25, width: 25, marginLeft: 10}}
            />
          </TouchableOpacity>
        </View>
        <View
          style={{
            height: 50,
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <Text style={{fontSize: LARGE, fontWeight: 'bold', color: WHITE}}>
            Read QR Code
          </Text>
        </View>
        <View style={styles.imageViewStyle}>
          <Image
            resizeMode="stretch"
            source={require('../Logo/QR.jpg')}
            style={{height: 250, width: '80%'}}
          />
        </View>
        <View style={{flex: 1}} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#4B69A6',
    justifyContent: 'center',
  },
  imageViewStyle: {
    height: 250,
    width: '80%',
    alignSelf: 'center',
    justifyContent: 'center',
    alignItems: 'center',
    borderTopLeftRadius: 5,
    borderTopRightRadius: 5,
  },
  crossButtonStyle: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
    marginTop: 25,
  },
});
