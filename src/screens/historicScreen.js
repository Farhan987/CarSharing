import React, {Component} from 'react';
import {StyleSheet, View, TouchableOpacity, Text} from 'react-native';
import {WHITE, LIGHT_BlUE} from '../theme/colors';
import Icon from 'react-native-vector-icons/FontAwesome';
import {EXTRA_LARGE} from '../theme/font';
import CustomHeader from '../components/customHeader';
import {ScrollView} from 'react-native-gesture-handler';
import HistoricCarComponent from '../components/historicCarComponent';
class HistoricScreen extends Component {
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
            <View>
              <Text style={styles.pageTitleTextStyle}>Historic</Text>
            </View>
          </View>
          <View style={{flex: 1}} />

          <View style={{flex: 1}} />
        </View>

        {/* component */}
        <ScrollView>
          <HistoricCarComponent navigation={this.props.navigation} />
          <HistoricCarComponent navigation={this.props.navigation} />
          <HistoricCarComponent navigation={this.props.navigation} />
        </ScrollView>
      </View>
    );
  }
}

export default HistoricScreen;

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
