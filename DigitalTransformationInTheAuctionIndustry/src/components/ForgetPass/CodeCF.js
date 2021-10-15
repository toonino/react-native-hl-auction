import React, {Component, useState, useEffect} from 'react';
import {
  Image,
  Text,
  TouchableOpacity,
  View,
  TextInput,
  ToastAndroid,
  ActivityIndicator,
  Alert,
} from 'react-native';
import ButtonLogin from '../common/Button/ButtonLogin';
import BackgroundTimer from 'react-native-background-timer';
import {FindPassStyle} from './styles';
import {styles} from '../../shared/styles';
import {SET_PASS} from '../../navigation/routeNames';
import {RegisterStyle} from '../Register/styles';
import validateCaptChaForgetPassword from '../../services/validateCaptChaForgetPassword';
import forgetPassword from '../../services/forgetPassword';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {faChevronLeft} from '@fortawesome/free-solid-svg-icons';
import {styleHeader} from '../common/Header/stylesHeader';
export default class CodeCF extends Component {
  constructor(props) {
    super(props);
    this.state = {
      firstNumber: '',
      secondNumber: '',
      thirdNumber: '',
      fourNumber: '',
      fiveNumber: '',
      sixNumber: '',
      isLoading: false,
      timeOn: true,
      isClick: false,
    };
  }
  componentWillUnmount() {
    BackgroundTimer.stopBackgroundTimer();
  }

  render() {
    const {email} = this.props.route.params;
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
              <Text style={styleHeader.text}>XÁC NHẬN MÃ</Text>
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
            <View style={FindPassStyle.container_cf}>
              <Text
                style={[RegisterStyle.register4_textGeneral, {width: '100%'}]}>
                Hiện tại chúng tôi đã gửi mã xác minh đến email của bạn. Vui
                lòng kiểm tra email và xác nhận mã.
              </Text>
              <View style={RegisterStyle.register4_CaptchaContainer}>
                <TextInput
                  defaultValue={this.state.firstNumber}
                  style={RegisterStyle.register4_Captcha}
                  ref={input => {
                    this.firstTextInput = input;
                  }}
                  maxLength={1}
                  onChangeText={text => {
                    this.setState({firstNumber: text});
                    if (text != '') {
                      this.secondTextInput.focus();
                    }
                  }}></TextInput>
                <TextInput
                  defaultValue={this.state.secondNumber}
                  style={RegisterStyle.register4_Captcha}
                  ref={input => {
                    this.secondTextInput = input;
                  }}
                  maxLength={1}
                  onKeyPress={({nativeEvent}) => {
                    nativeEvent.key === 'Backspace'
                      ? this.firstTextInput.focus()
                      : '';
                  }}
                  onChangeText={text => {
                    this.setState({secondNumber: text});
                    if (text != '') {
                      this.thirdTextInput.focus();
                    }
                  }}></TextInput>
                <TextInput
                  defaultValue={this.state.thirdNumber}
                  style={RegisterStyle.register4_Captcha}
                  ref={input => {
                    this.thirdTextInput = input;
                  }}
                  maxLength={1}
                  onKeyPress={({nativeEvent}) => {
                    nativeEvent.key === 'Backspace'
                      ? this.secondTextInput.focus()
                      : '';
                  }}
                  onChangeText={text => {
                    this.setState({thirdNumber: text});
                    if (text != '') {
                      this.fourTextInput.focus();
                    }
                  }}></TextInput>
                <TextInput
                  defaultValue={this.state.fourNumber}
                  style={RegisterStyle.register4_Captcha}
                  ref={input => {
                    this.fourTextInput = input;
                  }}
                  maxLength={1}
                  onKeyPress={({nativeEvent}) => {
                    nativeEvent.key === 'Backspace'
                      ? this.thirdTextInput.focus()
                      : '';
                  }}
                  onChangeText={text => {
                    this.setState({fourNumber: text});
                    if (text != '') {
                      this.fiveTextInput.focus();
                    }
                  }}></TextInput>
                <TextInput
                  defaultValue={this.state.fiveNumber}
                  style={RegisterStyle.register4_Captcha}
                  ref={input => {
                    this.fiveTextInput = input;
                  }}
                  maxLength={1}
                  onKeyPress={({nativeEvent}) => {
                    nativeEvent.key === 'Backspace'
                      ? this.fourTextInput.focus()
                      : '';
                  }}
                  onChangeText={text => {
                    this.setState({fiveNumber: text});
                    if (text != '') {
                      this.sixTextInput.focus();
                    }
                  }}></TextInput>
                <TextInput
                  defaultValue={this.state.sixNumber}
                  style={RegisterStyle.register4_Captcha}
                  ref={input => {
                    this.sixTextInput = input;
                  }}
                  maxLength={1}
                  onKeyPress={({nativeEvent}) => {
                    nativeEvent.key === 'Backspace'
                      ? this.fiveTextInput.focus()
                      : '';
                  }}
                  onChangeText={text => {
                    this.setState({sixNumber: text});
                  }}></TextInput>
              </View>
              <View style={{marginTop: 15}}>
                <Text style={{textAlign: 'center'}}>
                  Mã xác minh chưa được gửi.{' '}
                </Text>
                <CountTime
                  timeLeft={60}
                  timeOn={this.state.timeOn}
                  stop={() => {
                    this.setState({timeOn: false});
                  }}
                />
                <TouchableOpacity
                  onPress={() => {
                    if (!this.state.timeOn) {
                      this.setState({timeOn: true});
                      let reg = new forgetPassword();
                      reg
                        .forgetPassword({email: email})
                        .then(res => {
                          if (res.data.success) {
                            ToastAndroid.show(
                              'Đã gửi lại mã',
                              ToastAndroid.LONG,
                            );
                          } else {
                            Alert.alert('Không gửi được mã');
                          }
                        })
                        .catch(error => {
                          ToastAndroid.show('Lỗi hệ thống', 1000);
                        });
                    } else {
                      Alert.alert('Hết 60s hãy gửi lại');
                    }
                  }}>
                  <Text
                    style={{
                      color: '#FB3F39',
                      fontWeight: 'bold',
                      textAlign: 'center',
                    }}>
                    Gửi lại?
                  </Text>
                </TouchableOpacity>
              </View>
            </View>
            <ButtonLogin
              name="Tiếp tục"
              login={() => {
                let reg = new validateCaptChaForgetPassword();
                let captcha =
                  '' +
                  this.state.firstNumber +
                  this.state.secondNumber +
                  this.state.thirdNumber +
                  this.state.fourNumber +
                  this.state.fiveNumber +
                  this.state.sixNumber;
                reg
                  .validateCaptChaForgetPassword({
                    captcha: captcha,
                    email: email,
                  })
                  .then(res => {
                    if (res.data.success) {
                      this.setState({isLoading: true});
                      this.props.navigation.navigate(SET_PASS, {
                        captcha: captcha,
                      });
                    } else {
                      this.setState({
                        firstNumber: '',
                        secondNumber: '',
                        thirdNumber: '',
                        fourNumber: '',
                        fiveNumber: '',
                        sixNumber: '',
                      });
                      Alert.alert('Mã xác thực sai');
                    }
                  })
                  .catch(error => {
                    ToastAndroid.show('Lỗi hệ thống', 1);
                  })
                  .finally(() => {
                    this.setState({isLoading: false});
                  });
              }}
            />
          </View>
        )}
      </View>
    );
  }
}
const CountTime = props => {
  const [timer, setTimer] = useState(props.timeLeft);
  const [timerOn, setTimerOn] = useState(props.timeOn);
  const countDown = () => {
    BackgroundTimer.runBackgroundTimer(() => {
      setTimer(secs => {
        if (secs > 0) {
          return secs - 1;
        } else {
          return 0;
        }
      });
    }, 1000);
  };
  useEffect(() => {
    if (timerOn) {
      setTimer(props.timeLeft);
      countDown();
    } else {
      BackgroundTimer.stopBackgroundTimer();
    }
    return () => {
      BackgroundTimer.stopBackgroundTimer();
    };
  }, [timerOn]);
  useEffect(() => {
    if (timer === 0) {
      props.stop();
      BackgroundTimer.stopBackgroundTimer();
    }
  }, [timer]);
  useEffect(() => {
    setTimerOn(props.timeOn);
  }, [props.timeOn]);
  return <Text style={{textAlign: 'center'}}>{timer}</Text>;
};
