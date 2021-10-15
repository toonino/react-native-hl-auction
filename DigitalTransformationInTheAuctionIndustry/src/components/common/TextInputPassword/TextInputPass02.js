import React, {Component} from 'react';
import {TextInputStyle} from './styles';
import {View, Text, TextInput} from 'react-native';

export default class TextInputPass02 extends Component {
  render() {
    return (
      <View style={TextInputStyle.container}>
        <TextInput
          defaultValue={this.props.default}
          secureTextEntry={true}
          style={TextInputStyle.textinput02}
          placeholder={this.props.hidetext}
          onChangeText={text => {
            this.props.setText(text);
          }}
        />
      </View>
    );
  }
}
