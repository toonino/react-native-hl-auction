import React, {Component} from 'react';
import {
  Image,
  Text,
  ActivityIndicator,
  View,
  TouchableOpacity,
  Alert,
} from 'react-native';
import ButtonLogin from '../common/Button/ButtonLogin';
import TextInputPass from '../common/TextInputPassword/TextInputPass';
import {FindPassStyle} from './styles';
import {styles} from '../../shared/styles';
import {COMPLETE_PASS} from '../../navigation/routeNames';
import changePasswordWithCaptcha from '../../services/changePasswordWithCaptcha';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {faChevronLeft} from '@fortawesome/free-solid-svg-icons';
import { styleHeader } from '../common/Header/stylesHeader';
export default class SetPass extends Component {
  constructor(props) {
    super(props);
    this.state = {
      newpass: '',
      cfnewpass: '',
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
    const {captcha} = this.props.route.params;
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
              <Text style={styleHeader.text}>ĐẶT LẠI MẬT KHẨU</Text>
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
              Vui lòng hoàn tất thông tin cá nhân để thiết lập lại mật khẩu
            </Text>
            <TextInputPass
              name="Mật khẩu"
              hidetext="**********************"
              setText={text => {
                this.setState({newpass: text});
              }}
            />
            <TextInputPass
              name="Nhập lại mật khẩu"
              hidetext="**********************"
              setText={text => {
                this.setState({cfnewpass: text});
              }}
            />
            <ButtonLogin
              name="Tiếp tục"
              login={() => {
                if (this.state.newpass == '') {
                  return Alert.alert('Mật khẩu không được để trống');
                } else if (this.state.cfnewpass == '') {
                  return Alert.alert('Nhập lại mật khẩu không được để trống');
                } else if (
                  !this.state.newpass
                    .trim()
                    .match(
                      '^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*])(?=.{8,})',
                    )
                ) {
                  return Alert.alert(
                    'Mật khẩu không hợp lệ',
                    `- Có thể chứa kí tự bất kì ngoại trừ dấu cách\n- Độ dài ít nhất 8 kí tự\n- Phải có cả chữ thường, chữ hoa, chữ số và kí tự đặc biệt`,
                  );
                } else if (
                  this.state.newpass.trim() != this.state.cfnewpass.trim()
                ) {
                  return Alert.alert('Mật khẩu không giống nhau');
                } else {
                  this.setState({isLoading: true});
                  let reg = new changePasswordWithCaptcha();
                  reg
                    .changePasswordWithCaptcha({
                      captcha: captcha,
                      newPassword: this.state.newpass,
                    })
                    .then(res => {
                      if (res.data.success) {
                        this.props.navigation.navigate(COMPLETE_PASS);
                      } else {
                        Alert.alert('Đổi mật khẩu thất bại');
                      }
                    })
                    .catch(error => {
                      ToastAndroid.show('Lỗi hệ thống', 1);
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
