import React, {Component} from 'react';
import {
  StyleSheet,
  View,
  Text,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import {WHITE, LIGHT_BlUE, DARK_BlUE} from '../theme/colors';
export default class SecondTextInput extends Component {
  render() {
    return (
      <React.Fragment>
        <TextInput
          style={styles.textInputStyle}
          placeholderTextColor={LIGHT_BlUE}
          placeholder={this.props.placeholder}
          secureTextEntry={
            this.props.securePassword ? this.props.securePassword : false
          }
        />
      </React.Fragment>
    );
  }
}

const styles = StyleSheet.create({
  textInputStyle: {
    height: 42,
    borderColor: LIGHT_BlUE,
    borderBottomWidth: 1,
    borderTopWidth: 0,
    borderRightWidth: 0,
    borderLeftWidth: 0,
    width: '90%',
    alignSelf: 'center',
    fontWeight: 'bold',
    color: LIGHT_BlUE,
  },
});
