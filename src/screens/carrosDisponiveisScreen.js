import React, {Component} from 'react';
import {StyleSheet, View, TouchableOpacity, Text, Image} from 'react-native';
import {WHITE, LIGHT_BlUE} from '../theme/colors';
import CustomButton from '../components/customButton';
import Icon from 'react-native-vector-icons/FontAwesome';
import {SMALL, EXTRA_LARGE, LARGE} from '../theme/font';
import CustomHeader from '../components/customHeader';
import CarComponent from '../components/carComponent';
import {ScrollView} from 'react-native-gesture-handler';
class CarrosDisponiveisScreen extends Component {
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
            <Text style={styles.pageTitleTextStyle}>Choose your Car</Text>
          </View>
          <View style={[styles.flexInnerStyle]}>
            <TouchableOpacity
              style={{alignSelf: 'flex-end'}}
              onPress={() => this.props.navigation.goBack()}>
              <Icon name="search" size={20} color={LIGHT_BlUE} />
            </TouchableOpacity>
          </View>
        </View>

        {/* component */}
        <ScrollView>
          <CarComponent navigation={this.props.navigation} />
          <CarComponent navigation={this.props.navigation} />
          <CarComponent navigation={this.props.navigation} />
        </ScrollView>
      </View>
    );
  }
}

export default CarrosDisponiveisScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',
    height: '100%',
  },
  firstFlexStyle: {
    flex: 2,
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
    height: 30,
    width: '90%',
    alignSelf: 'center',
    justifyContent: 'center',
  },
  thirdSubFlexStyle: {
    // flex: 2,
    height: 50,
    justifyContent: 'flex-start',
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

  secondFlexStyle: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
});
