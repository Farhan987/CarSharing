import React, {Component} from 'react';
import {
  StyleSheet,
  View,
  ImageBackground,
  Image,
  Text,
  TouchableOpacity,
  Dimensions,
  Animated,
  Alert,
  Keyboard,
} from 'react-native';
import {WHITE} from '../theme/colors';
import CustomTextInput from '../components/textInput';
import CustomButton from '../components/customButton';
import {SMALL} from '../theme/font';

class LoginScreen extends Component {
  state = {
    secureTextFeild: false,
    topImageOffset: new Animated.Value(
      Dimensions.get('window').height / 2 - 100,
    ),
    leftOffset: new Animated.Value(Dimensions.get('window').width / 2 - 90),
    imageWidth: new Animated.Value(175),
    imageHeight: new Animated.Value(190),
    formOpacity: new Animated.Value(0),
  };
  toogleEye = () => {
    this.setState({secureTextFeild: !this.state.secureTextFeild});
  };

  componentDidMount() {
    this.keyboardDidShowListener = Keyboard.addListener(
      'keyboardDidShow',
      this._keyboardDidShow,
    );
    this.keyboardDidHideListener = Keyboard.addListener(
      'keyboardDidHide',
      this._keyboardDidHide,
    );

    setTimeout(() => this.renderAnimatedForm(), 2000);
  }
  componentWillUnmount() {
    this.keyboardDidShowListener.remove();
    this.keyboardDidHideListener.remove();
  }
  _keyboardDidShow = () => {
    let to = Dimensions.get('window').height / 2 - 300;

    Animated.parallel([
      Animated.timing(this.state.topImageOffset, {
        toValue: to,
        duration: 1,
      }),
    ]).start();
  };

  _keyboardDidHide = () => {
    let to = Dimensions.get('window').height / 2 - 210;

    Animated.parallel([
      Animated.timing(this.state.topImageOffset, {
        toValue: to,
        duration: 1,
      }),
    ]).start();
  };

  renderAnimatedForm = () => {
    let to = Dimensions.get('window').height / 2 - 210;

    Animated.parallel([
      Animated.timing(this.state.topImageOffset, {
        toValue: to,
        duration: 700,
      }),
      Animated.timing(this.state.imageHeight, {
        toValue: 160,
        duration: 700,
      }),
      Animated.timing(this.state.imageWidth, {
        toValue: 150,
        duration: 700,
      }),
      Animated.timing(this.state.formOpacity, {
        toValue: 1,
        duration: 900,
      }),
      Animated.timing(this.state.leftOffset, {
        toValue: Dimensions.get('window').width / 2 - 75,
        duration: 700,
      }),
    ]).start();
  };

  render() {
    const leftImageOffset = Dimensions.get('window').width / 2 - 75;
    const imageWidth = this.state.imageWidth;
    const imageHeight = this.state.imageHeight;
    return (
      <ImageBackground
        source={require('../Logo/bgImagee.jpg')}
        style={styles.container}>
        {/* firstFlex */}
        <View style={styles.firstFlexStyle}>
          <Animated.Image
            resizeMode={'stretch'}
            style={[
              styles.imageStyle,
              {
                position: 'absolute',
                top: this.state.topImageOffset,
                left: this.state.leftOffset,
                width: imageWidth,
                height: imageHeight,
              },
            ]}
            source={require('../Logo/CarSharing1.png')}
          />
        </View>

        {/* middleContent */}
        <Animated.View
          style={[styles.secondFlexStyle, {opacity: this.state.formOpacity}]}>
          <View style={{height: 15}} />
          <CustomTextInput
            onSubmitEditing={Keyboard.dismiss}
            source={require('../icons/user.png')}
            placeholder={'Enter Your Login'}
            textColor={WHITE}
          />
          <CustomTextInput
            onSubmitEditing={Keyboard.dismiss}
            source={require('../icons/key.png')}
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
            onPress={() => this.props.navigation.navigate('MainScreen')}
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
        </Animated.View>

        {/* endFlex */}
        <View style={styles.thirdFlexStyle} />
      </ImageBackground>
    );
  }
}

export default LoginScreen;

const styles = StyleSheet.create({
  container: {
    // flex: 1,
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
