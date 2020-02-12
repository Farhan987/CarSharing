import React, {Component} from 'react';
import {
  StyleSheet,
  View,
  TouchableOpacity,
  Text,
  TextInput,
  ScrollView,
  Image,
} from 'react-native';
import {WHITE, LIGHT_BlUE} from '../theme/colors';
import Icon from 'react-native-vector-icons/FontAwesome';
import {EXTRA_LARGE, LARGE, SMALL} from '../theme/font';
import CustomHeader from '../components/customHeader';
class HistoricoDetalhesScreen extends Component {
  state = {blueBg: false};
  toggleCheckBox = () => {
    this.setState({blueBg: !this.state.blueBg});
  };

  render() {
    return (
      <View style={styles.container}>
        <CustomHeader
          onPressMenu={() => this.props.navigation.toggleDrawer()}
          onPressAlert={() => this.props.navigation.navigate('AlertScreen')}
          onPressProfile={() =>
            this.props.navigation.navigate('EditProfileScreen')
          }
        />
        {/* PageTitle */}
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
            <Text style={styles.pageTitleTextStyle}>Detail</Text>
          </View>
          <View style={{flex: 1}} />
        </View>

        {/* detailView */}
        <ScrollView>
          <View style={{height: 10}} />
          <View style={styles.mainBoxStyle}>
            <View style={{height: 50, flexDirection: 'row'}}>
              <View style={{flex: 1, flexDirection: 'row'}}>
                <View style={styles.viewStyle}>
                  <Icon name="circle" size={25} color={LIGHT_BlUE} />
                </View>
                <View
                  style={[
                    styles.viewStyle,
                    {flex: 3, alignItems: 'flex-start'},
                  ]}>
                  <Text style={{paddingLeft: 10, color: LIGHT_BlUE}}>
                    Trip Ended
                  </Text>
                </View>
              </View>
              <View
                style={{
                  flex: 1,
                  justifyContent: 'center',
                  alignItems: 'center',
                }}>
                <Text style={{color: LIGHT_BlUE}}>15/01/2020 10:30 AM</Text>
              </View>
            </View>

            {/* line */}
            <View
              style={{
                height: 2,
                backgroundColor: '#E9ECF4',
                width: '100%',
                alignSelf: 'center',
              }}
            />
            {/* ///// */}
            <View style={styles.otherViewStyle}>
              <View style={styles.flexInnerViewStyle}>
                <Text
                  style={{
                    color: LIGHT_BlUE,
                    fontSize: LARGE,
                    fontWeight: 'bold',
                  }}>
                  Reservation 14545
                </Text>
              </View>

              <View style={styles.flexStyle}>
                <View style={styles.flexInnerViewStyle}>
                  <Text style={{color: LIGHT_BlUE}}>Check in </Text>
                  <Text style={{color: LIGHT_BlUE, fontWeight: 'bold'}}>
                    10:00 AM
                  </Text>
                </View>
                <View style={styles.flexInnerViewStyle}>
                  <Text style={{color: LIGHT_BlUE}}>Check out</Text>
                  <Text style={{color: LIGHT_BlUE, fontWeight: 'bold'}}>
                    5:00 PM
                  </Text>
                </View>
              </View>
              <View style={styles.flexStyle}>
                <View style={styles.flexInnerViewStyle}>
                  <Text style={{color: LIGHT_BlUE}}>Place of source</Text>
                  <Text style={{color: LIGHT_BlUE, fontWeight: 'bold'}}>
                    CDD Campinas
                  </Text>
                </View>
                <View style={styles.flexInnerViewStyle}>
                  <Text style={{color: LIGHT_BlUE}}>Model</Text>
                  <Text style={{color: LIGHT_BlUE, fontWeight: 'bold'}}>
                    Renault Kwid
                  </Text>
                </View>
              </View>
              <View style={styles.flexStyle}>
                <View style={styles.flexInnerViewStyle}>
                  <Text style={{color: LIGHT_BlUE}}>License plate </Text>
                  <Text style={{color: LIGHT_BlUE, fontWeight: 'bold'}}>
                    PXZ2451
                  </Text>
                </View>
                <View style={styles.flexInnerViewStyle}>
                  <Text style={{color: LIGHT_BlUE}}>Reason for travel</Text>
                  <Text style={{color: LIGHT_BlUE, fontWeight: 'bold'}}>
                    Critical route
                  </Text>
                </View>
              </View>
            </View>

            {/* line */}
            <View
              style={{
                height: 1,
                backgroundColor: '#E9ECF4',
                width: '100%',
                alignSelf: 'center',
              }}
            />
            {/* ///// */}
            <View
              style={{
                height: 40,
                width: '90%',
                alignSelf: 'center',
                justifyContent: 'center',
                alignItems: 'flex-start',
              }}>
              <Text style={{color: LIGHT_BlUE}}>Details Check in</Text>
            </View>
            <View style={styles.mainViewStyle}>
              <View style={styles.inputfieldsViewStyle}>
                <TextInput
                  ref={input => {
                    this.firstTextInput = input;
                  }}
                  onChangeText={() => {
                    this.secondTextInput.focus();
                    this.secondTextInput.setNativeProps({
                      style: [
                        styles.textInputsStyle,
                        {backgroundColor: LIGHT_BlUE},
                      ],
                    });
                  }}
                  onFocus={() => {
                    this.firstTextInput.setNativeProps({
                      style: [
                        styles.textInputsStyle,
                        {backgroundColor: LIGHT_BlUE},
                      ],
                    });
                  }}
                  fontSize={20}
                  maxLength={1}
                  keyboardType={'numeric'}
                  style={styles.textInputsStyle}
                />
              </View>
              <View style={{width: 14}}></View>
              <View style={styles.inputfieldsViewStyle}>
                <TextInput
                  ref={input => {
                    this.secondTextInput = input;
                  }}
                  onChangeText={() => {
                    this.thirdTextInput.focus();
                    this.thirdTextInput.setNativeProps({
                      style: [
                        styles.textInputsStyle,
                        {backgroundColor: LIGHT_BlUE},
                      ],
                    });
                  }}
                  fontSize={20}
                  maxLength={1}
                  keyboardType={'numeric'}
                  style={styles.textInputsStyle}
                />
              </View>
              <View style={{width: 14}}></View>
              <View style={styles.inputfieldsViewStyle}>
                <TextInput
                  ref={input => {
                    this.thirdTextInput = input;
                  }}
                  onChangeText={() => {
                    this.fourthTextInput.focus();
                    this.fourthTextInput.setNativeProps({
                      style: [
                        styles.textInputsStyle,
                        {backgroundColor: LIGHT_BlUE},
                      ],
                    });
                  }}
                  fontSize={20}
                  maxLength={1}
                  keyboardType={'numeric'}
                  style={styles.textInputsStyle}
                />
              </View>
              <View style={{width: 14}}></View>
              <View style={styles.inputfieldsViewStyle}>
                <TextInput
                  fontSize={20}
                  ref={input => {
                    this.fourthTextInput = input;
                  }}
                  onChangeText={() => {
                    this.fifthTextInput.focus();
                    this.fifthTextInput.setNativeProps({
                      style: [
                        styles.textInputsStyle,
                        {backgroundColor: LIGHT_BlUE},
                      ],
                    });
                  }}
                  maxLength={1}
                  keyboardType={'numeric'}
                  style={styles.textInputsStyle}
                />
              </View>
              <View style={{width: 14}}></View>
              <View style={styles.inputfieldsViewStyle}>
                <TextInput
                  fontSize={20}
                  ref={input => {
                    this.fifthTextInput = input;
                  }}
                  maxLength={1}
                  keyboardType={'numeric'}
                  style={styles.textInputsStyle}
                />
              </View>
            </View>

            <View style={styles.mainCheckViewStyle}>
              <View style={[styles.checkViewStyle, {flex: 1}]}>
                <TouchableOpacity
                  style={styles.boxStyle}
                  onPress={() => this.toggleCheckBox()}>
                  <Icon
                    name="check"
                    size={15}
                    color={this.state.blueBg ? LIGHT_BlUE : WHITE}
                  />
                </TouchableOpacity>
              </View>
              <View style={styles.checkViewStyle}>
                <Text
                  style={{
                    fontSize: SMALL,
                    color: LIGHT_BlUE,
                  }}>
                  car in perfect condition
                </Text>
              </View>
            </View>
            {/* line */}
            <View
              style={{
                height: 1,
                backgroundColor: '#E9ECF4',
                width: '100%',
                alignSelf: 'center',
              }}
            />
            {/* ///// */}
            <View
              style={{
                height: 40,
                width: '90%',
                alignSelf: 'center',
                justifyContent: 'center',
                alignItems: 'flex-start',
              }}>
              <Text style={{color: LIGHT_BlUE}}>Details Check out</Text>
            </View>
            <View style={styles.mainViewStyle}>
              <View style={styles.inputfieldsViewStyle}>
                <TextInput
                  ref={input => {
                    this.firstTextInputt = input;
                  }}
                  onChangeText={() => {
                    this.secondTextInputt.focus();
                    this.secondTextInputt.setNativeProps({
                      style: [
                        styles.textInputsStyle,
                        {backgroundColor: LIGHT_BlUE},
                      ],
                    });
                  }}
                  onFocus={() => {
                    this.firstTextInputt.setNativeProps({
                      style: [
                        styles.textInputsStyle,
                        {backgroundColor: LIGHT_BlUE},
                      ],
                    });
                  }}
                  fontSize={20}
                  maxLength={1}
                  keyboardType={'numeric'}
                  style={styles.textInputsStyle}
                />
              </View>
              <View style={{width: 14}}></View>
              <View style={styles.inputfieldsViewStyle}>
                <TextInput
                  ref={input => {
                    this.secondTextInputt = input;
                  }}
                  onChangeText={() => {
                    this.thirdTextInputt.focus();
                    this.thirdTextInputt.setNativeProps({
                      style: [
                        styles.textInputsStyle,
                        {backgroundColor: LIGHT_BlUE},
                      ],
                    });
                  }}
                  fontSize={20}
                  maxLength={1}
                  keyboardType={'numeric'}
                  style={styles.textInputsStyle}
                />
              </View>
              <View style={{width: 14}}></View>
              <View style={styles.inputfieldsViewStyle}>
                <TextInput
                  ref={input => {
                    this.thirdTextInputt = input;
                  }}
                  onChangeText={() => {
                    this.fourthTextInputt.focus();
                    this.fourthTextInputt.setNativeProps({
                      style: [
                        styles.textInputsStyle,
                        {backgroundColor: LIGHT_BlUE},
                      ],
                    });
                  }}
                  fontSize={20}
                  maxLength={1}
                  keyboardType={'numeric'}
                  style={styles.textInputsStyle}
                />
              </View>
              <View style={{width: 14}}></View>
              <View style={styles.inputfieldsViewStyle}>
                <TextInput
                  fontSize={20}
                  ref={input => {
                    this.fourthTextInputt = input;
                  }}
                  onChangeText={() => {
                    this.fifthTextInputt.focus();
                    this.fifthTextInputt.setNativeProps({
                      style: [
                        styles.textInputsStyle,
                        {backgroundColor: LIGHT_BlUE},
                      ],
                    });
                  }}
                  maxLength={1}
                  keyboardType={'numeric'}
                  style={styles.textInputsStyle}
                />
              </View>
              <View style={{width: 14}}></View>
              <View style={styles.inputfieldsViewStyle}>
                <TextInput
                  fontSize={20}
                  ref={input => {
                    this.fifthTextInputt = input;
                  }}
                  maxLength={1}
                  keyboardType={'numeric'}
                  style={styles.textInputsStyle}
                />
              </View>
            </View>

            <View style={{height: 10}} />
            <View style={styles.textViewStyle}>
              <Text style={{color: LIGHT_BlUE}}>Observations</Text>
              <View style={{height: 5}} />
              <Text style={{color: LIGHT_BlUE, fontWeight: 'bold'}}>
                Car returned with full tank
              </Text>
            </View>
            <View style={{height: 20}} />
          </View>
          <View style={{height: 30}} />
        </ScrollView>
      </View>
    );
  }
}

export default HistoricoDetalhesScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',
    height: '100%',
  },
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
  mainBoxStyle: {
    width: '90%',
    backgroundColor: WHITE,
    opacity: 2,
    alignSelf: 'center',
  },
  viewStyle: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'flex-end',
  },
  otherViewStyle: {
    height: 190,
    width: '90%',
    alignSelf: 'center',
    opacity: 2,
    backgroundColor: WHITE,
    borderBottomLeftRadius: 5,
    borderBottomRightRadius: 5,
  },
  flexInnerViewStyle: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'flex-start',
    marginLeft: 5,
  },
  flexStyle: {
    flex: 1,
    flexDirection: 'row',
  },
  mainViewStyle: {
    flexDirection: 'row',
    width: '90%',
    height: 60,
    alignItems: 'center',
    justifyContent: 'center',
    alignSelf: 'center',
  },
  inputfieldsViewStyle: {
    height: 50,
    width: 50,
    backgroundColor: '#C4C4C4',
    elevation: 1,
    borderRadius: 5,
  },
  textInputsStyle: {
    width: '100%',
    height: '100%',
    fontFamily: 'mont',
    color: 'white',
    textAlign: 'center',
    borderRadius: 5,
  },
  mainCheckViewStyle: {
    height: 30,
    width: '90%',
    alignSelf: 'center',
    flexDirection: 'row',
  },
  checkViewStyle: {
    flex: 9,
    justifyContent: 'center',
    alignItems: 'flex-start',
  },
  boxStyle: {
    height: 15,
    width: 15,
    borderColor: LIGHT_BlUE,
    borderWidth: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  textViewStyle: {
    height: 40,
    width: '90%',
    alignSelf: 'center',
    justifyContent: 'center',
    alignItems: 'flex-start',
  },
});
