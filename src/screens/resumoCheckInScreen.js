import React, {Component} from 'react';
import {
  StyleSheet,
  View,
  TouchableOpacity,
  Text,
  Image,
  ScrollView,
  Modal,
  Alert,
} from 'react-native';
import {WHITE, LIGHT_BlUE} from '../theme/colors';
import CustomButton from '../components/customButton';
import Icon from 'react-native-vector-icons/FontAwesome';
import {SMALL, EXTRA_LARGE, LARGE} from '../theme/font';
import CustomHeader from '../components/customHeader';
import TermOfUseComponent from '../components/termOfUseComponent';
import ConfirmacaoReservaModal from '../components/modalComponents/confirmacaoReservaComponent';
class ResumoCheckinScreen extends Component {
  state = {
    modalVisible: false,
    modal: true,
    blueBg: false,
  };
  toggleModal = text => {
    this.setState({modal: text});
  };

  setModalVisible() {
    this.setState({modalVisible: !this.state.modalVisible});
  }

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
              <Icon name="long-arrow-left" size={20} color={LIGHT_BlUE} />
            </TouchableOpacity>
          </View>
          <View
            style={[styles.flexInnerStyle, {alignItems: 'center', flex: 5}]}>
            <Text style={styles.pageTitleTextStyle}>Check in Summary</Text>
          </View>
          <View style={{flex: 1}} />
        </View>

        <ScrollView>
          <View style={styles.imageViewStyle}>
            <Image
              resizeMode="stretch"
              source={require('../Logo/car.png')}
              style={{height: 150, width: '90%'}}
            />
          </View>
          <View
            style={{
              height: 3,
              width: '90%',
              alignSelf: 'center',
              backgroundColor: LIGHT_BlUE,
            }}
          />
          <View style={styles.otherViewStyle}>
            <View style={{flexDirection: 'row', flex: 1}}>
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
              <View
                style={{
                  flex: 1,
                  justifyContent: 'center',
                  alignItems: 'flex-start',
                }}>
                <View style={styles.flexInnerViewStyle2}>
                  <Text style={{color: WHITE, fontSize: SMALL}}>
                    Renovation(1/4)
                  </Text>
                </View>
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
            <View style={styles.flexStyle}>
              <View style={styles.flexInnerViewStyle}>
                <Text style={{color: LIGHT_BlUE}}>Check in </Text>
                <Text style={{color: LIGHT_BlUE, fontWeight: 'bold'}}>
                  14:30
                </Text>
              </View>
              <View style={styles.flexInnerViewStyle}>
                <Text style={{color: LIGHT_BlUE}}>Check out</Text>
                <Text style={{color: LIGHT_BlUE, fontWeight: 'bold'}}>
                  17:30
                </Text>
              </View>
            </View>
            <View style={styles.flexStyle}>
              <View style={styles.flexInnerViewStyle}>
                <Text style={{color: LIGHT_BlUE}}>Reservation Date </Text>
                <Text style={{color: LIGHT_BlUE, fontWeight: 'bold'}}>
                  15/01/2020
                </Text>
              </View>
              <View style={{flex: 1}}></View>
            </View>
          </View>

          <View style={{height: 20}} />
          <CustomButton
            onPress={() => {
              this.toggleModal(false);
              this.setModalVisible(true);
            }}
            buttonWidth={'60%'}
            buttonText={'Make Reservation'}
            btnBackgroundColor={LIGHT_BlUE}
            btnTextColor={WHITE}
          />
          {/* <View
            style={{
              height: 20,
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            <TouchableOpacity
             >
              <Text style={{fontSize: SMALL, color: LIGHT_BlUE}}>
                I accept the term of use
              </Text>
            </TouchableOpacity>
          </View> */}

          <View style={styles.mainCheckViewStyle}>
            <View
              style={[
                styles.checkViewStyle,
                {flex: 1, alignItems: 'flex-end'},
              ]}>
              <TouchableOpacity
                style={styles.boxStyle}
                onPress={() => {
                  this.toggleCheckBox();
                  this.setModalVisible(true);
                  this.toggleModal(true);
                }}>
                <Icon
                  name="check"
                  size={15}
                  color={this.state.blueBg ? LIGHT_BlUE : '#f5f5f5'}
                />
              </TouchableOpacity>
            </View>
            <View style={styles.checkViewStyle}>
              <TouchableOpacity
                onPress={() => {
                  this.setModalVisible(true);
                  this.toggleModal(true);
                }}>
                <Text
                  style={{
                    fontSize: SMALL,
                    color: LIGHT_BlUE,
                    fontWeight: 'bold',
                  }}>
                  I accept the term of use
                </Text>
              </TouchableOpacity>
            </View>
          </View>
          <View style={{height: 10}} />

          <Modal
            animationType="slide"
            transparent={false}
            presentationStyle="fullScreen"
            visible={this.state.modalVisible}
            onRequestClose={() => {
              Alert.alert('Modal has been closed.');
            }}>
            {this.state.modal ? (
              <TermOfUseComponent
                setModalVisible={() => this.setModalVisible()}
              />
            ) : (
              <ConfirmacaoReservaModal
                setModalVisible={() => this.setModalVisible()}
                navigation={this.props.navigation}
              />
            )}
          </Modal>
        </ScrollView>
      </View>
    );
  }
}

export default ResumoCheckinScreen;

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
  flexInnerViewStyle2: {
    height: 20,
    width: 100,
    borderRadius: 3,
    backgroundColor: LIGHT_BlUE,
    justifyContent: 'center',
    alignItems: 'center',
  },

  viewStyle: {
    height: 40,
    width: '100%',
    backgroundColor: WHITE,
    elevation: 1,
    alignSelf: 'center',
    borderRadius: 3,
    justifyContent: 'center',
  },
  imageViewStyle: {
    height: 140,
    width: '90%',
    alignSelf: 'center',
    justifyContent: 'center',
    alignItems: 'center',
    opacity: 2,
    backgroundColor: WHITE,
    borderTopLeftRadius: 5,
    borderTopRightRadius: 5,
  },
  otherViewStyle: {
    height: 250,
    width: '90%',
    alignSelf: 'center',
    opacity: 2,
    backgroundColor: WHITE,
    borderBottomLeftRadius: 5,
    borderBottomRightRadius: 5,
  },
  flexInnerViewStyle: {
    flex: 1.1,
    justifyContent: 'center',
    alignItems: 'flex-start',
    marginLeft: 20,
  },
  flexStyle: {
    flex: 1,
    flexDirection: 'row',
  },
  mainCheckViewStyle: {
    height: 30,
    width: '55%',
    alignSelf: 'center',
    flexDirection: 'row',
  },
  checkViewStyle: {
    flex: 5,
    justifyContent: 'center',
    alignItems: 'center',
  },
  boxStyle: {
    height: 18,
    width: 18,
    borderColor: LIGHT_BlUE,
    borderWidth: 2,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
