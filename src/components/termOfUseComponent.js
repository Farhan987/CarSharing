import React, {Component} from 'react';
import {StyleSheet, View, Text, TouchableOpacity, Image} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import {LIGHT_BlUE, WHITE} from '../theme/colors';
import {EXTRA_LARGE, SMALL} from '../theme/font';
export default class TermOfUseComponent extends Component {
  state = {blueBg: false};
  toggleCheckBox = () => {
    this.setState({blueBg: !this.state.blueBg});
  };
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.crossButtonStyle}>
          <TouchableOpacity onPress={this.props.setModalVisible1}>
            {/* <Icon
              name="times"
              size={25}
              color={'black'}
              style={{paddingLeft: 17}}
            /> */}
            <Image
              source={require('../icons/crossBlack.png')}
              style={{height: 25, width: 25, marginLeft: 10}}
            />
          </TouchableOpacity>
        </View>
        <View style={styles.crossButtonStyle}>
          <Text style={styles.whenTextStyle}>Term of Use</Text>
        </View>

        <View style={{height: 15}} />
        <View style={{justifyContent: 'center', alignItems: 'flex-start'}}>
          <Text style={{paddingLeft: 17, fontSize: SMALL, color: LIGHT_BlUE}}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam
            faucibus tempus tellus vel rutrum. Quisque ultricies ultricies
            turpis non facilisis. Nullam felis velit, rhoncus et lacus et,
            pretium feugiat odio. Praesent tempor magna sit amet mi faucibus,
            vel dapibus lacus tincidunt. Vestibulum commodo lectus eget sapien
            gravida tristique. Vestibulum at tristique eros. Praesent in sem
            lorem. Fusce sed semper sapien. Integer lobortis orci metus, sit
            amet posuere odio lobortis auctor. Sed sollicitudin nisi eros.
            Nullam et accumsan purus. Curabitur quis tristique mi. Maecenas
            pretium dolor at nisl condimentum, ut fringilla velit hendrerit.
            Vivamus non tellus tincidunt, commodo enim non, facilisis orci.
            Proin eu elementum est. Class aptent taciti sociosqu ad litora
            torquent per conubia nostra, per inceptos himenaeos. Nam molestie,
            mauris sit amet vehicula semper, orci sem gravida dui, vel viverra
            urna augue nec velit. Vivamus consequat vitae nisi a maximus. Donec
            dapibus velit hendrerit mollis molestie. Vivamus sed hendrerit
            ipsum. Pellentesque habitant morbi tristique senectus et netus et
            malesuada fames ac turpis egestas.
          </Text>
        </View>

        <View style={{height: 20}} />
        <View style={styles.mainCheckViewStyle}>
          <View style={[styles.checkViewStyle, {flex: 1}]}>
            <TouchableOpacity
              style={styles.boxStyle}
              onPress={() => {
                this.toggleCheckBox();
                this.props.setModalVisible1();
              }}>
              <Icon
                name="check"
                size={15}
                color={this.state.blueBg ? LIGHT_BlUE : WHITE}
              />
            </TouchableOpacity>
          </View>
          <View style={styles.checkViewStyle}>
            <View>
              <Text
                style={{
                  fontSize: SMALL,
                  color: LIGHT_BlUE,
                  fontWeight: 'bold',
                }}>
                I accept the term of use
              </Text>
            </View>
          </View>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  crossButtonStyle: {
    height: 50,
    justifyContent: 'flex-end',
    alignItems: 'flex-start',
  },
  whenTextStyle: {
    paddingLeft: 17,
    fontSize: EXTRA_LARGE,
    fontWeight: 'bold',
    color: LIGHT_BlUE,
  },
  mainCheckViewStyle: {
    height: 30,
    width: '90%',
    alignSelf: 'center',
    flexDirection: 'row',
  },
  checkViewStyle: {
    flex: 9,
    justifyContent: 'center',
    alignItems: 'flex-start',
  },
  boxStyle: {
    height: 18,
    width: 18,
    borderColor: LIGHT_BlUE,
    borderWidth: 2,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
