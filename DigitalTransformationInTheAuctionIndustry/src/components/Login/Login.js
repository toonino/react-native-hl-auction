import React, {Component} from 'react';
import {BaseApiService} from '../../environtments/base-api.service';
import {LoginService} from '../../services/login';
import {PersonList} from '../../services/testService';
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  Alert,
  ToastAndroid,
} from 'react-native';
import {loginStyle} from './styles';
import TextInputLogin from '../Login/TextInput/TextInputLogin';
import ButtonLogin from '../common/Button/ButtonLogin';
import {styles} from '../../shared/styles';
import {FORGET_PASS} from '../../navigation/routeNames';
import Header from '../common/Header';
import * as RootNavigation from '../../navigation/rootNavigator';
import { styleHeaderLogo } from '../common/HeaderLogo/styles';
import { HOME } from '../../navigation/routeNames';
import { REGISTER } from '../../navigation/routeNames';
const loginServiece = new LoginService();

const b = new PersonList(new BaseApiService());

export default class Login extends Component {
  constructor(props) {
    super(props);
    this.textInputRef = React.createRef();
    this.state = {
      username: '',
      password: '',
      isValid: false,
    };
  }

  render() {
    return (
      <View style={styles.container}>
        <Header title="Đăng nhập" />
        <TouchableOpacity
          onPress={() => {
            RootNavigation.navigate(HOME)
          }}
          style={{
            height: 95,
            backgroundColor: 'white',
            width: '90%',
            alignSelf: 'center',
          }}>
          <View style={styleHeaderLogo.logo}>
            <Image
              source={require('../../assets/images/logoLacViet.png')}
              style={styleHeaderLogo.img}
            />
          </View>
        </TouchableOpacity>
        <View style={[loginStyle.bottom, {marginTop: -100}]}>
          <View style={styles.containerBottomLoginRegister}>
            <View style={{marginTop: 27}}>
              <TextInputLogin
                name="Tên đăng nhập"
                isPass={false}
                setText={text => {
                  this.setState({username: text}, () => {
                    this.setState({
                      username: this.state.username.trim().toLocaleLowerCase(),
                    });
                  });
                }}
              />
            </View>

            <TextInputLogin
              name="Mật khẩu"
              isPass={true}
              refTextInput={this.textInputRef}
              setText={text => {
                this.setState({password: text});
              }}
            />
            <TouchableOpacity
              onPress={() => {
                this.props.navigation.navigate(FORGET_PASS);
              }}>
              <Text Text style={loginStyle.forgetPass}>
                Quên mật khẩu?
              </Text>
            </TouchableOpacity>
            <ButtonLogin
              name="Đăng nhập"
              login={() => {
                if (
                  this.state.username.trim() == '' &&
                  this.state.password.trim() == ''
                ) {
                  Alert.alert(
                    'ERROR',
                    'Tên đăng nhập và mật khẩu không được để trống',
                  );
                } else if (this.state.username.trim() == '') {
                  Alert.alert('ERROR', 'Tên đăng nhập không được để trống');
                } else if (this.state.password.trim() == '') {
                  Alert.alert('ERROR', 'Mật khẩu không được để trống');
                } else {
                  this.textInputRef.current.clear();
                  loginServiece
                    .login({
                      username: this.state.username,
                      type: 0,
                      password: this.state.password,
                    })
                    .then(res => {
                      this.setState({isValid: loginServiece.valid});
                      if (loginServiece.valid) {
                        ToastAndroid.show('Đăng nhập thành công.', 1);
                        this.textInputRef.current.clear();
                        this.setState({username: '', password: ''});
                        RootNavigation.goBack();
                        return;
                      } else {
                        ToastAndroid.show(
                          'Sai tài khoản hoặc mật khẩu.',
                          ToastAndroid.LONG,
                        );
                      }
                    });
                }
              }}
            />
            <View style={loginStyle.regisContainer}>
              <Text Text style={loginStyle.font15}>
                Chưa có tài khoản?
              </Text>
              <TouchableOpacity
                onPress={() => {
                  this.props.navigation.navigate(REGISTER);
                }}>
                <Text Text style={[loginStyle.regisTex, loginStyle.font15]}>
                  {' '}
                  Đăng ký
                </Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </View>
    );
  }
}
