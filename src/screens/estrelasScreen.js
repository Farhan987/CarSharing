import React, {Component} from 'react';
import {
  View,
  StyleSheet,
  TouchableOpacity,
  Text,
  Image,
  ToucableOpacity,
  ScrollView,
  TextInput,
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import CustomHeader from '../components/customHeader';
import {Rating, AirbnbRating} from 'react-native-ratings';
import {WHITE, LIGHT_BlUE} from '../theme/colors';
import CustomButton from '../components/customButton';
import {EXTRA_LARGE} from '../theme/font';
class EstrelasScreen extends Component {
  state = {toggleTextInput: false};
  toggleTextInputfun = () => {
    this.setState({toggleTextInput: !this.state.toggleTextInput});
  };
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
                <Icon name="long-arrow-left" size={20} color={LIGHT_BlUE} />
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
              Qual a probabilidade de  você recomendar o Car Sharing para um(a)
              colega de trabalho?
            </Text>
          </View>
          <View
            style={{
              height: 35,
              alignItems: 'center',
              justifyContent: 'center',
            }}>
            <AirbnbRating size={25} showRating={false} count={5} />
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
            <View style={{height: 50}}>
              <TextInput
                placeholder="Observações à respeito da reserva"
                style={{elevation: 1, width: '90%'}}
              />
            </View>
          ) : (
            false
          )}
          <View style={{height: 10}} />
          <CustomButton
            onPress={() => this.setModalVisible(true)}
            buttonWidth={'60%'}
            buttonText={'Salvar'}
            btnBackgroundColor={LIGHT_BlUE}
            btnTextColor={WHITE}
          />
        </View>
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
    width: 140,
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
