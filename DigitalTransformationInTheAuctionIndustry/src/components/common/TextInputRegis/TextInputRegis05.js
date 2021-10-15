import React, {Component} from 'react';
import {TextInputStyle} from './styles';
import {View, Text, TextInput} from 'react-native';

export default class TextInputRegis05 extends Component {
  render() {
    return (
      <View style={TextInputStyle.container05}>
        <TextInput
          style={[TextInputStyle.textinputName]}
          placeholder={this.props.hidetext}
          onChangeText={text => {
            this.props.setText(text);
          }}
        />
      </View>
    );
  }
}
