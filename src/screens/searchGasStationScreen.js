import React, {Component} from 'react';
import {StyleSheet, View} from 'react-native';
import MapView, {PROVIDER_GOOGLE, Marker} from 'react-native-maps';
import CustomHeader from '../components/customHeader';
import {WHITE, LIGHT_BlUE} from '../theme/colors';
import FirstGasStationComponent from '../components/searchGasStation/firstGasStationComponent';
import SecondGasStationComponent from '../components/searchGasStation/secondGasStationComponent';

export default class SearchGasStationScreen extends Component {
  state = {gasStation: true};
  toggle = text => {
    this.setState({gasStation: text});
  };

  render() {
    return (
      <View style={{flex: 1}}>
        <CustomHeader
          onPressMenu={() => this.props.navigation.toggleDrawer()}
          onPressAlert={() => this.props.navigation.navigate('AlertScreen')}
          onPressProfile={() =>
            this.props.navigation.navigate('EditProfileScreen')
          }
        />

        {/* <TouchableOpacity style={styles.barsButtonStyle}>
          <Icon color={'grey'} name="compass" />
        </TouchableOpacity> */}
        <View style={{flex: 1.5}}>
          <MapView
            provider={PROVIDER_GOOGLE}
            style={{width: '100%', height: '100%'}}
            region={{
              latitude: 37.78825,
              longitude: -122.4324,
              latitudeDelta: 0.015,
              longitudeDelta: 0.0121,
            }}>
            <Marker
              onPress={() => this.toggle(false)}
              coordinate={{latitude: 37.78825, longitude: -122.4324}}
              title={'Gas Station 1'}
              image={require('../icons/gas-pump.png')}
              description={'Gas Station 1 Description'}
            />
            <Marker
              onPress={() => this.toggle(false)}
              coordinate={{latitude: 37.7886, longitude: -122.436}}
              title={'Gas Station 2'}
              image={require('../icons/gas-pump.png')}
              description={'Gas Station 2 Description'}
            />

            <Marker
              onPress={() => this.toggle(false)}
              image={require('../icons/gas-pump.png')}
              coordinate={{latitude: 37.7899, longitude: -122.435}}
              title={'Gas Station 3'}
              description={'Gas Station 3 Description'}
            />
          </MapView>
        </View>
        <View style={{flex: 1}}>
          {this.state.gasStation ? (
            <FirstGasStationComponent />
          ) : (
            <SecondGasStationComponent navigation={this.props.navigation} />
          )}
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  barsButtonStyle: {
    position: 'absolute',
    zIndex: 999,
    right: 20,
    top: 70,
    backgroundColor: 'red',
    width: 50,
    height: 50,
    borderRadius: 50,
    alignItems: 'center',
    justifyContent: 'center',
  },
  secondFlexStyle: {
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    flex: 1,
    backgroundColor: WHITE,
  },
  firstSubFlexStyle: {
    // flex: 2.5,
    height: 70,
    alignSelf: 'center',
    justifyContent: 'center',
    alignItems: 'center',
  },
  boldTextStyle: {color: LIGHT_BlUE, fontSize: 20, fontWeight: 'bold'},
  secondSubFlexStyle: {
    // flex: 1,
    height: 30,
    width: '90%',
    alignSelf: 'center',
  },
  thirdSubFlexStyle: {
    // flex: 2,
    height: 60,
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
});
