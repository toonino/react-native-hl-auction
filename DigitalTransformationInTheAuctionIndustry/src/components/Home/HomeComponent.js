import React, {Component} from 'react';
import {
  View,
  FlatList,
  ActivityIndicator,
  Text,
  Image,
  TouchableOpacity,
  RefreshControl,
  ToastAndroid,
  TextInput,
} from 'react-native';
import {
  NEWS,
  SEARCH2,
  DETAILS,
  NEWSFEED,
  CATEGORY,
} from '../../navigation/routeNames';
import Footer from '../common/Footer';
import {HeaderLogo} from '../common/HeaderLogo/headerLogo';
import listPropertyCategory from '../../services/listPropertyCategory';
import searchPropertyForUser from '../../services/searchPropertyForUser';
import ListNews from '../../services/listNews';
import {HomeStyles} from './HomeStyles';
import {styles} from '../../shared/styles';
import {HomeDetailStyles} from './HomeDetail/HomeDetailStyles';
import {ScrollView} from 'react-native-gesture-handler';
import moment from 'moment';
import {ListPropertyStyle} from './HomeDetail/ListProperty/ListPropertyStyle';
import * as RootNavigation from '../../navigation/rootNavigator';
import notReadNotification from '../../services/notReadNotification';
import AsyncStorage from '@react-native-community/async-storage';
export default class HomeComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoadingList1: true,
      dataList1: [],
      isLoadingList2: true,
      dataList2: [],
      isLoadingList3: true,
      dataList3: [],
      count: 0,
      isLoading: false,
      isAuthen: false,
      isMounted: false,
    };
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
          this.setState({dataList1: res.data.data.Data, isLoadingList1: false});
        } else {
          ToastAndroid.show('Lỗi hệ thống', 1000);
        }
      })
      .catch(error => {
        ToastAndroid.show('Lỗi hệ thống', 1000);
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
                <Image source={require('../../assets/images/imageClock.png')} />
                {'  '}
                {this.formatDate(item.openTime)}
              </Text>
            </View>
            <Text style={ListPropertyStyle.list1Txt3}>
              <Image source={require('../../assets/images/iconMoney.png')} />
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
          this.setState({dataList2: res.data.data.Data, isLoadingList2: false});
        } else {
          ToastAndroid.show('Lỗi hệ thống', 1000);
        }
      })
      .catch(error => {
        ToastAndroid.show('Lỗi hệ thống', 1000);
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
          this.setState({dataList3: res.data.data.Data, isLoadingList3: false});    
        } else {
          ToastAndroid.show('Lỗi hệ thống', 1000);
        }
      })
      .catch(error => {
        ToastAndroid.show('Lỗi hệ thống', 1000);
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
              <Image source={require('../../assets/images/imageClock.png')} />{' '}
              {this.formatDate(item.createTime)}
            </Text>
            <Text style={ListPropertyStyle.list3Txt2}>
              <Image source={require('../../assets/images/imageAuthor.png')} />{' '}
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
      this.setState({isMounted: true});
    });
    this.focusListener = this.props.navigation.addListener('blur', () => {
      this.setState({isMounted: false});
    });
  }
  componentWillUnmount() {
    this.focusListener();
    this.setState({isMounted: false});
    this.setState = (state, callback) => {
      return;
    };
  }
  freshingMore = () => {
    this.setState(
      {
        isLoadingList1: true,
        dataList1: [],
        isLoadingList2: true,
        dataList2: [],
        isLoadingList3: true,
        dataList3: [],
        isLoading: true,
      },
      () => {
        this.Property();
        this.getAllPropertyCategory();
        this.getAllNews();
        this.notReadNotification();
        this.setState({isLoading: false});
      },
    );
  };
  goToSearch2 = () => {
    RootNavigation.navigate(SEARCH2, {
      categoryId: null,
      keyword: '',
      maxPrice: null,
      minPrice: null,
      page: 1,
      per_page: 5,
      typeSort: 0,
      isFocus: true,
    });
  };
  render() {
    return (
      <View style={styles.container}>
        <HeaderLogo
          navigator={this.props.navigation}
          count={this.state.count}
          isAuthen={this.state.isAuthen}
        />
        {this.state.isLoading ? (
          <ActivityIndicator size="large" color="black" />
        ) : (
          <View style={HomeStyles.main_container}>
            <TouchableOpacity
              onPress={() => {
                this.goToSearch2();
              }}
              style={{
                width: '90%',
                backgroundColor: '#EFEEEE',
                borderRadius: 30,
                height: 54,
                flexDirection: 'row',
                alignSelf: 'center',
                alignItems: 'center',
                justifyContent: 'center',
                marginBottom: 10,
              }}>
              <Image
                style={{
                  alignSelf: 'center',
                  width: 20,
                  height: 20,
                  marginRight: 'auto',
                  marginLeft: 20,
                }}
                source={require('../../assets/images/searchIcon.png')}
              />
              <TextInput
                style={{width: '80%', alignSelf: 'center', marginLeft: 30}}
                placeholder="Tìm kiếm"
                editable={false}
                onTouchStart={() => {
                  this.goToSearch2();
                }}
              />
            </TouchableOpacity>
            <View style={{flex: 1}}>
              <View style={HomeDetailStyles.container}>
                <ScrollView
                  refreshControl={
                    <RefreshControl
                      refreshing={this.state.isLoading}
                      onRefresh={this.freshingMore}
                    />
                  }
                  showsVerticalScrollIndicator={false}
                  style={ListPropertyStyle.list_container}>
                  <View
                    style={[
                      ListPropertyStyle.viewTextContainer,
                      {marginTop: 0},
                    ]}>
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
                    <Text style={ListPropertyStyle.text1Container}>
                      Danh mục
                    </Text>
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
                    <Text style={ListPropertyStyle.text1Container}>
                      Tin tức
                    </Text>
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
            </View>
          </View>
        )}
        <Footer tab="0" />
      </View>
    );
  }
}
