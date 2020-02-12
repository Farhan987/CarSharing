import React, {Component} from 'react';
import {StyleSheet, View, ImageBackground, Image, Text} from 'react-native';
import {WHITE, LIGHT_BlUE} from '../theme/colors';
import CustomButton from '../components/customButton';
import {SMALL} from '../theme/font';
import CustomHeader from '../components/customHeader';
import CustomField from '../components/customField';
class FazerReservaScreen extends Component {
  state = {};
  render() {
    return (
      <ImageBackground
        source={require('../icons/image.jpeg')}
        style={styles.container}>
        <CustomHeader
          onPressMenu={() => this.props.navigation.toggleDrawer()}
          onPressAlert={() => this.props.navigation.navigate('AlertScreen')}
          onPressProfile={() =>
            this.props.navigation.navigate('EditProfileScreen')
          }
        />
        {/* firstFlex */}
        <View style={styles.firstFlexStyle}>
          <Image
            resizeMode={'stretch'}
            style={styles.imageStyle}
            source={require('../Logo/CarSharing1.png')}
          />
        </View>

        {/* endFlex */}
        <View style={styles.secondFlexStyle}>
          <View style={styles.firstSubFlexStyle}>
            <Text style={styles.boldTextStyle}>Do you want make a</Text>
            <Text style={styles.boldTextStyle}>new reservation?</Text>
          </View>
          <View style={styles.secondSubFlexStyle}>
            <Text style={{color: LIGHT_BlUE, fontSize: SMALL}}>
              Pickup Location
            </Text>
          </View>
          <View style={styles.thirdSubFlexStyle}>
            <CustomField />
          </View>
          <View style={{flex: 2}}>
            <CustomButton
              onPress={() =>
                this.props.navigation.navigate('NovaReservaScreen')
              }
              buttonWidth={'60%'}
              buttonText={'Next'}
              btnBackgroundColor={LIGHT_BlUE}
              btnTextColor={WHITE}
            />
          </View>
        </View>
      </ImageBackground>
    );
  }
}

export default FazerReservaScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',
    height: '100%',
  },
  firstFlexStyle: {
    flex: 1.3,
    justifyContent: 'center',
  },
  imageStyle: {
    width: 170,
    height: 180,
    alignSelf: 'center',
  },
  secondFlexStyle: {
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    flex: 1,
    backgroundColor: WHITE,
  },
  firstSubFlexStyle: {
    // flex: 2.5,
    height: 85,
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
