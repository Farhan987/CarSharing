import React, {Component} from 'react';
import {
  StyleSheet,
  View,
  TouchableOpacity,
  Text,
  Modal,
  Picker,
  Image,
} from 'react-native';
import {WHITE, LIGHT_BlUE} from '../theme/colors';
import CustomButton from '../components/customButton';
import Icon from 'react-native-vector-icons/FontAwesome';
import {SMALL, EXTRA_LARGE, LARGE} from '../theme/font';
import CustomHeader from '../components/customHeader';
import CustomField from '../components/customField';
import CalendarComponent from '../components/calendarComponent';
import {Dropdown} from 'react-native-material-dropdown';
class NovaReservaScreen extends Component {
  state = {
    modalVisible: false,
  };

  setModalVisible() {
    this.setState({modalVisible: !this.state.modalVisible});
  }
  render() {
    let data = [
      {
        value: 'First',
      },
      {
        value: 'Second',
      },
      {
        value: 'Third',
      },
    ];
    return (
      <View style={styles.container}>
        <CustomHeader
          onPressMenu={() => this.props.navigation.toggleDrawer()}
          onPressAlert={() => this.props.navigation.navigate('AlertScreen')}
          onPressProfile={() =>
            this.props.navigation.navigate('EditProfileScreen')
          }
        />
        {/* firstFlex */}
        <View style={styles.firstFlexStyle}>
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
              <Text style={styles.pageTitleTextStyle}>New Reservation</Text>
            </View>
            <View style={{flex: 1}} />
          </View>

          <View style={styles.secondSubFlexStyle}>
            <Text style={{color: LIGHT_BlUE, fontSize: SMALL}}>
              Pickup Location
            </Text>
          </View>
          <View
            style={[
              styles.thirdSubFlexStyle,
              {justifyContent: 'center', alignItems: 'center', width: '100%'},
            ]}>
            <CustomField />
          </View>
          <View style={styles.secondSubFlexStyle}>
            <Text style={{color: LIGHT_BlUE, fontSize: SMALL}}>
              Reason for Travel
            </Text>
          </View>
          <View
            style={[
              styles.thirdSubFlexStyle,
              {
                backgroundColor: WHITE,
                elevation: 2,
                height: 40,
                borderRadius: 3,
                marginTop: 5,
              },
            ]}>
            {/* <CustomField placeholder={'Critical Route'} /> */}
            {/* <Dropdown
              selectedItemColor={LIGHT_BlUE}
              dropdownPosition={-4}
              baseColor={'#f5f5f5'}
              label="Selected Option"
              data={data}
              icon={<Icon name="long-arrow-left" color="blue" />}
              style={{
                width: '100%',
                color: LIGHT_BlUE,
                paddingLeft: 5,
                paddingBottom: 5,
              }}
            /> */}
            <Picker
              supportedOrientations={['portrait', 'landscape']}
              mode="dropdown"
              selectedValue={this.state.language}
              style={{
                height: 50,
                width: '100%',
                color: LIGHT_BlUE,
              }}
              onValueChange={(itemValue, itemIndex) =>
                this.setState({language: itemValue})
              }>
              <Picker.Item
                style={{color: 'green'}}
                label="Select Option"
                value="select"
              />
              <Picker.Item label="Java" value="java" />
              <Picker.Item label="JavaScript" value="js" />
            </Picker>
          </View>
          <View style={[styles.outterViewStyle, {height: 40}]}>
            <View style={styles.flexInnerStyle}>
              <Text style={{fontSize: LARGE, color: LIGHT_BlUE}}>Check in</Text>
            </View>
            <View style={{flex: 0.3}} />
            <View style={[styles.flexInnerStyle, {alignItems: 'flex-start'}]}>
              <Text style={{fontSize: LARGE, color: LIGHT_BlUE}}>
                Check out
              </Text>
            </View>
          </View>

          {/* ///// */}
          <View style={[styles.outterViewStyle, {height: 50}]}>
            <View style={styles.flexInnerStyle}>
              <TouchableOpacity
                style={styles.viewStyle}
                onPress={() => {
                  this.setModalVisible(true);
                }}>
                <Text
                  style={{color: '#EAEAEA', fontSize: SMALL, paddingLeft: 5}}>
                  dd/mm/aaaa/ 00:00
                </Text>
              </TouchableOpacity>
            </View>
            <View style={{flex: 0.3}} />
            <View style={[styles.flexInnerStyle, {alignItems: 'flex-start'}]}>
              <TouchableOpacity
                style={styles.viewStyle}
                onPress={() => {
                  this.setModalVisible(true);
                }}>
                <Text
                  style={{color: '#EAEAEA', fontSize: SMALL, paddingLeft: 5}}>
                  dd/mm/aaaa/ 00:00
                </Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>

        <Modal
          animationType="slide"
          transparent={false}
          presentationStyle="fullScreen"
          visible={this.state.modalVisible}
          onRequestClose={() => this.setModalVisible()}>
          <CalendarComponent setModalVisible={() => this.setModalVisible()} />
        </Modal>
        <View style={{height: 200}} />

        {/* endFlex */}
        <View style={styles.secondFlexStyle}>
          <CustomButton
            onPress={() =>
              this.props.navigation.navigate('CarrosDisponiveisScreen')
            }
            buttonWidth={'60%'}
            buttonText={'Search'}
            btnBackgroundColor={LIGHT_BlUE}
            btnTextColor={WHITE}
          />
          <View style={{height: 20}} />
        </View>
      </View>
    );
  }
}

export default NovaReservaScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff',
  },
  firstFlexStyle: {
    height: 350,
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
  secondSubFlexStyle: {
    // flex: 1,
    height: 20,
    width: '90%',
    alignSelf: 'center',
    justifyContent: 'center',
  },
  thirdSubFlexStyle: {
    // flex: 2,
    height: 50,
    width: '90%',
    justifyContent: 'center',
    alignSelf: 'center',
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

  secondFlexStyle: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
});
