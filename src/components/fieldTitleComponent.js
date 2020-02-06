import React, {Component} from 'react';
import {StyleSheet, View, Text} from 'react-native';
import {LIGHT_BlUE} from '../theme/colors';
import {SMALL, MEDIUM} from '../theme/font';
export default class FieldTitleComponent extends Component {
  render() {
    return (
      <React.Fragment>
        <View
          style={{
            alignSelf: 'center',
            paddingLeft: 3,
            width: '90%',
          }}>
          <Text style={{color: LIGHT_BlUE, fontSize: MEDIUM}}>
            {this.props.FeildTitle}
          </Text>
        </View>
      </React.Fragment>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
