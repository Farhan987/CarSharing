import React, {Component} from 'react';
import {
  StyleSheet,
  View,
  ImageBackground,
  Text,
  Image,
  TouchableOpacity,
} from 'react-native';
import {WHITE} from '../theme/colors';
import CustomTextInput from '../components/textInput';
import CustomButton from '../components/customButton';
import Icon from 'react-native-vector-icons/FontAwesome';
class RecoverPasswordScreen extends Component {
  render() {
    return (
      <ImageBackground
        source={require('../Logo/bgImagee.jpg')}
        style={styles.container}>
        {/* firstFlex */}
        <View style={styles.firstFlexStyle}>
          <View style={styles.backButtonStyle}>
            <TouchableOpacity
              onPress={() => this.props.navigation.navigate('LoginScreen')}>
              {/* <Icon
                name="long-arrow-left"
                size={20}
                color={WHITE}
                style={{paddingLeft: 20}}
              /> */}
              <Image
                source={require('../icons/whiteBack.png')}
                style={{height: 20, width: 20, marginLeft: 15}}
              />
            </TouchableOpacity>
          </View>
        </View>

        {/* middleContent */}
        <View style={styles.secondFlexStyle}>
          <View style={{height: 15}} />
          <CustomTextInput
            source={require('../icons/email.png')}
            placeholder={'Enter Your Email'}
            textColor={WHITE}
            phColor={WHITE}
          />

          <View style={{height: 30}} />
          <CustomButton
            onPress={() => this.props.navigation.navigate('LoginScreen')}
            buttonWidth={'60%'}
            buttonText={'Recover your Password'}
          />
        </View>

        {/* endFlex */}
        <View style={styles.thirdFlexStyle} />
      </ImageBackground>
    );
  }
}

export default RecoverPasswordScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  firstFlexStyle: {
    flex: 1,
    justifyContent: 'flex-start',
  },
  backButtonStyle: {
    height: 60,
    justifyContent: 'center',
    alignItems: 'flex-start',
  },

  secondFlexStyle: {
    flex: 1,
    justifyContent: 'center',
  },
  thirdFlexStyle: {
    flex: 1,
  },
  forgotTextViewStyle: {
    height: 25,
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
});
