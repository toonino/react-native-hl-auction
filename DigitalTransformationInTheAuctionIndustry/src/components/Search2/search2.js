import React, {Component, useEffect, useState} from 'react';
import {
  View,
  Image,
  TextInput,
  Text,
  FlatList,
  TouchableOpacity,
  ActivityIndicator,
  Alert,
  ToastAndroid,
} from 'react-native';
import {Search2Style} from './styles';
import {newsFeedStyle} from '../NewsView/styles';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import * as RootNavigation from '../../navigation/rootNavigator';
import {faChevronLeft} from '@fortawesome/free-solid-svg-icons';
import {Picker} from '@react-native-picker/picker';
import searchPropertyForUser from '../../services/searchPropertyForUser';
import {DETAILS} from '../../navigation/routeNames';
import listPropertyCategory from '../../services/listPropertyCategory';
import moment from 'moment';
export default class Search2 extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
      categoryId: this.props.route.params.categoryId,
      keyword: this.props.route.params.keyword,
      maxPrice: this.props.route.params.maxPrice,
      minPrice: this.props.route.params.minPrice,
      page: this.props.route.params.page,
      per_page: this.props.route.params.per_page,
      typeSort: this.props.route.params.typeSort,
      isLoading: true,
      isLoadingData: false,
      dataListCategory: [
        {
          createTime: '',
          createUser: 'TuanDC',
          updateTime: '',
          updateUser: 'vinhpd',
          id: 189,
          name: 'Khác',
          description: 'Khác',
          image:
            'https://auctionimage.s3.ap-southeast-1.amazonaws.com/image/20210804182724614Rectangle 2.3 (1).png',
          isDeleted: false,
        },
      ],
      isLoadingMore: false,
      isEmpty: false,
      isChangeCategory: false,
      isClickItem: false,
      isBack: false,
    };
  }
  formatMoney(money) {
    var x;
    x = money.toString().replace(/(\d)(?=(\d\d\d)+(?!\d))/g, '$1.');
    return x + ' đ';
  }
  //first Load
  loadData() {
    let reg = new searchPropertyForUser();
    reg
      .searchPropertyForUser(
        this.state.categoryId,
        this.state.keyword,
        this.state.maxPrice,
        this.state.minPrice,
        this.state.page,
        this.state.per_page,
        this.state.typeSort,
      )
      .then(res => {
        if (res.data.success) {
          this.setState({
            data: res.data.data.Data,
          });
        } else {
          ToastAndroid.show('Lỗi hệ thống 1', 1000);
        }
      })
      .then(() => {
        let reg2 = new listPropertyCategory();
        reg2
          .listPropertyCategory(1, 10000, 1)
          .then(res2 => {
            if (res2.data.success) {
              this.setState({
                dataListCategory: [
                  {
                    id: null,
                    name: 'Tất cả',
                    image: null,
                  },
                ].concat(res2.data.data.Data),
                isLoading: false,
                isLoadingData: false,
                isCLickItem: false,
              });
            } else {
              ToastAndroid.show('Lỗi hệ thống 2', 1000);
            }
          })
          .catch(error => {
            ToastAndroid.show('Lỗi hệ thống 3', 1000);
          });
      })
      .catch(error => {
        ToastAndroid.show('Lỗi hệ thống 4', 1000);
      });
  }
  //load Search and end load more
  loadDataProperty() {
    let reg = new searchPropertyForUser();
    reg
      .searchPropertyForUser(
        this.state.categoryId,
        this.state.keyword,
        this.state.maxPrice,
        this.state.minPrice,
        this.state.page,
        this.state.per_page,
        this.state.typeSort,
      )
      .then(res => {
        if (res.data.success) {
          if (res.data.data.Data.length == 0) {
            this.setState({isEmpty: true});
            if (this.state.isLoadingMore) {
              ToastAndroid.show('Hết', 1);
            }
          } else if (this.state.page == 1 && res.data.data.Data.length < 5) {
            this.setState({isEmpty: true});
          } else {
            this.setState({isEmpty: false});
          }
          this.setState({
            data: this.state.data.concat(res.data.data.Data),
          });
        } else {
          ToastAndroid.show('Lỗi hệ thống 5', 1000);
        }
      })
      .catch(error => {
        ToastAndroid.show('Lỗi hệ thống 6', 1000);
      })
      .finally(() => {
        this.setState({isLoadingMore: false, isLoadingData: false});
      });
  }
  componentDidMount() {
    this.focusListener = this.props.navigation.addListener('focus', () => {
      if (!this.state.isCLickItem) {
        this.setState(
          {
            categoryId: this.props.route.params.categoryId,
            data: [],
            keyword: '',
            maxPrice: null,
            minPrice: null,
            page: 1,
            per_page: 5,
            typeSort: 0,
            isLoadingData: true,
            isBack: false,
          },
          () => {
            this.loadData();
          },
        );
      } else {
        this.setState({isCLickItem: false});
      }
    });
  }
  componentWillUnmount() {
    this.focusListener();
    this.setState = (state, callback) => {
      return;
    };
  }
  //checkInput search
  clickLoad() {
    function isInt(number) {
      if (!/^["|']{0,1}[-]{0,1}\d{0,}(\.{0,1}\d+)["|']{0,1}$/.test(number))
        return false;
      return !(number - parseInt(number));
    }
    function isFloat(number) {
      if (!/^["|']{0,1}[-]{0,1}\d{0,}(\.{0,1}\d+)["|']{0,1}$/.test(number))
        return false;
      return number - parseInt(number) ? true : false;
    }
    if (
      !isInt(this.state.minPrice) &&
      this.state.minPrice != null &&
      this.state.minPrice != ''
    ) {
      Alert.alert(
        'Hãy nhập đúng định dạng số nhỏ nhất' + '\nChỉ gồm số và dấu chấm',
      );
    } else if (
      !isInt(this.state.maxPrice) &&
      this.state.maxPrice != null &&
      this.state.maxPrice != ''
    ) {
      Alert.alert(
        'Hãy nhập đúng định dạng số lớn nhất' + '\nChỉ gồm số và dấu chấm',
      );
    } else if (
      parseFloat(this.state.minPrice) > parseFloat(this.state.maxPrice) &&
      this.state.minPrice != null &&
      this.state.maxPrice != null &&
      this.state.minPrice != '' &&
      this.state.maxPrice != ''
    ) {
      Alert.alert('Số nhỏ nhất không được lớn hơn số lớn nhất');
    } else if (
      parseFloat(this.state.minPrice) < 1 ||
      parseFloat(this.state.maxPrice) < 1
    ) {
      Alert.alert('Số nhỏ nhất và lớn nhất không được < 1');
    } else {
      this.setState(
        {
          isLoadingData: true,
          data: [],
        },
        () => {
          this.loadDataProperty();
        },
      );
    }
  }
  List1 = () => {
    const horiItem = ({item, index}) => {
      return (
        <TouchableOpacity
          style={index == 0 ? Search2Style.item2 : Search2Style.item}
          onPress={() => {
            this.setState(
              {
                data: [],
                categoryId: item.id,
                keyword: this.state.keyword,
                maxPrice: this.state.maxPrice,
                minPrice: this.state.minPrice,
                page: 1,
                per_page: 5,
                typeSort: this.state.typeSort,
              },
              () => {
                if (!this.state.isLoadingData) {
                  this.clickLoad();
                }
              },
            );
          }}>
          <View
            style={
              this.state.categoryId == item.id
                ? Search2Style.colImg2
                : Search2Style.colImg
            }>
            {item.image != null && (
              <Image
                source={{uri: item.image}}
                resizeMode="cover"
                style={Search2Style.img}
              />
            )}
            {item.image == null && (
              <Image
                source={require('../../assets/images/IMGHanghieu2.png')}
                resizeMode="cover"
                style={Search2Style.img}
              />
            )}
          </View>
          <Text style={Search2Style.colText}>{item.name}</Text>
        </TouchableOpacity>
      );
    };

    return (
      <View style={{alignSelf: 'center', height: 90}}>
        <FlatList
          data={this.state.dataListCategory}
          renderItem={horiItem}
          keyExtractor={item => item.id}
          horizontal
          showsVerticalScrollIndicator={false}
          showsHorizontalScrollIndicator={false}
        />
      </View>
    );
  };
  List2 = () => {
    const renderFooter = () => {
      return this.state.isLoadingMore ? (
        <View style={{marginTop: 10, alignItems: 'center'}}>
          <ActivityIndicator size="large" color="black" />
        </View>
      ) : null;
    };
    const handleLoadMore = () => {
      this.setState(
        {
          page: this.state.page + 1,
          isLoadingMore: true,
        },
        () => {
          this.loadDataProperty();
        },
      );
    };
    const freshingMore = () => {
      this.setState(
        {
          page: 1,
          data: [],
          isLoadingData: true,
        },
        () => {
          this.loadDataProperty();
        },
      );
    };
    const renderItem = ({item, index}) => {
      function formatDate(date) {
        return moment(date).format('DD/MM/yyyy HH:mm:ss');
      }
      return (
        <TouchableOpacity
          style={newsFeedStyle.itemVertical}
          onPress={
            this.state.isClickItem
              ? null
              : () => {
                  this.setState({isCLickItem: true}, () => {
                    RootNavigation.navigate(DETAILS, {id: item.id});
                  });
                }
          }>
          <View
            style={{
              width: 120,
              height: 100,
              justifyContent: 'center',
              elevation: 5,
              shadowColor: 'black',
              alignItems: 'center',
              alignSelf: 'center',
              backgroundColor: 'white',
              borderRadius: 15,
            }}>
            <Image
              style={{
                width: '100%',
                height: '100%',
                resizeMode: 'cover',
                borderRadius: 12,
                alignSelf: 'center',
              }}
              source={{uri: item.image}}
            />
          </View>
          <View style={newsFeedStyle.ViewVertical}>
            <Text numberOfLines={2} style={newsFeedStyle.titleTextVertical}>
              {item.name}
            </Text>
            <View>
              <Text
                style={{
                  fontSize: 14,
                  color: '#FF0000',
                  fontWeight: 'bold',
                  // marginTop:'auto',
                }}>
                {this.formatMoney(item.startPrice)}
              </Text>
              <View style={newsFeedStyle.viewText}>
                <Text style={newsFeedStyle.textDateVertical}>
                  <Image
                    source={require('../../assets/images/imageClock.png')}
                  />{' '}
                  {formatDate(item.openTime)}
                </Text>
                <Text style={newsFeedStyle.textAuthorVertical}>
                  {' '}
                  <Image
                    source={require('../../assets/images/iconHammer.png')}
                  />{' '}
                  Đấu giá
                </Text>
              </View>
            </View>
          </View>
        </TouchableOpacity>
      );
    };
    return (
      <View style={[Search2Style.containerVertical]}>
        <View style={{marginBottom: 20, flex: 1}}>
          <FlatList
            data={this.state.data}
            renderItem={renderItem}
            keyExtractor={item => item.id}
            showsVerticalScrollIndicator={false}
            showsHorizontalScrollIndicator={false}
            ListFooterComponent={renderFooter}
            onEndReached={this.state.isEmpty ? null : handleLoadMore}
            onEndReachedThreshold={0}
            refreshing={this.state.isLoadingData}
            onRefresh={freshingMore}
          />
        </View>
      </View>
    );
  };
  render() {
    return (
      <View style={{backgroundColor: 'white', flex: 1}}>
        <View style={Search2Style.hdcontainer}>
          <View style={Search2Style.hdbody}>
            <TouchableOpacity
              style={{
                height: '100%',
                width: '10%',
                justifyContent: 'center',
                marginRight: 'auto',
              }}
              onPress={() => {
                if (!this.state.isBack) {
                  this.setState({isBack: true});
                  RootNavigation.goBack();
                }
              }}>
              <FontAwesomeIcon
                style={{color: '#000000'}}
                icon={faChevronLeft}
                size={22}
              />
            </TouchableOpacity>
            <View style={Search2Style.search_container}>
              <TextInput
                ref={input => {
                  this.textInputRef = input;
                }}
                style={Search2Style.searchBar}
                placeholder="Tìm kiếm"
                onChangeText={text => {
                  this.setState({keyword: text});
                }}
                autoFocus={this.props.route.params.isFocus}
              />
            </View>
            <TouchableOpacity
              onPress={() => {
                this.setState(
                  {
                    categoryId: this.state.categoryId,
                    keyword: this.state.keyword,
                    maxPrice: this.state.maxPrice,
                    minPrice: this.state.minPrice,
                    page: 1,
                    per_page: 5,
                    typeSort: this.state.typeSort,
                  },
                  () => {
                    if (!this.state.isLoadingData) {
                      this.clickLoad();
                    }
                  },
                );
              }}
              style={{
                width: '10%',
                height: '100%',
                justifyContent: 'center',
                marginLeft: 'auto',
              }}>
              <Image
                style={[Search2Style.imageSearchIcon, {alignSelf: 'center'}]}
                source={require('../../assets/images/searchIcon.png')}
              />
            </TouchableOpacity>
          </View>
        </View>
        {this.state.isLoading ? (
          <ActivityIndicator size="large" color="black" />
        ) : (
          <View style={{width: '90%', alignSelf: 'center', flex: 1}}>
            <View
              style={{
                alignSelf: 'center',
                width: '100%',
              }}>
              <View
                style={{
                  borderWidth: 1,
                  borderColor: '#e0e0d1',
                  height: 40,
                  width: '100%',
                  justifyContent: 'center',
                  borderRadius: 7,
                  marginBottom: 5,
                }}>
                <Picker
                  style={Search2Style.pickerStyle}
                  dropdownIconColor="#FA4A0C"
                  itemStyle={{fontWeight: 'bold'}}
                  textStyle={{fontSize: 12, fontWeight: 'bold'}}
                  selectedValue={this.state.typeSort}
                  onValueChange={(itemValue, itemPosition) => {
                    this.setState(
                      {
                        data: [],
                        categoryId: this.state.categoryId,
                        keyword: this.state.keyword,
                        maxPrice: this.state.maxPrice,
                        minPrice: this.state.minPrice,
                        page: 1,
                        per_page: 5,
                        typeSort: itemValue,
                      },
                      () => {
                        if (!this.state.isLoadingData) {
                          this.clickLoad();
                        }
                      },
                    );
                  }}>
                  <Picker.Item label="Tất Cả" value="0" />
                  <Picker.Item label="Mới nhất" value="1" />
                  <Picker.Item label="Cũ hơn" value="2" />
                  <Picker.Item label="Giá từ cao xuống thấp" value="3" />
                  <Picker.Item label="Giá từ thấp lên cao" value="4" />
                </Picker>
              </View>
              <View style={Search2Style.viewBorderMinMax}>
                <TextInput
                  ref={input => {
                    this.textInputRef2 = input;
                  }}
                  placeholder="Giá tối thiểu"
                  onChangeText={text => {
                    this.setState({minPrice: text});
                  }}
                  keyboardType="numeric"
                  style={Search2Style.viewMinMax}
                  defaultValue={this.state.minPrice}
                />
                <Text
                  style={{
                    width: '10%',
                    alignSelf: 'center',
                    textAlign: 'center',
                  }}>
                  ~
                </Text>

                <TextInput
                  ref={input => {
                    this.textInputRef3 = input;
                  }}
                  placeholder="Giá tối đa"
                  onChangeText={text => {
                    this.setState({maxPrice: text});
                  }}
                  keyboardType="numeric"
                  style={Search2Style.viewMinMax}
                  defaultValue={this.state.maxPrice}
                />
                <Text
                  style={{
                    alignSelf: 'center',
                    color: 'red',
                    fontWeight: 'bold',
                    marginLeft: 'auto',
                  }}>
                  VND
                </Text>
              </View>
            </View>
            {this.List1()}
            <Text
              style={{
                fontWeight: 'bold',
                fontSize: 24,
                color: 'black',
                marginBottom: 10,
                marginTop: 10,
              }}>
              Kết quả tìm kiếm:
            </Text>
            {this.state.isLoadingData ? (
              <ActivityIndicator size="large" color="black" />
            ) : this.state.data.length != 0 ? (
              this.List2()
            ) : (
              <Text>Không có tài sản đấu giá.</Text>
            )}
          </View>
        )}
      </View>
    );
  }
}
