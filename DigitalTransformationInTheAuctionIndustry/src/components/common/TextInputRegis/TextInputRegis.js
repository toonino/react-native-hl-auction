import React, { Component } from "react";
import { TextInputStyle } from "./styles";
import { View, Text, TextInput } from "react-native";

export default class TextInputRegis extends Component {
  render() {
    return (
      <View style={TextInputStyle.container}>
        {this.props.name != null ? (
          <Text style={TextInputStyle.textname}>{this.props.name}</Text>
        ) : (
          <View />
        )}
        <TextInput
          defaultValue={this.props.default}
          style={TextInputStyle.textinput}
          placeholder={this.props.hidetext}
          onChangeText={text => {
            this.props.setText(text);
          }}
        />
      </View>
    );
  }

}
