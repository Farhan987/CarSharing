import React, {Component} from 'react';
import {StyleSheet, View, Image, TouchableOpacity, Text} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import {WHITE, LIGHT_BlUE} from '../theme/colors';
import CustomButton from '../components/customButton';
import {EXTRA_LARGE, MEDIUM} from '../theme/font';
export default class ValidacaoDeCheckInComponent extends Component {
  render() {
    return (
      <React.Fragment>
        <View
          style={{
            height: 290,
            width: '85%',
            backgroundColor: WHITE,
            alignSelf: 'center',
            borderRadius: 3,
          }}>
          <View
            style={{
              flex: 2,
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            {/* imageView */}
            <View
              style={{
                width: '50%',
                alignSelf: 'center',
              }}>
              <Image
                style={styles.imageStyle}
                source={require('../Logo/profile.jpg')}
              />
              <TouchableOpacity
                style={styles.editImageButtonStyle}
                // onPress={() =>
                //   this.props.navigation.navigate('')
                // }
              >
                <Icon name="check" size={20} color={LIGHT_BlUE} />
              </TouchableOpacity>
            </View>
          </View>

          <View
            style={{
              flex: 1,
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            <Text
              style={{
                fontSize: EXTRA_LARGE,
                fontWeight: 'bold',
                color: LIGHT_BlUE,
              }}>
              Eduardo Leite
            </Text>
            <Text
              style={{
                fontSize: MEDIUM,
                color: LIGHT_BlUE,
              }}>
              Renault Kwid PXZ2451
            </Text>
          </View>

          <View style={{flex: 1}}>
            <CustomButton
              onPress={this.props.onPress}
              buttonWidth={'60%'}
              buttonText={'Close'}
              btnBackgroundColor={LIGHT_BlUE}
              btnTextColor={WHITE}
            />
          </View>
        </View>
      </React.Fragment>
    );
  }
}

const styles = StyleSheet.create({
  imageViewStyle: {
    height: 10,
    width: '100%',
    justifyContent: 'flex-start',
    alignItems: 'center',
    backgroundColor: WHITE,
  },
  imageStyle: {
    height: 140,
    width: 140,
    borderRadius: 100,
    alignSelf: 'center',
  },
  editImageButtonStyle: {
    height: 35,
    width: 35,
    borderRadius: 50,
    backgroundColor: WHITE,
    alignSelf: 'center',
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: 110,
    marginTop: -50,
    justifyContent: 'center',
    elevation: 3,
  },
});
