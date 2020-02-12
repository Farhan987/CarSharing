import React, {Component} from 'react';
import {StyleSheet, View, ImageBackground, Image, Modal} from 'react-native';
import CustomHeader from '../components/customHeader';
import ValidacaoDeCheckInComponent from '../components/validacaoDeCheckInComponent';
import TravelinProgressModal from '../components/modalComponents/travelinProgressComponent';

class ThirdProfileValidacaoDeCheckInScreen extends Component {
  state = {modalVisible: false};

  setModalVisible() {
    this.setState({modalVisible: !this.state.modalVisible});
  }
  render() {
    return (
      <ImageBackground
        source={require('../Logo/CarSharingSplash.png')}
        style={styles.container}>
        <CustomHeader
          onPressMenu={() => this.props.navigation.toggleDrawer()}
          onPressAlert={() =>
            this.props.navigation.navigate('ThirdProfileAlertScreen')
          }
          onPressProfile={() =>
            this.props.navigation.navigate('ThirdEditProfileScreen')
          }
        />
        <View style={{flex: 1, justifyContent: 'center'}}>
          <ValidacaoDeCheckInComponent onPress={() => this.setModalVisible()} />
        </View>

        <Modal
          animationType="slide"
          transparent={true}
          presentationStyle="fullScreen"
          visible={this.state.modalVisible}
          onRequestClose={() => this.setModalVisible()}>
          <TravelinProgressModal
            setModalVisible={() => this.setModalVisible()}
            navigation={this.props.navigation}
          />
        </Modal>
      </ImageBackground>
    );
  }
}

export default ThirdProfileValidacaoDeCheckInScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
