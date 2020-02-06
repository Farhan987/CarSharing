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
import Icon from 'react-native-vector-icons/FontAwesome';
import {LARGE, SMALL} from '../theme/font';
import CheckInRealizedModal from '../components/modalComponents/checkInRealizedComponent';
import CheckInCanceledModal from '../components/modalComponents/checkInCanceledComponent';
class SecondFutureReservationComponent extends Component {
  state = {blueBg: false, modalVisible: false, modal: true};
  toggleCheckBox = () => {
    this.setState({blueBg: !this.state.blueBg});
  };
  toggleModal = text => {
    this.setState({modal: text});
  };
  setModalVisible() {
    this.setState({modalVisible: !this.state.modalVisible});
  }

  render() {
    return (
      <React.Fragment>
        <ScrollView>
          <View style={{height: 10}} />
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
            <View style={{height: 10}} />
            <View
              style={{
                height: 40,
                width: '90%',
                alignSelf: 'center',
                flexDirection: 'row',
              }}>
              <View style={styles.checboxOuterViewStyle}>
                <View style={styles.mainCheckViewStyle}>
                  <View style={[styles.checkViewStyle, {flex: 1}]}>
                    <View style={styles.boxStyle}>
                      <Icon
                        name="check"
                        size={15}
                        color={LIGHT_BlUE}
                        style={{backgroundColor: LIGHT_BlUE}}
                      />
                    </View>
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
              </View>
              <View style={styles.checboxOuterViewStyle}>
                <View style={styles.mainCheckViewStyle}>
                  <View style={[styles.checkViewStyle, {flex: 1}]}>
                    <TouchableOpacity
                      style={styles.boxStyle}
                      onPress={() => {
                        this.toggleCheckBox();
                        this.props.navigation.navigate(
                          'MyReservationThirdScreen',
                        );
                      }}>
                      <Icon
                        name="check"
                        size={15}
                        color={this.state.blueBg ? LIGHT_BlUE : WHITE}
                      />
                    </TouchableOpacity>
                  </View>
                  <View style={styles.checkViewStyle}>
                    <TouchableOpacity
                      onPress={() =>
                        this.props.navigation.navigate(
                          'MyReservationThirdScreen',
                        )
                      }>
                      <Text
                        style={{
                          fontSize: SMALL,
                          color: LIGHT_BlUE,
                        }}>
                        Malfunctioning Car
                      </Text>
                    </TouchableOpacity>
                  </View>
                </View>
              </View>
            </View>

            {/* button */}
            <View style={{height: 10}} />
            <View
              style={{
                height: 50,
                width: '90%',
                alignSelf: 'center',
                flexDirection: 'row',
              }}>
              <View style={styles.checboxOuterViewStyle}>
                <TouchableOpacity
                  style={styles.buttonStyle}
                  onPress={() => {
                    this.setModalVisible(true);
                    this.toggleModal(true);
                  }}>
                  <Text style={{color: LIGHT_BlUE}}>Check in </Text>
                </TouchableOpacity>
              </View>
              <View style={styles.checboxOuterViewStyle}>
                <TouchableOpacity
                  style={styles.buttonStyle}
                  onPress={() => {
                    this.setModalVisible(true);
                    this.toggleModal(false);
                  }}>
                  <Text style={{color: LIGHT_BlUE}}>Cancel </Text>
                </TouchableOpacity>
              </View>
            </View>

            <View style={{height: 10}} />
          </View>
          <View style={{height: 25}} />
        </ScrollView>

        <Modal
          animationType="slide"
          transparent={false}
          presentationStyle="fullScreen"
          visible={this.state.modalVisible}
          onRequestClose={() => {
            Alert.alert('Modal has been closed.');
          }}>
          {this.state.modal ? (
            <CheckInRealizedModal
              setModalVisible={() => this.setModalVisible()}
              navigation={this.props.navigation}
            />
          ) : (
            <CheckInCanceledModal
              setModalVisible={() => this.setModalVisible()}
              navigation={this.props.navigation}
            />
          )}
        </Modal>
      </React.Fragment>
    );
  }
}

export default SecondFutureReservationComponent;

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
    height: 350,
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
    width: '90%',
    alignSelf: 'center',
    flexDirection: 'row',
  },
  checkViewStyle: {
    flex: 4,
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
  checboxOuterViewStyle: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonStyle: {
    height: 45,
    width: '90%',
    borderColor: LIGHT_BlUE,
    borderWidth: 1,
    borderRadius: 3,
    justifyContent: 'center',
    alignItems: 'center',
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
