import React, {Component} from 'react';
import {TextInputStyle} from './styles';
import {View, Text, TextInput} from 'react-native';

export default class TextInputRegis02 extends Component {
  render() {
    return (
      <View
        style={{
          fontSize: 13,
          fontWeight: 'bold',
          width: '26%',
          justifyContent: 'center',
          marginRight: '3%',
        }}>
        <TextInput
          style={{
            width: '100%',
            borderColor: '#e0e0d1',
            borderWidth: 1,
            borderRadius: 7,
          }}
          defaultValue= {this.props.default}
          placeholder={this.props.hidetext}
          onChangeText={text => {
            this.props.setText(text);
          }}
        />
      </View>
    );
  }
}
