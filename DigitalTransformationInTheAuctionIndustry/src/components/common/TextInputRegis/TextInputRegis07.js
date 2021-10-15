import React, {Component} from 'react';
import {TextInputStyle} from './styles';
import {View, Text, TextInput} from 'react-native';

export default class TextInputRegis07 extends Component {
  render() {
    return (
      <View style={TextInputStyle.container06}>
        <TextInput
          style={[TextInputStyle.textinputName]}
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
