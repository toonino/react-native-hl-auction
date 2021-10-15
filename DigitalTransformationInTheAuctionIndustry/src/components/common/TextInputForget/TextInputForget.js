import React, {Component} from 'react';
import {TextInputStyle} from './styles';
import {View, Text, TextInput} from 'react-native';

export default class TextInputForget extends Component {
  render() {
    return (
      <View style={TextInputStyle.container}>
        <Text style={TextInputStyle.textname}>{this.props.name}</Text>
        <TextInput
          style={TextInputStyle.textinput}
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
