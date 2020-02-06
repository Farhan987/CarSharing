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
import CustomButton from './customButton';
import {LARGE, SMALL} from '../theme/font';
import QRCodeComponent from './QRcodeComponent';
class FirstFutureReservationComponent extends Component {
  state = {modalVisible: false};

  setModalVisible() {
    this.setState({modalVisible: !this.state.modalVisible});
  }
  render() {
    return (
      <React.Fragment>
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
                <Text style={{color: LIGHT_BlUE}}>Reservation Date </Text>
                <Text style={{color: LIGHT_BlUE, fontWeight: 'bold'}}>
                  15/01/2020
                </Text>
              </View>
              <View style={{flex: 1}} />
            </View>
            <View style={{height: 20}} />
            {this.props.showButton ? (
              <CustomButton
                buttonWidth={'60%'}
                buttonText={'Renew Reservation'}
                btnBackgroundColor={LIGHT_BlUE}
                btnTextColor={WHITE}
              />
            ) : (
              false
            )}
            <TouchableOpacity
              onPress={() => this.setModalVisible(true)}
              style={{
                height: 150,
                justifyContent: 'center',
                alignItems: 'center',
              }}>
              <Image
                source={require('../Logo/QR.jpg')}
                style={{height: '90%', width: '40%'}}
              />
            </TouchableOpacity>

            <View
              style={{
                height: 40,
                width: '70%',
                alignSelf: 'center',
                justifyContent: 'center',
                alignItems: 'center',
              }}>
              <Text style={{color: LIGHT_BlUE}}>
                Display the QR Code at the entrance
              </Text>
              <Text style={{color: LIGHT_BlUE}}>to the vehicle release.</Text>
            </View>
            <View style={{height: 10}} />
          </View>
          <Modal
            animationType="slide"
            transparent={false}
            presentationStyle="fullScreen"
            visible={this.state.modalVisible}
            onRequestClose={() => this.setModalVisible()}>
            <QRCodeComponent
              setModalVisible={() => this.setModalVisible()}
              navigation={this.props.navigation}
            />
          </Modal>
        </ScrollView>
      </React.Fragment>
    );
  }
}

export default FirstFutureReservationComponent;

const styles = StyleSheet.create({
  container: {
    flex: 1,
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
    height: 440,
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
  flexInnerViewStyle2: {
    height: 20,
    width: 100,
    borderRadius: 3,
    backgroundColor: LIGHT_BlUE,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
