import React, {Component} from 'react';
import {
  StyleSheet,
  View,
  ImageBackground,
  Image,
  Text,
  TouchableOpacity,
} from 'react-native';
import {WHITE} from '../theme/colors';
import CustomTextInput from '../components/textInput';
import CustomButton from '../components/customButton';
import {SMALL} from '../theme/font';
class LoginScreen extends Component {
  state = {secureTextFeild: false};
  toogleEye = () => {
    this.setState({secureTextFeild: !this.state.secureTextFeild});
  };
  render() {
    return (
      <ImageBackground
        source={require('../Logo/bgImagee.jpg')}
        style={styles.container}>
        {/* firstFlex */}
        <View style={styles.firstFlexStyle}>
          <Image
            resizeMode={'stretch'}
            style={styles.imageStyle}
            source={require('../Logo/CarSharing1.png')}
          />
        </View>

        {/* middleContent */}
        <View style={styles.secondFlexStyle}>
          <View style={{height: 15}} />
          <CustomTextInput
            iconName={'user'}
            placeholder={'Enter Your Login'}
            textColor={WHITE}
          />
          <CustomTextInput
            iconName={'key'}
            securePassword={this.state.secureTextFeild}
            eyeIcon={this.state.secureTextFeild ? 'eye-slash' : 'eye'}
            onEyePress={this.toogleEye}
            textColor={WHITE}
            placeholder={'Enter Your Password'}
            showEye
          />
          <View style={{height: 30}} />
          <CustomButton
            buttonWidth={'60%'}
            buttonText={'Login'}
            onPress={() => this.props.navigation.navigate('FazerReservaScreen')}
          />
          <View style={styles.forgotTextViewStyle}>
            <TouchableOpacity
              onPress={() =>
                this.props.navigation.navigate('RecoverPasswordScreen')
              }>
              <Text style={{color: WHITE, fontSize: SMALL}}>
                I forgot my Password
              </Text>
            </TouchableOpacity>
          </View>
        </View>

        {/* endFlex */}
        <View style={styles.thirdFlexStyle} />
      </ImageBackground>
    );
  }
}

export default LoginScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',
    height: '100%',
  },
  firstFlexStyle: {
    flex: 2,
    justifyContent: 'flex-end',
  },
  imageStyle: {
    width: 150,
    height: 160,
    alignSelf: 'center',
  },
  secondFlexStyle: {
    flex: 2,
    justifyContent: 'flex-start',
  },
  thirdFlexStyle: {
    alignItems: 'center',
    justifyContent: 'flex-end',
    paddingBottom: 20,
    flex: 1,
  },
  forgotTextViewStyle: {
    height: 25,
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
});
