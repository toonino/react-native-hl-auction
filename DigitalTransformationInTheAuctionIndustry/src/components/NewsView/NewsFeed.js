import {
  View,
  FlatList,
  Text,
  Image,
  TouchableOpacity,
  ActivityIndicator,
  ToastAndroid,
} from 'react-native';
import React, {Component, useState, useEffect} from 'react';
import {newsFeedStyle} from './styles';
import {styles} from '../../shared/styles';
import Footer from '../common/Footer';
import * as RootNavigation from '../../navigation/rootNavigator';
import {Picker} from '@react-native-picker/picker';
import {NEWS} from '../../navigation/routeNames';
import ListNews from '../../services/listNews';
import listNewsCategory from '../../services/listNewsCategory';
import {HeaderText} from '../common/HeaderText/HeaderText';
import moment from 'moment';
import notReadNotification from '../../services/notReadNotification';
import AsyncStorage from '@react-native-community/async-storage';
export default class NewsFeed extends Component {
  constructor(props) {
    super(props);
    this.state = {
      pickerSelectedItem: 0,
      data: [],
      page: 1,
      listNewsCategory: [],
      isEmpty: false,
      isLoading: true,
      isLoadingData: false,
      isLoadingMore: false,
      isClickItem: false,
      count: 0,
      isAuthen: false,
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
  NewsFeedCurrent = () => {
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
                  this.setState({isClickItem: true});
                  RootNavigation.navigate(NEWS, {id: item.id});
                }
          }>
          <View
            style={{
              elevation: 10,
              shadowColor: 'black',
              width: 110,
              height: 110,
              borderColor: '#989898',
              justifyContent: 'center',
              borderRadius: 15,
              alignSelf: 'center',
            }}>
            <Image
              style={newsFeedStyle.imageVertical}
              source={{uri: item.image}}
            />
          </View>
          <View style={newsFeedStyle.ViewVertical}>
            <Text numberOfLines={2} style={newsFeedStyle.titleTextVertical}>
              {item.title}
            </Text>
            <View style={newsFeedStyle.viewText}>
              <Text style={newsFeedStyle.textDateVertical}>
                <Image source={require('../../assets/images/imageClock.png')} />{' '}
                {formatDate(item.createTime)}
              </Text>
              <Text style={newsFeedStyle.textAuthorVertical}>
                {' '}
                <Image
                  source={require('../../assets/images/imageAuthor.png')}
                />{' '}
                {item.createUser}
              </Text>
            </View>
          </View>
        </TouchableOpacity>
      );
    };
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
          this.loadDataMore();
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
          this.loadDataMore();
        },
      );
    };
    return (
      <View style={[newsFeedStyle.containerVertical]}>
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
    );
  };
  loadDataMore() {
    let reg2 = new ListNews();
    reg2
      .ListNews(this.state.pickerSelectedItem, this.state.page, 5, 0)
      .then(res2 => {
        if (res2.data.success) {
          if (res2.data.data.Data.length == 0) {
            this.setState({isEmpty: true});
            if (this.state.isLoadingMore) {
              ToastAndroid.show('Hết', 1);
            }
          } else if (this.state.page == 1 && res2.data.data.Data.length < 5) {
            this.setState({isEmpty: true});
          } else {
            this.setState({isEmpty: false});
          }
          this.setState(
            {
              data: this.state.data.concat(res2.data.data.Data),
              
            },
          );
        } else {
          ToastAndroid.show('Lỗi hệ thống', 1000);
        }
      })
      .catch(error2 => {
        ToastAndroid.show('Lỗi hệ thống', 1000);
      }).finally(()=>{
        this.setState({isLoadingMore: false, isLoadingData: false});
      })
    ;
  }
  loadData() {
    let reg = new listNewsCategory();
    reg
      .listNewsCategory(1, 10000, 1)
      .then(res => {
        if (res.data.success) {
          this.setState({
            listNewsCategory: res.data.data.Data,
          });
        } else {
            ToastAndroid.show('Lỗi hệ thống', 1000);
        }
      })
      .then(() => {
        this.setState({isLoadingData: true});
        let reg2 = new ListNews();
        reg2
          .ListNews(this.state.pickerSelectedItem, this.state.page, 5, 0)
          .then(res2 => {
            if (res2.data.success) {
              if (res2.data.data.Data.length == 0) {
                this.setState({isEmpty: true});
                ToastAndroid.show('Hết', 1);
              } else if (
                this.state.page == 1 &&
                res2.data.data.Data.length < 5
              ) {
                this.setState({isEmpty: true});
              } else {
                this.setState({isEmpty: false});
              }
              this.setState(
                {
                  data: this.state.data.concat(res2.data.data.Data),
                },
                () => {
                  this.setState({
                    isClickItem: false,
                    isLoadingData: false,
                    isLoading: false,
                  });
                },
              );
            } else {
              ToastAndroid.show('Lỗi hệ thống', 1000);
            }
          })
          .catch(error2 => {
            ToastAndroid.show('Lỗi hệ thống', 1000);
          });
      })
      .catch(error => {
        ToastAndroid.show('Lỗi hệ thống', 1000);
      });
  }
  componentDidMount() {
    this.focusListener = this.props.navigation.addListener('focus', () => {
      if (!this.state.isClickItem) {
        this.setState(
          {
            pickerSelectedItem: 0,
            data: [],
            page: 1,
            isEmpty: false,
            isLoading: true,
            isLoadingData: false,
            isLoadingMore: false,
            isClickItem: false,
            count: 0,
            isAuthen: false,
            isClickItem: false,
          },
          () => {
            this.loadData();
          },
        );
      } else {
        this.setState({isClickItem: false});
      }
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
      <View style={styles.container}>
        <HeaderText
          navigator={this.props.navigation}
          title="Tin tức"
          count={this.state.count}
          isAuthen={this.state.isAuthen}
        />

        <View style={[newsFeedStyle.mid, styles.with80]}>
          {this.state.isLoading ? (
            <ActivityIndicator size="large" color="black" />
          ) : (
            <View style={{flex: 1}}>
              <Text style={newsFeedStyle.textNewsCurrent}>Sắp xếp theo: </Text>
              <View style={newsFeedStyle.pickerStyleView}>
                <Picker
                  style={{
                    fontSize: 17,
                    width: '100%',
                    height: '100%',
                    color: '#FA4A0C',
                    fontWeight: '500',
                  }}
                  dropdownIconColor="#FA4A0C"
                  itemStyle={{fontWeight: 'bold'}}
                  textStyle={{fontSize: 12, fontWeight: 'bold'}}
                  selectedValue={this.state.pickerSelectedItem}
                  onValueChange={(itemValue, itemPosition) => {
                    if (this.state.pickerSelectedItem != itemValue) {
                      this.setState(
                        {
                          pickerSelectedItem: itemValue,
                          page: 5,
                        },
                        () => {
                          this.setState(
                            {
                              page: 1,
                              data: [],
                              isLoadingMore: false,
                              isLoadingData: true,
                            },
                            () => {
                              this.loadDataMore();
                            },
                          );
                        },
                      );
                    }
                  }}>
                  <Picker.Item label="Tất Cả" value="0" />
                  {this.state.listNewsCategory.map((item, key) => (
                    <Picker.Item
                      label={item.name}
                      value={item.id}
                      key={item.id}
                    />
                  ))}
                </Picker>
              </View>
              {this.state.isLoadingData ? (
                <ActivityIndicator size="large" color="black" />
              ) : this.state.data.length != 0 ? (
                this.NewsFeedCurrent()
              ) : (
                <Text>Không có tin tức.</Text>
              )}
            </View>
          )}
        </View>

        <Footer tab="3" />
      </View>
    );
  }
}
