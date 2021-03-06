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
              title="Th??ng tin ng?????i d??ng"
              isLine={true}
              screen={USER_PROFILE}
            />
          )}
          {!this.state.isAuthen && (
            <OptionMenu
              icon={imgUserProfile}
              title="????ng nh???p"
              isLine={true}
              screen={AUTH_NAVIGATOR}
            />
          )}
          {this.state.isAuthen && (
            <OptionMenu
              icon={imgMyBidding}
              title="?????u gi?? c???a t??i"
              isLine={true}
              screen={MY_BIDDING}
            />
          )}
          {this.state.isAuthen && (
            <OptionMenu
              icon={iconChangePass}
              title="?????i m???t kh???u"
              isLine={true}
              screen={CHANGEPASSWORDSCREEN}
            />
          )}
          {this.state.isAuthen && (
            <OptionMenu
              icon={imgNotification}
              title="Th??ng b??o"
              isLine={true}
              screen={NOTIFICATION}
            />
          )}
          <OptionMenu
            icon={imgContactToSell}
            title="Li??n h??? b??n t??i s???n"
            isLine={true}
            screen={CONTACT_SELL}
          />
          <OptionMenu
            icon={imgTerm}
            title="??i???u kho???n"
            isLine={true}
            screen={TERM}
          />
          <OptionMenu
            icon={imgPrivacy}
            title="Ch??nh s??ch b???o m???t"
            isLine={true}
            screen={PRIVACY}
          />
          <OptionMenu
            icon={imgHelper}
            title="H?????ng d???n ng?????i d??ng"
            isLine={true}
            screen={HELPERSCREEN}
          />
          <OptionMenu
            icon={imgContactUsl}
            title="V??? ch??ng t??i"
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
        ToastAndroid.show('????ng xu???t th??nh c??ng.', 1);
        RootNavigation.navigate(AUTH_NAVIGATOR);
      }}>
      <View style={[styleSideMenu.viewOption, styleSideMenu.logoutView]}>
        <Text style={[styleSideMenu.textlogOut, styleSideMenu.textMenu]}>
          ????ng xu???t
        </Text>
        <Image source={imgLogout} />
      </View>
    </TouchableOpacity>
  );
};
