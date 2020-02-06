import React, {Component} from 'react';
import {
  StyleSheet,
  View,
  TouchableOpacity,
  Text,
  Image,
  Modal,
  Alert,
} from 'react-native';
import {WHITE, LIGHT_BlUE} from '../theme/colors';
import Icon from 'react-native-vector-icons/FontAwesome';
import {EXTRA_LARGE, SMALL, LARGE} from '../theme/font';
import CustomHeader from '../components/customHeader';
import CustomField from '../components/customField';
import CustomButton from '../components/customButton';
import CheckOutRealizedModal from '../components/modalComponents/checkOutRealizedComponent';
class CheckoutScreen extends Component {
  state = {modalVisible: false};

  setModalVisible() {
    this.setState({modalVisible: !this.state.modalVisible});
  }
  render() {
    return (
      <View style={styles.container}>
        <CustomHeader
          onPressMenu={() => this.props.navigation.toggleDrawer()}
          onPressAlert={() => this.props.navigation.navigate('AlertScreen')}
          onPressProfile={() =>
            this.props.navigation.navigate('EditProfileScreen')
          }
        />
        {/* PageTitle */}
        <View style={{flex: 2}}>
          <View style={styles.outterViewStyle}>
            <View style={styles.flexInnerStyle}>
              <TouchableOpacity onPress={() => this.props.navigation.goBack()}>
                <Icon name="long-arrow-left" size={20} color={LIGHT_BlUE} />
              </TouchableOpacity>
            </View>
            <View
              style={[styles.flexInnerStyle, {alignItems: 'center', flex: 5}]}>
              <Text style={styles.pageTitleTextStyle}>Check out</Text>
            </View>
            <View style={{flex: 1}} />
          </View>

          <View style={styles.secondSubFlexStyle}>
            <Text style={{color: LIGHT_BlUE, fontSize: SMALL}}>
              Vehicle Photos
            </Text>
          </View>

          {/* imagePickers */}
          <View
            style={{
              flex: 2,
              width: '90%',
              alignSelf: 'center',
              flexDirection: 'row',
            }}>
            <View style={styles.flexeStyle}>
              <TouchableOpacity style={styles.touchableStyle}>
                <Image
                  style={{height: '100%', width: '100%', borderRadius: 3}}
                />
              </TouchableOpacity>
            </View>
            <View style={[styles.flexeStyle, {alignItems: 'center'}]}>
              <TouchableOpacity style={styles.touchableStyle}>
                <Image style={{height: 45, width: 45, borderRadius: 3}} />
              </TouchableOpacity>
            </View>
            <View style={[styles.flexeStyle, {alignItems: 'flex-end'}]}>
              <TouchableOpacity style={styles.touchableStyle}>
                <Image style={{height: 45, width: 45, borderRadius: 3}} />
              </TouchableOpacity>
            </View>
          </View>
          <View style={{height: 10}} />
          <View
            style={{
              height: 50,
              width: '90%',
              alignSelf: 'center',
              flexDirection: 'row',
            }}>
            <View style={styles.flexeStyle}>
              <TouchableOpacity style={styles.touchableStyle}>
                <Image style={{height: 45, width: 45, borderRadius: 3}} />
              </TouchableOpacity>
            </View>
            <View style={[styles.flexeStyle, {alignItems: 'center'}]}>
              <TouchableOpacity style={styles.touchableStyle}>
                <Image style={{height: 45, width: 45, borderRadius: 3}} />
              </TouchableOpacity>
            </View>
            <View style={{flex: 1}} />
          </View>

          <View style={styles.secondSubFlexStyle}>
            <Text style={{color: LIGHT_BlUE, fontSize: SMALL}}>
              Odometer Value
            </Text>
          </View>
          <View style={styles.thirdSubFlexStyle}>
            <CustomField placeholder={'Odometer'} />
          </View>
        </View>
        <View
          style={{
            flex: 1,
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <CustomButton
            onPress={() => this.setModalVisible(true)}
            buttonWidth={'60%'}
            buttonText={'Next'}
            btnBackgroundColor={LIGHT_BlUE}
            btnTextColor={WHITE}
          />

          <Modal
            animationType="slide"
            transparent={false}
            presentationStyle="fullScreen"
            visible={this.state.modalVisible}
            onRequestClose={() => {
              Alert.alert('Modal has been closed.');
            }}>
            <CheckOutRealizedModal
              setModalVisible={() => this.setModalVisible()}
              navigation={this.props.navigation}
            />
          </Modal>
        </View>
      </View>
    );
  }
}

export default CheckoutScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',
    height: '100%',
  },
  firstFlexStyle: {
    flex: 2,
  },
  flexInnerStyle: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'flex-start',
  },
  pageTitleTextStyle: {
    fontSize: EXTRA_LARGE,
    color: LIGHT_BlUE,
    fontWeight: 'bold',
  },
  outterViewStyle: {
    flex: 1,
    width: '90%',
    alignSelf: 'center',
    flexDirection: 'row',
  },
  touchableStyle: {
    height: 60,
    width: 60,
    backgroundColor: '#C4C4C4',
    borderRadius: 3,
    justifyContent: 'center',
    alignItems: 'center',
  },
  flexeStyle: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'flex-start',
  },
  secondSubFlexStyle: {
    flex: 1,
    width: '90%',
    alignSelf: 'center',
    justifyContent: 'center',
    alignItems: 'flex-start',
  },
  thirdSubFlexStyle: {
    flex: 2,
    // height: 60,
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
});
