import {
  View,
  FlatList,
  Text,
  Image,
  TouchableOpacity,
  ActivityIndicator,
  Alert,
  ToastAndroid,
} from 'react-native';
import React, {Component, useState, useEffect} from 'react';
import {notiStyle} from './styles';
import * as RootNavigation from '../../navigation/rootNavigator';
import listNotification from '../../services/listNotification';
import seenNotification from '../../services/seenNotification';
import {DETAILS} from '../../navigation/routeNames';
import moment from 'moment';
import Header from '../common/Header';
export default class CodeCF extends Component {
  constructor(props) {
    super(props);
    this.state = {
      page: 1,
      isLoading: true,
      data: [],
      isEmpty: false,
      isLoadingMore: false,
      isCLickItem: false,
    };
  }
  loadDataFirstTime() {
    let reg = new listNotification();
    reg
      .listNotification(this.state.page, 10)
      .then(res => {
        if (res.data.success) {
          this.setState({
            data: res.data.data.Data,
            isLoading: false,
            isCLickItem: false,
          });
        } else {
          ToastAndroid.show('Lỗi hệ thống', 1000);
        }
      })
      .catch(error => {
        ToastAndroid.show('Lỗi hệ thống', 1000);
      });
  }
  loadData = () => {
    let reg = new listNotification();
    reg
      .listNotification(this.state.page, 10)
      .then(res => {
        if (res.data.success) {
          if (res.data.data.Data.length == 0) {
            this.setState({isEmpty: true});
            if (this.state.isLoadingMore) {
              ToastAndroid.show('Hết', 1);
            }
          } else if (this.state.page == 1 && res.data.data.Data.length < 10) {
            this.setState({isEmpty: true});
          } else {
            this.setState({isEmpty: false});
          }
          this.setState({
            data: this.state.data.concat(res.data.data.Data),
          });
        } else {
          ToastAndroid.show('Lỗi hệ thống', 1000);
        }
      })
      .catch(error => {
        ToastAndroid.show('Lỗi hệ thống', 1000);
      })
      .finally(() => {
        this.setState({isLoading: false, isLoadingMore: false});
      });
  };
  getListNotification = () => {
    const renderItem = ({item, index}) => {
      function formatDate(date) {
        return moment(date).format('DD/MM/yyyy HH:mm:ss');
      }
      return (
        <TouchableOpacity
          style={notiStyle.itemVertical}
          onPress={() => {
            this.state.isCLickItem
              ? null
              : this.setState({isCLickItem: true}, () => {
                  let reg = new seenNotification();
                  reg
                    .seenNotification(item.id)
                    .then(res => {
                      if (res.data.success) {
                        if (item.auctionPropertyId == null) {
                          Alert.alert(item.title, item.content, [
                            {
                              text: 'OK',
                              onPress: () => {
                                this.setState(
                                  {
                                    page: 1,
                                    isLoading: true,
                                    data: [],
                                    isEmpty: false,
                                    isLoadingMore: false,
                                  },
                                  () => {
                                    this.loadDataFirstTime();
                                  },
                                );
                              },
                            },
                          ]);
                        } else {
                          Alert.alert(item.title, item.content, [
                            {
                              text: 'Xem tài sản',
                              onPress: () => {
                                RootNavigation.navigate(DETAILS, {
                                  id: item.auctionPropertyId,
                                });
                                this.setState({isCLickItem: false});
                              },
                              style: 'cancel',
                            },
                            {
                              text: 'OK',
                              onPress: () => {
                                this.setState(
                                  {
                                    page: 1,
                                    isLoading: true,
                                    data: [],
                                    isEmpty: false,
                                    isLoadingMore: false,
                                  },
                                  () => {
                                    this.loadDataFirstTime();
                                  },
                                );
                              },
                            },
                          ]);
                        }
                      } else {
                        ToastAndroid.show('Lỗi hệ thống', 1000);
                      }
                    })
                    .catch(error => {
                      ToastAndroid.show('Lỗi hệ thống', 1000);
                    });
                });
          }}>
          {item.auctionPropertyId == null && (
            <View
              style={{
                width: 35,
                height: '100%',
                marginRight: 'auto',
                justifyContent: 'center',
              }}>
              <Image
                style={notiStyle.imageVertical}
                source={require('../../assets/images/notiMail.png')}
              />
            </View>
          )}
          {item.auctionPropertyId != null && (
            <View
              style={{
                width: 35,
                height: '100%',
                marginRight: 'auto',
                justifyContent: 'center',
              }}>
              <Image
                style={notiStyle.imageVertical}
                source={require('../../assets/images/notiBidding.png')}
              />
            </View>
          )}
          <View
            style={{
              flex: 1,
              justifyContent: 'center',
              marginLeft: 10,
            }}>
            {item.isSeen && (
              <Text style={notiStyle.textSeen}>
                <Image
                  source={require('../../assets/images/circleSeen02.png')}
                />{' '}
                Đã xem
              </Text>
            )}
            {!item.isSeen && (
              <Text style={notiStyle.textUnSeen}>
                <Image source={require('../../assets/images/circleSeen.png')} />{' '}
                Chưa xem
              </Text>
            )}
            <Text numberOfLines={1} style={notiStyle.tieTextVertical}>
              {item.title}
            </Text>
            <View style={notiStyle.viewText}>
              <Text style={notiStyle.textDateVertical}>
                <Image source={require('../../assets/images/imageClock.png')} />{' '}
                {formatDate(item.createTime)}
              </Text>
              <Text style={notiStyle.textDate}>
                <Image source={require('../../assets/images/cmtImage.png')} />{' '}
                Đọc tin
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
          isLoading: false,
        },
        () => {
          this.loadData();
        },
      );
    };
    const freshingMore = () => {
      this.setState(
        {
          page: 1,
          isLoading: true,
          data: [],
          isLoadingMore: false,
        },
        () => {
          this.loadData();
        },
      );
    };
    return (
      <View style={notiStyle.containerVertical}>
        <FlatList
          data={this.state.data}
          renderItem={renderItem}
          keyExtractor={item => item.id}
          showsVerticalScrollIndicator={false}
          showsHorizontalScrollIndicator={false}
          ListFooterComponent={renderFooter}
          onEndReached={this.state.isEmpty ? null : handleLoadMore}
          onEndReachedThreshold={0}
          refreshing={this.state.isLoading}
          onRefresh={freshingMore}
        />
      </View>
    );
  };
  componentDidMount() {
    this.focusListener = this.props.navigation.addListener('focus', () => {
      this.setState(
        {
          page: 1,
          isLoading: true,
          data: [],
          isEmpty: false,
          isLoadingMore: false,
        },
        () => {
          this.loadDataFirstTime();
        },
      );
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
      <View style={{backgroundColor: 'white', flex: 1}}>
        <Header title="Thông báo" />
        <View style={{alignSelf: 'center', flex: 1, width: '90%'}}>
          {this.state.isLoading ? (
            <ActivityIndicator size="large" color="black" />
          ) : this.state.data.length != 0 ? (
            this.getListNotification()
          ) : (
            <Text>Không có thông báo.</Text>
          )}
        </View>
      </View>
    );
  }
}
