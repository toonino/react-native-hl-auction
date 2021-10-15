import React, {Component, useEffect, useState} from 'react';
import {
  Text,
  TouchableOpacity,
  View,
  ActivityIndicator,
  FlatList,
  Image,
  ScrollView,
  ImageBackground,
  ToastAndroid,
} from 'react-native';
import {categoryList} from '../../i18n/vietnamese';
import {categoryStyle} from './styles';
import HeaderLoginRegister from '../common/HeaderLoginRegister/HeaderLoginRegister';
import {HeaderLogo} from '../common/HeaderLogo/headerLogo';
import {styles} from '../../shared/styles';
import * as RootNavigation from '../../navigation/rootNavigator';
import {SEARCH2} from '../../navigation/routeNames';
import Footer from '../common/Footer';
import listPropertyCategory from '../../services/listPropertyCategory';
import notReadNotification from '../../services/notReadNotification';
import AsyncStorage from '@react-native-community/async-storage';

const VertiList = () => {
  return (
    <ScrollView
      showsVerticalScrollIndicator={false}
      showsHorizontalScrollIndicator={false}
      style={categoryStyle.scroll}>
      <View style={categoryStyle.flexCol}>
        <TouchableOpacity
          onPress={() => {
            RootNavigation.navigate(SEARCH2, {
              categoryId: 543,
              keyword: '',
              maxPrice: null,
              minPrice: null,
              page: 1,
              per_page: 5,
              typeSort: 0,
            });
          }}
          style={categoryStyle.category1}>
          <ImageBackground
            source={require('../../assets/images/IMGtaisancong.png')}
            style={categoryStyle.img}
            imageStyle={{borderRadius: 12}}>
            <Text style={categoryStyle.textIMGBG}>Tài sản thanh lý</Text>
          </ImageBackground>
        </TouchableOpacity>
        <View
          style={[categoryStyle.alignSelfCenter, styles.w90, styles.flexRow]}>
          <View style={[styles.mr2, styles.w48, {height: 375}]}>
            <TouchableOpacity
              onPress={() => {
                RootNavigation.navigate(SEARCH2, {
                  categoryId: 544,
                  keyword: '',
                  maxPrice: null,
                  minPrice: null,
                  page: 1,
                  per_page: 5,
                  typeSort: 0,
                });
              }}
              style={[
                styles.w100,
                categoryStyle.category2,
                categoryStyle.mb15,
              ]}>
              <ImageBackground
                imageStyle={{borderRadius: 12}}
                source={require('../../assets/images/IMGOto.png')}
                style={categoryStyle.img}>
                <Text style={[categoryStyle.textIMGBG, {fontSize: 28}]}>
                  Ô tô
                </Text>
              </ImageBackground>
            </TouchableOpacity>
            <TouchableOpacity
              style={[styles.w100, categoryStyle.category2]}
              onPress={() => {
                RootNavigation.navigate(SEARCH2, {
                  categoryId: 546,
                  keyword: '',
                  maxPrice: null,
                  minPrice: null,
                  page: 1,
                  per_page: 5,
                  typeSort: 0,
                });
              }}>
              <ImageBackground
                imageStyle={{borderRadius: 12}}
                source={require('../../assets/images/IMGNgheThuat.png')}
                style={categoryStyle.img}>
                <Text style={[categoryStyle.textIMGBG, {fontSize: 28}]}>
                  Nghệ thuật
                </Text>
              </ImageBackground>
            </TouchableOpacity>
          </View>
          <TouchableOpacity
            onPress={() => {
              RootNavigation.navigate(SEARCH2, {
                categoryId: 545,
                keyword: '',
                maxPrice: null,
                minPrice: null,
                page: 1,
                per_page: 5,
                typeSort: 0,
              });
            }}
            style={[styles.w48, categoryStyle.h375, styles.ml2]}>
            <ImageBackground
              imageStyle={{borderRadius: 12}}
              source={require('../../assets/images/IMGBatdongsan.png')}
              style={categoryStyle.img}>
              <Text style={categoryStyle.textIMGBG}>Bất động sản</Text>
            </ImageBackground>
          </TouchableOpacity>
        </View>
        <View
          style={[
            styles.w90,
            categoryStyle.mt15,
            styles.flexRow,
            categoryStyle.alsC,
          ]}>
          <TouchableOpacity
            onPress={() => {
              RootNavigation.navigate(SEARCH2, {
                categoryId: 547,
                keyword: '',
                maxPrice: null,
                minPrice: null,
                page: 1,
                per_page: 5,
                typeSort: 0,
              });
            }}
            style={[styles.w48, categoryStyle.category2, styles.mr2]}>
            <ImageBackground
              imageStyle={{borderRadius: 12}}
              source={require('../../assets/images/IMGHanghieu.png')}
              style={categoryStyle.img}>
              <Text style={[categoryStyle.textIMGBG, {fontSize: 28}]}>
                Hàng hiệu
              </Text>
            </ImageBackground>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => {
              RootNavigation.navigate(SEARCH2, {
                categoryId: null,
                keyword: '',
                maxPrice: null,
                minPrice: null,
                page: 1,
                per_page: 5,
                typeSort: 0,
              });
            }}
            style={[styles.w48, styles.ml2, categoryStyle.category2]}>
            <ImageBackground
              imageStyle={{borderRadius: 12}}
              source={require('../../assets/images/IMGKhac.png')}
              style={categoryStyle.img}>
              <Text style={[categoryStyle.textIMGBG, {fontSize: 28}]}>
                Tất cả
              </Text>
            </ImageBackground>
          </TouchableOpacity>
        </View>
      </View>
    </ScrollView>
  );
};
export default class CategoryScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
      isAuthen: false,
      isMounted: false,
      isLoading: true,
      data: [],
    };
  }
  getAllPropertyCategory = () => {
    let reg = new listPropertyCategory();
    reg
      .listPropertyCategory(1, 10000, 1)
      .then(res => {
        if (res.data.success) {
          this.setState({data: res.data.data.Data, isLoading: false});
        } else {
          ToastAndroid.show('Lỗi hệ thống', 1000);
        }
      })
      .catch(error => {
        ToastAndroid.show('Lỗi hệ thống', 1000);
      });
  };
  HoriList = () => {
    const renderItem = ({item, index}) => {
      return (
        <TouchableOpacity
          style={index == 0 ? categoryStyle.item2 : categoryStyle.item}
          onPress={() => {
            RootNavigation.navigate(SEARCH2, {
              categoryId: item.id,
              keyword: '',
              maxPrice: null,
              minPrice: null,
              page: 1,
              per_page: 5,
              typeSort: 0,
            });
          }}>
          <View
            style={[
              categoryStyle.colImg,
              {
                backgroundColor: 'white',
                elevation: 5,
                shadowColor: 'black',
                borderRadius: 15,
              },
            ]}>
            <Image source={{uri: item.image}} style={categoryStyle.img} />
          </View>
          <Text style={categoryStyle.colText}>{item.name}</Text>
        </TouchableOpacity>
      );
    };

    return (
      <FlatList
        data={this.state.data}
        renderItem={renderItem}
        keyExtractor={item => item.id}
        showsVerticalScrollIndicator={false}
        showsHorizontalScrollIndicator={false}
        onEndReachedThreshold={0}
        horizontal
      />
    );
  };
  notReadNotification() {
    let reg = new notReadNotification();
    reg
      .notReadNotification()
      .then(res => {
        if (res.data.success) {
          if (this.state.count != res.data.data.Data.totalRecords)
            this.setState({count: res.data.data.Data.totalRecords});
        } else {
          ToastAndroid.show('Lỗi hệ thống', 1000);
        }
      })
      .catch(error => {
        ToastAndroid.show('Lỗi hệ thống', 1000);
      });
  }
  componentDidUpdate(prevProps, prevState) {
    AsyncStorage.getItem('jwttoken').then(item => {
      if (item != null) {
        this.notReadNotification();
        if (!prevState.isAuthen) {
          this.setState({isAuthen: true});
        }
      } else {
        if (prevState.isAuthen) this.setState({isAuthen: false});
      }
    });
  }
  componentDidMount() {
    this.focusListener = this.props.navigation.addListener('focus', () => {
      this.setState({isMounted: true});
      this.getAllPropertyCategory();
    });
  }
  componentWillUnmount() {
    this.focusListener();
    this.setState({isMounted: false});
    this.setState = (state, callback) => {
      return;
    };
  }
  render() {
    return (
      <View style={styles.container}>
        <HeaderLogo
          navigator={this.props.navigation}
          count={this.state.count}
          isAuthen={this.state.isAuthen}
        />
        <View
          style={{
            marginTop: 20,
            marginLeft: 25,
            marginBottom: 20,
            backgroundColor: 'white',
          }}>
          <Text style={{fontSize: 24, fontWeight: 'bold'}}>Danh mục</Text>
        </View>
        <View style={{marginBottom: 10, width: '90%', alignSelf: 'center'}}>
          {this.state.isLoading ? (
            <ActivityIndicator size="large" color="black" />
          ) : (
            this.HoriList()
          )}
        </View>
        <VertiList></VertiList>
        <Footer tab="2" />
      </View>
    );
  }
}
