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
import Icon from 'react-native-vector-icons/FontAwesome';
import {LARGE} from '../theme/font';
export default class QRCodeComponent extends Component {
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
            <Icon
              name="times"
              size={25}
              color={WHITE}
              style={{paddingLeft: 20}}
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
            style={{height: 200, width: '80%'}}
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
    height: 220,
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
