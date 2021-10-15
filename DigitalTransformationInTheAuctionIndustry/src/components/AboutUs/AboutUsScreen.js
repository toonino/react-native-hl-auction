import React, {Component} from 'react';
import {
  View,
  Text,
  ImageBackground,
  TouchableOpacity,
  ScrollView,
} from 'react-native';

import Header from '../common/Header';
import Footer from '../common/Footer';
import {aboutUsStyle} from './AboutUsStyle';

export default class AboutUsScreen extends Component {
  state = {
    showMore: false,
  };

  toggleShowMore = () => {
    // Alert.alert(this.state.showMore ? '0' : '1');
    this.setState({showMore: !this.state.showMore});
  };

  render() {
    return (
      <View style={aboutUsStyle.container}>
        <Header title="Về chúng tôi" />
        <View style={{flex: 1}}>
          <ImageBackground
            resizeMode="cover"
            source={require('../../assets/images/backgroundAboutUs.png')}
            style={aboutUsStyle.backgroundImageStyle}>
            <ScrollView
              style={aboutUsStyle.mainBlockStyle}
              showsVerticalScrollIndicator={false}>
              <View style={aboutUsStyle.titleWrapContent}>
                <Text style={aboutUsStyle.titleStyle}>ĐẤU GIÁ HÒA LẠC</Text>
                <Text
                  numberOfLines={this.state.showMore ? 0 : 16}
                  style={aboutUsStyle.contentStyle}>
                  Trong xu thế phát triển tất yếu của nghề “Bán đấu giá”, Công
                  ty Đấu giá Hợp danh Hòa Lạc đã được hình thành. Với một Hội
                  đồng cố vấn gồm các chuyên viên đấu giá, luật sư nhiều năm
                  kinh nghiệm và được điều hành bởi các đấu giá viên chuyên
                  nghiệp của Bộ Tư pháp.{'\n\n'}
                  Chúng tôi là một trong 18 đơn vị bán đáu giá chuyên nghiệp
                  trên địa bàn thành phố Hà Nội được Sở Tư pháp Thành phố Hà Nội
                  tổng hợp trong báo cáo số 35/BC-STP, ngày 15 tháng 8 năm 2011.
                  {'\n\n'}
                  Chúng tôi là một trong 18 đơn vị bán đáu giá chuyên nghiệp
                  trên địa bàn thành phố Hà Nội được Sở Tư pháp Thành phố Hà Nội
                  tổng hợp trong báo cáo số 35/BC-STP, ngày 15 tháng 8 năm 2011.
                  {'\n\n'}
                  Chúng tôi là một trong 18 đơn vị bán đáu giá chuyên nghiệp
                  trên địa bàn thành phố Hà Nội được Sở Tư pháp Thành phố Hà Nội
                  tổng hợp trong báo cáo số 35/BC-STP, ngày 15 tháng 8 năm 2011.
                  {'\n\n'}
                  Chúng tôi là một trong 18 đơn vị bán đáu giá chuyên nghiệp
                  trên địa bàn thành phố Hà Nội được Sở Tư pháp Thành phố Hà Nội
                  tổng hợp trong báo cáo số 35/BC-STP, ngày 15 tháng 8 năm 2011.
                  {'\n\n'}
                </Text>
              </View>
              <TouchableOpacity onPress={this.toggleShowMore}>
                <View style={aboutUsStyle.button}>
                  <Text style={aboutUsStyle.readMore}>
                    {this.state.showMore ? 'Thu gọn' : 'Đọc thêm'}
                  </Text>
                </View>
              </TouchableOpacity>
            </ScrollView>
          </ImageBackground>
        </View>
      </View>
    );
  }
}
