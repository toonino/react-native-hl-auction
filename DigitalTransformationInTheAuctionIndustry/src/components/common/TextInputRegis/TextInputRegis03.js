import React, {Component} from 'react';
import {TextInputStyle} from './styles';
import {View, Text, TextInput} from 'react-native';

export default class TextInputRegis03 extends Component {
  render() {
    return (
      <View
        style={{
          width: '42%',
          marginRight: '3%',
        }}>
        <TextInput
          style={{
            width: '100%',
            borderColor: '#e0e0d1',
            borderWidth: 1,
            borderRadius: 7,
          }}
          placeholder={this.props.hidetext}
          onChangeText={text => {
            this.props.setText(text);
          }}
          defaultValue={this.props.default}
        />
      </View>
    );
  }
}
