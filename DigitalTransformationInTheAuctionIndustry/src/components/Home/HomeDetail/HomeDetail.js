import React, {Component} from 'react';
import {View, Image, TextInput, TouchableOpacity, Text} from 'react-native';
import {HomeDetailStyles} from './HomeDetailStyles';
import ListProperty from './ListProperty/ListProperty';
import {
  createStackNavigator,
  CardStyleInterpolators,
} from '@react-navigation/stack';
import * as RootNavigation from '../../../navigation/rootNavigator';
import SearchProperty from './SearchProperty/SearchProperty';
const HomeStack = createStackNavigator();
export default class HomeDetail extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isSearching: false,
    };
  }

  render() {
    return (
      <View style={{flex: 1, backgroundColor: '#FFFFFF'}}>
        <HomeStack.Navigator
          screenOptions={{
            headerShown: false,
            cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
          }}>
          <HomeStack.Screen name="List_Property" component={ListProperty} />
          <HomeStack.Screen name="Search_Property" component={SearchProperty} />
        </HomeStack.Navigator>
      </View>
    );
  }
}
