import React, {Component} from 'react';
import {TextInputStyle} from './styles';
import {View, Text, TextInput} from 'react-native';

export default class TextInputRegisOnlyNumber extends Component {
  render() {
    return (
      <View style={{marginBottom: 11, width: '100%', height: 40}}>
        <TextInput
          keyboardType={'numeric'}
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
