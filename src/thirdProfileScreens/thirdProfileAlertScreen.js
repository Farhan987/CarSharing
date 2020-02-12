import React, {Component} from 'react';
import {StyleSheet, View, Text, ScrollView} from 'react-native';
import {LIGHT_BlUE} from '../theme/colors';
import {EXTRA_LARGE} from '../theme/font';
import CustomHeader from '../components/customHeader';
import AlertComponent from '../components/alertComponent';
class ThirdProfileAlertScreen extends Component {
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
        <View style={{height: 10}} />
        <View style={styles.pageTitleViewStyle}>
          <Text style={styles.pageTitleTextStyle}>Alerts</Text>
        </View>

        {/* components */}
        <ScrollView>
          <AlertComponent
            imageSource={require('../icons/renew.png')}
            iconText={'Late Booking'}
            description={
              'The check out of reservation 14586 by user Eduardo Prestes, with the email eduardo.leite@ambev.com is delayed by 15 minutes!'
            }
          />
        </ScrollView>
      </View>
    );
  }
}

export default ThirdProfileAlertScreen;

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
