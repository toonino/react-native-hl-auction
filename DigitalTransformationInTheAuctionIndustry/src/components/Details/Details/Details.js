import React, {Component} from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import { DetailProductStyles } from '../styles';

export class Details extends Component {
  render() {
    return (
     <View style={DetailProductStyles.viewTextLine}>
      <Text style={DetailProductStyles.textLeft}>
        {this.props.title}{' '}
      </Text>
      <Text style={DetailProductStyles.textRight}> {this.props.code}</Text>
    </View>
    );
  }
}

