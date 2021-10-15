import React, {Component} from 'react';
import {styleSideMenu} from './styleSideMenu';
import {View, Text, TouchableOpacity, Image, ToastAndroid} from 'react-native';
import imgContactToSell from '../../assets/images/iconDrawer/ContactToSell.png';
import imgContactUsl from '../../assets/images/iconDrawer/ContactUs.png';
import imgHelper from '../../assets/images/iconDrawer/Helper.png';
import imgLogout from '../../assets/images/iconDrawer/Logout.png';
import imgMyBidding from '../../assets/images/iconDrawer/MyBidding.png';
import imgMyDocument from '../../assets/images/iconDrawer/MyDocument.png';
import imgNotification from '../../assets/images/iconDrawer/Notification.png';
import imgPayment from '../../assets/images/iconDrawer/Payment.png';
import imgPrivacy from '../../assets/images/iconDrawer/Privacy.png';
import imgTerm from '../../assets/images/iconDrawer/Term.png';
import imgUserProfile from '../../assets/images/iconDrawer/UserProfile.png';
import iconChangePass from '../../assets/images/iconChangePass.png';
import HomeComponent from '../../components/Home/HomeComponent';
import * as RootNavigation from '../rootNavigator';
import AsyncStorage from '@react-native-community/async-storage';
import {
  MY_BIDDING,
  NOTIFICATION,
  USER_PROFILE,
  CONTACT_SELL,
  TERM,
  PRIVACY,
  ABOUT_US,
  AUTH_NAVIGATOR,
  CHANGEPASSWORDSCREEN,
  HELPERSCREEN,
} from './../routeNames';
export default class SideMenu extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isAuthen: false,
    };
  }
  componentDidUpdate(prevProps, prevState) {
    AsyncStorage.getItem('jwttoken').then(item => {
      if (item != null) {
        if (!prevState.isAuthen) this.setState({isAuthen: true});
      } else {
        if (prevState.isAuthen) this.setState({isAuthen: false});
      }
    });
  }

  render() {
    return (
      <View style={styleSideMenu.container}>
        <View style={styleSideMenu.containerOption}>
          {this.state.isAuthen && (
            <OptionMenu
              icon={imgUserProfile}
              title="Thông tin người dùng"
              isLine={true}
              screen={USER_PROFILE}
            />
          )}
          {!this.state.isAuthen && (
            <OptionMenu
              icon={imgUserProfile}
              title="Đăng nhập"
              isLine={true}
              screen={AUTH_NAVIGATOR}
            />
          )}
          {this.state.isAuthen && (
            <OptionMenu
              icon={imgMyBidding}
              title="Đấu giá của tôi"
              isLine={true}
              screen={MY_BIDDING}
            />
          )}
          {this.state.isAuthen && (
            <OptionMenu
              icon={iconChangePass}
              title="Đổi mật khẩu"
              isLine={true}
              screen={CHANGEPASSWORDSCREEN}
            />
          )}
          {this.state.isAuthen && (
            <OptionMenu
              icon={imgNotification}
              title="Thông báo"
              isLine={true}
              screen={NOTIFICATION}
            />
          )}
          <OptionMenu
            icon={imgContactToSell}
            title="Liên hệ bán tài sản"
            isLine={true}
            screen={CONTACT_SELL}
          />
          <OptionMenu
            icon={imgTerm}
            title="Điều khoản"
            isLine={true}
            screen={TERM}
          />
          <OptionMenu
            icon={imgPrivacy}
            title="Chính sách bảo mật"
            isLine={true}
            screen={PRIVACY}
          />
          <OptionMenu
            icon={imgHelper}
            title="Hướng dẫn người dùng"
            isLine={true}
            screen={HELPERSCREEN}
          />
          <OptionMenu
            icon={imgContactUsl}
            title="Về chúng tôi"
            isLine={true}
            screen={ABOUT_US}
          />
        </View>
        {this.state.isAuthen && Logout(this.props)}
      </View>
    );
  }
}

class OptionMenu extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <View>
        <TouchableOpacity
          style={styleSideMenu.viewOption}
          onPress={() => {
            RootNavigation.navigate(this.props.screen);
          }}>
          <View style={styleSideMenu.viewImage}>
            <Image source={this.props.icon}></Image>
          </View>

          <Text style={styleSideMenu.textMenu}>{this.props.title}</Text>
        </TouchableOpacity>
        {this.props.isLine ? <View style={styleSideMenu.line}></View> : ''}
      </View>
    );
  }
}

const Logout = props => {
  return (
    <TouchableOpacity
      onPress={() => {
        AsyncStorage.removeItem('jwttoken');
        props.navigation.closeDrawer();
        ToastAndroid.show('Đăng xuất thành công.', 1);
        RootNavigation.navigate(AUTH_NAVIGATOR);
      }}>
      <View style={[styleSideMenu.viewOption, styleSideMenu.logoutView]}>
        <Text style={[styleSideMenu.textlogOut, styleSideMenu.textMenu]}>
          Đăng xuất
        </Text>
        <Image source={imgLogout} />
      </View>
    </TouchableOpacity>
  );
};
