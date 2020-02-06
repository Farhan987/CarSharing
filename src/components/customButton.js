import React, {Component} from 'react';
import {StyleSheet, View, Image, TouchableOpacity, Text} from 'react-native';
import {DARK_BlUE, WHITE, LIGHT_BlUE} from '../theme/colors';
import {MEDIUM, LARGE} from '../theme/font';
export default class CustomButton extends Component {
  render() {
    return (
      <React.Fragment>
        <TouchableOpacity
          onPress={this.props.onPress}
          style={{
            height: this.props.buttonHeight ? this.props.buttonHeight : 45,
            width: this.props.buttonWidth ? this.props.buttonWidth : '90%',
            backgroundColor: this.props.btnBackgroundColor
              ? this.props.btnBackgroundColor
              : WHITE,
            borderRadius: 3,
            alignSelf: 'center',
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <Text
            style={{
              fontSize: MEDIUM,
              color: this.props.btnTextColor
                ? this.props.btnTextColor
                : LIGHT_BlUE,
              fontWeight: 'bold',
            }}>
            {this.props.buttonText}
          </Text>
        </TouchableOpacity>
      </React.Fragment>
    );
  }
}

const styles = StyleSheet.create({});
