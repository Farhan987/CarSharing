import React, {Component} from 'react';
import {
  StyleSheet,
  View,
  Text,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import {WHITE, LIGHT_BlUE} from '../theme/colors';
export default class CustomTextInput extends Component {
  render() {
    return (
      <React.Fragment>
        <View
          style={[
            styles.container,
            {
              height: this.props.containerHeight
                ? this.props.containerHeight
                : 50,
            },
          ]}>
          {this.props.notShow ? (
            false
          ) : (
            <View style={{width: 25}}>
              <Icon name={this.props.iconName} size={25} color={WHITE} />
            </View>
          )}
          <View style={{flex: 1}}>
            <TextInput
              style={[
                styles.textInputStyle,
                {
                  height: this.props.textInputHeight
                    ? this.props.textInputHeight
                    : 50,
                  fontWeight: this.props.fontWeight
                    ? this.props.fontWeight
                    : '0',
                  color: this.props.textColor
                    ? this.props.textColor
                    : LIGHT_BlUE,
                },
              ]}
              placeholderTextColor={
                this.props.phColor ? this.props.phColor : WHITE
              }
              placeholder={this.props.placeholder}
              secureTextEntry={
                this.props.securePassword ? this.props.securePassword : false
              }
            />
          </View>
          {this.props.showEye ? (
            <View style={{width: 25}}>
              <TouchableOpacity onPress={this.props.onEyePress}>
                <Icon
                  name={this.props.eyeIcon}
                  size={25}
                  color={this.props.iconColor ? this.props.iconColor : WHITE}
                />
              </TouchableOpacity>
            </View>
          ) : (
            false
          )}
        </View>
        <View
          style={[
            styles.underLineStyle,
            {
              backgroundColor: this.props.lineBgColor
                ? this.props.lineBgColor
                : WHITE,
            },
          ]}
        />
      </React.Fragment>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    width: '90%',
    alignSelf: 'center',
    marginTop: 10,
  },
  textInputStyle: {
    borderColor: WHITE,
    borderBottomWidth: 0,
    borderTopWidth: 0,
    borderRightWidth: 0,
    borderLeftWidth: 0,
    width: '90%',
  },
  underLineStyle: {
    height: 1,
    width: '90%',
    alignSelf: 'center',
  },
});
