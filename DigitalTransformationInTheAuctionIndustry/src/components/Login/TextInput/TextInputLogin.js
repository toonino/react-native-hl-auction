import React, { Component } from "react";
import { TextInputStyle } from "./styles";
import { View, Text, TextInput } from "react-native";

export default class TextInputLogin extends Component {

  render() {
    return (
      <View style={TextInputStyle.container}>
        <Text style={TextInputStyle.textname}>{this.props.name}</Text>
        <TextInput style={TextInputStyle.textinput} secureTextEntry={this.props.isPass}
                   ref={this.props.refTextInput}
                   onChangeText={(text) => {
                     this.props.setText(text);
                   }} />
      </View>
    );
  }
}
