import React, {Component, useState} from 'react';
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  ScrollView,
  Alert,
  Modal,
  ActivityIndicator,
  ToastAndroid,
} from 'react-native';

import {styles} from '../../shared/styles';
import {styleUserProfile} from './styleUserProfile';
import getUserInfo from '../../services/getUserInfo';
import {stylesUserDetail} from './stylesUserDetail';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {faChevronLeft} from '@fortawesome/free-solid-svg-icons';
import {TextInput} from 'react-native-gesture-handler';
import Radio from '../common/Radio';
import CustomDateTimePicker from '../common/DatePicker/datePicker';
import TestAPI from '../TestAPI/TestAPI';
import ModelCamera from '../Register/ModelCamera';
import {ButtonLogin} from '..';
import ListBank from '../Register/ListBank';
import {Picker} from '@react-native-picker/picker';
import {DetailProductStyles} from '../Details/styles';
import editProfile from '../../services/editProfile';
const Bank = props => {
  const [bankName, setBankName] = useState(
    props.nameBank != null ? props.nameBank : '',
  );
  return (
    <View
      style={{
        width: '90%',
        borderWidth: 1,
        alignSelf: 'center',
        height: '100%',
        borderColor: '#A6A6A6',
        borderRadius: 7,
        justifyContent: 'center',
      }}>
      <Picker
        style={{
          height: '100%',
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
export default class UserProfile extends Component {
  constructor(props) {
    super(props);
    this.state = {
      cardId: '',
      fullName: '',
      imageCardIdFrontURL:
        'https://i.pinimg.com/564x/10/6b/bc/106bbc9e67028e763a54fea2d9e281e5.jpg',
      imageCardIdBackURL:
        'https://i.pinimg.com/564x/10/6b/bc/106bbc9e67028e763a54fea2d9e281e5.jpg',
      imageProfileURL:
        'https://i.pinimg.com/564x/10/6b/bc/106bbc9e67028e763a54fea2d9e281e5.jpg',
      number: '',
      bankName: '',
      branch: '',
      ownerName: '',
      username: '',
      email: '',
      gender: true,
      province: '',
      district: '',
      commune: '',
      street: '',
      phone: '',
      dateOfBirth: '',
      isLoading: true,
      editIMGFront: false,
      editIMGBack: false,
      editIMGProfile: false,
      imageProfile: '',
      defaultDate: '',
      isRequest: false,
      confirmEdit: false,
      isBack: false,
    };
  }
  Radio_Gender = () => {
    return (
      <View
        style={{
          width: '100%',
        }}>
        <Radio
          selected={this.state.gender ? 0 : 1}
          options={['Nam', 'Nữ']}
          onChangeSelect={(opt, i) => {
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
  loadData() {
    let reg = new getUserInfo();
    reg
      .getUserInfo()
      .then(res => {
        if (res.data.success) {
          this.setState(
            {
              fullName:
                res.data.data.Data.firstName +
                ' ' +
                res.data.data.Data.middleName +
                ' ' +
                res.data.data.Data.lastName,
              number: res.data.data.Data.bankResponse.number,
              bankName: res.data.data.Data.bankResponse.bankName,
              branch: res.data.data.Data.bankResponse.branch,
              ownerName: res.data.data.Data.bankResponse.ownerName,
              username: res.data.data.Data.username,
              email: res.data.data.Data.email,
              gender: res.data.data.Data.sex,
              province: res.data.data.Data.province,
              district: res.data.data.Data.district,
              commune: res.data.data.Data.commune,
              street: res.data.data.Data.street,
              phone: res.data.data.Data.phone,
              dateOfBirth: res.data.data.Data.dateOfBirth,
              defaultDate: res.data.data.Data.dateOfBirth,
              cardId: res.data.data.Data.cardId,
              imageCardIdFrontURL: res.data.data.Data.imageCardIdFront,
              imageCardIdBackURL: res.data.data.Data.imageCardIdBack,
              imageProfileURL: res.data.data.Data.imageProfile,
            },
            () => {
              Promise.all([
                fetch(
                  'https://sheltered-anchorage-60344.herokuapp.com/district/?idProvince=' +
                    this.state.province,
                ).then(res => res.json()),
                fetch(
                  'https://sheltered-anchorage-60344.herokuapp.com/commune/?idDistrict=' +
                    this.state.district,
                ).then(res => res.json()),
                fetch(
                  'https://sheltered-anchorage-60344.herokuapp.com/Province',
                ).then(res => res.json()),
              ])
                .then(([district, commune, province]) => {
                  this.setState({
                    listDistrict: district,
                    listCommune: commune,
                    listProvince: province,
                    isLoading: false,
                  });
                })
                .catch(err => {
                  ToastAndroid.show('Lỗi hệ thống', 1);
                });
            },
          );
        } else {
          ToastAndroid.show('Lỗi hệ thống', 1);
        }
      })
      .catch(error => {
        ToastAndroid.show('Lỗi hệ thống', 1);
      });
  }
  componentDidMount() {
    this.focusListener = this.props.navigation.addListener('focus', () => {
      this.setState({isBack: false});
      this.loadData();
    });
  }
  componentWillUnmount() {
    this.focusListener();
    this.setState = (state, callback) => {
      return;
    };
  }
  formatDate(date) {
    var dateFormat = String(date).split('-');
    return dateFormat[2] + '-' + dateFormat[1] + '-' + dateFormat[0];
  }
  render() {
    return (
      <View
        style={this.state.confirmEdit ? styles.container2 : styles.container}>
        <View style={styleUserProfile.headerView}>
          <View style={styleUserProfile.headerViewVW}>
            <TouchableOpacity
              style={{flexDirection: 'row', alignSelf: 'center'}}
              onPress={() => {
                if (!this.state.isLoading) {
                  if (!this.state.isBack) {
                    this.setState({isBack: true});
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
            <View style={{flex: 1, alignItems: 'center', alignSelf: 'center'}}>
              <Text style={styleUserProfile.headerTxt}>
                Chỉnh sửa thông tin cá nhân
              </Text>
            </View>
          </View>
        </View>
        {this.state.isLoading ? (
          <ActivityIndicator size="large" color="black" />
        ) : (
          <View style={styleUserProfile.user_container}>
            <View
              style={{
                height: 50,
                width: '100%',
                alignItems: 'center',
                justifyContent: 'center',
              }}>
              <Text
                style={{fontWeight: 'bold', fontSize: 30, textAlign: 'center'}}>
                {this.state.fullName}
              </Text>
            </View>
            <View style={styleUserProfile.botUser}>
              <ScrollView
                style={stylesUserDetail.container}
                showsVerticalScrollIndicator={false}>
                <View style={stylesUserDetail.row_container}>
                  <View style={stylesUserDetail.column_text}>
                    <Text style={stylesUserDetail.text_general}>
                      Tên đăng nhập:
                    </Text>
                    <Text style={stylesUserDetail.text_user}>
                      {this.state.username}
                    </Text>
                  </View>
                  <View style={stylesUserDetail.column_text}>
                    <Text style={stylesUserDetail.text_general}>Email: </Text>
                    <Text style={stylesUserDetail.text_user}>
                      {this.state.email}
                    </Text>
                  </View>
                </View>
                <View style={stylesUserDetail.row_container}>
                  <View style={{width: '100%'}}>
                    <Text style={stylesUserDetail.text_general}>
                      Số điện thoại:
                    </Text>
                    <TextInput
                      keyboardType={'numeric'}
                      style={stylesUserDetail.txtIP}
                      value={this.state.phone}
                      onChangeText={text => {
                        this.setState({phone: text});
                      }}
                    />
                  </View>
                </View>
                <View
                  style={{
                    width: '100%',
                    marginBottom: 18,
                    justifyContent: 'center',
                  }}>
                  <View style={{width: '90%', justifyContent: 'center'}}>
                    <Text style={stylesUserDetail.text_general2}>
                      Giới tính:
                    </Text>
                  </View>
                  <View
                    style={{
                      width: '90%',
                      justifyContent: 'center',
                      alignSelf: 'center',
                    }}>
                    {this.Radio_Gender()}
                  </View>
                </View>
                <View style={stylesUserDetail.row_container}>
                  <View style={{width: '100%'}}>
                    <Text style={stylesUserDetail.text_general}>
                      Ngày sinh:{' '}
                    </Text>
                    <View
                      style={{
                        flexDirection: 'row',
                        height: 40,
                        marginTop: 10,
                        width: '90%',
                        alignSelf: 'center',
                      }}>
                      <View style={{width: 35, height: 35}}>
                        <Image
                          style={{
                            width: '100%',
                            height: '100%',
                            resizeMode: 'stretch',
                            marginLeft: 'auto',
                          }}
                          source={require('../../assets/images/calendar.png')}
                        />
                      </View>
                      <View style={{flex: 1, justifyContent: 'center'}}>
                        <CustomDateTimePicker
                          textStyle={{
                            borderColor: '#D9D9D9',
                            height: 40,
                          }}
                          defaultDate={this.state.defaultDate}
                          onDateChange={value => {
                            this.setState({
                              dateOfBirth: value,
                            });
                          }}
                        />
                      </View>
                    </View>
                  </View>
                </View>
                <View style={{width: '100%', marginBottom: 18, marginTop: 10}}>
                  <View style={{width: '100%'}}>
                    <Text style={stylesUserDetail.text_general2}>
                      Địa chỉ:{' '}
                    </Text>
                  </View>
                  <View style={{width: '90%', alignSelf: 'center'}}>
                    <TestAPI
                      pickerProvidenceValue={this.state.province}
                      changeProvince={value => {
                        this.setState({province: value});
                      }}
                      pickerDistrictValue={this.state.district}
                      changeDistrict={value => {
                        this.setState({district: value});
                      }}
                      pickerCommuneValue={this.state.commune}
                      changeCommune={value => {
                        this.setState({commune: value});
                      }}
                    />
                    <View
                      style={{
                        width: '100%',
                      }}>
                      <TextInput
                        multiline={false}
                        numberOfLines={1}
                        style={{
                          textAlignVertical: 'top',
                          width: '100%',
                          borderColor: '#e0e0d1',
                          borderWidth: 1,
                          borderRadius: 7,
                          justifyContent: 'flex-start',
                        }}
                        value={this.state.street}
                        onChangeText={text => {
                          this.setState({street: text});
                        }}
                      />
                    </View>
                  </View>
                </View>
                <View style={stylesUserDetail.row_container}>
                  <View style={{width: '100%'}}>
                    <Text style={stylesUserDetail.text_general}>
                      Số CMT/CCCD:
                    </Text>
                    <TextInput
                      keyboardType={'numeric'}
                      style={[stylesUserDetail.txtIP, {marginBottom: 10}]}
                      value={this.state.cardId}
                      onChangeText={text => {
                        this.setState({cardId: text});
                      }}
                    />
                    <Text style={stylesUserDetail.text_general2}>
                      Ảnh mặt trước:
                    </Text>
                    <ModelCamera
                      img={this.state.imageCardIdFrontURL}
                      passImage={value => {
                        this.setState({
                          imageCardIdFrontURL: value,
                          editIMGFront: true,
                        });
                      }}
                    />
                    <Text style={stylesUserDetail.text_general2}>
                      Ảnh mặt sau:
                    </Text>
                    <ModelCamera
                      img={this.state.imageCardIdBackURL}
                      passImage={value => {
                        this.setState({
                          imageCardIdBackURL: value,
                          editIMGBack: true,
                        });
                      }}
                    />
                    <Text style={stylesUserDetail.text_general2}>
                      Ảnh nhận diện:
                    </Text>
                    <ModelCamera
                      img={this.state.imageProfileURL}
                      passImage={value => {
                        this.setState({
                          imageProfileURL: value,
                          editIMGProfile: true,
                        });
                      }}
                    />
                  </View>
                </View>
                <View style={stylesUserDetail.row_container}>
                  <View style={{width: '100%'}}>
                    <Text style={stylesUserDetail.text_general}>
                      Số tài khoản ngân hàng:
                    </Text>
                    <TextInput
                      keyboardType={'numeric'}
                      style={stylesUserDetail.txtIP}
                      value={this.state.number}
                      onChangeText={text => {
                        this.setState({number: text});
                      }}
                    />
                  </View>
                </View>
                <View style={stylesUserDetail.row_container}>
                  <View style={{width: '100%'}}>
                    <Text style={stylesUserDetail.text_general}>
                      Chủ tài khoản:
                    </Text>
                    <TextInput
                      style={stylesUserDetail.txtIP}
                      value={this.state.ownerName}
                      onChangeText={text => {
                        this.setState({ownerName: text});
                      }}
                    />
                  </View>
                </View>
                <Text
                  style={[stylesUserDetail.text_general, {marginBottom: 7}]}>
                  Tên ngân hàng:
                </Text>
                <View
                  style={{
                    width: '100%',
                    height: 40,
                    marginBottom: 18,
                    justifyContent: 'center',
                  }}>
                  <Bank
                    nameBank={this.state.bankName}
                    setBank={itemValue => {
                      this.setState({bankName: itemValue});
                    }}
                  />
                </View>
                <View style={stylesUserDetail.row_container}>
                  <View style={{width: '100%'}}>
                    <Text style={stylesUserDetail.text_general}>
                      Chi nhánh ngân hàng:
                    </Text>
                    <TextInput
                      style={stylesUserDetail.txtIP}
                      value={this.state.branch}
                      onChangeText={text => {
                        this.setState({branch: text});
                      }}
                    />
                  </View>
                </View>
                <View style={{flex: 1, marginBottom: 10}}>
                  <ButtonLogin
                    name="Cập nhật"
                    login={() => {
                      let check = true;
                      if (
                        !this.state.phone
                          .trim()
                          .match('(84|0[1|3|5|7|8|9])+([0-9]{8})$')
                      ) {
                        check = false;
                        return Alert.alert('Số điện thoại không hợp lệ.');
                      }
                      if (
                        this.state.province == '0' ||
                        this.state.trim == '0' ||
                        this.state.commune == '0'
                      ) {
                        check = false;
                        return Alert.alert('Địa chỉ không hợp lệ');
                      }
                      if (this.state.street.trim() == '') {
                        check = false;
                        return Alert.alert('Địa chỉ chi tiết không hợp lệ');
                      }
                      if (
                        !this.state.cardId
                          .trim()
                          .match('^([0-9]{9})$|^([0-9]{12})$')
                      ) {
                        check = false;
                        return Alert.alert('Căn cước/CMND không hợp lệ');
                      }
                      if (this.state.imageCardIdFrontURL == null) {
                        check = false;
                        return Alert.alert(
                          'Ảnh trước căn cước/CMND chưa hợp lệ',
                        );
                      }
                      if (this.state.imageCardIdBackURL == null) {
                        check = false;
                        return Alert.alert('Ảnh sau căn cước/CMND chưa hợp lệ');
                      }
                      if (this.state.imageProfileURL == null) {
                        check = false;
                        return Alert.alert('Ảnh nhận diện chưa hợp lệ');
                      }
                      if (!this.state.number.trim().match('^[0-9]+$')) {
                        check = false;
                        return Alert.alert(
                          'Số tài khoản ngân hàng chưa hợp lệ',
                        );
                      }
                      if (
                        !this.state.ownerName
                          .trim()
                          .match(
                            '^[a-z A-ZÀÁÂÃÈÉÊÌÍÒÓÔÕÙÚĂĐĨŨƠàáâãèéêìíòóôõùúăđĩũơƯĂẠẢẤẦẨẪẬẮẰẲẴẶẸẺẼỀỀỂẾưăạảấầẩẫậắằẳẵặẹẻẽềềểếỄỆỈỊỌỎỐỒỔỖỘỚỜỞỠỢỤỦỨỪễệỉịọỏốồổỗộớờởỡợụủứừỬỮỰỲỴÝỶỸửữựỳỵỷỹsW]+$',
                          ) ||
                        this.state.ownerName.trim() == ''
                      ) {
                        check = false;
                        return Alert.alert(
                          'Tên chủ tài khoản ngân hàng chưa hợp lệ',
                        );
                      }
                      if (this.state.bankName.trim() == '') {
                        check = false;
                        return Alert.alert('Tên ngân hàng chưa hợp lệ');
                      }
                      if (
                        !this.state.branch
                          .trim()
                          .match(
                            '^[a-z A-ZÀÁÂÃÈÉÊÌÍÒÓÔÕÙÚĂĐĨŨƠàáâãèéêìíòóôõùúăđĩũơƯĂẠẢẤẦẨẪẬẮẰẲẴẶẸẺẼỀỀỂẾưăạảấầẩẫậắằẳẵặẹẻẽềềểếỄỆỈỊỌỎỐỒỔỖỘỚỜỞỠỢỤỦỨỪễệỉịọỏốồổỗộớờởỡợụủứừỬỮỰỲỴÝỶỸửữựỳỵỷỹsW]+$',
                          ) ||
                        this.state.branch.trim() == ''
                      ) {
                        check = false;
                        return Alert.alert('Chi nhánh ngân hàng chưa hợp lệ');
                      }
                      if (check) {
                        this.setState({confirmEdit: true});
                      }
                    }}
                  />
                </View>
              </ScrollView>
            </View>
            {/* confirmEdit */}
            <Modal
              transparent={true}
              visible={this.state.confirmEdit}
              animationType="slide">
              <View style={DetailProductStyles.viewDonBidStyles2}>
                <TouchableOpacity
                  onPress={() => this.setState({confirmEdit: false})}
                  style={[
                    DetailProductStyles.viewDonBidImageStyles,
                    {
                      marginLeft: 'auto',
                      elevation: 10,
                      shadowColor: 'black',
                      borderWidth: 1,
                      borderRadius: 5,
                      width: 40,
                      height: 40,
                      justifyContent: 'center',
                      alignItems: 'center',
                      backgroundColor: 'white',
                      borderColor: '#EDEDED',
                      marginRight: 15,
                      marginTop: 15,
                    },
                  ]}>
                  <Image
                    style={DetailProductStyles.imageDoneBidStyles2}
                    resizeMode="stretch"
                    source={require('../../assets/images/Delete.png')}
                  />
                </TouchableOpacity>
                <View
                  style={[
                    DetailProductStyles.viewDoneBidText1,
                    {textAlign: 'center'},
                  ]}>
                  <Text
                    style={{
                      fontSize: 20,
                      fontFamily: 'Open Sans',
                      fontWeight: 'bold',
                      marginTop: -20,
                      textAlign: 'center',
                    }}>
                    Tài khoản của bạn sẽ bị vô hiệu hóa tạm thời {'\n'}
                    Bạn có muốn tiếp tục ?
                  </Text>
                </View>
                <View
                  style={{
                    flexDirection: 'row',
                    justifyContent: 'space-around',
                    width: '100%',
                    marginBottom: 50,
                    marginTop: 'auto',
                  }}>
                  <TouchableOpacity
                    onPress={() =>
                      this.setState({confirmEdit: false}, () => {
                        if (!this.state.isLoading) {
                          this.setState({isLoading: true});
                          let reg = new editProfile();
                          reg
                            .editProfile({
                              cardId: this.state.cardId,
                              commune: this.state.commune,
                              dateOfBirth: this.state.dateOfBirth,
                              district: this.state.district,
                              editBank: {
                                bankName: this.state.bankName,
                                branch: this.state.branch,
                                number: this.state.number,
                                ownerName: this.state.ownerName,
                              },
                              imageCardIdBack: this.state.imageCardIdBackURL,
                              imageCardIdFront: this.state.imageCardIdFrontURL,
                              imageProfile: this.state.imageProfileURL,
                              phone: this.state.phone,
                              province: this.state.province,
                              sex: this.state.gender,
                              street: this.state.street,
                            })
                            .then(async res => {
                              if (res.data.success) {
                                ToastAndroid.show(
                                  'Cập nhật thành công.',
                                  ToastAndroid.LONG,
                                );
                                this.props.navigation.goBack();
                              } else {
                                Alert.alert('Cập nhật không thành công.');
                              }
                            })
                            .finally(() => {
                              this.setState({isLoading: false});
                            })
                            .catch(error => {
                              ToastAndroid.show('Lỗi hệ thống', 1);
                            });
                        }
                      })
                    }
                    style={[
                      DetailProductStyles.touchStyles,
                      {backgroundColor: '#26D3DE'},
                    ]}>
                    <Text
                      style={[DetailProductStyles.touchText, {color: 'white'}]}>
                      Xác nhận
                    </Text>
                  </TouchableOpacity>
                  <TouchableOpacity
                    onPress={() => this.setState({confirmEdit: false})}
                    style={[
                      DetailProductStyles.touchStyles,
                      {backgroundColor: '#FB3F39'},
                    ]}>
                    <Text
                      style={[DetailProductStyles.touchText, {color: 'white'}]}>
                      Hủy
                    </Text>
                  </TouchableOpacity>
                </View>
              </View>
            </Modal>
          </View>
        )}
      </View>
    );
  }
}
