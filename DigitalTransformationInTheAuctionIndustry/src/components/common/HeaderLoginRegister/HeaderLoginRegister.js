import React, {Component} from 'react';
import {Image, View, Text} from 'react-native';
import {styleHeaderLoginRegister} from '../HeaderLoginRegister/styles';

export default class HeaderLoginRegister extends Component {
  render() {
    return (
      <View style={styleHeaderLoginRegister.container}>
        <View style={{width: 96, height: 94}}>
          <Image
            style={{width: '100%', height: '100%'}}
            source={require('../../../assets/images/logoLacViet1.png')}
          />
        </View>
        <Text style={styleHeaderLoginRegister.text}>{this.props.name}</Text>
      </View>
    );
  }
}
