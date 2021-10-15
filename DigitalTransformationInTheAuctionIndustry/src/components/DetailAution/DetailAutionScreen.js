import React, {Component} from 'react';
import {
  View,
  Text,
  Image,
  FlatList,
  TouchableOpacity,
  ActivityIndicator,
  ToastAndroid,
} from 'react-native';
import {detailAutionStyle} from './DetailAutionStyle';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {faInfoCircle} from '@fortawesome/free-solid-svg-icons';
import {faUser} from '@fortawesome/free-solid-svg-icons';
import {faClock} from '@fortawesome/free-solid-svg-icons';
import {Svg, Path} from 'react-native-svg';
import * as RootNavigation from '../../navigation/rootNavigator';
import {DETAILS} from '../../navigation/routeNames';
import Header from '../common/Header';
import detailAuctionForUser from '../../services/detailAuctionForUser';
import {newsFeedStyle} from '../NewsView/styles';
import moment from 'moment';
export default class DetailAutionScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: '',
      isLoading: true,
      id: this.props.route.params.id,
    };
  }
  loadData(id) {
    let reg = new detailAuctionForUser();
    reg
      .detailAuctionForUser(id)
      .then(res => {
        if (res.data.success) {
          this.setState({
            data: res.data.data.Data,
            isLoading: false,
          });
        } else {
          ToastAndroid.show('Lỗi hệ thống', 1000);
        }
      })
      .catch(error => {
        ToastAndroid.show('Lỗi hệ thống', 1000);
      });
  }
  componentDidMount() {
    this.focusListener = this.props.navigation.addListener('focus', () => {
      this.loadData(this.props.route.params.id);
    });
  }
  componentWillUnmount() {
    this.focusListener();
    this.setState = (state, callback) => {
      return;
    };
  }
  formatMoney(money) {
    var x;
    x = money.toString().replace(/(\d)(?=(\d\d\d)+(?!\d))/g, '$1.');
    return x + ' đ';
  }
  formatDate(date) {
    return moment(date).format('DD/MM/yyyy HH:mm:ss');
  }
  renderItem = ({item, index}) => {
    return (
      <TouchableOpacity
        style={newsFeedStyle.itemVertical}
        onPress={() => {
          RootNavigation.navigate(DETAILS, {id: item.auctionProperty.id});
        }}>
        <View
          style={{
            width: 130,
            height: 100,
            justifyContent: 'center',
            elevation: 5,
            shadowColor: 'black',
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
          <Text numberOfLines={1} style={newsFeedStyle.titleTextVertical}>
            {item.propertyName}
          </Text>
          <Text
            style={{
              fontSize: 14,
              color: '#FF0000',
              marginTop: 10,
              fontWeight: 'bold',
            }}>
            {this.formatMoney(item.auctionProperty.startPrice)}
          </Text>
          <View style={newsFeedStyle.viewText}>
            <Text style={newsFeedStyle.textDateVertical}>
              <Image source={require('../../assets/images/imageClock.png')} />{' '}
              {this.formatDate(item.auctionProperty.openTime)}
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
      </TouchableOpacity>
    );
  };
  render() {
    return (
      <View
        style={{
          flex: 1,
          alignItems: 'center',
          backgroundColor: 'white',
        }}>
        <Header title="Chi tiết phiên đấu giá" />
        {this.state.isLoading ? (
          <ActivityIndicator size="large" color="black" />
        ) : (
          <View
            style={{
              flex: 1,
              backgroundColor: 'white',
              width: '90%',
              justifyContent: 'center',
              marginBottom: 10,
            }}>
            <View style={detailAutionStyle.wrapblock}>
              <View
                style={[
                  detailAutionStyle.imageStyle,
                  {
                    backgroundColor: 'white',
                    elevation: 5,
                    shadowColor: 'black',
                    borderRadius: 15,
                  },
                ]}>
                <Image
                  style={{
                    width: '100%',
                    height: '100%',
                    resizeMode: 'cover',
                    borderRadius: 10,
                  }}
                  source={{uri: this.state.data.auction.image}}
                />
              </View>
              <Text style={detailAutionStyle.title}>
                Phiên đấu giá: {this.state.data.auction.name}
              </Text>
              <View style={detailAutionStyle.icon}>
                <FontAwesomeIcon icon={faInfoCircle} />
                <Text style={detailAutionStyle.contentStyle}>
                  Mã phiên: {this.state.data.auction.id}
                </Text>
              </View>
              <View style={detailAutionStyle.icon}>
                <FontAwesomeIcon icon={faUser} />
                <Text style={detailAutionStyle.contentStyle}>
                  Đấu giá viên: {this.state.data.auction.createUser}
                </Text>
              </View>
              <View style={detailAutionStyle.icon}>
                <FontAwesomeIcon icon={faClock} />
                <Text style={detailAutionStyle.contentStyle}>
                  Thời gian bắt đầu:{' '}
                  {this.formatDate(this.state.data.auction.openTime)}
                </Text>
              </View>
              <View style={detailAutionStyle.icon}>
                <FontAwesomeIcon icon={faClock} />
                <Text style={detailAutionStyle.contentStyle}>
                  Thời gian kết thúc:{' '}
                  {this.formatDate(this.state.data.auction.closeTime)}
                </Text>
              </View>
              <View style={detailAutionStyle.icon}>
                <FontAwesomeIcon icon={faClock} />
                <Text style={detailAutionStyle.contentStyle}>
                  Số lượng tài sản:{' '}
                  {this.state.data.auctionPropertyResponse.length}
                </Text>
              </View>
            </View>
            <View>
              <Text style={detailAutionStyle.listAutionInSession}>
                Danh sách tài sản trong phiên:{' '}
              </Text>
            </View>
            <View style={{flex: 1}}>
              <FlatList
                data={this.state.data.auctionPropertyResponse}
                renderItem={this.renderItem}
                keyExtractor={item => item.auctionProperty.id}
                ListHeaderComponentStyle={{paddingHorizontal: 16}}
                showsVerticalScrollIndicator={false}
              />
            </View>
          </View>
        )}
      </View>
    );
  }
}
