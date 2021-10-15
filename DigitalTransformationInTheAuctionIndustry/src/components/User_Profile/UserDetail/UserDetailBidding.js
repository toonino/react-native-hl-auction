import React, {Component} from 'react';
import {stylesUserDetail} from '../stylesUserDetail';
import verify from '../../../assets/images/verify.png';
import {View, Text, Image, ScrollView} from 'react-native';
import getUserInfo from '../../../services/getUserInfo';
export default class UserDetailBidding extends Component {
  constructor(props) {
    super(props);
    this.state = {
      number: '',
      bankName: '',
      branch: '',
      ownerName: '',
      fullName: '',
    };
  }
  render() {
    return (
      <ScrollView style={stylesUserDetail.container}>
        <View style={stylesUserDetail.row_container}>
          <View style={stylesUserDetail.column_text}>
            <Text style={stylesUserDetail.text_general}>Loại tài khoản</Text>
            <Text style={stylesUserDetail.text_user}>Người mua</Text>
          </View>
          <View style={stylesUserDetail.column_text}>
            <Text style={stylesUserDetail.text_general}>
              Chi nhánh ngân hàng
            </Text>
            <Text style={stylesUserDetail.text_user}>{this.state.branch}</Text>
          </View>
        </View>
        <View style={stylesUserDetail.row_container}>
          <View style={stylesUserDetail.column_text}>
            <Text style={stylesUserDetail.text_general}>
              Số tài khoản chính
            </Text>
            <Text style={stylesUserDetail.text_user}>{this.state.number}</Text>
          </View>
          <View style={stylesUserDetail.column_text}>
            <Text style={stylesUserDetail.text_general}>Tên chủ tài khoản</Text>
            <Text style={stylesUserDetail.text_user}>{this.state.fullName}</Text>
          </View>
        </View>
        <View style={stylesUserDetail.row_container}>
          <View style={stylesUserDetail.column_text}>
            <Text style={stylesUserDetail.text_general}>Tên ngân hàng</Text>
            <Text style={stylesUserDetail.text_user}>
              {this.state.bankName}
            </Text>
          </View>
        </View>
        <View style={stylesUserDetail.row_container}>
          <View style={stylesUserDetail.column_text}>
            <Text style={stylesUserDetail.text_general}>
              Phí đăng kí tài khoản
            </Text>
            <View
              style={[
                stylesUserDetail.button_verify,
                stylesUserDetail.color_noverify,
              ]}>
              <Image source={verify} />
              <Text style={stylesUserDetail.text_verify}>Chưa thanh toán</Text>
            </View>
          </View>
        </View>
      </ScrollView>
    );
  }
}
