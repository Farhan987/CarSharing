import React, {Component} from 'react';
import {StyleSheet, View, TouchableOpacity, Text, Image} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import {DARK_BlUE, WHITE, LIGHT_BlUE} from '../theme/colors';
import {MEDIUM} from '../theme/font';
export default class DrawerComponent extends Component {
  render() {
    return (
      <React.Fragment>
        <View style={{height: 10}} />
        <TouchableOpacity
          style={styles.outerViewStyle}
          onPress={this.props.onPressDrawerComponent}>
          <View style={styles.flexStyle}>
            {this.props.showImage ? (
              <Image source={this.props.imagePath} />
            ) : (
              <Icon name={this.props.iconName} size={25} color={LIGHT_BlUE} />
            )}
          </View>
          <View style={[styles.flexStyle, {flex: 4, alignItems: 'flex-start'}]}>
            <Text style={{fontSize: MEDIUM, color: LIGHT_BlUE}}>
              {this.props.iconText}
            </Text>
          </View>
        </TouchableOpacity>
      </React.Fragment>
    );
  }
}

const styles = StyleSheet.create({
  outerViewStyle: {
    height: 50,
    width: '85%',
    alignSelf: 'center',
    backgroundColor: WHITE,
    borderRadius: 3,
    flexDirection: 'row',
    elevation: 1,
  },
  flexStyle: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
