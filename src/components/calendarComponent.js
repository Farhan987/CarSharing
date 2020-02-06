import React, {Component} from 'react';
import {StyleSheet, View, Text, TouchableOpacity} from 'react-native';
import {Calendar} from 'react-native-calendars';
import CustomButton from './customButton';
import Icon from 'react-native-vector-icons/FontAwesome';
import {LIGHT_BlUE, DARK_BlUE, WHITE} from '../theme/colors';
import {EXTRA_LARGE, LARGE, SMALL} from '../theme/font';
export default class CalendarComponent extends Component {
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.crossButtonStyle}>
          <TouchableOpacity onPress={this.props.setModalVisible}>
            <Icon
              name="times"
              size={25}
              color={'black'}
              style={{paddingLeft: 17}}
            />
          </TouchableOpacity>
        </View>
        <View style={[styles.crossButtonStyle, {height: 50}]}>
          <Text style={styles.whenTextStyle}>When?</Text>
        </View>
        <Calendar
          markedDates={{
            '2012-05-20': {textColor: 'orange'},
            '2012-05-22': {startingDay: true, color: 'green'},
            '2012-05-23': {
              selected: true,
              endingDay: true,
              color: 'green',
              textColor: 'gray',
            },
            '2012-05-04': {
              disabled: true,
              startingDay: true,
              color: 'green',
              endingDay: true,
            },
          }}
          markingType={'multi-dot'}
        />
        <View
          style={{
            height: 30,
            justifyContent: 'center',
            alignItems: 'flex-start',
          }}>
          <Text style={styles.whenTextStyle}>Schedule?</Text>
        </View>

        {/* parralellTexts */}
        <View style={[styles.outterViewStyle, {height: 40}]}>
          <View style={styles.flexInnerStyle}>
            <Text style={{fontSize: LARGE, color: LIGHT_BlUE}}>Check in</Text>
          </View>
          <View style={{flex: 0.3}} />
          <View style={[styles.flexInnerStyle, {alignItems: 'flex-start'}]}>
            <Text style={{fontSize: LARGE, color: LIGHT_BlUE}}>Check out</Text>
          </View>
          <View style={{flex: 1}} />
        </View>
        {/* boxes */}
        <View style={[styles.outterViewStyle, {height: 50}]}>
          <View style={styles.flexInnerStyle}>
            <View style={styles.viewStyle}>
              <Text
                style={{color: LIGHT_BlUE, fontSize: SMALL, paddingLeft: 5}}>
                14:30
              </Text>
            </View>
          </View>
          <View style={{flex: 0.3}} />
          <View style={[styles.flexInnerStyle, {alignItems: 'flex-start'}]}>
            <View style={styles.viewStyle}>
              <Text style={{color: LIGHT_BlUE, fontSize: SMALL}}>18:30</Text>
            </View>
          </View>
          <View style={{flex: 1}} />
        </View>

        <View style={{height: 20}} />
        <CustomButton
          onPress={this.props.setModalVisible}
          buttonWidth={'60%'}
          buttonText={'To Save'}
          btnBackgroundColor={LIGHT_BlUE}
          btnTextColor={WHITE}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  crossButtonStyle: {
    height: 50,
    justifyContent: 'flex-end',
    alignItems: 'flex-start',
  },
  whenTextStyle: {
    paddingLeft: 17,
    fontSize: EXTRA_LARGE,
    fontWeight: 'bold',
    color: LIGHT_BlUE,
  },
  outterViewStyle: {
    height: 60,
    width: '90%',
    alignSelf: 'center',
    flexDirection: 'row',
  },
  flexInnerStyle: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'flex-start',
  },
  viewStyle: {
    height: 40,
    width: 100,
    borderRadius: 40,
    backgroundColor: WHITE,
    elevation: 1,
    alignSelf: 'center',
    justifyContent: 'center',
    alignItems: 'center',
  },
});
