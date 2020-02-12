import React, {Component} from 'react';
import {
  StyleSheet,
  View,
  Image,
  TouchableOpacity,
  Text,
  ScrollView,
} from 'react-native';
import {DARK_BlUE, WHITE, LIGHT_BlUE} from '../theme/colors';
import {MEDIUM} from '../theme/font';
import Icon from 'react-native-vector-icons/FontAwesome';
import DrawerComponent from '../components/drawerComponent';
export default class DrawerScreen extends Component {
  render() {
    return (
      <View style={styles.container}>
        {/* ExitButtonView */}
        <View style={styles.topButtonViewStyle}>
          <View style={{height: 40, width: 80, flexDirection: 'row'}}>
            <View style={styles.topButtonInnerViewStyle}>
              <TouchableOpacity
                onPress={() => this.props.navigation.navigate('LoginScreen')}>
                <Image
                  source={require('../icons/exit.png')}
                  style={{height: 20, width: 20}}
                />
                {/* <Icon name="sign-out" size={20} color={WHITE} /> */}
              </TouchableOpacity>
            </View>
            <View style={[styles.topButtonInnerViewStyle, {flex: 2}]}>
              <TouchableOpacity
                onPress={() => this.props.navigation.navigate('LoginScreen')}>
                <Text style={{color: WHITE}}>Exit</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>

        {/* imageView */}
        <View style={styles.imageViewStyle}>
          <View
            style={{
              width: '50%',
              alignSelf: 'center',
            }}>
            <Image
              style={styles.imageStyle}
              source={require('../Logo/profile.jpg')}
            />
            <TouchableOpacity
              style={styles.editImageButtonStyle}
              onPress={() =>
                this.props.navigation.navigate('EditProfileScreen')
              }>
              <Image
                source={require('../icons/editBlue.png')}
                style={{height: 20, width: 20}}
              />
            </TouchableOpacity>
          </View>
        </View>

        {/* Name&Email */}
        <View style={styles.nameAndEmailViewStyle}>
          <Text style={{fontSize: 30, fontWeight: 'bold', color: WHITE}}>
            Eduardo Leite
          </Text>
        </View>
        <View style={[styles.nameAndEmailViewStyle, {height: 20}]}>
          <Text style={{fontSize: MEDIUM, color: WHITE}}>
            eduardo.leite@ambev.com.br
          </Text>
        </View>
        <View style={styles.nameAndEmailViewStyle} />

        {/* Components */}
        <ScrollView>
          <DrawerComponent
            showImage={true}
            source={require('../icons/newBooking.png')}
            iconText={'New'}
            onPressDrawerComponent={() => {
              this.props.navigation.navigate('FazerReservaScreen');
              this.props.navigation.closeDrawer();
            }}
          />
          <DrawerComponent
            showImage={true}
            source={require('../icons/car.png')}
            iconName={'car'}
            iconText={'My Reservation'}
            onPressDrawerComponent={() =>
              this.props.navigation.navigate('MyReservationFirstScreen')
            }
          />
          <DrawerComponent
            showImage={true}
            source={require('../icons/history.png')}
            iconText={'Historic'}
            onPressDrawerComponent={() =>
              this.props.navigation.navigate('HistoricScreen')
            }
          />
          <DrawerComponent
            showImage={true}
            source={require('../icons/notification.png')}
            iconText={'Alerts'}
            onPressDrawerComponent={() =>
              this.props.navigation.navigate('AlertScreen')
            }
          />
          <DrawerComponent
            onPressDrawerComponent={() =>
              this.props.navigation.navigate('SearchGasStationScree')
            }
            showImage={true}
            source={require('../icons/fuelPump.png')}
            iconName={'institution'}
            iconText={'Gas Station Near'}
          />
          <DrawerComponent
            onPressDrawerComponent={() =>
              this.props.navigation.navigate('AboutAppScreen')
            }
            showImage={true}
            source={require('../icons/info.png')}
            iconName={'info-circle'}
            iconText={'About the Help'}
          />

          <View style={{height: 10}} />
        </ScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  topButtonViewStyle: {
    height: 60,
    backgroundColor: DARK_BlUE,
    justifyContent: 'center',
    alignItems: 'flex-end',
  },
  topButtonInnerViewStyle: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'flex-start',
  },
  imageViewStyle: {
    height: 140,
    width: '100%',
    justifyContent: 'flex-start',
    alignItems: 'center',
    backgroundColor: DARK_BlUE,
  },
  imageStyle: {
    height: 140,
    width: 140,
    borderRadius: 100,
    alignSelf: 'center',
  },
  editImageButtonStyle: {
    height: 35,
    width: 35,
    borderRadius: 50,
    backgroundColor: WHITE,
    alignSelf: 'center',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 110,
    marginTop: -50,
    justifyContent: 'center',
  },
  nameAndEmailViewStyle: {
    height: 40,
    backgroundColor: DARK_BlUE,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
