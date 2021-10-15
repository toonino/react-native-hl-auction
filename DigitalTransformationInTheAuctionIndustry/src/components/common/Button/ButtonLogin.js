import React, { Component } from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { ButtonLoginStyle } from "./styles";

export default class ButtonLogin extends Component {


  render() {
    const a = this;
    return (
      <TouchableOpacity onPress={() => {
        this.props.login();
      }}>
        <View style={ButtonLoginStyle.buttonLogin}>
          <Text style={[ButtonLoginStyle.textButton,
          ]}>{this.props.name}</Text>
        </View>
      </TouchableOpacity>
    );
  }



}
