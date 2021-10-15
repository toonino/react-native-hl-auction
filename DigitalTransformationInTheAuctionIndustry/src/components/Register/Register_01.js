import React, {Component, useState, useEffect} from 'react';
import {
  View,
  Text,
  StatusBar,
  Image,
  TouchableOpacity,
  ScrollView,
  Alert,
  TextInput,
  BackHandler,
  ToastAndroid,
  ActivityIndicator,
} from 'react-native';
import {RegisterStyle} from './styles';
import ButtonLogin from '../common/Button/ButtonLogin';
import {styles} from '../../shared/styles';
import HeaderLoginRegister from '../common/HeaderLoginRegister/HeaderLoginRegister';
import Radio from '../common/Radio';
import TextInputRegis from '../common/TextInputRegis/TextInputRegis';
import TextInputPass02 from '../common/TextInputPassword/TextInputPass02';
import * as rootNavigation from '../../navigation/rootNavigator';
import {
  createStackNavigator,
  CardStyleInterpolators,
} from '@react-navigation/stack';
import TextInputRegis02 from '../common/TextInputRegis/TextInputRegis02';
import TextInputRegis03 from '../common/TextInputRegis/TextInputRegis03';
import TextInputRegis04 from '../common/TextInputRegis/TextInputRegis04';
import CustomDateTimePicker from '../common/DatePicker/datePicker';
import TextInputRegis06 from '../common/TextInputRegis/TextInputRegis06';
import TextInputRegisOnlyNumber from '../common/TextInputRegis/TextInputRegisOnlyNumber';
import TextInputRegis07 from '../common/TextInputRegis/TextInputRegis07';
import {LOGIN} from '../../navigation/routeNames';
import {Picker} from '@react-native-picker/picker';
import RegisterService from '../../services/register';
import BackgroundTimer from 'react-native-background-timer';
import TestAPI from '../TestAPI/TestAPI';
import ModelCamera from './ModelCamera';
import ListBank from './ListBank';
StatusBar.setHidden(false);
const RegisterStack = createStackNavigator();

const defaultDateOfBirth = new Date();
const Bank = props => {
  const [bankName, setBankName] = useState(props.default);
  return (
    <View
      style={{
        width: '100%',
        height: 40,
        borderWidth: 1,
        justifyContent: 'center',
        marginBottom: 11,
        borderColor: '#e0e0d1',
        borderRadius: 7,
      }}>
      <Picker
        style={{
          fontSize: 17,
          width: '100%',
          fontWeight: 'bold',
        }}
        dropdownIconColor="#FA4A0C"
        itemStyle={{fontWeight: 'bold'}}
        textStyle={{fontSize: 12, fontWeight: 'bold'}}
        selectedValue={bankName}
        onValueChange={itemValue => {
          if (bankName != itemValue) {
            setBankName(itemValue);
            props.setBank(itemValue);
          }
        }}>
        <Picker.Item label="Hãy chọn ngân hàng" value="" />
        {ListBank.map((item, key) => (
          <Picker.Item
            label={item.vn_name}
            value={item.vn_name}
            key={item.bankCode}
          />
        ))}
      </Picker>
    </View>
  );
};
export default class Register_01 extends Component {
  constructor(props) {
    super(props);
    this.state = {
      gender: true,
      email: '',
      phone: '',
      userName: '',
      pass: '',
      repass: '',
      page: 1,
      firstName: '',
      middleName: '',
      lastName: '',
      dateOfBirth: defaultDateOfBirth,
      providence: [],
      district: [],
      commune: [],
      pickerProvidenceValue: '0',
      pickerDistrictValue: '0',
      pickerCommuneValue: '0',
      town: '',
      numberCardID: '',
      imageBackUrl: null,
      imageFrontUrl: null,
      imageProfileUrl: null,
      bankNumber: '',
      bankOwner: '',
      bankName: '',
      bankBranch: '',
      firstNumber: '',
      secondNumber: '',
      thirdNumber: '',
      fourNumber: '',
      fiveNumber: '',
      sixNumber: '',
      codeEmail: '',
      valid_page1: false,
      valid_page2: false,
      title: 'Tiếp theo',
      check: false,
      isRequest: false,
      secondLeft: 0,
    };
  }
  formatDate(date) {
    var dateFormat = String(date).split('-');
    return dateFormat[2] + '-' + dateFormat[1] + '-' + dateFormat[0];
  }
  Radio_Gender = () => {
    const [selected, setSelected] = useState(0);
    return (
      <View style={{marginBottom: 11}}>
        <Radio
          selected={selected}
          options={['Nam', 'Nữ']}
          onChangeSelect={(opt, i) => {
            setSelected(i);
            if (i == 0) {
              this.setState({gender: true});
            } else {
              this.setState({gender: false});
            }
          }}
        />
      </View>
    );
  };
  Register2 = () => {
    return (
      <ScrollView
        showsVerticalScrollIndicator={false}
        style={{flex: 1, backgroundColor: 'white'}}>
        <Text style={RegisterStyle.textType}>
          Họ và tên:<Text style={{color: 'red'}}> *</Text>
        </Text>
        <View
          style={{
            flexDirection: 'row',
            height: 40,
            marginBottom: 11,
          }}>
          <TextInputRegis02
            default={this.state.firstName}
            hidetext=" Họ"
            setText={text => {
              this.setState({firstName: text});
            }}
          />
          <TextInputRegis03
            default={this.state.middleName}
            hidetext=" Tên Đệm"
            setText={text => {
              this.setState({middleName: text});
            }}
          />
          <TextInputRegis04
            default={this.state.lastName}
            hidetext=" Tên"
            setText={text => {
              this.setState({lastName: text});
            }}
          />
        </View>
        <Text style={RegisterStyle.textType}>
          Ngày sinh:<Text style={{color: 'red'}}> *</Text>
        </Text>
        <View style={[RegisterStyle.imageCalendarView]}>
          <View style={{width: 35, height: 35}}>
            <Image
              style={RegisterStyle.imageCalendar}
              source={require('../../assets/images/calendar.png')}
            />
          </View>
          <View style={{flex: 1, justifyContent: 'center'}}>
            <CustomDateTimePicker
              textStyle={{
                borderColor: '#D9D9D9',
                height: 40,
              }}
              defaultDate={
                this.state.dateOfBirth == defaultDateOfBirth
                  ? defaultDateOfBirth
                  : this.state.dateOfBirth
              }
              onDateChange={value => {
                this.setState({dateOfBirth: value});
              }}
            />
          </View>
        </View>
        <Text style={RegisterStyle.textType}>
          Giới tính:<Text style={{color: 'red'}}> *</Text>
        </Text>
        {this.Radio_Gender()}
        <Text style={RegisterStyle.textType}>
          Địa chỉ:<Text style={{color: 'red'}}> *</Text>
        </Text>
        <TestAPI
          pickerProvidenceValue={
            this.state.pickerProvidenceValue == '0'
              ? null
              : this.state.pickerProvidenceValue
          }
          pickerDistrictValue={
            this.state.pickerDistrictValue == '0'
              ? null
              : this.state.pickerDistrictValue
          }
          pickerCommuneValue={
            this.state.pickerCommuneValue == '0'
              ? null
              : this.state.pickerCommuneValue
          }
          changeProvince={value => {
            this.setState({pickerProvidenceValue: value});
          }}
          changeDistrict={value => {
            this.setState({pickerDistrictValue: value});
          }}
          changeCommune={value => {
            this.setState({pickerCommuneValue: value});
          }}
        />
        <TextInputRegis06
          default={this.state.town}
          hidetext="Địa chỉ chi tiết"
          setText={text => {
            this.setState({town: text});
          }}
        />
        <Text style={[RegisterStyle.textType]}>
          Số CMT/ Thẻ căn cước:
          <Text style={{color: 'red'}}> *</Text>
        </Text>
        <TextInputRegisOnlyNumber
          default={this.state.numberCardID}
          hidetext="Nhập số CMT, số thẻ căn cước, số hộ chiếu"
          setText={text => {
            this.setState({numberCardID: text});
          }}
        />
        <Text style={RegisterStyle.textType}>
          Ảnh CMT/CCCD mặt trước:<Text style={{color: 'red'}}> *</Text>
        </Text>
        <ModelCamera
          img={this.state.imageFrontUrl}
          passImage={value => {
            this.setState({imageFrontUrl: value});
          }}
        />
        <Text style={RegisterStyle.textType}>
          Ảnh CMT/CCCD mặt sau:<Text style={{color: 'red'}}> *</Text>
        </Text>
        <ModelCamera
          img={this.state.imageBackUrl}
          passImage={value => {
            this.setState({imageBackUrl: value});
          }}
        />
        <Text style={RegisterStyle.textType}>
          Ảnh nhận dạng khuôn mặt{' '}
          <Text style={{fontWeight: 'normal'}}>(Ảnh rõ nét, dễ nhận diện)</Text>
          :<Text style={{color: 'red'}}> *</Text>
        </Text>
        <ModelCamera
          img={this.state.imageProfileUrl}
          passImage={value => {
            this.setState({imageProfileUrl: value});
          }}
        />
        <Text style={RegisterStyle.textType}>
          Số tài khoản ngân hàng:<Text style={{color: 'red'}}> *</Text>
        </Text>
        <TextInputRegisOnlyNumber
          default={this.state.bankNumber}
          hidetext="Vui lòng nhập số tài khoản ngân hàng"
          setText={text => {
            this.setState({bankNumber: text});
          }}
        />
        <Text style={RegisterStyle.textType}>
          Tên chủ tài khoản:<Text style={{color: 'red'}}> *</Text>
        </Text>
        <TextInputRegis07
          default={this.state.bankOwner}
          hidetext="Vui lòng nhập tên chủ tài khoản"
          setText={text => {
            this.setState({bankOwner: text});
          }}
        />
        <Text style={RegisterStyle.textType}>
          Tên ngân hàng:<Text style={{color: 'red'}}> *</Text>
        </Text>
        <Bank
          default={this.state.bankName}
          setBank={itemValue => {
            this.setState({bankName: itemValue});
          }}
        />
        <Text style={RegisterStyle.textType}>
          Chi nhánh ngân hàng:<Text style={{color: 'red'}}> *</Text>
        </Text>
        <TextInputRegis07
          default={this.state.bankBranch}
          hidetext="Vui lòng nhập tên chi nhánh ngân hàng"
          setText={text => {
            this.setState({bankBranch: text});
          }}
        />
      </ScrollView>
    );
  };
  Register1 = () => {
    return (
      <ScrollView
        showsVerticalScrollIndicator={false}
        style={{flex: 1, backgroundColor: 'white'}}>
        <Text style={RegisterStyle.textType}>
          Email:<Text style={{color: 'red'}}> *</Text>
        </Text>
        <TextInputRegis
          default={this.state.email}
          hidetext="tuandc@gmail.com"
          setText={text => {
            this.setState({email: text}, () => {
              this.setState({email: this.state.email.toLocaleLowerCase()});
            });
          }}
        />
        <Text style={RegisterStyle.textType}>
          Số điện thoại:<Text style={{color: 'red'}}> *</Text>
        </Text>
        <TextInputRegisOnlyNumber
          default={this.state.phone}
          hidetext="0324567891"
          setText={text => {
            this.setState({phone: text});
          }}
        />
        <Text style={RegisterStyle.textType}>
          Tên đăng nhập:<Text style={{color: 'red'}}> *</Text>
        </Text>
        <TextInputRegis
          default={this.state.userName}
          hidetext="username"
          setText={text => {
            this.setState({userName: text}, () => {
              this.setState({
                userName: this.state.userName.toLocaleLowerCase(),
              });
            });
          }}
        />
        <Text style={RegisterStyle.textType}>
          Mật khẩu:<Text style={{color: 'red'}}> *</Text>
        </Text>
        <TextInputPass02
          default={this.state.pass}
          hidetext="********************"
          setText={text => {
            this.setState({pass: text});
          }}
        />
        <Text style={[RegisterStyle.textType]}>
          Nhập lại mật khẩu:<Text style={{color: 'red'}}> *</Text>
        </Text>
        <TextInputPass02
          default={this.state.repass}
          hidetext="********************"
          setText={text => {
            this.setState({repass: text});
          }}
        />
      </ScrollView>
    );
  };
  Register4 = () => {
    const [timer, setTimer] = useState(60);
    const [timerOn, setTimerOn] = useState(true);
    const countDown = () => {
      BackgroundTimer.runBackgroundTimer(() => {
        setTimer(secs => {
          if (secs > 0) {
            setTimerOn(true);
            return secs - 1;
          } else {
            return 0;
          }
        });
      }, 1000);
    };
    useEffect(() => {
      if (timerOn) {
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
        setTimerOn(false);
        BackgroundTimer.stopBackgroundTimer();
      }
    }, [timer]);
    return (
      <View style={RegisterStyle.register4_container}>
        <Text style={RegisterStyle.register4_textGeneral}>
          Hiện tại chúng tôi đã gửi mã xác minh đến email của bạn. Vui lòng kiểm
          tra email và xác nhận mã.
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
            onChangeText={text => {
              this.setState({sixNumber: text});
            }}></TextInput>
        </View>
        <View style={{marginTop: 15, justifyContent: 'center'}}>
          <Text style={{textAlign: 'center'}}>Mã xác minh chưa được gửi. </Text>
          <Text style={{textAlign: 'center'}}>{timer}</Text>
          <TouchableOpacity
            onPress={() => {
              if (timer == 0) {
                setTimer(60);
                let reg = new RegisterService();
                reg
                  .Register({
                    createBankingRequest: {
                      bankName: this.state.bankName,
                      branch: this.state.bankBranch,
                      number: this.state.bankNumber,
                      ownerName: this.state.bankOwner,
                    },
                    registerRequest: {
                      cardId: this.state.numberCardID,
                      commune: this.state.pickerCommuneValue,
                      dateOfBirth: this.state.dateOfBirth,
                      district: this.state.pickerDistrictValue,
                      email: this.state.email,
                      firstName: this.state.firstName,
                      imageCardIdBack: this.state.imageBackUrl,
                      imageCardIdFront: this.state.imageFrontUrl,
                      imageProfile: this.state.imageProfileUrl,
                      lastName: this.state.lastName,
                      middleName: this.state.middleName,
                      password: this.state.pass,
                      phone: this.state.phone,
                      province: this.state.pickerProvidenceValue,
                      sex: this.state.gender,
                      street: this.state.town,
                      username: this.state.userName,
                    },
                  })
                  .then(res3 => {
                    if (res3.data.success) {
                      Alert.alert('Đã gửi lại mã.');
                    } else {
                      Alert.alert('Lỗi đăng ký.');
                    }
                  })
                  .catch(error => {
                    ToastAndroid.show('Lỗi hệ thống', 1);
                  })
                  .finally(() => {
                    setTimerOn(true);
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
              Gửi lại ?
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  };
  componentWillUnmount() {
    BackgroundTimer.stopBackgroundTimer();
  } 
  render() {
    return (
      <View style={styles.container}>
        <View style={RegisterStyle.header}>
          <HeaderLoginRegister name="Đăng kí" />
        </View>
        {this.state.isRequest ? (
          <ActivityIndicator size="large" color="black" />
        ) : (
          <View style={RegisterStyle.bottom}>
            <View style={[styles.containerBottomLoginRegister, {flex: 1}]}>
              <Text style={{alignSelf: 'center'}}>
                Bạn đã có tài khoản?{'   '}
                <Text
                  style={{color: 'red'}}
                  onPress={() => rootNavigation.navigate(LOGIN)}>
                  Đăng nhập
                </Text>
              </Text>
              <View style={RegisterStyle.circleView}>
                <TouchableOpacity
                  style={
                    this.state.page == 1
                      ? RegisterStyle.circleBTN
                      : RegisterStyle.circleBTN02
                  }
                  onPress={() => {
                    if (this.state.page != 1) {
                      rootNavigation.navigate('Register1');
                      this.setState({title: 'Tiếp theo'});
                      this.setState({page: 1});
                    }
                  }}>
                  <Text style={{color: 'white'}}>1</Text>
                </TouchableOpacity>
                <Text>────────</Text>
                <TouchableOpacity
                  style={
                    this.state.page == 2
                      ? RegisterStyle.circleBTN
                      : RegisterStyle.circleBTN02
                  }
                  onPress={() => {
                    if (this.state.valid_page1) {
                      rootNavigation.navigate('Register2');
                      this.setState({title: 'Đăng kí'});
                      this.setState({page: 2});
                    } else {
                      Alert.alert('Bạn phải hoàn thành bước 1 trước.');
                    }
                  }}>
                  <Text style={{color: 'white'}}>2</Text>
                </TouchableOpacity>
                <Text>────────</Text>
                <TouchableOpacity
                  style={
                    this.state.page == 3
                      ? RegisterStyle.circleBTN
                      : RegisterStyle.circleBTN02
                  }
                  onPress={() => {
                    if (this.state.valid_page2) {
                      rootNavigation.navigate('Register4');
                      this.setState({title: 'Xác nhận mã'});
                      this.setState({page: 3});
                    } else Alert.alert('Bạn phải hoàn thành bước 2 trước.');
                  }}>
                  <Text style={{color: 'white'}}>3</Text>
                </TouchableOpacity>
              </View>
              <View style={{flex: 1, width: '100%'}}>
                <RegisterStack.Navigator
                  screenOptions={{
                    headerShown: false,
                    cardStyleInterpolator:
                      CardStyleInterpolators.forHorizontalIOS,
                  }}>
                  <RegisterStack.Screen
                    name="Register1"
                    component={this.Register1}
                  />
                  <RegisterStack.Screen
                    name="Register2"
                    component={this.Register2}
                  />
                  <RegisterStack.Screen
                    name="Register4"
                    component={this.Register4}
                  />
                </RegisterStack.Navigator>
              </View>
              <ButtonLogin
                name={this.state.title}
                login={() => {
                  if (this.state.page == 1) {
                    let check = true;
                    if (
                      !this.state.email
                        .trim()
                        .match(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/)
                    ) {
                      check = false;
                      this.setState({valid_page1: false});
                      return Alert.alert('Email không hợp lệ');
                    }
                    if (
                      !this.state.phone
                        .trim()
                        .match('(84|0[1|3|5|7|8|9])+([0-9]{8})$')
                    ) {
                      check = false;
                      this.setState({valid_page1: false});
                      return Alert.alert('Số điện thoại không hợp lệ.');
                    }
                    if (
                      !this.state.userName
                        .trim()
                        .match(
                          '^(?=.{8,20}$)(?![_.])(?!.*[_.]{2})[a-zA-Z0-9._]+[a-zA-Z0-9]$',
                        )
                    ) {
                      check = false;
                      this.setState({valid_page1: false});
                      return Alert.alert(
                        'Tên đăng nhập không hợp lệ.',
                        `- Độ dài từ 8 đến 20 kí tự\n- Có thể chứa chữ cái, chữ số, dấu chấm và dấu gạch dưới.`,
                      );
                    }
                    let reg = new RegisterService();
                    reg
                      .validateRegister({
                        email: this.state.email,
                        username: this.state.userName,
                      })
                      .then(res => {
                        if (!res.data.success) {
                          check = false;
                          this.setState({valid_page1: false});
                          if (
                            res.data.errors[0].errorCode == 'ERR.REGISTER04'
                          ) {
                            return Alert.alert('Email đã có người sử dụng.');
                          }
                          if (
                            res.data.errors[0].errorCode == 'ERR.REGISTER02'
                          ) {
                            return Alert.alert(
                              'Tên đăng nhập đã có người sử dụng.',
                            );
                          }
                        }
                      })
                      .finally(() => {
                        if (check) {
                          if (
                            !this.state.pass
                              .trim()
                              .match(
                                '^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*])(?=.{8,})',
                              )
                          ) {
                            check = false;
                            this.setState({valid_page1: false});
                            return Alert.alert(
                              'Password không hợp lệ',
                              `- Có thể chứa kí tự bất kì ngoại trừ dấu cách\n- Độ dài ít nhất 8 kí tự\n- Phải có cả chữ thường, chữ hoa, chữ số và kí tự đặc biệt`,
                            );
                          }
                          if (this.state.pass != this.state.repass) {
                            check = false;
                            this.setState({valid_page1: false});
                            return Alert.alert(
                              'Mật khẩu nhập lại không trùng khớp.',
                            );
                          }
                          if (check) {
                            this.setState({valid_page1: true});
                            this.setState({title: 'Đăng kí', page: 2});
                            rootNavigation.navigate('Register2');
                          }
                        }
                      });
                  } else if (this.state.page == 2) {
                    let check = true;
                    if (
                      !this.state.firstName
                        .trim()
                        .match(
                          '^[a-z A-ZÀÁÂÃÈÉÊÌÍÒÓÔÕÙÚĂĐĨŨƠàáâãèéêìíòóôõùúăđĩũơƯĂẠẢẤẦẨẪẬẮẰẲẴẶẸẺẼỀỀỂẾưăạảấầẩẫậắằẳẵặẹẻẽềềểếỄỆỈỊỌỎỐỒỔỖỘỚỜỞỠỢỤỦỨỪễệỉịọỏốồổỗộớờởỡợụủứừỬỮỰỲỴÝỶỸửữựỳỵỷỹsW]+$',
                        ) ||
                      this.state.firstName.trim().toString() == ''
                    ) {
                      check = false;
                      this.setState({valid_page2: false});
                      return Alert.alert('Họ không hợp lệ');
                    }
                    if (
                      !this.state.middleName
                        .trim()
                        .match(
                          '^[a-z A-ZÀÁÂÃÈÉÊÌÍÒÓÔÕÙÚĂĐĨŨƠàáâãèéêìíòóôõùúăđĩũơƯĂẠẢẤẦẨẪẬẮẰẲẴẶẸẺẼỀỀỂẾưăạảấầẩẫậắằẳẵặẹẻẽềềểếỄỆỈỊỌỎỐỒỔỖỘỚỜỞỠỢỤỦỨỪễệỉịọỏốồổỗộớờởỡợụủứừỬỮỰỲỴÝỶỸửữựỳỵỷỹsW]+$',
                        ) &&
                      !this.state.middleName.trim().toString() == ''
                    ) {
                      check = false;
                      this.setState({valid_page2: false});
                      return Alert.alert('Tên đệm không hợp lệ');
                    }
                    if (
                      !this.state.lastName
                        .trim()
                        .match(
                          '^[a-z A-ZÀÁÂÃÈÉÊÌÍÒÓÔÕÙÚĂĐĨŨƠàáâãèéêìíòóôõùúăđĩũơƯĂẠẢẤẦẨẪẬẮẰẲẴẶẸẺẼỀỀỂẾưăạảấầẩẫậắằẳẵặẹẻẽềềểếỄỆỈỊỌỎỐỒỔỖỘỚỜỞỠỢỤỦỨỪễệỉịọỏốồổỗộớờởỡợụủứừỬỮỰỲỴÝỶỸửữựỳỵỷỹsW]+$',
                        ) ||
                      this.state.lastName.trim().toString() == ''
                    ) {
                      check = false;
                      this.setState({valid_page2: false});
                      return Alert.alert('Tên không hợp lệ');
                    }
                    if (
                      this.state.pickerProvidenceValue == '0' ||
                      this.state.pickerDistrictValue == '0' ||
                      this.state.pickerCommuneValue == '0'
                    ) {
                      check = false;
                      this.setState({valid_page2: false});
                      return Alert.alert('Địa chỉ không hợp lệ');
                    }
                    if (this.state.town.trim() == '') {
                      check = false;
                      this.setState({valid_page2: false});
                      return Alert.alert('Địa chỉ chi tiết không hợp lệ');
                    }
                    if (
                      !this.state.numberCardID
                        .trim()
                        .match('^([0-9]{9})$|^([0-9]{12})$') ||
                      this.state.numberCardID == ''
                    ) {
                      check = false;
                      this.setState({valid_page2: false});
                      return Alert.alert('Căn cước/CMND không hợp lệ');
                    }
                    if (this.state.imageFrontUrl == null) {
                      check = false;
                      this.setState({valid_page2: false});
                      return Alert.alert('Ảnh trước căn cước/CMND chưa hợp lệ');
                    }
                    if (this.state.imageBackUrl == null) {
                      check = false;
                      this.setState({valid_page2: false});
                      return Alert.alert('Ảnh sau căn cước/CMND chưa hợp lệ');
                    }
                    if (this.state.imageProfileUrl == null) {
                      check = false;
                      this.setState({valid_page2: false});
                      return Alert.alert('Ảnh nhận dạng chưa hợp lệ');
                    }

                    if (!this.state.bankNumber.trim().match('^[0-9]+$')) {
                      check = false;
                      this.setState({valid_page2: false});
                      return Alert.alert('Số tài khoản ngân hàng chưa hợp lệ');
                    }
                    if (
                      !this.state.bankOwner
                        .trim()
                        .match(
                          '^[a-z A-ZÀÁÂÃÈÉÊÌÍÒÓÔÕÙÚĂĐĨŨƠàáâãèéêìíòóôõùúăđĩũơƯĂẠẢẤẦẨẪẬẮẰẲẴẶẸẺẼỀỀỂẾưăạảấầẩẫậắằẳẵặẹẻẽềềểếỄỆỈỊỌỎỐỒỔỖỘỚỜỞỠỢỤỦỨỪễệỉịọỏốồổỗộớờởỡợụủứừỬỮỰỲỴÝỶỸửữựỳỵỷỹsW]+$',
                        ) ||
                      this.state.bankOwner.trim() == ''
                    ) {
                      check = false;
                      this.setState({valid_page2: false});
                      return Alert.alert(
                        'Tên chủ tài khoản ngân hàng chưa hợp lệ',
                      );
                    }
                    if (this.state.bankName.trim() == '') {
                      check = false;
                      this.setState({valid_page2: false});
                      return Alert.alert('Tên ngân hàng chưa hợp lệ');
                    }
                    if (
                      !this.state.bankBranch
                        .trim()
                        .match(
                          '^[a-z A-ZÀÁÂÃÈÉÊÌÍÒÓÔÕÙÚĂĐĨŨƠàáâãèéêìíòóôõùúăđĩũơƯĂẠẢẤẦẨẪẬẮẰẲẴẶẸẺẼỀỀỂẾưăạảấầẩẫậắằẳẵặẹẻẽềềểếỄỆỈỊỌỎỐỒỔỖỘỚỜỞỠỢỤỦỨỪễệỉịọỏốồổỗộớờởỡợụủứừỬỮỰỲỴÝỶỸửữựỳỵỷỹsW]+$',
                        ) ||
                      this.state.bankBranch.trim() == ''
                    ) {
                      check = false;
                      this.setState({valid_page2: false});
                      return Alert.alert('Chi nhánh ngân hàng chưa hợp lệ');
                    }
                    if (check) {
                      this.setState({isRequest: true});
                      let reg = new RegisterService();
                      reg
                        .Register({
                          createBankingRequest: {
                            bankName: this.state.bankName,
                            branch: this.state.bankBranch,
                            number: this.state.bankNumber,
                            ownerName: this.state.bankOwner,
                          },
                          registerRequest: {
                            cardId: this.state.numberCardID,
                            commune: this.state.pickerCommuneValue,
                            dateOfBirth: this.state.dateOfBirth,
                            district: this.state.pickerDistrictValue,
                            email: this.state.email,
                            firstName: this.state.firstName,
                            imageCardIdBack: this.state.imageBackUrl,
                            imageCardIdFront: this.state.imageFrontUrl,
                            imageProfile: this.state.imageProfileUrl,
                            lastName: this.state.lastName,
                            middleName: this.state.middleName,
                            password: this.state.pass,
                            phone: this.state.phone,
                            province: this.state.pickerProvidenceValue,
                            sex: this.state.gender,
                            street: this.state.town,
                            username: this.state.userName,
                          },
                        })
                        .then(res3 => {
                          if (res3.data.success) {
                            this.setState({
                              valid_page2: true,
                              isRequest: false,
                              secondLeft: 60,
                            });
                            this.setState({
                              title: 'Xác nhận mã',
                              page: 3,
                            });
                            rootNavigation.navigate('Register4');
                          } else {
                            this.setState({isRequest: false});
                            return Alert.alert('Lỗi đăng ký.');
                          }
                        })
                        .catch(error => {
                          this.setState({isRequest: false});
                          ToastAndroid.show('Lỗi hệ thống', 1);
                        });
                    }
                  } else {
                    let reg = new RegisterService();
                    let captcha =
                      '' +
                      this.state.firstNumber +
                      this.state.secondNumber +
                      this.state.thirdNumber +
                      this.state.fourNumber +
                      this.state.fiveNumber +
                      this.state.sixNumber;
                    reg
                      .validateCaptcha({
                        captcha: captcha,
                        email: this.state.email,
                      })
                      .then(async res => {
                        if (res.data.success) {
                          ToastAndroid.show(
                            'Đăng kí thành công.',
                            ToastAndroid.LONG,
                          );
                          this.props.navigation.goBack();
                        } else {
                          this.setState({
                            firstNumber: '',
                            secondNumber: '',
                            thirdNumber: '',
                            fourNumber: '',
                            fiveNumber: '',
                            sixNumber: '',
                          });
                          Alert.alert('Mã xác nhận không chính xác.');
                        }
                      })
                      .catch(error => {
                        ToastAndroid.show('Lỗi hệ thống', 1);
                      });
                  }
                }}
              />
            </View>
          </View>
        )}
      </View>
    );
  }
}
