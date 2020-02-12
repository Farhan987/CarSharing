import React, {Component} from 'react';
import {
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
  ScrollView,
  Image,
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import {LIGHT_BlUE, DARK_BlUE, WHITE} from '../theme/colors';
import {EXTRA_LARGE} from '../theme/font';
import CustomHeader from '../components/customHeader';
import SecondTextInput from '../components/secondTextFields';
import FieldTitleComponent from '../components/fieldTitleComponent';
import CustomButton from '../components/customButton';
import CustomTextInput from '../components/textInput';
class SecondEditProfileScreen extends Component {
  state = {secureTextFeild: false};
  toogleEye = () => {
    this.setState({secureTextFeild: !this.state.secureTextFeild});
  };

  render() {
    return (
      <View style={styles.container}>
        <CustomHeader
          onPressMenu={() => this.props.navigation.toggleDrawer()}
          // onPressAlert={() => this.props.navigation.navigate('AlertScreen')}
          onPressProfile={() =>
            this.props.navigation.navigate('SecondEditProfileScreen')
          }
        />

        <View style={{height: 10}} />
        <View style={styles.pageTitleViewStyle}>
          <Text style={styles.pageTitleTextStyle}>Edit Profile</Text>
        </View>

        {/* imageView */}
        <ScrollView>
          <View style={styles.imageViewStyle}>
            <View
              style={{
                width: '50%',
                alignSelf: 'center',
              }}>
              <Image
                style={styles.imageStyle}
                source={require('../Logo/profile.jpg')}
              />
              <TouchableOpacity style={styles.editImageButtonStyle}>
                <Image
                  source={require('../icons/editWhite.png')}
                  style={{height: 20, width: 20}}
                />
              </TouchableOpacity>
            </View>
          </View>

          {/* textInputs */}
          <FieldTitleComponent FeildTitle={'Name'} />
          <SecondTextInput placeholder={'Benedito de Oliveira Aires'} />
          <View style={{height: 10}} />
          <FieldTitleComponent FeildTitle={'Area'} />
          <SecondTextInput placeholder={'Sales'} />
          <View style={{height: 10}} />
          <FieldTitleComponent FeildTitle={'Office'} />
          <SecondTextInput placeholder={'Sales Director'} />
          <View style={{height: 10}} />
          <FieldTitleComponent FeildTitle={'Unity'} />
          <SecondTextInput placeholder={'New york '} />
          <View style={{height: 10}} />
          <FieldTitleComponent FeildTitle={'Email'} />
          <SecondTextInput placeholder={'eduardo.leite@ambev.com.br'} />
          <View style={{height: 10}} />
          <FieldTitleComponent FeildTitle={'Password'} />

          <CustomTextInput
            textInputHeight={35}
            containerHeight={35}
            fontWeight={'bold'}
            lineBgColor={LIGHT_BlUE}
            placeholder={'12345'}
            phColor={LIGHT_BlUE}
            iconColor={LIGHT_BlUE}
            notShow
            showEye
            securePassword={this.state.secureTextFeild}
            eyeIcon={this.state.secureTextFeild ? 'eye-slash' : 'eye'}
            onEyePress={this.toogleEye}
          />
          <View style={{height: 30}} />
          <CustomButton
            onPress={() =>
              this.props.navigation.navigate('AuthorizerCheckInScreen')
            }
            buttonWidth={'60%'}
            buttonText={'To Save'}
            btnBackgroundColor={LIGHT_BlUE}
            btnTextColor={WHITE}
          />
          <View style={{height: 10}} />
        </ScrollView>
      </View>
    );
  }
}

export default SecondEditProfileScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: WHITE,
  },
  pageTitleViewStyle: {
    height: 40,
    width: '90%',
    alignSelf: 'center',
    justifyContent: 'center',
    alignItems: 'flex-start',
  },
  pageTitleTextStyle: {
    fontSize: EXTRA_LARGE,
    color: LIGHT_BlUE,
    fontWeight: 'bold',
  },
  imageViewStyle: {
    height: 150,
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
    backgroundColor: LIGHT_BlUE,
    alignSelf: 'center',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 110,
    marginTop: -50,
    justifyContent: 'center',
  },
});
