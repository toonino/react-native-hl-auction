import React, {Component} from 'react';
import {View} from 'react-native';
import {
  createStackNavigator,
  CardStyleInterpolators,
} from '@react-navigation/stack';
import {
  ABOUT_US,
  MY_BIDDING,
  AUTIONLIST,
  CATEGORY,
  DETAILSAUTION,
  NOTIFICATION,
  CONTACT_SELL,
  TERM,
  PRIVACY,
  USER_PROFILE,
  HOME,
  LOGIN,
  NEWSFEED,
  AUTH_NAVIGATOR,
  HELPERSCREEN,
  EDITPROFILE,
  CHANGEPASSWORDSCREEN,
  DETAILS,
  NOINTERNET,
  NEWS,
  SEARCH2,
} from './routeNames';
import NewsFeed from '../components/NewsView/NewsFeed';
import HomeComponent from '../components/Home/HomeComponent';
import {styles} from '../shared/styles';
import UserProfile from '../components/User_Profile/UserProfile';
import RulesScreen from '../components/Rules/RulesScreen';
import AutionList from '../components/AutionList/AutionList';
import CategoryScreen from '../components/category/categoryScreen';
import EditProfile from '../components/User_Profile/EditProfile';
import ChangePasswordScreen from '../components/User_Profile/ChangePasswordScreen';
import MyBidding from '../navigation/SideMenu/MyBidding';
import HelperScreen from '../components/Helper/HelperScreen';
import Privacy from './SideMenu/Privacy';
import AboutUsScreen from '../components/AboutUs/AboutUsScreen';
import NotiView from '../components/NotificationsView/NotiView';
import DetailProduct from '../components/Details/DetailProduct';
import DetailAutionScreen from '../components/DetailAution/DetailAutionScreen';
import ErrorInternetScreen from '../components/Error/Internet/ErrorInternetScreen';
import NewsFeedScreen from '../components/NewsFeedScreen/NewsFeedScreen';
import Search2 from '../components/Search2/search2';
import AuthNavigator from './AuthNavigator';
import SellingContactScreen from '../components/SellingContact/SellingContactScreen';
const HomeStack = createStackNavigator();
export default class HomeNavigator extends Component {
  render() {
    return (
      <View style={styles.container}>
        <HomeStack.Navigator
          screenOptions={{
            headerShown: false,
            cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
          }}>
          <HomeStack.Screen name={HOME} component={HomeComponent} />
          <HomeStack.Screen name={MY_BIDDING} component={MyBidding} />
          <HomeStack.Screen name={ABOUT_US} component={AboutUsScreen} />
          <HomeStack.Screen
            name={CHANGEPASSWORDSCREEN}
            component={ChangePasswordScreen}
          />
          <HomeStack.Screen name={HELPERSCREEN} component={HelperScreen} />
          <HomeStack.Screen name={PRIVACY} component={Privacy} />
          <HomeStack.Screen name={NEWSFEED} component={NewsFeed} />
          <HomeStack.Screen name={USER_PROFILE} component={UserProfile} />
          <HomeStack.Screen name={EDITPROFILE} component={EditProfile} />
          <HomeStack.Screen name={TERM} component={RulesScreen} />
          <HomeStack.Screen name={AUTIONLIST} component={AutionList} />
          <HomeStack.Screen name={CATEGORY} component={CategoryScreen} />
          <HomeStack.Screen name={NOTIFICATION} component={NotiView} />
          <HomeStack.Screen name={DETAILS} component={DetailProduct} />
          <HomeStack.Screen name={NOINTERNET} component={ErrorInternetScreen} />
          <HomeStack.Screen
            name={DETAILSAUTION}
            component={DetailAutionScreen}
          />
          <HomeStack.Screen name={AUTH_NAVIGATOR} component={AuthNavigator} />
          {/* <DrawerStack.Screen name={DETAILS} component={DetailProduct} /> */}
          <HomeStack.Screen
            name={CONTACT_SELL}
            component={SellingContactScreen}
          />
          <HomeStack.Screen name={NEWS} component={NewsFeedScreen} />
          <HomeStack.Screen name={SEARCH2} component={Search2} />
        </HomeStack.Navigator>
      </View>
    );
  }
}
