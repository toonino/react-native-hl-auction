import React, {Component} from 'react';
import {stylesUserDetail} from '../stylesUserDetail';
import verify from '../../../assets/images/verify.png';
import {View, Text, Image, ScrollView} from 'react-native';
import getUserInfo from '../../../services/getUserInfo';
export default class UserDetailGeneral extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      email: '',
      gender: '',
      province: '',
      district: '',
      commune: '',
      street: '',
      phone: '',
      dateOfBirth: '',
    };
  }
  render() {
    function formatDate(date) {
      date = String(date).split(' ');
      var days = String(date[0]).split('-');
      return [
        parseInt(days[2]) + '/',
        parseInt(days[1]) + '/',
        parseInt(days[0]),
      ];
    }
    return (
      <ScrollView style={stylesUserDetail.container}>
        <View style={stylesUserDetail.row_container}>
          <View style={stylesUserDetail.column_text}>
            <Text style={stylesUserDetail.text_general}>Tên đăng nhập</Text>
            <Text style={stylesUserDetail.text_user}>
              {this.props.data.username}
            </Text>
          </View>
          <View style={stylesUserDetail.column_text}>
            <Text style={stylesUserDetail.text_general}>Địa chỉ</Text>
            <Text style={stylesUserDetail.text_user}>{this.state.street}</Text>
          </View>
        </View>
        <View style={stylesUserDetail.row_container}>
          <View style={stylesUserDetail.column_text}>
            <Text style={stylesUserDetail.text_general}>Email</Text>
            <Text style={stylesUserDetail.text_user}>{this.state.email}</Text>
          </View>
          <View style={stylesUserDetail.column_text}>
            <Text style={stylesUserDetail.text_general}>Số điện thoại</Text>
            <Text style={stylesUserDetail.text_user}>{this.state.phone}</Text>
          </View>
        </View>
        <View style={stylesUserDetail.row_container}>
          <View style={stylesUserDetail.column_text}>
            <Text style={stylesUserDetail.text_general}>Giới tính</Text>
            <Text style={stylesUserDetail.text_user}>
              {this.state.gender ? 'Nam' : 'Nữ'}
            </Text>
          </View>
          <View style={stylesUserDetail.column_text}>
            <Text style={stylesUserDetail.text_general}>Ngày sinh</Text>
            <Text style={stylesUserDetail.text_user}>
              {formatDate(this.state.dateOfBirth)}
            </Text>
          </View>
        </View>
        <View style={stylesUserDetail.row_container}>
          <View style={stylesUserDetail.column_text}>
            <Text style={stylesUserDetail.text_general}>
              Trạng thái xác thực tài khoản
            </Text>
            <View
              style={[
                stylesUserDetail.button_verify,
                stylesUserDetail.color_verify,
              ]}>
              <Image source={verify} />
              <Text style={stylesUserDetail.text_verify}>Đã xác thực</Text>
            </View>
          </View>
        </View>
      </ScrollView>
    );
  }
}
