import React, {Component} from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  ScrollView,
  ImageBackground,
  TextInput,
  Alert,
  ToastAndroid,
} from 'react-native';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {
  faGraduationCap,
  faPhoneAlt,
  faBuilding,
  faMapMarkerAlt,
  faInbox,
  faVoicemail,
} from '@fortawesome/free-solid-svg-icons';
import Header from '../common/Header';
import {sellingContactStyle} from './SellingContactStyle';
import contactSell from '../../services/contactSell';

export default class SellingContactScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      phone: '',
      email: '',
      place: '',
      details: '',
    };
  }
  componentDidMount() {
    this.focusListener = this.props.navigation.addListener('focus', () => {
      this.setState({
        name: '',
        phone: '',
        email: '',
        place: '',
        details: '',
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
      <View style={{flex: 1}}>
        <Header title="Liên hệ bán tài sản" />
        <ScrollView style={{flex: 1}} showsVerticalScrollIndicator={false}>
          <ImageBackground
            source={require('../../assets/images/backgroundSelling1.png')}
            style={sellingContactStyle.imageBackGroundStyle}></ImageBackground>
          <View style={sellingContactStyle.boderBlock}>
            <View style={sellingContactStyle.titleWrapContent}>
              <Text style={sellingContactStyle.titleStyle}>
                Liên hệ bán tài sản
              </Text>
              <Text>
                Hãy nhập đầy đủ thông tin cá nhân và thông tin chi tiết tài sản
                bạn muốn bán vào bên dưới
              </Text>
            </View>
            <View style={sellingContactStyle.nameTextBoxWrap}>
              <View style={sellingContactStyle.viewIcon}>
                <FontAwesomeIcon
                  size={16}
                  style={sellingContactStyle.iconStyle}
                  icon={faGraduationCap}
                />
              </View>
              <TextInput
                style={sellingContactStyle.contentStyle}
                placeholder="Họ và tên"
                onChangeText={text => {
                  this.setState({name: text});
                }}
              />
            </View>
            <View style={sellingContactStyle.nameTextBoxWrap}>
              <View style={sellingContactStyle.viewIcon}>
                <FontAwesomeIcon
                  size={16}
                  style={sellingContactStyle.iconStyle}
                  icon={faPhoneAlt}
                />
              </View>
              <TextInput
                onChangeText={text => {
                  this.setState({phone: text});
                }}
                keyboardType="numeric"
                style={sellingContactStyle.contentStyle}
                placeholder="Số điện thoại"
              />
            </View>
            <View style={sellingContactStyle.nameTextBoxWrap}>
              <View style={sellingContactStyle.viewIcon}>
                <FontAwesomeIcon
                  size={16}
                  style={sellingContactStyle.iconStyle}
                  icon={faBuilding}
                />
              </View>
              <TextInput
                onChangeText={text => {
                  this.setState({place: text});
                }}
                style={sellingContactStyle.contentStyle}
                placeholder="Nơi công tác"
              />
            </View>
            <View style={sellingContactStyle.nameTextBoxWrap}>
              <View style={sellingContactStyle.viewIcon}>
                <FontAwesomeIcon
                  size={16}
                  style={sellingContactStyle.iconStyle}
                  icon={faVoicemail}
                />
              </View>
              <TextInput
                onChangeText={text => {
                  this.setState({email: text});
                }}
                style={sellingContactStyle.contentStyle}
                placeholder="Địa chỉ email"></TextInput>
            </View>
            <View style={[sellingContactStyle.nameTextBoxWrap, {height: 200}]}>
              <TextInput
                onChangeText={text => {
                  this.setState({details: text});
                }}
                multiline
                numberOfLines={4}
                style={[
                  sellingContactStyle.contentStyle,
                  {textAlignVertical: 'top'},
                ]}
                placeholder="Thông tin chi tiết"
              />
            </View>
            <TouchableOpacity
              style={sellingContactStyle.button}
              onPress={() => {
                let check = true;
                if (
                  !this.state.name
                    .trim()
                    .match(
                      '^[a-zA-ZÀÁÂÃÈÉÊÌÍÒÓÔÕÙÚĂĐĨŨƠàáâãèéêìíòóôõùúăđĩũơƯĂẠẢẤẦẨẪẬẮẰẲẴẶẸẺẼỀỀỂẾưăạảấầẩẫậắằẳẵặẹẻẽềềểếỄỆỈỊỌỎỐỒỔỖỘỚỜỞỠỢỤỦỨỪễệỉịọỏốồổỗộớờởỡợụủứừỬỮỰỲỴÝỶỸửữựỳỵỷỹsW|_ ]+$',
                    ) ||
                  this.state.name.trim().toString() == ''
                ) {
                  check = false;
                  return Alert.alert('Tên không hợp lệ');
                }
                if (
                  !this.state.phone
                    .trim()
                    .match('(84|0[1|3|5|7|8|9])+([0-9]{8})$')
                ) {
                  check = false;
                  return Alert.alert('Số điện thoại không hợp lệ.');
                }
                if (
                  !this.state.place
                    .trim()
                    .match(
                      '^[a-zA-Z0-9ÀÁÂÃÈÉÊÌÍÒÓÔÕÙÚĂĐĨŨƠàáâãèéêìíòóôõùúăđĩũơƯĂẠẢẤẦẨẪẬẮẰẲẴẶẸẺẼỀỀỂẾưăạảấầẩẫậắằẳẵặẹẻẽềềểếỄỆỈỊỌỎỐỒỔỖỘỚỜỞỠỢỤỦỨỪễệỉịọỏốồổỗộớờởỡợụủứừỬỮỰỲỴÝỶỸửữựỳỵỷỹsW|_ ]+$',
                    ) ||
                  this.state.place.trim() == ''
                ) {
                  check = false;
                  return Alert.alert('Nơi công tác không hợp lệ');
                }
                if (
                  !this.state.email
                    .trim()
                    .match(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/)
                ) {
                  check = false;
                  return Alert.alert('Email không hợp lệ');
                }
                if (
                  !this.state.details
                    .trim()
                    .match(
                      '^[a-zA-Z0-9ÀÁÂÃÈÉÊÌÍÒÓÔÕÙÚĂĐĨŨƠàáâãèéêìíòóôõùúăđĩũơƯĂẠẢẤẦẨẪẬẮẰẲẴẶẸẺẼỀỀỂẾưăạảấầẩẫậắằẳẵặẹẻẽềềểếỄỆỈỊỌỎỐỒỔỖỘỚỜỞỠỢỤỦỨỪễệỉịọỏốồổỗộớờởỡợụủứừỬỮỰỲỴÝỶỸửữựỳỵỷỹsW|_ ]+$',
                    ) ||
                  this.state.details.trim() == ''
                ) {
                  check = false;
                  return Alert.alert('Thông tin không hợp lệ');
                }
                if (check) {
                  let reg = new contactSell();
                  reg
                    .createContactSell({
                      address: this.state.place,
                      email: this.state.email,
                      owner: this.state.name,
                      phone: this.state.phone,
                      propertyDescription: this.state.details,
                    })
                    .then(res => {
                      if (!res.data.success) {
                        return Alert.alert('Tải lên sản phẩm bị lỗi');
                      } else {
                        Alert.alert('Tải lên sản phẩm thành công');
                        this.setState({
                          name: '',
                          phone: '',
                          email: '',
                          place: '',
                          details: '',
                        });
                      }
                    });
                }
              }}>
              <Text style={sellingContactStyle.addRequest}>
                Gửi thông tin yêu cầu bán tài sản
              </Text>
            </TouchableOpacity>
          </View>
          <ImageBackground
            source={require('../../assets/images/backgroundSelling2.png')}
            style={sellingContactStyle.imageBackGroundStyle}
          />
          <View>
            <View style={sellingContactStyle.footerWrapContent}>
              <View style={sellingContactStyle.footerContentStyle}>
                <FontAwesomeIcon
                  size={16}
                  color="#fff"
                  style={sellingContactStyle.footerIconStyle}
                  icon={faMapMarkerAlt}
                />
                <Text style={sellingContactStyle.footerContent}>
                  Đại học FPT, xã Thạch Hòa, huyện Thạch Thất, Thành Phố Hà Nội{' '}
                </Text>
              </View>
              <View style={sellingContactStyle.footerContentStyle}>
                <FontAwesomeIcon
                  size={16}
                  color="#fff"
                  style={sellingContactStyle.footerIconStyle}
                  icon={faInbox}
                />
                <Text style={sellingContactStyle.footerContent}>
                  Daugiafpt@gmail.com
                </Text>
              </View>
              <View style={sellingContactStyle.footerContentStyle}>
                <FontAwesomeIcon
                  size={16}
                  color="#fff"
                  style={sellingContactStyle.footerIconStyle}
                  icon={faPhoneAlt}
                />
                <Text style={sellingContactStyle.footerContent}>
                  0328400961
                </Text>
              </View>
            </View>
          </View>
        </ScrollView>
      </View>
    );
  }
}
