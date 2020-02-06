import React, {Component} from 'react';
import {StyleSheet, View, StatusBar, Image, Text} from 'react-native';
import {WHITE} from '../../theme/colors';
import {LARGE} from '../../theme/font';
export default class CheckInRealizedModal extends Component {
  componentDidMount() {
    setTimeout(() => {
      this.props.setModalVisible;
      this.props.navigation.navigate('FazerReservaScreen'), 1500;
    });
  }
  render() {
    return (
      <View style={styles.container}>
        <StatusBar backgroundColor={'#47A3B3'} barStyle="light-content" />
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
      </View>
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
    width: '80%',
    alignSelf: 'center',
    justifyContent: 'center',
    alignItems: 'center',
    borderTopLeftRadius: 5,
    borderTopRightRadius: 5,
  },
});
