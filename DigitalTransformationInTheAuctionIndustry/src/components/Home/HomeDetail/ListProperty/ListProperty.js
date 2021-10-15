import React, {Component, useState, useEffect} from 'react';
import {
  View,
  FlatList,
  ActivityIndicator,
  Text,
  Image,
  TouchableOpacity,
  TextInput,
  Alert,
  Linking,
} from 'react-native';
import {ListPropertyStyle} from './ListPropertyStyle';
import {HomeDetailStyles} from '../HomeDetailStyles';
import * as RootNavigation from '../../../../navigation/rootNavigator';
import {ScrollView} from 'react-native-gesture-handler';
import moment from 'moment';
import {
  NEWS,
  SEARCH2,
  DETAILS,
  NEWSFEED,
  CATEGORY,
  NOINTERNET,
} from '../../../../navigation/routeNames';
import ListNews from '../../../../services/listNews';
import listPropertyCategory from '../../../../services/listPropertyCategory';
import searchPropertyForUser from '../../../../services/searchPropertyForUser';
import NetInfo from '@react-native-community/netinfo';
export default class ListProperty extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoadingList1: true,
      dataList1: [],
      isLoadingList2: true,
      dataList2: [],
      isLoadingList3: true,
      dataList3: [],
    };
  }
  formatDate(date) {
    return moment(date).format('DD/MM/yyyy HH:mm:ss');
  }
  formatMoney(money) {
    var x;
    x = money.toString().replace(/(\d)(?=(\d\d\d)+(?!\d))/g, '$1.');
    return x + ' đ';
  }
  Property = () => {
    let reg = new searchPropertyForUser();
    reg
      .searchPropertyForUser(null, '', null, null, 1, 5, 0)
      .then(res => {
        if (res.data.success) {
          this.setState({dataList1: res.data.data.Data});
        } else {
          ToastAndroid.show('Lỗi hệ thống', 1);
        }
      })
      .catch(error => {
        ToastAndroid.show('Lỗi hệ thống', 1);
      })
      .finally(() => {
        this.setState({isLoadingList1: false});
      });
  };
  List1 = () => {
    const renderItem = ({item, index}) => {
      function replaceString(fullS) {
        if (fullS.length <= 20) return fullS;
        return fullS.substring(0, 19) + ' ...';
      }
      return (
        <TouchableOpacity
          style={
            index == 0
              ? ListPropertyStyle.list1View
              : ListPropertyStyle.list12View
          }
          onPress={() => {
            RootNavigation.navigate(DETAILS, {id: item.id});
          }}>
          <Image
            style={ListPropertyStyle.list1IMG}
            source={{uri: item.image}}
            resizeMode="cover"
          />
          <View style={{flex: 1, width: '90%', alignSelf: 'center'}}>
            <Text numberOfLines={1} style={ListPropertyStyle.list1Txt}>
              {item.name}
            </Text>
            <View style={ListPropertyStyle.list1View2}>
              <Text style={ListPropertyStyle.list1Txt2}>
                <Image
                  source={require('../../../../assets/images/imageClock.png')}
                />
                {'  '}
                {this.formatDate(item.openTime)}
              </Text>
            </View>
            <Text style={ListPropertyStyle.list1Txt3}>
              <Image
                source={require('../../../../assets/images/iconMoney.png')}
              />
              {'  '}
              {this.formatMoney(item.startPrice)}
            </Text>
          </View>
        </TouchableOpacity>
      );
    };
    return (
      <View style={{marginBottom: 10}}>
        {this.state.isLoadingList1 ? (
          <ActivityIndicator size="large" color="black" />
        ) : (
          <FlatList
            data={this.state.dataList1}
            renderItem={renderItem}
            keyExtractor={item => item.id}
            showsVerticalScrollIndicator={false}
            showsHorizontalScrollIndicator={false}
            horizontal
          />
        )}
      </View>
    );
  };
  getAllPropertyCategory = () => {
    let reg = new listPropertyCategory();
    reg
      .listPropertyCategory(1, 10000, 1)
      .then(res => {
        if (res.data.success) {
          this.setState({dataList2: res.data.data.Data});
        } else {
          ToastAndroid.show('Lỗi hệ thống', 1);
        }
      })
      .catch(error => {
        ToastAndroid.show('Lỗi hệ thống', 1);
      })
      .finally(() => {
        this.setState({isLoadingList2: false});
      });
  };
  List2 = () => {
    const renderItem = ({item, index}) => {
      return (
        <TouchableOpacity
          style={
            index == 0
              ? ListPropertyStyle.list2View2
              : ListPropertyStyle.list2View
          }
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
              ListPropertyStyle.list2ViewView,
              {
                backgroundColor: 'white',
                elevation: 5,
                shadowColor: 'black',
                borderRadius: 15,
              },
            ]}>
            <Image
              source={{uri: item.image}}
              style={ListPropertyStyle.list2ViewImg}
            />
          </View>
          <Text style={ListPropertyStyle.list2ViewTxt}>{item.name}</Text>
        </TouchableOpacity>
      );
    };
    return (
      <View style={{marginBottom: 10}}>
        {this.state.isLoadingList2 ? (
          <ActivityIndicator size="large" color="black" />
        ) : (
          <FlatList
            data={this.state.dataList2}
            renderItem={renderItem}
            keyExtractor={item => item.id}
            showsVerticalScrollIndicator={false}
            showsHorizontalScrollIndicator={false}
            onEndReachedThreshold={0}
            horizontal
          />
        )}
      </View>
    );
  };
  getAllNews = () => {
    let reg = new ListNews();
    reg
      .ListNews(0, 1, 5, 0)
      .then(res => {
        if (res.data.success) {
          this.setState({dataList3: res.data.data.Data});
        } else {
          ToastAndroid.show('Lỗi hệ thống', 1);
        }
      })
      .catch(error => {
        ToastAndroid.show('Lỗi hệ thống', 1);
      })
      .finally(() => {
        this.setState({isLoadingList3: false});
      });
  };
  List3 = () => {
    const renderItem = ({item, index}) => {
      return (
        <TouchableOpacity
          style={
            index == 0
              ? ListPropertyStyle.list3View
              : ListPropertyStyle.list32View
          }
          onPress={() => {
            RootNavigation.navigate(NEWS, {id: item.id});
          }}>
          <View
            style={{
              width: '100%',
              height: 120,
              borderRadius: 15,
              borderColor: '#989898',
              elevation: 5,
              shadowColor: 'black',
            }}>
            <Image
              style={ListPropertyStyle.list3IMG}
              source={{uri: item.image}}
              resizeMode="cover"
            />
          </View>
          <Text numberOfLines={1} style={ListPropertyStyle.list3Txt}>
            {item.title}
          </Text>
          <View style={ListPropertyStyle.list3View2}>
            <Text style={ListPropertyStyle.list3Txt2}>
              <Image
                source={require('../../../../assets/images/imageClock.png')}
              />{' '}
              {this.formatDate(item.createTime)}
            </Text>
            <Text style={ListPropertyStyle.list3Txt2}>
              <Image
                source={require('../../../../assets/images/imageAuthor.png')}
              />{' '}
              {item.createUser}
            </Text>
          </View>
        </TouchableOpacity>
      );
    };

    return (
      <View style={{marginBottom: 10}}>
        {this.state.isLoadingList3 ? (
          <ActivityIndicator size="large" color="black" />
        ) : (
          <FlatList
            data={this.state.dataList3}
            renderItem={renderItem}
            keyExtractor={item => item.id}
            showsVerticalScrollIndicator={false}
            showsHorizontalScrollIndicator={false}
            onEndReachedThreshold={0}
            horizontal
          />
        )}
      </View>
    );
  };
  componentDidMount() {
    this.focusListener = this.props.navigation.addListener('focus', () => {
      this.Property();
      this.getAllPropertyCategory();
      this.getAllNews();
    });
  }
  componentWillUnmount() {
    this.focusListener();
  }

  render() {
    return (
      <View style={HomeDetailStyles.container}>
        <ScrollView
          showsVerticalScrollIndicator={false}
          style={ListPropertyStyle.list_container}>
          <View style={[ListPropertyStyle.viewTextContainer, {marginTop: 0}]}>
            <Text style={ListPropertyStyle.text1Container}>
              Tài sản đấu giá
            </Text>
            <Text
              style={ListPropertyStyle.text2Container}
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
              }}>
              Xem thêm
            </Text>
          </View>
          {this.List1()}
          <View style={ListPropertyStyle.viewTextContainer}>
            <Text style={ListPropertyStyle.text1Container}>Danh mục</Text>
            <Text
              style={ListPropertyStyle.text2Container}
              onPress={() => {
                RootNavigation.navigate(CATEGORY);
              }}>
              Xem thêm
            </Text>
          </View>
          {this.List2()}
          <View style={ListPropertyStyle.viewTextContainer}>
            <Text style={ListPropertyStyle.text1Container}>Tin tức</Text>
            <Text
              style={ListPropertyStyle.text2Container}
              onPress={() => {
                RootNavigation.navigate(NEWSFEED);
              }}>
              Xem thêm
            </Text>
          </View>
          {this.List3()}
        </ScrollView>
      </View>
    );
  }
}
