import React, {Component} from 'react';
import {createDrawerNavigator} from '@react-navigation/drawer';
import {
  HOME_NAVIGATOR,
  AUTH_NAVIGATOR,
  DETAILS,
  DETAILSAUTION,
  CONTACT_SELL,
  NEWS,
  SEARCH2,
} from './routeNames';
import * as RootNavigation from './rootNavigator';
import HomeNavigator from './HomeNavigator';
// import AuthNavigator from './AuthNavigator';
const DrawerStack = createDrawerNavigator();
import SideMenu from './SideMenu/SideMenu';
import DetailProduct from '../components/Details/DetailProduct';
import DetailAutionScreen from '../components/DetailAution/DetailAutionScreen';
import NewsFeedScreen from '../components/NewsFeedScreen/NewsFeedScreen';
import Search2 from '../components/Search2/search2';
import SellingContactScreen from '../components/SellingContact/SellingContactScreen';
import NetInfo from '@react-native-community/netinfo';
import {NOINTERNET} from './routeNames';
export default class DrawerNavigator extends Component {
  constructor(props) {
    super(props);
  }
  componentDidMount() {
    NetInfo.addEventListener(state => {
      if (state.isConnected) {
      } else {
        RootNavigation.navigate(NOINTERNET);
      }
    });
  }

  render() {
    return (
      <DrawerStack.Navigator
        screenOptions={{swipeEnabled: false}}
        drawerContent={props => <SideMenu {...props}></SideMenu>}>
        <DrawerStack.Screen name={HOME_NAVIGATOR} component={HomeNavigator} />
        {/* <DrawerStack.Screen name={AUTH_NAVIGATOR} component={AuthNavigator} /> */}
      </DrawerStack.Navigator>
    );
  }
}
