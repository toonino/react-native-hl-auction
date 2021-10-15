import React, {Component} from 'react';
import {View, Text, Image} from 'react-native';
import {DetailProductStyles} from '../styles';

export class AnotherProduct extends Component {
  render() {
    return (
      <View style={DetailProductStyles.viewShadowItem}>
        <Image
          source={require('../../../assets/images/productSame.png')}
          style={DetailProductStyles.imageItem}
        />
        <Text style={DetailProductStyles.textItem1}>Bánh 1</Text>
        <Text style={DetailProductStyles.textItem2}>Giá khởi điểm:</Text>
        <Text style={DetailProductStyles.textItem3}>500 USD</Text>
      </View>
    );
  }
}
