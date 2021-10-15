import React, {Component} from 'react';
import {TextInputStyle} from './styles';
import {View, Text, TextInput} from 'react-native';

export default class TextInputRegis06 extends Component {
  render() {
    return (
      <View style={TextInputStyle.container06}>
        <TextInput
          defaultValue={this.props.default}
          multiline={false}
          numberOfLines={1}
          style={[TextInputStyle.textinputPlace, {textAlignVertical: 'top'}]}
          placeholder={this.props.hidetext}
          onChangeText={text => {
            this.props.setText(text);
          }}
        />
      </View>
    );
  }
}
