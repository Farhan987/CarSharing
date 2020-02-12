import React, {Component} from 'react';
import {StyleSheet, View, Text, TouchableOpacity, Image} from 'react-native';
import {WHITE, LIGHT_BlUE} from '../../theme/colors';

export default class SecondGasStationComponent extends Component {
  render() {
    return (
      <React.Fragment>
        <View style={styles.secondFlexStyle}>
          <View style={styles.firstSubFlexStyle}>
            <View style={styles.flexInnerStyle}>
              <TouchableOpacity onPress={() => this.props.navigation.goBack()}>
                <Image
                  source={require('../../icons/blueBack.png')}
                  style={{height: 20, width: 20}}
                />
              </TouchableOpacity>
            </View>
            <View
              style={[
                styles.flexInnerStyle,
                {alignItems: 'flex-start', flex: 5},
              ]}>
              <Text style={styles.boldTextStyle}>Gas station near by</Text>
            </View>
          </View>
          <View
            style={{
              height: 90,
              width: '90%',
              alignSelf: 'center',
              backgroundColor: WHITE,
              elevation: 1,
            }}>
            <View style={{height: 5}} />
            <Image
              source={require('../../icons/fuelPump.png')}
              style={{marginLeft: 20, height: 20, width: 21}}
            />
            {/* <Icon
              name={'fire'}
              size={25}
              color={LIGHT_BlUE}
              style={{paddingLeft: 20}}
            /> */}
            <View style={{height: 10}} />
            <Text style={{paddingLeft: 20}}>Street Brooklyn, 150</Text>
            <View style={{height: 5}} />
            <Text style={{paddingLeft: 20}}>Open until 5:00 PM</Text>
          </View>
        </View>
      </React.Fragment>
    );
  }
}

const styles = StyleSheet.create({
  secondFlexStyle: {
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    flex: 1,
    backgroundColor: WHITE,
  },
  firstSubFlexStyle: {
    height: 70,
    flexDirection: 'row',
  },
  boldTextStyle: {
    color: LIGHT_BlUE,
    fontSize: 20,
    fontWeight: 'bold',
    paddingLeft: 10,
  },
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
  flexInnerStyle: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
