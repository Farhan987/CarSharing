import React, {Component} from 'react';
import {StyleSheet, View, TouchableOpacity, Text, Image} from 'react-native';
import {WHITE, LIGHT_BlUE} from '../theme/colors';
import {MEDIUM, SMALL} from '../theme/font';
export default class AlertComponent extends Component {
  render() {
    return (
      <React.Fragment>
        <View style={{height: 10}} />
        <View style={styles.outerViewStyle}>
          <View style={{flexDirection: 'row'}}>
            <View style={styles.flexStyle}>
              <Image
                source={this.props.imageSource}
                style={{height: 35, width: 35}}
              />
            </View>
            <View
              style={[styles.flexStyle, {flex: 5, alignItems: 'flex-start'}]}>
              <Text
                style={{
                  fontSize: MEDIUM,
                  color: LIGHT_BlUE,
                  fontWeight: 'bold',
                }}>
                {this.props.iconText}
              </Text>
            </View>
          </View>
          <View>
            <Text
              style={{color: LIGHT_BlUE, fontSize: SMALL, paddingLeft: '5%'}}>
              {this.props.description}
            </Text>
            <TouchableOpacity onPress={this.props.onPressDetail}>
              <Text
                style={{
                  color: LIGHT_BlUE,
                  fontSize: SMALL,
                  fontWeight: 'bold',
                  paddingLeft: '5%',
                }}>
                {this.props.detailText}
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </React.Fragment>
    );
  }
}

const styles = StyleSheet.create({
  outerViewStyle: {
    width: '90%',
    alignSelf: 'center',
    backgroundColor: WHITE,
    borderRadius: 3,
    elevation: 1,
  },
  flexStyle: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
