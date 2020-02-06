import React, {Component} from 'react';
import {StyleSheet, View, TouchableOpacity, Text} from 'react-native';
import {WHITE, LIGHT_BlUE} from '../../theme/colors';
import {SMALL, EXTRA_LARGE, LARGE} from '../../theme/font';
import CustomHeader from '../../components/customHeader';
import RenderComponent from '../../components/renderComponent';
import SecondFutureReservationComponent from '../../components/secondFutureReservationComponent';

class SecondReservationScreen extends Component {
  state = {tab: true};
  toggleTab = text => {
    this.setState({tab: text});
  };

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
        <View style={styles.pageTitleViewStyle}>
          <View
            style={[styles.flexInnerStyle, {alignItems: 'center', flex: 5}]}>
            <Text style={styles.pageTitleTextStyle}>My Reservation</Text>
          </View>
        </View>
        <View
          style={{
            height: 50,
            width: '90%',
            alignSelf: 'center',
            flexDirection: 'row',
          }}>
          <View
            style={{
              flex: 2,
              justifyContent: 'center',
            }}>
            <TouchableOpacity
              onPress={() => this.toggleTab(true)}
              style={{
                height: '80%',
                width: '90%',
                alignSelf: 'center',
                borderBottomLeftRadius: 3,
                borderTopLeftRadius: 3,
                borderColor: LIGHT_BlUE,
                borderWidth: 1,
                backgroundColor: this.state.tab ? LIGHT_BlUE : WHITE,
                justifyContent: 'center',
                alignItems: 'center',
              }}>
              <Text
                style={{
                  color: this.state.tab ? WHITE : LIGHT_BlUE,
                  alignSelf: 'center',
                  fontSize: SMALL,
                }}>
                Reservation in
              </Text>
              <Text
                style={{
                  color: this.state.tab ? WHITE : LIGHT_BlUE,
                  alignSelf: 'center',
                  fontSize: SMALL,
                }}>
                Progress
              </Text>
            </TouchableOpacity>
          </View>
          <View
            style={{
              flex: 2,
              justifyContent: 'center',
            }}>
            <TouchableOpacity
              onPress={() => this.toggleTab(false)}
              style={{
                height: '80%',
                width: '90%',
                alignSelf: 'center',
                borderBottomRightRadius: 3,
                borderTopRightRadius: 3,
                backgroundColor: this.state.tab ? WHITE : LIGHT_BlUE,
                borderColor: LIGHT_BlUE,
                borderWidth: 1,
                justifyContent: 'center',
                alignItems: 'center',
              }}>
              <Text
                style={{
                  color: this.state.tab ? LIGHT_BlUE : WHITE,
                  alignSelf: 'center',
                  fontSize: SMALL,
                }}>
                Future Reservation
              </Text>
            </TouchableOpacity>
          </View>
          <View style={{flex: 1}} />
        </View>

        {this.state.tab ? (
          <RenderComponent navigation={this.props.navigation} />
        ) : (
          <SecondFutureReservationComponent
            navigation={this.props.navigation}
          />
        )}
      </View>
    );
  }
}

export default SecondReservationScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',
    height: '100%',
  },

  flexInnerStyle: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'flex-start',
  },
  pageTitleViewStyle: {
    height: 60,
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

  viewStyle: {
    height: 40,
    width: '100%',
    backgroundColor: WHITE,
    elevation: 1,
    alignSelf: 'center',
    borderRadius: 3,
    justifyContent: 'center',
  },
  imageViewStyle: {
    height: 140,
    width: '90%',
    alignSelf: 'center',
    justifyContent: 'center',
    alignItems: 'center',
    opacity: 2,
    backgroundColor: WHITE,
    borderTopLeftRadius: 5,
    borderTopRightRadius: 5,
  },
  otherViewStyle: {
    height: 300,
    width: '90%',
    alignSelf: 'center',
    opacity: 2,
    backgroundColor: WHITE,
    borderBottomLeftRadius: 5,
    borderBottomRightRadius: 5,
  },
  flexInnerViewStyle: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'flex-start',
    marginLeft: 20,
  },
  flexStyle: {
    flex: 1,
    flexDirection: 'row',
  },
});
