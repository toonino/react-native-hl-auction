import React, {Component} from 'react';
import {
  Alert,
  Image,
  Text,
  TouchableOpacity,
  View,
  ActivityIndicator,
} from 'react-native';
import ButtonLogin from '../common/Button/ButtonLogin';
import {FindPassStyle} from './styles';
import {styles} from '../../shared/styles';
import TextInputForget from '../common/TextInputForget/TextInputForget';
import {CODE_CF} from '../../navigation/routeNames';
import forgetPassword from '../../services/forgetPassword';
import Header from '../common/Header';
import {styleHeader} from '../common/Header/stylesHeader';
import * as RootNavigation from '../../navigation/rootNavigator';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {faChevronLeft} from '@fortawesome/free-solid-svg-icons';
export default class FindPass extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      isLoading: false,
      isClick: false,
    };
  }
  componentWillUnmount() {
    this.setState = (state, callback) => {
      return;
    };
  }
  render() {
    return (
      <View style={styles.container}>
        <View style={styleHeader.container2}>
          <View style={styleHeader.body}>
            <TouchableOpacity
              style={{flexDirection: 'row'}}
              onPress={() => {
                if (!this.state.isLoading) {
                  if (!this.state.isClick) {
                    this.setState({isClick: true});
                    this.props.navigation.goBack();
                  }
                }
              }}>
              <FontAwesomeIcon
                style={{color: '#000000', marginLeft: -10}}
                icon={faChevronLeft}
                size={22}
              />
            </TouchableOpacity>
            <View style={{flex: 1, alignItems: 'center'}}>
              <Text style={styleHeader.text}>QUÊN MẬT KHẨU</Text>
            </View>
          </View>
        </View>
        {this.state.isLoading ? (
          <ActivityIndicator
            size="large"
            color="black"
            style={{marginTop: 50}}
          />
        ) : (
          <View style={[FindPassStyle.mid, styles.with80]}>
            <Text style={FindPassStyle.textMess}>
              Vui lòng nhập email của bạn để tìm lại mật khẩu
            </Text>
            <TextInputForget
              default={this.state.email}
              hidetext="Email"
              setText={text => {
                this.setState({email: text}, () => {
                  this.setState({
                    email: this.state.email.toLocaleLowerCase(),
                  });
                });
              }}
            />
            <ButtonLogin
              name="Tiếp tục"
              login={() => {
                if (this.state.email == '') {
                  return Alert.alert('Email không được để rỗng');
                } else if (
                  !this.state.email
                    .trim()
                    .match(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/)
                ) {
                  return Alert.alert('Email không hợp lệ');
                } else {
                  this.setState({isLoading: true});
                  let reg = new forgetPassword();
                  reg
                    .forgetPassword({email: this.state.email})
                    .then(res => {
                      if (res.data.success) {
                        this.props.navigation.navigate(CODE_CF, {
                          email: this.state.email,
                        });
                      } else {
                        Alert.alert('Email không tồn tại');
                      }
                    })
                    .catch(error => {
                      Alert.alert('Đã có lỗi xảy ra');
                    })
                    .finally(() => {
                      this.setState({isLoading: false});
                    });
                }
              }}
            />
          </View>
        )}
      </View>
    );
  }
}
