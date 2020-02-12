import React, {Component} from 'react';
import {StyleSheet, View, Text, TouchableOpacity, Image} from 'react-native';
import CustomButton from './customButton';
import CalendarPicker from 'react-native-calendar-picker';
import {LIGHT_BlUE, WHITE} from '../theme/colors';
import {EXTRA_LARGE, LARGE, SMALL} from '../theme/font';
export default class CalendarComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedStartDate: null,
      selectedEndDate: null,
    };
    this.onDateChange = this.onDateChange.bind(this);
  }

  onDateChange(date, type) {
    if (type === 'END_DATE') {
      this.setState({
        selectedEndDate: date,
      });
    } else {
      this.setState({
        selectedStartDate: date,
        selectedEndDate: null,
      });
    }
  }
  render() {
    const {selectedStartDate, selectedEndDate} = this.state;
    const minDate = new Date(); // Today
    const maxDate = new Date(2050, 6, 3);
    const startDate = selectedStartDate ? selectedStartDate.toString() : '';
    const endDate = selectedEndDate ? selectedEndDate.toString() : '';
    return (
      <View style={styles.container}>
        <View style={styles.crossButtonStyle}>
          <TouchableOpacity onPress={this.props.setModalVisible}>
            {/* <Icon
              name="times"
              size={25}
              color={'black'}
              style={{paddingLeft: 17}}
            /> */}
            <Image
              source={require('../icons/crossBlack.png')}
              style={{height: 25, width: 25, marginLeft: 10}}
            />
          </TouchableOpacity>
        </View>
        <View style={[styles.crossButtonStyle, {height: 50}]}>
          <Text style={styles.whenTextStyle}>When?</Text>
        </View>
        <CalendarPicker
          startFromMonday={true}
          allowRangeSelection={true}
          minDate={minDate}
          maxDate={maxDate}
          weekdays={['Mon', 'Tue', 'Wen', 'Thu', 'Fri', 'Sat', 'Sun']}
          months={[
            'January',
            'Febrauary',
            'March',
            'April',
            'May',
            'Jun',
            'July',
            'August',
            'September',
            'October',
            'November',
            'Dcember',
          ]}
          previousTitle="Back"
          nextTitle="Next"
          enableSwipe={true}
          todayBackgroundColor={LIGHT_BlUE}
          selectedDayColor={LIGHT_BlUE}
          selectedDayTextColor={'white'}
          disabledDatesTextStyle={'red'}
          scaleFactor={375}
          textStyle={{
            fontFamily: 'Cochin',
            color: LIGHT_BlUE,
          }}
          onDateChange={this.onDateChange}
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
                style={{color: LIGHT_BlUE, fontSize: LARGE, paddingLeft: 5}}>
                14:30
              </Text>
            </View>
          </View>
          <View style={{flex: 0.3}} />
          <View style={[styles.flexInnerStyle, {alignItems: 'flex-start'}]}>
            <View style={styles.viewStyle}>
              <Text style={{color: LIGHT_BlUE, fontSize: LARGE}}>18:30</Text>
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
