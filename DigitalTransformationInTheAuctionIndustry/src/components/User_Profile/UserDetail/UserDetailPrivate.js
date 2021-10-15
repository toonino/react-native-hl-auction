import React, {Component} from 'react';
import {stylesUserDetail} from '../stylesUserDetail';
import verify from '../../../assets/images/verify.png';
import {View, Text, Image, ScrollView} from 'react-native';
import getUserInfo from '../../../services/getUserInfo';
export default class UserDetailPrivate extends Component {
  constructor(props) {
    super(props);
    this.state = {
      cardId: '',
      imageCardIdFront:
        'https://i.pinimg.com/564x/10/6b/bc/106bbc9e67028e763a54fea2d9e281e5.jpg',
      imageCardIdBack:
        'https://i.pinimg.com/originals/ee/60/17/ee6017a9ba89aa23ce0aa441376f113c.jpg',
    };
  }
  

  render() {
    return (
      <ScrollView style={stylesUserDetail.container}>
        <View style={stylesUserDetail.row_container}>
          <View style={stylesUserDetail.column_text}>
            <Text style={stylesUserDetail.text_general}>Số chứng minh thư</Text>
            <Text style={stylesUserDetail.text_user}>{this.state.cardId}</Text>
          </View>
        </View>
        <View
          style={[stylesUserDetail.row_container, {justifyContent: 'center'}]}>
          <Text style={[stylesUserDetail.text_general]}>
            CMND/ Thẻ căn cước/Hộ chiếu
          </Text>
        </View>
        <View style={[stylesUserDetail.row_container]}>
          <View style={stylesUserDetail.column_text}>
            <Text style={stylesUserDetail.text_user}>Mặt trước</Text>
            <Image
              source={{uri: this.state.imageCardIdFront}}
              style={stylesUserDetail.cmnd}
            />
          </View>
          <View style={stylesUserDetail.column_text}>
            <Text style={stylesUserDetail.text_user}>Mặt sau</Text>
            <Image
              source={{uri: this.state.imageCardIdBack}}
              style={stylesUserDetail.cmnd}
            />
          </View>
        </View>
      </ScrollView>
    );
  }
}
