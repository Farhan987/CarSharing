import React, {Component} from 'react';
import {StyleSheet, View, Text, ScrollView} from 'react-native';
import {LIGHT_BlUE} from '../theme/colors';
import {EXTRA_LARGE} from '../theme/font';
import CustomHeader from '../components/customHeader';
import AlertComponent from '../components/alertComponent';
class AlertScreen extends Component {
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
        <View style={{height: 10}} />
        <View style={styles.pageTitleViewStyle}>
          <Text style={styles.pageTitleTextStyle}>Alerts</Text>
        </View>

        {/* components */}
        <ScrollView>
          <AlertComponent
            onPressDetail={() =>
              this.props.navigation.navigate('NovaReservaScreen')
            }
            imageSource={require('../icons/renew.png')}
            iconText={'Reservation canceled'}
            description={
              ' Your reservation 14567848947 of the day 14/01 at 10:00 PM was canceled.'
            }
            detailText={' See Detail'}
          />
          <AlertComponent
            onPressDetail={() =>
              this.props.navigation.navigate('NovaReservaScreen')
            }
            imageSource={require('../icons/renew.png')}
            iconText={'Renew Reservation'}
            description={'Renew reservation in progress'}
            detailText={' See Detail'}
          />

          <AlertComponent
            onPressDetail={() =>
              this.props.navigation.navigate('NovaReservaScreen')
            }
            imageSource={require('../icons/finish.png')}
            iconText={'Check out Next'}
            description={'Acurrent reservation ends in 1 hour'}
            detailText={' See Detail'}
          />

          <AlertComponent
            onPressDetail={() =>
              this.props.navigation.navigate('NovaReservaScreen')
            }
            imageSource={require('../icons/renew.png')}
            iconText={'Check in Next'}
            description={'Acurrent reservation ends in 1 hour'}
            detailText={' See Detail'}
          />
          <AlertComponent
            onPressDetail={() =>
              this.props.navigation.navigate('NovaReservaScreen')
            }
            imageSource={require('../icons/renew.png')}
            iconText={'Check in Next'}
            description={'Your reservation start in 24 hours'}
            detailText={' See Detail'}
          />
          <AlertComponent
            onPressDetail={() =>
              this.props.navigation.navigate('NovaReservaScreen')
            }
            imageSource={require('../icons/renew.png')}
            iconText={'Current reservation can be renewed 3 more times'}
            description={
              'Your reservation 1456784894714545 can be renewed 3 more times'
            }
            detailText={' See Detail'}
          />
        </ScrollView>
      </View>
    );
  }
}

export default AlertScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',
    height: '100%',
  },
  pageTitleViewStyle: {
    height: 40,
    width: '90%',
    alignSelf: 'center',
    justifyContent: 'center',
    alignItems: 'flex-start',
  },
  pageTitleTextStyle: {
    fontSize: EXTRA_LARGE,
    color: LIGHT_BlUE,
    fontWeight: 'bold',
  },
});
