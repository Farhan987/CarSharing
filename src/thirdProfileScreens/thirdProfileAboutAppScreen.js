import React, {Component} from 'react';
import {StyleSheet, View, TouchableOpacity, Image, Text} from 'react-native';
import {LIGHT_BlUE} from '../theme/colors';
import {EXTRA_LARGE, MEDIUM} from '../theme/font';
import CustomHeader from '../components/customHeader';
class ThirdProfileAboutAppScreen extends Component {
  render() {
    return (
      <View style={styles.container}>
        <CustomHeader
          onPressMenu={() => this.props.navigation.toggleDrawer()}
          onPressAlert={() =>
            this.props.navigation.navigate('ThirdProfileAlertScreen')
          }
          onPressProfile={() =>
            this.props.navigation.navigate('ThirdEditProfileScreen')
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
            <Text style={styles.pageTitleTextStyle}>About the App</Text>
          </View>
          <View style={{flex: 1}} />
        </View>

        {/* firstFlex */}
        <View style={styles.firstFlexStyle}>
          <Image
            resizeMode={'stretch'}
            style={styles.imageStyle}
            source={require('../Logo/logoImage.png')}
          />
        </View>

        {/* endFlex */}
        <View style={styles.secondFlexStyle}>
          <Text
            style={{
              paddingLeft: 10,
              color: LIGHT_BlUE,
              fontSize: MEDIUM,
              paddingRight: 10,
            }}>
            The CarSharing application was born with the aim of making life
            easier for everyone who needs to use cars in their routine within
            Ambev. With it, you have the information of which vehicles are
            available for use in the requested period and you can still see the
            model and mileage of each car, which allows you to better plan your
            trips and trips. The system also facilitates the tracking of vehicle
            terms and vehicles, streamlining the driver's day and administrative
            operation. In addition, it reduces our idle fleet and uses corporate
            taxis through digital management. This is technology making our
            lives easier and lowering our costs!
          </Text>
          <View style={{height: 10}} />
          <Text style={styles.boldTextStyle}>
            Developed by Eduardo Prestes, Felipe Bueno, Nicole Dias and Rafael
            Lepori in partnership with Devell.
          </Text>
        </View>
      </View>
    );
  }
}

export default ThirdProfileAboutAppScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
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
  firstFlexStyle: {
    flex: 1,
    justifyContent: 'center',
  },
  imageStyle: {
    width: 220,
    height: 230,
    alignSelf: 'center',
  },
  secondFlexStyle: {
    flex: 1.2,
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
  },

  boldTextStyle: {
    color: LIGHT_BlUE,
    fontSize: MEDIUM,
    fontWeight: 'bold',
    paddingLeft: 10,
  },
});
