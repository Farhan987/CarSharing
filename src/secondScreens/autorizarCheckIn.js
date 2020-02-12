import React, {Component} from 'react';
import {StyleSheet, View, ImageBackground, Image, Modal} from 'react-native';
import ImagePicker from 'react-native-image-crop-picker';
import {WHITE, LIGHT_BlUE} from '../theme/colors';
import CustomButton from '../components/customButton';
import CustomHeader from '../components/customHeader';
import QRScan from '../components/modalComponents/qrComponent';
import Car from '../components/modalComponents/confirmacaoReservaComponent.1';
class AutorizarCheckInScreen extends Component {
  state = {
    image: null,
    modalVisible: false,
    modalVisible1: false,
  };
  setModalVisible() {
    this.setState({modalVisible: !this.state.modalVisible});
  }
  setModalVisible1() {
    this.setState({modalVisible1: !this.state.modalVisible1});
  }
  SelectImage = () => {
    ImagePicker.openCamera({
      width: 300,
      height: 400,
      cropping: true,
    }).then(image => {
      console.log(image);
      let imgSource = {
        uri: image.path,
        type: image.mime,
        name: image.path.replace(/^.*[\\\/]/, ''),
      };

      this.setState({image: imgSource});
    });
  };

  render() {
    return (
      <ImageBackground
        source={require('../Logo/CarSharingSplash.png')}
        style={styles.container}>
        <CustomHeader
          onPressMenu={() => this.props.navigation.toggleDrawer()}
          alertClose
          onPressProfile={() =>
            this.props.navigation.navigate('SecondEditProfileScreen')
          }
        />
        {/* firstFlex */}
        <View style={styles.firstFlexStyle}>
          <Image
            resizeMode={'stretch'}
            style={styles.imageStyle}
            source={require('../Logo/CarSharing1.png')}
          />
        </View>

        {/* endFlex */}
        <View style={styles.secondFlexStyle}>
          <View
            style={{
              flex: 2,
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            <Image
              source={require('../icons/camera.png')}
              style={{height: 100, width: 100}}
            />
          </View>
          <View style={{flex: 1}}>
            <CustomButton
              onPress={() => this.setModalVisible1()}
              // onPress={() => this.SelectImage()}
              buttonWidth={'60%'}
              buttonText={'Read QR Code'}
              btnBackgroundColor={LIGHT_BlUE}
              btnTextColor={WHITE}
            />
          </View>
        </View>

        <Modal
          animationType="fade"
          transparent={true}
          presentationStyle="fullScreen"
          visible={this.state.modalVisible}
          onRequestClose={() => this.setModalVisible()}>
          <Car
            setModalVisible={() => this.setModalVisible()}
            navigation={this.props.navigation}
          />
        </Modal>
        <Modal
          animationType="fade"
          transparent={true}
          setModalVisible={() => this.setModalVisible1()}
          visible={this.state.modalVisible1}
          onRequestClose={() => this.setModalVisible1()}>
          <QRScan
            setModalVisible={() => this.setModalVisible()}
            setModalVisible1={() => this.setModalVisible1()}
          />
        </Modal>
      </ImageBackground>
    );
  }
}

export default AutorizarCheckInScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',
    height: '100%',
  },
  firstFlexStyle: {
    flex: 1.3,
    justifyContent: 'center',
  },
  imageStyle: {
    width: 170,
    height: 180,
    alignSelf: 'center',
  },
  secondFlexStyle: {
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    flex: 1,
    backgroundColor: WHITE,
  },
  firstSubFlexStyle: {
    // flex: 2.5,
    height: 85,
    alignSelf: 'center',
    justifyContent: 'center',
    alignItems: 'center',
  },
});
