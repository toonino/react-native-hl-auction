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
import {autionListStyle} from '../../components/AutionList/styles';
import {DETAILS} from '../../navigation/routeNames';
import * as RootNavigation from '../../navigation/rootNavigator';
import moment from 'moment';
import myAuctionProperty from '../../services/myAuctionProperty';
import {newsFeedStyle} from '../../components/NewsView/styles';
import Header from '../../components/common/Header';
export default class MyBidding extends Component {
  constructor(props) {
    super(props);
    this.state = {
      page: 1,
      status: 0,
      data: [],
      isLoading: true,
      isLoadingMore: false,
      isClickItem: false,
      isEmpty: false,
    };
  }
  formatMoney(money) {
    var x;
    x = money.toString().replace(/(\d)(?=(\d\d\d)+(?!\d))/g, '$1.');
    return x + ' đ';
  }
  componentDidMount() {
    this.focusListener = this.props.navigation.addListener('focus', () => {
      if (!this.state.isClickItem) {
        this.setState(
          {
            page: 1,
            status: 0,
            data: [],
            isLoading: true,
            isLoadingMore: false,
            isEmpty: false,
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
  renderItem = ({item, index}) => {
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
                this.setState({isClickItem: true}, () => {
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
                <Image source={require('../../assets/images/imageClock.png')} />{' '}
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
  renderFooter = () => {
    return this.state.isLoadingMore ? (
      <View style={{marginTop: 10, alignItems: 'center'}}>
        <ActivityIndicator size="large" color="black" />
      </View>
    ) : null;
  };
  handleLoadMore = () => {
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
  freshingMore = () => {
    this.setState(
      {
        isLoading: true,
        data: [],
        page: 1,
        isLoadingMore: false,
        isEmpty: true,
      },
      () => {
        this.loadData();
      },
    );
  };
  render() {
    return (
      <View style={autionListStyle.backgroundColorAll}>
        <Header title="Đấu giá của tôi" />
        <View style={[autionListStyle.mid, {flex: 1, width: '90%'}]}>
          <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
            <TouchableOpacity
              onPress={() => {
                this.setState(
                  {
                    status: 0,
                    data: [],
                    page: 1,
                    isLoadingMore: false,
                    isEmpty: true,
                  },
                  () => {
                    if (!this.state.isLoading) {
                      this.setState({isLoading: true});
                      this.loadData();
                    }
                  },
                );
              }}>
              <Text
                style={
                  this.state.status == 0
                    ? autionListStyle.textBTNClicked
                    : autionListStyle.textBTN
                }>
                Sắp đấu giá
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => {
                this.setState(
                  {
                    status: 1,
                    data: [],
                    page: 1,
                    isLoadingMore: false,
                    isEmpty: true,
                  },
                  () => {
                    if (!this.state.isLoading) {
                      this.setState({isLoading: true});
                      this.loadData();
                    }
                  },
                );
              }}>
              <Text
                style={
                  this.state.status == 1
                    ? autionListStyle.textBTNClicked
                    : autionListStyle.textBTN
                }>
                {' '}
                Đang diễn ra
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => {
                this.setState(
                  {
                    status: 2,
                    data: [],
                    page: 1,
                    isLoadingMore: false,
                    isEmpty: true,
                  },
                  () => {
                    if (!this.state.isLoading) {
                      this.setState({isLoading: true});
                      this.loadData();
                    }
                  },
                );
              }}>
              <Text
                style={
                  this.state.status == 2
                    ? autionListStyle.textBTNClicked
                    : autionListStyle.textBTN
                }>
                {' '}
                Đã kết thúc
              </Text>
            </TouchableOpacity>
          </View>
          {this.state.isLoading ? (
            <ActivityIndicator size="large" color="black" />
          ) : this.state.data.length != 0 ? (
            <View style={autionListStyle.containerVertical}>
              <FlatList
                data={this.state.data}
                renderItem={this.renderItem}
                keyExtractor={item => item.id}
                showsVerticalScrollIndicator={false}
                showsHorizontalScrollIndicator={false}
                ListFooterComponent={this.renderFooter}
                onEndReached={this.state.isEmpty ? null : this.handleLoadMore}
                onEndReachedThreshold={0}
                refreshing={this.state.isLoading}
                onRefresh={this.freshingMore}
              />
            </View>
          ) : (
            <Text style={{marginTop: 20}}>Không có tài sản đấu giá.</Text>
          )}
        </View>
      </View>
    );
  }
  loadData() {
    let reg = new myAuctionProperty();
    reg
      .myAuctionProperty(this.state.page, 5, this.state.status)
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
          ToastAndroid.show('Lỗi hệ thống 1', 1000);
        }
      })
      .catch(error => {
        ToastAndroid.show('Lỗi hệ thống 2', 1000);
      })
      .finally(() => {
        this.setState({
          isLoadingData: false,
          isLoadingMore: false,
          isLoading: false,
          isCLickItem: false,
        });
      });
  }
}
