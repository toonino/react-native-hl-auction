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
import {autionListStyle} from './styles';
import {DETAILSAUTION} from '../../navigation/routeNames';
import * as RootNavigation from '../../navigation/rootNavigator';
import {HeaderText} from '../common/HeaderText/HeaderText';
import Footer from '../common/Footer';
import searchAuctionForUser from '../../services/searchAuctionForUser';
import moment from 'moment';
import notReadNotification from '../../services/notReadNotification';
import AsyncStorage from '@react-native-community/async-storage';
export default class AutionList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      page: 1,
      status: 0,
      listAution: [],
      isLoading: true,
      isLoadingMore: false,
      isClickItem: false,
      isEmpty: false,
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
  loadData() {
    let reg2 = new searchAuctionForUser();
    reg2
      .searchAuctionForUser(this.state.page, 5, this.state.status, 0)
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
          this.setState({
            listAution: this.state.listAution.concat(res2.data.data.Data),
            isLoading: false,
            isLoadingMore: false,
          });
        } else {
          ToastAndroid.show('Lỗi hệ thống', 1000);
        }
      })
      .catch(error2 => {
        ToastAndroid.show('Lỗi hệ thống', 1000);
      });
  }
  componentDidMount() {
    this.focusListener = this.props.navigation.addListener('focus', () => {
      if (!this.state.isClickItem) {
        this.setState(
          {
            page: 1,
            status: 0,
            listAution: [],
            isLoading: true,
            isLoadingMore: false,
            isEmpty: false,
            count: 0,
            isAuthen: false,
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
  renderItem = ({item, index}) => {
    function formatDate(date) {
      return moment(date).format('DD/MM/yyyy HH:mm:ss');
    }
    return (
      <TouchableOpacity
        onPress={
          this.state.isClickItem
            ? null
            : () => {
                this.setState({isClickItem: true});
                RootNavigation.navigate(DETAILSAUTION, {id: item.id});
              }
        }
        style={autionListStyle.itemVertical}>
        <View
          style={{
            height: '70%',
            width: '95%',
            justifyContent: 'center',
            alignSelf: 'center',
            marginBottom: 'auto',
            marginTop: 10,
          }}>
          <Image
            style={autionListStyle.imageVertical}
            source={{uri: item.image}}
            resizeMode="cover"
          />
        </View>
        <Text numberOfLines={1} style={autionListStyle.textItemFlatListName}>
          {item.name}
        </Text>
        <Text style={autionListStyle.textItemFlatListDate}>
          Ngày mở: {formatDate(item.createTime)}
        </Text>
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
        listAution: [],
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
        <HeaderText
          navigator={this.props.navigation}
          title="Phiên đấu giá"
          count={this.state.count}
          isAuthen={this.state.isAuthen}
        />
        <View style={[autionListStyle.mid, {flex: 1, width: '90%'}]}>
          <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
            <TouchableOpacity
              onPress={() => {
                this.setState(
                  {
                    status: 0,
                    listAution: [],
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
                    listAution: [],
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
                    listAution: [],
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
          ) : this.state.listAution.length != 0 ? (
            <View style={autionListStyle.containerVertical}>
              <FlatList
                data={this.state.listAution}
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
            <Text style={{marginTop: 20}}>Không có cuộc đấu giá.</Text>
          )}
        </View>
        <Footer tab="1" />
      </View>
    );
  }
}
