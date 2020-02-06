import React, {Component} from 'react';
import {StyleSheet, View, Image, Text} from 'react-native';
import {WHITE, LIGHT_BlUE} from '../theme/colors';
import Icon from 'react-native-vector-icons/FontAwesome';
import {EXTRA_LARGE, SMALL, LARGE, MEDIUM} from '../theme/font';
import {TouchableOpacity} from 'react-native-gesture-handler';
export default class HistoricCarComponent extends Component {
  render() {
    return (
      <React.Fragment>
        <View style={{height: 15}} />
        <View style={styles.imageViewStyle}>
          <Image
            resizeMode="stretch"
            source={require('../Logo/car.png')}
            style={{height: 150, width: '90%'}}
          />
        </View>
        <View style={styles.outerViewStyle}>
          <View style={styles.innerViewStyle}>
            <View style={styles.buttonStyle}>
              <View
                style={{
                  flex: 1,
                  justifyContent: 'center',
                  alignItems: 'center',
                }}>
                <Icon name="calendar-o" size={18} color={WHITE} />
              </View>
              <View
                style={{
                  flex: 2,
                  justifyContent: 'center',
                  alignItems: 'flex-start',
                }}>
                <Text style={{color: WHITE, fontSize: 10}}>14/01/2020</Text>
              </View>
            </View>
          </View>
          <View style={[styles.innerViewStyle, {alignItems: 'flex-start'}]}>
            <Text
              style={{
                color: LIGHT_BlUE,
                fontSize: MEDIUM,
                fontWeight: 'bold',
              }}>
              Reservation 14567
            </Text>
            <TouchableOpacity
              onPress={() =>
                this.props.navigation.navigate('HistoricoDetailScreen')
              }>
              <Text style={{color: LIGHT_BlUE, fontSize: 10}}>
                More Details >
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </React.Fragment>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  imageViewStyle: {
    height: 160,
    width: '90%',
    alignSelf: 'center',
    justifyContent: 'center',
    alignItems: 'center',
    opacity: 2,
    backgroundColor: LIGHT_BlUE,
    borderTopLeftRadius: 5,
    borderTopRightRadius: 5,
  },
  outerViewStyle: {
    height: 50,
    width: '90%',
    alignSelf: 'center',
    backgroundColor: WHITE,
    borderBottomLeftRadius: 5,
    borderBottomRightRadius: 5,
    flexDirection: 'row',
  },
  innerViewStyle: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonStyle: {
    height: 27,
    width: 90,
    backgroundColor: LIGHT_BlUE,
    borderRadius: 3,
    flexDirection: 'row',
  },
});
