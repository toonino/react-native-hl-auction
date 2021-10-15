import React, {Component} from 'react';
import {Image, Text, View, TouchableOpacity} from 'react-native';
import ButtonLogin from '../common/Button/ButtonLogin';
import {FindPassStyle} from './styles';
import {styles} from '../../shared/styles';
import {CompletePassStyle} from './CompletePassStyle';
import { LOGIN } from '../../navigation/routeNames';

export default class CompletePass extends Component {
  render() {
    return (
      <View style={styles.container}>
        <View style={[FindPassStyle.mid, styles.width80]}>
        <Text style={CompletePassStyle.textTitle1}>Mật khẩu của bạn đã </Text>
        <Text style={CompletePassStyle.textTitle2}>
          được thay đổi thành công
        </Text>
        <Text style={CompletePassStyle.textMess}>Vui lòng đăng nhập lại </Text>
        <ButtonLogin name="Đăng nhập lại" login={() => {
          this.props.navigation.navigate(LOGIN);
        }}></ButtonLogin>
      </View>
      </View>
      
    );
  }
}
