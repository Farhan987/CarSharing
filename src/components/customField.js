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
import {SMALL} from '../theme/font';
export default class CustomField extends Component {
  render() {
    return (
      <React.Fragment>
        <TextInput
          style={styles.viewStyle}
          placeholder={
            this.props.placeholder ? this.props.placeholder : ' CDD Compinas'
          }
          placeholderTextColor={'#EAEAEA'}></TextInput>
      </React.Fragment>
    );
  }
}

const styles = StyleSheet.create({
  viewStyle: {
    height: 40,
    width: '90%',
    backgroundColor: WHITE,
    elevation: 1,
    alignSelf: 'center',
    borderRadius: 3,
    justifyContent: 'center',
    color: LIGHT_BlUE,
  },
});
