import React, {Component, useState, useEffect, useRef} from 'react';
import {
  SafeAreaView,
  View,
  FlatList,
  StyleSheet,
  Text,
  StatusBar,
  ImageBackground,
  ScrollView,
  TouchableOpacity,
  ActivityIndicator,
  TextInput,
  Dimensions,
  Image,
  Modal,
} from 'react-native';
import ButtonLogin from '../common/Button/ButtonLogin';
import TextInputForget from '../common/TextInputForget/TextInputForget';
import {DetailProductEndedStyles} from './styles';

export default class DetailProductEnded extends Component {
  code = 0;
  state = {
    code: 0,
    showmodal: false,
  };

  render() {
    return (
      <View style={DetailProductEndedStyles.mid}>
        <ScrollView showsVerticalScrollIndicator={false}>
          <Text>abc</Text>
        </ScrollView>
        </View>
    );
  }
}
