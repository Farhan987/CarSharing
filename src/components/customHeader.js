import React, {Component} from 'react';
import {
  StyleSheet,
  View,
  Image,
  TouchableOpacity,
  Text,
  StatusBar,
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import {DARK_BlUE, WHITE, LIGHT_BlUE} from '../theme/colors';
import {MEDIUM, LARGE} from '../theme/font';
export default class CustomHeader extends Component {
  render() {
    return (
      <React.Fragment>
        <StatusBar backgroundColor={DARK_BlUE} barStyle="light-content" />
        <View style={styles.headerMainViewStyle}>
          <View style={styles.headerInnerViewStyle}>
            <TouchableOpacity onPress={this.props.onPressMenu}>
              <Icon name="bars" size={20} color={WHITE} />
            </TouchableOpacity>
          </View>
          <View style={[styles.headerInnerViewStyle, {flex: 4}]}>
            <Text style={{fontSize: LARGE, fontWeight: 'bold', color: WHITE}}>
              Car Sharing
            </Text>
          </View>
          <View style={styles.headerInnerViewStyle}>
            <TouchableOpacity onPress={this.props.onPressAlert}>
              <Icon name="bell-o" size={20} color={WHITE} />
            </TouchableOpacity>
          </View>
          <View style={styles.headerInnerViewStyle}>
            <TouchableOpacity onPress={this.props.onPressProfile}>
              <Image
                source={require('../Logo/profile.jpg')}
                style={{height: 35, width: 35, borderRadius: 50}}
              />
            </TouchableOpacity>
          </View>
        </View>
      </React.Fragment>
    );
  }
}

const styles = StyleSheet.create({
  headerMainViewStyle: {
    height: 55,
    backgroundColor: DARK_BlUE,
    flexDirection: 'row',
  },
  headerInnerViewStyle: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
