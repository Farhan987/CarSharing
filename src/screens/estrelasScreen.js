import React, {Component} from 'react';
import {
  View,
  StyleSheet,
  TouchableOpacity,
  Text,
  Image,
  ScrollView,
  TextInput,
  Modal,
} from 'react-native';
import CustomHeader from '../components/customHeader';
import {AirbnbRating} from 'react-native-ratings';
import {WHITE, LIGHT_BlUE} from '../theme/colors';
import CustomButton from '../components/customButton';
import {EXTRA_LARGE} from '../theme/font';
import CarDownModall from '../components/modalComponents/checkOutRealizedComponent';
import QRCodeModal from '../components/QRcodeComponent';
class EstrelasScreen extends Component {
  state = {toggleTextInput: false, modalVisible: false, modalVisible1: false};
  toggleTextInputfun = () => {
    this.setState({toggleTextInput: !this.state.toggleTextInput});
  };

  setModalVisible() {
    this.setState({modalVisible: !this.state.modalVisible});
  }
  setModalVisible1() {
    this.setState({modalVisible1: !this.state.modalVisible1});
  }

  render() {
    return (
      <ScrollView>
        <View style={{flex: 1, alignItems: 'center'}}>
          <CustomHeader
            onPressMenu={() => this.props.navigation.toggleDrawer()}
            onPressAlert={() => this.props.navigation.navigate('AlertScreen')}
            onPressProfile={() =>
              this.props.navigation.navigate('EditProfileScreen')
            }
          />

          <View style={styles.outterViewStyle}>
            <View style={styles.flexInnerStyle}>
              <TouchableOpacity onPress={() => this.props.navigation.goBack()}>
                <Image
                  source={require('../icons/blueBack.png')}
                  style={{height: 20, width: 20}}
                />
              </TouchableOpacity>
            </View>
            <View
              style={[styles.flexInnerStyle, {alignItems: 'center', flex: 5}]}>
              <Text style={styles.pageTitleTextStyle}>Rating</Text>
            </View>
            <View style={{flex: 1}} />
          </View>

          <View
            style={{
              height: 100,
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            <Image source={require('../icons/carOk.png')} />
          </View>
          <View style={{height: 10}} />
          <View style={styles.upperTextViewStyle}>
            <Text style={styles.upperTextStyle}>
              Qual a probabilidade de você recomendar o Car Sharing para um(a)
              colega de trabalho?
            </Text>
          </View>
          <View
            style={{
              height: 35,
              alignItems: 'center',
              justifyContent: 'center',
            }}>
            <AirbnbRating
              selectedColor={LIGHT_BlUE}
              ratingBackgroundColor="green"
              size={25}
              showRating={false}
              count={5}
              starStyle={{color: 'red'}}
            />
          </View>
          <View style={styles.lowerTextViewStyle}>
            <Text style={styles.lowerTextStyle}>
              O que motivou sua nota sobre a indicação?
            </Text>
          </View>
          <View style={{height: 35, flexDirection: 'row', width: '93%'}}>
            <View style={styles.buttonViewInnerStyle}>
              <TouchableOpacity style={styles.buttonTouch}>
                <Text style={styles.buttonText}>Agilidade no processo</Text>
              </TouchableOpacity>
            </View>
            <View style={styles.buttonViewInnerStyle}>
              <TouchableOpacity style={styles.buttonTouch}>
                <Text style={styles.buttonText}>Aplicativo do Car Sharing</Text>
              </TouchableOpacity>
            </View>
          </View>
          <View style={{height: 35, flexDirection: 'row', width: '93%'}}>
            <View style={styles.buttonViewInnerStyle}>
              <TouchableOpacity style={styles.buttonTouch}>
                <Text style={styles.buttonText}>Condição do veículo</Text>
              </TouchableOpacity>
            </View>
            <View style={styles.buttonViewInnerStyle}>
              <TouchableOpacity style={styles.buttonTouch}>
                <Text style={styles.buttonText}>Limpeza do veículo</Text>
              </TouchableOpacity>
            </View>
          </View>
          <View style={{height: 35, flexDirection: 'row', width: '93%'}}>
            <View style={styles.buttonViewInnerStyle}>
              <TouchableOpacity style={styles.buttonTouch}>
                <Text style={styles.buttonText}>Processo da reserva</Text>
              </TouchableOpacity>
            </View>
            <View style={styles.buttonViewInnerStyle}>
              <TouchableOpacity style={styles.buttonTouch}>
                <Text style={styles.buttonText}>Suporte</Text>
              </TouchableOpacity>
            </View>
          </View>
          <View style={{height: 35, flexDirection: 'row', width: '93%'}}>
            <View style={styles.buttonViewInnerStyle}>
              <TouchableOpacity
                style={
                  this.state.toggleTextInput
                    ? [styles.buttonTouch, {backgroundColor: '#4B69A6'}]
                    : styles.buttonTouch
                }
                onPress={() => this.toggleTextInputfun()}>
                <Text
                  style={
                    this.state.toggleTextInput
                      ? [styles.buttonText, {color: 'white'}]
                      : styles.buttonText
                  }>
                  Outros
                </Text>
              </TouchableOpacity>
            </View>
          </View>
          {this.state.toggleTextInput ? (
            <View style={{height: 100, width: '90%', marginTop: 10}}>
              <TextInput
                multiline={true}
                numberOfLines={4}
                placeholder="Observações à respeito da reserva"
                style={{
                  elevation: 1,
                  width: '100%',
                  backgroundColor: WHITE,
                }}
              />
            </View>
          ) : (
            false
          )}
          <View style={{height: 10}} />
          <CustomButton
            onPress={() => this.setModalVisible1()}
            buttonWidth={'60%'}
            buttonText={'Salvar'}
            btnBackgroundColor={LIGHT_BlUE}
            btnTextColor={WHITE}
          />
          <View style={{height: 10}} />
        </View>

        <Modal
          animationType="fade"
          transparent={true}
          presentationStyle="fullScreen"
          visible={this.state.modalVisible}
          onRequestClose={() => this.setModalVisible()}>
          <CarDownModall
            setModalVisible={() => this.setModalVisible()}
            navigation={this.props.navigation}
          />
        </Modal>
        <Modal
          animationType="fade"
          transparent={true}
          visible={this.state.modalVisible1}
          onRequestClose={() => this.setModalVisible1()}>
          <QRCodeModal
            setModalVisible={() => this.setModalVisible()}
            setModalVisible1={() => this.setModalVisible1()}
          />
        </Modal>
      </ScrollView>
    );
  }
}

export default EstrelasScreen;

const styles = StyleSheet.create({
  flexInnerStyle: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'flex-start',
  },
  pageTitleTextStyle: {
    fontSize: EXTRA_LARGE,
    color: LIGHT_BlUE,
    fontWeight: 'bold',
  },
  outterViewStyle: {
    height: 60,
    width: '90%',
    alignSelf: 'center',
    flexDirection: 'row',
  },
  upperTextViewStyle: {
    height: 70,
    justifyContent: 'center',
    alignItems: 'center',
    width: '80%',
  },
  upperTextStyle: {
    fontSize: 17,
    fontWeight: '700',
    color: '#4B69A6',
    textAlign: 'center',
  },
  lowerTextViewStyle: {
    height: 70,
    justifyContent: 'center',
    alignItems: 'center',
    width: '70%',
  },
  lowerTextStyle: {
    fontSize: 17,
    fontWeight: '700',
    color: '#4B69A6',
    textAlign: 'center',
  },
  buttonText: {
    color: '#4B69A6',
    fontSize: 11,
    paddingLeft: 6,
    paddingRight: 6,
  },
  buttonTouch: {
    borderRadius: 4,
    borderWidth: 1,
    borderColor: '#4B69A6',
    justifyContent: 'center',
    alignItems: 'center',
    height: 24,
    width: 160,
  },
  buttonViewInnerStyle: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonTouchSlavar: {
    borderRadius: 4,
    borderWidth: 1,
    borderColor: '#4B69A6',
    justifyContent: 'center',
    alignItems: 'center',
    height: 40,
    backgroundColor: '#4B69A6',
    width: 140,
  },
});
