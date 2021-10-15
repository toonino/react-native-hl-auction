import React, {Component} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {navigationRef} from './rootNavigator';
import DrawerNavigator from './DrawerNavigator';
import AsyncStorage from '@react-native-community/async-storage';
// import AuthNavigator from './AuthNavigator';
import {
  createStackNavigator,
  CardStyleInterpolators,
} from '@react-navigation/stack';
import {View} from 'react-native';
import {AUTH_NAVIGATOR, DRAWER_NAVIGATOR} from './routeNames';
import NetInfo from '@react-native-community/netinfo';
import * as RootNavigation from '../navigation/rootNavigator';
import {NOINTERNET} from './routeNames';
import ErrorInternetScreen from '../components/Error/Internet/ErrorInternetScreen';
const AppStack = createStackNavigator();
export default class AppNavigator extends Component {
  constructor(props) {
    super(props);
    this.state = {
      hasInternet: true,
      isMounted: false,
    };
    AsyncStorage.removeItem('jwttoken');
  }

  render() {
    return (
      <NavigationContainer ref={navigationRef}>
        <AppStack.Navigator
          screenOptions={{
            headerShown: false,
            cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
          }}>
          <AppStack.Screen
            name={DRAWER_NAVIGATOR}
            component={DrawerNavigator}
          />
        </AppStack.Navigator>
      </NavigationContainer>
    );
  }
}
