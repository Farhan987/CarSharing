import React, {Component} from 'react';
import {ImageBackground} from 'react-native';
class QRComponent extends Component {
  componentDidMount() {
    setTimeout(() => {
      this.props.setModalVisible();
      this.props.setModalVisible1();
    }, 1000);
  }
  state = {};
  render() {
    return (
      <ImageBackground
        source={require('../../Logo/scanImage.png')}
        resizeMode={'stretch'}
        style={{flex: 1}}
      />
    );
  }
}

export default QRComponent;
