import React, { Component } from 'react'
import { SearchPropertyStyles } from './SearchPropertyStyles'
import { View, Text, TextInput, Image, TouchableOpacity, FlatList, ScrollView, ActivityIndicator, KeyboardAvoidingView, Platform } from 'react-native';
import { HomeDetailStyles } from '../HomeDetailStyles';
import * as RootNavigation from '../../../../navigation/rootNavigator';
export default class SearchProperty extends Component {

    constructor(props) {
        super(props);
        this.state = {
            data_suggest: [],
            data_new: [],
            isLoading: true,
            id: 0,
        }
    }

    componentDidMount() {
        this.load_newProperty();
        this.load_Suggest();
    }

    load_newProperty = async () => {
        var url = 'https://jsonplaceholder.typicode.com/photos?_limit=5';
        fetch(url)
            .then((response) => response.json())
            .then((json) => {
                this.setState({ data_new: json });
            })
            .catch((error) =>{})
            .finally(() => {
                this.setState({ isLoading: false });
            });

    }

    load_Suggest = () => {
        var url = 'https://jsonplaceholder.typicode.com/photos?albumId=';
        var id = 0;
        if (this.state.id == 1) {
            id = 2;
            this.setState({ id: 2 });
        }
        else {
            id = 1;
            this.setState({ id: 1 });
        }
        url = url + id + '&&_limit=5';
        fetch(url)
            .then((response) => response.json())
            .then((json) => {
                this.setState({ data_suggest: json });
            })
            .catch((error) =>{})
            .finally(() => {
                this.setState({ isLoading: false });
            });
    }

    itemProperty = ({ item, index }) => {
        return (
            <View style={[SearchPropertyStyles.item_newProperty, index == 0 ? {} : { marginLeft: 23 }]}>
                <Image style={SearchPropertyStyles.img} source={{ uri: item.url }} />
                <Text style={SearchPropertyStyles.text_description} numberOfLines={2}>{item.title}</Text>
            </View>
        )
    }

    itemSuggest = () => {
        return (
            <View style={SearchPropertyStyles.item_suggest}>
                <Text style={SearchPropertyStyles.text_title}></Text>
                <Text style={SearchPropertyStyles.text_category}></Text>
            </View>
        )

    }
    list = () => {
        return this.state.data_suggest.map((suggest) => {
            return (
                <View style={SearchPropertyStyles.item_suggest} key={suggest.id}>
                    <Text style={SearchPropertyStyles.text_title} >{suggest.id}</Text>
                    <Text style={SearchPropertyStyles.text_category} >{suggest.title}</Text>
                </View>
            );
        });
    };


    render() {
        return (
          <View style={HomeDetailStyles.container}>
            <View style={HomeDetailStyles.search_container}>
              <View style={HomeDetailStyles.search_bar}>
                <Image
                  style={HomeDetailStyles.imgSearch}
                  source={require('../../../../assets/images/searchIcon.png')}
                />
                <TextInput
                  style={HomeDetailStyles.text_Search}
                  placeholder="Tìm kiếm"
                  onChangeText={text => {
                    this.load_Suggest();
                  }}
                  autoFocus={true}></TextInput>
              </View>
              <TouchableOpacity
                onPress={() => {
                  RootNavigation.navigate('List_Property');
                }}>
                <Text style={HomeDetailStyles.text_cancel}>Huỷ</Text>
              </TouchableOpacity>
            </View>
            {this.state.isLoading ? (
              <ActivityIndicator size="large" color="black" />
            ) : (
              <View style={{flex: 1}}>
                  <Text style={SearchPropertyStyles.text_suggest}>Gợi ý:</Text>
                  <ScrollView style={{flex: 1}}>{this.list()}</ScrollView>
                <View style={{height: 200}}>
                  <Text style={SearchPropertyStyles.text_suggest}>
                    Tài sản mới:{' '}
                  </Text>
                  <FlatList
                    style={{marginVertical: 10}}
                    data={this.state.data_new}
                    renderItem={this.itemProperty}
                    keyExtractor={item => item.id}
                    horizontal
                    showsVerticalScrollIndicator={false}
                    showsHorizontalScrollIndicator={false}
                  />
                </View>
              </View>
            )}
          </View>
        );
    }
}
