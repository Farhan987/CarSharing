import React, {Component} from 'react';
import {StyleSheet, View, Image, Text} from 'react-native';
import {WHITE, LIGHT_BlUE} from '../theme/colors';
import {EXTRA_LARGE, SMALL} from '../theme/font';
import {TouchableOpacity} from 'react-native-gesture-handler';
export default class CarComponent extends Component {
  render() {
    return (
      <React.Fragment>
        <View style={{height: 10}} />
        <View style={styles.imageViewStyle}>
          <Image
            resizeMode="stretch"
            source={require('../Logo/car.png')}
            style={{height: 150, width: '90%'}}
          />
        </View>
        <View style={styles.outerViewStyle}>
          <View style={styles.innerViewStyle}>
            <Text
              style={{
                color: WHITE,
                fontSize: EXTRA_LARGE,
                fontWeight: 'bold',
              }}>
              Renault Kwid
            </Text>
            <Text style={{color: WHITE}}>PXZ2451 | 198.000 km</Text>
          </View>
          <View style={styles.innerViewStyle}>
            <Text
              style={{
                color: WHITE,
                fontSize: SMALL,
              }}>
              Available all day
            </Text>
            <View style={{height: 5}} />
            <TouchableOpacity
              style={styles.buttonStyle}
              onPress={() =>
                this.props.navigation.navigate('resumoCheckInScreen')
              }>
              <Text style={{color: WHITE, fontSize: SMALL, paddingBottom: 2}}>
                use this
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </React.Fragment>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  imageViewStyle: {
    height: 160,
    width: '90%',
    alignSelf: 'center',
    justifyContent: 'center',
    alignItems: 'center',
    opacity: 2,
    backgroundColor: WHITE,
    borderTopLeftRadius: 5,
    borderTopRightRadius: 5,
  },
  outerViewStyle: {
    height: 80,
    width: '90%',
    alignSelf: 'center',
    backgroundColor: LIGHT_BlUE,
    borderBottomLeftRadius: 5,
    borderBottomRightRadius: 5,
    flexDirection: 'row',
  },
  innerViewStyle: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonStyle: {
    height: 22,
    width: 120,
    borderColor: WHITE,
    borderWidth: 1,
    borderRadius: 3,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
