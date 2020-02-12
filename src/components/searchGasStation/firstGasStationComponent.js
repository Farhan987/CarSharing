import React, {Component} from 'react';
import {StyleSheet, View, Text} from 'react-native';
import {WHITE, LIGHT_BlUE} from '../../theme/colors';
import {SMALL} from '../../theme/font';
import CustomField from '../customField';
import CustomButton from '../customButton';

export default class FirstGasStationComponent extends Component {
  render() {
    return (
      <React.Fragment>
        <View style={styles.secondFlexStyle}>
          <View style={styles.firstSubFlexStyle}>
            <Text style={styles.boldTextStyle}>Gas station near by</Text>
          </View>
          <View style={styles.secondSubFlexStyle}>
            <Text style={{color: LIGHT_BlUE, fontSize: SMALL}}>
              Search gas station
            </Text>
          </View>
          <View style={styles.thirdSubFlexStyle}>
            <CustomField placeholder={'Gas station São Paulo'} />
          </View>
          <View style={{flex: 2}}>
            <CustomButton
              // onPress={() =>
              //   this.props.navigation.navigate('NovaReservaScreen')
              // }
              buttonWidth={'60%'}
              buttonText={'Search'}
              btnBackgroundColor={LIGHT_BlUE}
              btnTextColor={WHITE}
            />
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
