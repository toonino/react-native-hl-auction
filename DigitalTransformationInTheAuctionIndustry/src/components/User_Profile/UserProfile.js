import React, {Component} from 'react';
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  Alert,
  ScrollView,
  ToastAndroid,
} from 'react-native';
import Footer from '../common/Footer';
import Header from '../common/Header';
import {styles} from '../../shared/styles';
import {styleUserProfile} from './styleUserProfile';
import avatar from '../../assets/images/avatar.png';
import cover from '../../assets/images/cover.jpg';
import cameraicon from '../../assets/images/cameraicon.png';
import verify from '../../assets/images/verify.png';
import cancelIcon from '../../assets/images/cancelIcon.png';
import {
  createStackNavigator,
  CardStyleInterpolators,
} from '@react-navigation/stack';
import * as RootNavigation from '../../navigation/rootNavigator';
import getUserInfo from '../../services/getUserInfo';
import paidRegisterFee from '../../services/paidRegisterFee';
import editBTN from '../../assets/images/editBTN.png';
import {stylesUserDetail} from './stylesUserDetail';
import {ActivityIndicator} from 'react-native';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {faChevronLeft} from '@fortawesome/free-solid-svg-icons';
import {EDITPROFILE, PAIDREGISTERFEE} from '../../navigation/routeNames';
import {DetailProductStyles} from '../Details/styles';

const UserStack = createStackNavigator();
export default class UserProfile extends Component {
  constructor(props) {
    super(props);
    this.state = {
      menu: 0,
      fullName: '',
      imageCardIdFront:
        'https://i.pinimg.com/564x/10/6b/bc/106bbc9e67028e763a54fea2d9e281e5.jpg',
      imageCardIdBack:
        'https://i.pinimg.com/originals/ee/60/17/ee6017a9ba89aa23ce0aa441376f113c.jpg',
      number: '',
      bankName: '',
      branch: '',
      ownerName: '',
      fullName: '',
      username: '',
      email: '',
      gender: '',
      province: '',
      district: '',
      commune: '',
      street: '',
      phone: '',
      dateOfBirth: '',
      isLoading: true,
      listProvince: [],
      nameProvince: '',
      listDistrict: [],
      nameDistrict: '',
      listCommune: [],
      nameCommune: '',
      status: '',
      transactionStatus: '',
      fakeTSTT: 0,
      showDoneBid: false,
      transactionCode: '',
      showmodal: false,
      isMounted: false,
      isBack: false,
    };
  }
  loadData() {
    let reg = new getUserInfo();
    this.setState({isLoading: true});
    reg
      .getUserInfo()
      .then(res => {
        if (res.data.success) {
          this.setState(
            {
              menu: 0,
              number: res.data.data.Data.bankResponse.number,
              bankName: res.data.data.Data.bankResponse.bankName,
              branch: res.data.data.Data.bankResponse.branch,
              ownerName: res.data.data.Data.bankResponse.ownerName,
              fullName:
                res.data.data.Data.firstName +
                ' ' +
                res.data.data.Data.middleName +
                ' ' +
                res.data.data.Data.lastName,
              username: res.data.data.Data.username,
              email: res.data.data.Data.email,
              gender: res.data.data.Data.sex,
              province: res.data.data.Data.province,
              district: res.data.data.Data.district,
              commune: res.data.data.Data.commune,
              street: res.data.data.Data.street,
              phone: res.data.data.Data.phone,
              dateOfBirth: res.data.data.Data.dateOfBirth,
              cardId: res.data.data.Data.cardId,
              imageCardIdFront: res.data.data.Data.imageCardIdFront,
              imageCardIdBack: res.data.data.Data.imageCardIdBack,
              status: res.data.data.Data.status,
              transactionStatus: res.data.data.Data.transactionStatus,
              transactionCode: res.data.data.Data.transactionCode,
              imageProfile: res.data.data.Data.imageProfile,
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
                  this.setState(
                    {
                      listDistrict: district,
                      listCommune: commune,
                      listProvince: province,
                    },
                    () => {
                      this.state.listDistrict.map((item, key) => {
                        if (item.idDistrict == this.state.district) {
                          this.setState({nameDistrict: item.name});
                        }
                      });
                      this.state.listCommune.map((item, key) => {
                        if (item.idCommune == this.state.commune) {
                          this.setState({nameCommune: item.name});
                        }
                      });
                      this.state.listProvince.map((item, key) => {
                        if (item.idProvince == this.state.province) {
                          this.setState({
                            nameProvince: item.name,
                            isLoading: false,
                          });
                        }
                      });
                    },
                  );
                })
                .catch(err => {
                  ToastAndroid.show('L???i h??? th???ng', 1);
                });
            },
          );
        } else {
          ToastAndroid.show('L???i h??? th???ng', 1);
        }
      })
      .catch(error => {
        ToastAndroid.show('L???i h??? th???ng', 1);
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

  UserDetailPrivate1 = () => {
    return (
      <ScrollView style={stylesUserDetail.container}>
        <View style={stylesUserDetail.row_container}>
          <View style={stylesUserDetail.column_text}>
            <Text style={stylesUserDetail.text_general}>S??? CMT/ CCCD</Text>
            <Text style={stylesUserDetail.text_user}>{this.state.cardId}</Text>
          </View>
        </View>
        <View
          style={[stylesUserDetail.row_container, {justifyContent: 'center'}]}>
          <Text style={[stylesUserDetail.text_general]}>???nh CMT/ CCCD</Text>
        </View>
        <View style={[stylesUserDetail.row_container]}>
          <View style={stylesUserDetail.column_text}>
            <Text style={stylesUserDetail.text_user}>M???t tr?????c</Text>
            <Image
              source={{uri: this.state.imageCardIdFront}}
              style={stylesUserDetail.cmnd}
            />
          </View>
          <View style={stylesUserDetail.column_text}>
            <Text style={stylesUserDetail.text_user}>M???t sau</Text>
            <Image
              source={{uri: this.state.imageCardIdBack}}
              style={stylesUserDetail.cmnd}
            />
          </View>
        </View>
      </ScrollView>
    );
  };

  UserDetailBidding1 = () => {
    return (
      <ScrollView style={stylesUserDetail.container}>
        <View style={stylesUserDetail.row_container}>
          <View style={stylesUserDetail.column_text}>
            <Text style={stylesUserDetail.text_general}>Lo???i t??i kho???n</Text>
            <Text style={stylesUserDetail.text_user}>Ng?????i mua</Text>
          </View>
          <View style={stylesUserDetail.column_text}>
            <Text style={stylesUserDetail.text_general}>
              Chi nh??nh ng??n h??ng
            </Text>
            <Text style={stylesUserDetail.text_user}>{this.state.branch}</Text>
          </View>
        </View>
        <View style={stylesUserDetail.row_container}>
          <View style={stylesUserDetail.column_text}>
            <Text style={stylesUserDetail.text_general}>
              S??? t??i kho???n ch??nh
            </Text>
            <Text style={stylesUserDetail.text_user}>{this.state.number}</Text>
          </View>
          <View style={stylesUserDetail.column_text}>
            <Text style={stylesUserDetail.text_general}>T??n ch??? t??i kho???n</Text>
            <Text style={stylesUserDetail.text_user}>
              {this.state.ownerName}
            </Text>
          </View>
        </View>
        <View style={stylesUserDetail.row_container}>
          <View style={stylesUserDetail.column_text}>
            <Text style={stylesUserDetail.text_general}>T??n ng??n h??ng</Text>
            <Text style={stylesUserDetail.text_user}>
              {this.state.bankName}
            </Text>
          </View>
        </View>
        <View style={stylesUserDetail.row_container}>
          <View style={stylesUserDetail.column_text}>
            <Text style={stylesUserDetail.text_general}>
              Ph?? ????ng k?? t??i kho???n
            </Text>
            {this.state.transactionStatus == 0 && (
              <View>
                <TouchableOpacity
                  onPress={() => {
                    Alert.alert(
                      'Tr???ng th??i t??i kho???n: CH??A THANH TO??N PH?? ????NG K?? T??I KHO???N',
                      'Qu?? kh??ch vui l??ng thanh to??n ph?? ????ng k?? t??i kho???n:\n' +
                        'S??? ti???n: 50.000??\n' +
                        'T??n t??i kho???n: C??ng ty ?????u gi?? Hola\n\n' +
                        'S??? t??i kho???n: 5010117720004\n\n' +
                        'T???i: Ng??n h??ng Qu??n ?????i MB Bank - Chi nh??nh ????ng H?? - Qu???ng Tr???\n\n' +
                        'N???i dung: ???' +
                        this.state.username +
                        ' ' +
                        this.state.transactionCode +
                        ' ' +
                        'n???p ph?? ????ng k?? t??i kho???n???.',
                      [
                        {
                          text: 'H???y',
                          style: 'cancel',
                        },
                        {
                          text: '???? g???i',
                          onPress: () => {
                            let reg = new paidRegisterFee();
                            reg
                              .paidRegisterFee()
                              .then(res => {
                                if (res.data.success) {
                                  ToastAndroid.show(
                                    'G???i y??u c???u th??nh c??ng',
                                    ToastAndroid.LONG,
                                  );
                                  this.setState({
                                    transactionStatus: 1,
                                    showDoneBid: false,
                                  });
                                } else {
                                  ToastAndroid.show(
                                    'G???i y??u c???u kh??ng th??nh c??ng.',
                                    ToastAndroid.LONG,
                                  );
                                  this.setState({showDoneBid: false});
                                }
                              })
                              .catch(error => {
                                ToastAndroid.show(
                                  'G???i y??u c???u kh??ng th??nh c??ng.',
                                  ToastAndroid.LONG,
                                );
                              });
                          },
                        },
                      ],
                    );
                  }}
                  style={[
                    stylesUserDetail.button_verify,
                    stylesUserDetail.color_noverify,
                  ]}>
                  <Image source={cancelIcon} style={{width: 20, height: 20}} />
                  <Text style={stylesUserDetail.text_verify}>
                    Ch??a thanh to??n
                  </Text>
                </TouchableOpacity>
                <Text style={{fontStyle: 'italic'}}>
                  B???m v??o ????? thanh to??n ph?? ????ng k??
                </Text>
              </View>
            )}
            {this.state.transactionStatus == 1 && (
              <View>
                <TouchableOpacity
                  onPress={() => {
                    Alert.alert(
                      'Tr???ng th??i t??i kho???n: ??ANG CH??? X??C TH???C',
                      'Qu?? kh??ch vui l??ng thanh to??n ph?? ????ng k?? t??i kho???n:\n' +
                        'S??? ti???n: 50.000??\n' +
                        'T??n t??i kho???n: C??ng ty ?????u gi?? Hola\n\n' +
                        'S??? t??i kho???n: 5010117720004\n\n' +
                        'T???i: Ng??n h??ng Qu??n ?????i MB Bank - Chi nh??nh ????ng H?? - Qu???ng Tr???\n\n' +
                        'N???i dung: ???' +
                        this.state.username +
                        ' ' +
                        this.state.transactionCode +
                        ' ' +
                        'n???p ph?? ????ng k?? t??i kho???n???.',
                      [
                        {
                          text: 'OK',
                          style: 'cancel',
                        },
                      ],
                    );
                  }}
                  style={[
                    stylesUserDetail.button_verify_transstt1,
                    stylesUserDetail.color_noverify,
                  ]}>
                  <Image source={cancelIcon} style={{width: 20, height: 20}} />
                  <Text style={stylesUserDetail.text_verify}>
                    ??ang ch??? x??c nh???n
                  </Text>
                </TouchableOpacity>
              </View>
            )}
            {this.state.transactionStatus == 2 && (
              <View
                style={[
                  stylesUserDetail.button_verify,
                  stylesUserDetail.color_verify,
                ]}>
                <Image source={verify} />
                <Text style={stylesUserDetail.text_verify}>???? x??c nh???n</Text>
              </View>
            )}
          </View>
        </View>
      </ScrollView>
    );
  };

  UserDetailGeneral1 = () => {
    function formatDate(date) {
      date = String(date).split(' ');
      var days = String(date[0]).split('-');
      return [
        parseInt(days[2]) + '/',
        parseInt(days[1]) + '/',
        parseInt(days[0]),
      ];
    }
    return (
      <ScrollView style={stylesUserDetail.container}>
        <View style={stylesUserDetail.row_container}>
          <View style={stylesUserDetail.column_text}>
            <Text style={stylesUserDetail.text_general}>T??n ????ng nh???p</Text>
            <Text style={stylesUserDetail.text_user}>
              {this.state.username}
            </Text>
          </View>
          <View style={stylesUserDetail.column_text}>
            <Text style={stylesUserDetail.text_general}>?????a ch???</Text>
            <Text style={stylesUserDetail.text_user}>
              {this.state.street} - {this.state.nameCommune} -{' '}
              {this.state.nameDistrict} - {this.state.nameProvince}
            </Text>
          </View>
        </View>
        <View style={stylesUserDetail.row_container}>
          <View style={stylesUserDetail.column_text}>
            <Text style={stylesUserDetail.text_general}>Email</Text>
            <Text style={stylesUserDetail.text_user}>{this.state.email}</Text>
          </View>
          <View style={stylesUserDetail.column_text}>
            <Text style={stylesUserDetail.text_general}>S??? ??i???n tho???i</Text>
            <Text style={stylesUserDetail.text_user}>{this.state.phone}</Text>
          </View>
        </View>
        <View style={stylesUserDetail.row_container}>
          <View style={stylesUserDetail.column_text}>
            <Text style={stylesUserDetail.text_general}>Gi???i t??nh</Text>
            <Text style={stylesUserDetail.text_user}>
              {this.state.gender ? 'Nam' : 'N???'}
            </Text>
          </View>
          <View style={stylesUserDetail.column_text}>
            <Text style={stylesUserDetail.text_general}>Ng??y sinh</Text>
            <Text style={stylesUserDetail.text_user}>
              {formatDate(this.state.dateOfBirth)}
            </Text>
          </View>
        </View>
        <View style={stylesUserDetail.row_container}>
          <View style={stylesUserDetail.column_text}>
            <Text style={stylesUserDetail.text_general}>
              Tr???ng th??i x??c th???c t??i kho???n
            </Text>
            {this.state.status == 1 && (
              <View>
                <TouchableOpacity
                  onPress={() => {
                    this.setState({menu: 1});
                    RootNavigation.navigate('B');
                  }}
                  style={[
                    stylesUserDetail.button_verify_stt1,
                    stylesUserDetail.color_noverify,
                  ]}>
                  <Image source={cancelIcon} style={{width: 20, height: 20}} />
                  <Text style={stylesUserDetail.text_verify}>
                    Ch??a x??c th???c t??i kho???n
                  </Text>
                </TouchableOpacity>
                <Text style={{fontStyle: 'italic'}}>
                  B???n c???n thanh to??n ph?? t??i kho???n tr?????c ????? ???????c x??c th???c
                </Text>
              </View>
            )}
            {this.state.status == 2 && (
              <View
                style={[
                  stylesUserDetail.button_verify,
                  stylesUserDetail.color_verify,
                ]}>
                <Image source={verify} />
                <Text style={stylesUserDetail.text_verify}>???? x??c th???c</Text>
              </View>
            )}
            {this.state.status == 3 && (
              <View style={{flexDirection: 'row'}}>
                <TouchableOpacity
                  style={[
                    stylesUserDetail.button_verify_stt3,
                    stylesUserDetail.color_noverify,
                  ]}>
                  <Image source={cancelIcon} style={{width: 20, height: 20}} />
                  <Text style={stylesUserDetail.text_verify}>
                    Th??ng tin c?? nh??n kh??ng ????ng
                  </Text>
                </TouchableOpacity>
                <Text style={{fontStyle: 'italic'}}>
                  H??y c???p nh???t l???i th??ng tin t??i kho???n
                </Text>
              </View>
            )}
            {this.state.status == 4 && (
              <View
                style={[
                  stylesUserDetail.button_verify_stt4,
                  stylesUserDetail.color_noverify,
                ]}>
                <Image source={cancelIcon} style={{width: 20, height: 20}} />
                <Text style={stylesUserDetail.text_verify}>
                  ??ang ch??? ph?? duy???t
                </Text>
              </View>
            )}
          </View>
        </View>
      </ScrollView>
    );
  };

  render() {
    return (
      <View style={styles.container}>
        <View style={styleUserProfile.headerView}>
          <View style={styleUserProfile.headerViewVW}>
            <TouchableOpacity
              style={{flexDirection: 'row', alignSelf: 'center'}}
              onPress={() => {
                if (!this.state.isBack) {
                  this.setState({isBack: true});
                  this.props.navigation.goBack();
                }
              }}>
              <FontAwesomeIcon
                style={{color: '#000000', marginLeft: -10}}
                icon={faChevronLeft}
                size={22}
              />
            </TouchableOpacity>
            <View style={{flex: 1, alignItems: 'center', alignSelf: 'center'}}>
              <Text style={styleUserProfile.headerTxt}>Th??ng tin c?? nh??n</Text>
            </View>
            <TouchableOpacity
              style={styleUserProfile.headerEditBTN}
              onPress={() => {
                if (!this.state.isLoading) {
                  Alert.alert(
                    'Th??ng b??o',
                    'Sau khi ch???nh s???a th??ng tin t??i s???n t??i kho???n c???a qu?? kh??ch s??? b??? v?? hi???u h??a t???m th???i\n' +
                      'Qu?? kh??ch c?? mu???n ti???p t???c?',
                    [
                      {
                        text: 'H???y',
                        style: 'cancel',
                      },
                      {
                        text: 'OK',
                        onPress: () => {
                          RootNavigation.navigate(EDITPROFILE);
                        },
                      },
                    ],
                  );
                }
              }}>
              <Image style={{alignSelf: 'center'}} source={editBTN} />
            </TouchableOpacity>
          </View>
        </View>
        {this.state.isLoading ? (
          <ActivityIndicator size="large" color="black" />
        ) : (
          <View style={styleUserProfile.user_container}>
            <View style={styleUserProfile.topUser}>
              <View style={styleUserProfile.avatar}>
                <Image
                  source={{
                    uri: this.state.imageProfile,
                  }}
                  style={styleUserProfile.img}
                  resizeMode="cover"
                />
              </View>
              <Text style={{fontWeight: 'bold', fontSize: 30}}>
                {this.state.fullName}
              </Text>
            </View>
            <View style={styleUserProfile.botUser}>
              <View style={styleUserProfile.menu}>
                <ScrollView
                  showsHorizontalScrollIndicator={false}
                  horizontal={true}>
                  <TouchableOpacity
                    onPress={() => {
                      if (this.state.menu != 0) {
                        this.setState({menu: 0});
                        RootNavigation.navigate('A');
                      }
                    }}>
                    <Text
                      style={[
                        styleUserProfile.textMenu,
                        this.state.menu == 0
                          ? styleUserProfile.textMenuSelected
                          : '',
                      ]}>
                      Th??ng tin chung
                    </Text>
                  </TouchableOpacity>
                  <TouchableOpacity
                    onPress={() => {
                      if (this.state.menu != 1) {
                        this.setState({menu: 1});
                        RootNavigation.navigate('B');
                      }
                    }}>
                    <Text
                      style={[
                        styleUserProfile.textMenu,
                        this.state.menu == 1
                          ? styleUserProfile.textMenuSelected
                          : '',
                      ]}>
                      Tr???ng th??i t??i kho???n
                    </Text>
                  </TouchableOpacity>
                  <TouchableOpacity
                    onPress={() => {
                      if (this.state.menu != 2) {
                        this.setState({menu: 2});
                        RootNavigation.navigate('C');
                      }
                    }}>
                    <Text
                      style={[
                        styleUserProfile.textMenu2,
                        this.state.menu == 2
                          ? styleUserProfile.textMenuSelected
                          : '',
                      ]}>
                      Th??ng tin ?????nh danh
                    </Text>
                  </TouchableOpacity>
                </ScrollView>
              </View>
              <View style={styleUserProfile.inforUser}>
                <UserStack.Navigator
                  screenOptions={{
                    headerShown: false,
                    cardStyleInterpolator:
                      CardStyleInterpolators.forHorizontalIOS,
                  }}>
                  <UserStack.Screen
                    name="A"
                    component={this.UserDetailGeneral1}
                  />
                  <UserStack.Screen
                    name="B"
                    component={this.UserDetailBidding1}
                  />
                  <UserStack.Screen
                    name="C"
                    component={this.UserDetailPrivate1}
                  />
                </UserStack.Navigator>
              </View>
            </View>
          </View>
        )}
      </View>
    );
  }
}
