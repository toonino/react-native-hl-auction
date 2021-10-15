import React, {Component, useState, useEffect} from 'react';
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  Alert,
  ScrollView,
  FlatList,
  ActivityIndicator,
  ToastAndroid,
} from 'react-native';
import {NewsFeedScreenStyle} from './NewsFeedScreenStyle';
import Header from '../common/Header';
import DetailsNewsByID from '../../services/detailsNewByID';
import ListNews from '../../services/listNews';
import moment from 'moment';
import {Toast} from 'galio-framework';

export default class NewsFeedScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
      urlImage: null,
      isLoading: true,
      id: this.props.route.params.id,
      isLoadingNews: true,
      dataNews: [],
    };
  }
  formatDate(date) {
    return moment(date).format('DD/MM/yyyy HH:mm:ss');
  }
  NewsFeedLast = () => {
    const renderItem = ({item, index}) => {
      return (
        <TouchableOpacity
          style={
            index == 0 ? NewsFeedScreenStyle.item : NewsFeedScreenStyle.item2
          }
          onPress={() => {
            this.setState({isLoading: true}, () => {
              this.loadData(item.id);
            });
          }}>
          <View
            style={{
              width: '100%',
              height: 120,
              backgroundColor: 'white',
              elevation: 5,
              shadowColor: 'black',
              borderRadius: 15,
            }}>
            <Image
              style={{
                width: '100%',
                height: '100%',
                borderRadius: 12,
                resizeMode: 'cover',
              }}
              source={{uri: item.image}}
            />
          </View>
          <Text numberOfLines={1} style={NewsFeedScreenStyle.titleText}>
            {item.title}
          </Text>
          <View style={NewsFeedScreenStyle.NFviewText}>
            <Text style={NewsFeedScreenStyle.NFtextDate}>
              <Image source={require('../../assets/images/imageClock.png')} />{' '}
              {this.formatDate(item.createTime)}
            </Text>
            <Text style={NewsFeedScreenStyle.NFtextDate}>
              <Image source={require('../../assets/images/imageAuthor.png')} />{' '}
              {item.createUser}
            </Text>
          </View>
        </TouchableOpacity>
      );
    };
    return (
      <View>
        {this.state.isLoadingNews ? (
          <ActivityIndicator size="large" color="black" />
        ) : (
          <FlatList
            data={this.state.dataNews}
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
          this.setState({dataNews: res.data.data.Data, isLoadingNews: false});
        } else {
          ToastAndroid.show('Lỗi hệ thống', 1000);
        }
      })
      .catch(error => {
        ToastAndroid.show('Lỗi hệ thống', 1000);
      });
  };
  loadData(id) {
    let reg = new DetailsNewsByID();
    reg
      .getNews(id)
      .then(res => {
        if (res.data.success) {
          this.setState({
            data: res.data.data.Message,
            urlImage: res.data.data.Message.image,
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
      this.getAllNews();
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
      <View style={{flex: 1, alignItems: 'center', backgroundColor: 'white'}}>
        <Header title="Tin tức" />
        {this.state.isLoading ? (
          <ActivityIndicator size="large" color="black" />
        ) : (
          <ScrollView
            showsVerticalScrollIndicator={false}
            style={NewsFeedScreenStyle.container}>
            <Text style={NewsFeedScreenStyle.txtTitle}>
              {this.state.data.title}
            </Text>
            <View style={NewsFeedScreenStyle.viewText}>
              <Text style={NewsFeedScreenStyle.textDate}>
                <Image source={require('../../assets/images/imageClock.png')} />{' '}
                {this.formatDate(this.state.data.createTime)}
              </Text>
              <Text style={NewsFeedScreenStyle.textDate}>
                <Image
                  source={require('../../assets/images/imageAuthor.png')}
                />{' '}
                {this.state.data.createUser}
              </Text>
            </View>
            <View
              style={{
                marginTop: 10,
                width: '100%',
                height: 250,
                backgroundColor: 'white',
                elevation: 5,
                shadowColor: 'black',
                borderRadius: 15,
              }}>
              <Image
                style={NewsFeedScreenStyle.image}
                source={{uri: this.state.urlImage}}
              />
            </View>
            <Text style={NewsFeedScreenStyle.textContent}>
              {this.state.data.content}
            </Text>
            <Text style={[NewsFeedScreenStyle.txtTitle, {marginTop: 20}]}>
              Tin mới:
            </Text>
            {this.NewsFeedLast()}
          </ScrollView>
        )}
      </View>
    );
  }
}
