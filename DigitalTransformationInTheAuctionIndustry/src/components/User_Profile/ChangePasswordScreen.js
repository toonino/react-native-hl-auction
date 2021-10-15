import React, {Component} from 'react';
import {
  Image,
  Text,
  View,
  TouchableOpacity,
  Alert,
  ToastAndroid,
  ActivityIndicator,
} from 'react-native';
import ButtonLogin from '../common/Button/ButtonLogin';
import TextInputPass from '../common/TextInputPassword/TextInputPass';
import {FindPassStyle} from '../ForgetPass/styles';
import {styles} from '../../shared/styles';
import {HOME} from '../../navigation/routeNames';
import changePassword from '../../services/changePassword';
import Header from '../common/Header';
export default class SetPass extends Component {
  constructor(props) {
    super(props);
    this.state = {
      oldpass: '',
      newpass: '',
      cfnewpass: '',
      isLoading: false,
      isBack: false,
    };
  }
  componentDidMount() {
    this.focusListener = this.props.navigation.addListener('focus', () => {
      this.setState({
        isBack: false,
      });
    });
  }
  componentWillUnmount() {
    this.focusListener();
    this.setState = (state, callback) => {
      return;
    };
  }
  render() {
    return (
      <View style={styles.container}>
        <Header title="ĐỔI MẬT KHẨU" />
        {this.state.isLoading ? (
          <ActivityIndicator size="large" color="black" />
        ) : (
          <View style={[FindPassStyle.mid, styles.with80, {paddingTop: 70}]}>
            <TextInputPass
              name="Mật khẩu cũ"
              hidetext="**********************"
              setText={text => {
                this.setState({oldpass: text});
              }}
            />
            <TextInputPass
              name="Mật khẩu mới"
              hidetext="**********************"
              setText={text => {
                this.setState({newpass: text});
              }}
            />
            <TextInputPass
              name="Nhập lại mật khẩu mới"
              hidetext="**********************"
              setText={text => {
                this.setState({cfnewpass: text});
              }}
            />
            <ButtonLogin
              name="Đổi mật khẩu"
              login={() => {
                if (this.state.oldpass.trim() == '') {
                  return Alert.alert('Hãy nhập mật khẩu cũ');
                } else if (this.state.newpass.trim() == '') {
                  return Alert.alert('Hãy nhập mật khẩu mới');
                } else if (this.state.cfnewpass.trim() == '') {
                  return Alert.alert('Hãy xác nhận mật khẩu mới');
                } else if (
                  !this.state.newpass
                    .trim()
                    .match(
                      '^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*])(?=.{8,})',
                    )
                ) {
                  return Alert.alert(
                    'Password không hợp lệ',
                    `- Có thể chứa kí tự bất kì ngoại trừ dấu cách\n- Độ dài ít nhất 8 kí tự\n- Phải có cả chữ thường, chữ hoa, chữ số và kí tự đặc biệt`,
                  );
                } else if (
                  this.state.newpass.trim() != this.state.cfnewpass.trim()
                ) {
                  return Alert.alert('Password không giống nhau');
                } else if (
                  this.state.newpass.trim() == this.state.oldpass.trim()
                ) {
                  return Alert.alert(
                    'Password mới không được giống mật khẩu cũ',
                  );
                } else {
                  this.setState({isLoading: true});
                  let reg = new changePassword();
                  reg
                    .changePassword({
                      newPassword: this.state.newpass.trim(),
                      oldPassword: this.state.oldpass.trim(),
                    })
                    .then(res => {
                      if (res.data.success) {
                        ToastAndroid.show('Đổi mật khẩu thành công.', 1);

                        this.props.navigation.navigate(HOME);
                      } else if (
                        res.data.errors[0].errorCode == 'CMM.COMMON02'
                      ) {
                        Alert.alert('Mật khẩu cũ không đúng');
                      } else if (
                        res.data.errors[0].errorCode == 'ERR.REGISTER05'
                      ) {
                        Alert.alert('Mật khẩu cũ định dạng không đúng');
                      } else {
                        Alert.alert('Đổi mật khẩu thất bại');
                      }
                    })
                    .catch(error => {
                      ToastAndroid.show('Lỗi hệ thống', 1000);
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
