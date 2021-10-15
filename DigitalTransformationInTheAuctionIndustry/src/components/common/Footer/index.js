import React, {useState} from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {
  faHome,
  faGavel,
  faNewspaper,
  faBookmark,
} from '@fortawesome/free-solid-svg-icons';
import {styleFooter} from './styleFooter';
import * as RootNavigation from '../../../navigation/rootNavigator';
import {
  USER_PROFILE,
  LOGIN,
  NEWSFEED,
  HOME,
  AUTIONLIST,
  CATEGORY,
} from '../../../navigation/routeNames';
export default function (props) {
  return (
    <View style={styleFooter.container}>
      <View style={styleFooter.line}></View>
      <TouchableOpacity
        onPress={() => {
          RootNavigation.navigate(HOME);
        }}>
        <View
          style={[
            styleFooter.tab_container,
            props.tab == 0 ? styleFooter.border_selected : '',
          ]}>
          <FontAwesomeIcon
            style={
              props.tab == 0
                ? styleFooter.color_selected
                : styleFooter.color_unselected
            }
            icon={faHome}
            size={26}
          />
          {props.tab == 0 ? (
            <Text
              style={[
                styleFooter.text,
                props.tab == 0
                  ? styleFooter.color_selected
                  : styleFooter.color_unselected,
              ]}>
              Trang chủ
            </Text>
          ) : (
            <Text></Text>
          )}
        </View>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => {
          RootNavigation.navigate(AUTIONLIST);
        }}>
        <View
          style={[
            styleFooter.tab_container,
            props.tab == 1 ? styleFooter.border_selected : '',
          ]}>
          <FontAwesomeIcon
            style={
              props.tab == 1
                ? styleFooter.color_selected
                : styleFooter.color_unselected
            }
            icon={faGavel}
            size={26}
            transform={{rotate: 270}}
          />
          {props.tab == 1 ? (
            <Text
              style={[
                styleFooter.text,
                props.tab == 1
                  ? styleFooter.color_selected
                  : styleFooter.color_unselected,
              ]}>
              Cuộc đấu giá
            </Text>
          ) : (
            <Text></Text>
          )}
        </View>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => {
          RootNavigation.navigate(CATEGORY);
        }}>
        <View
          style={[
            styleFooter.tab_container,
            props.tab == 2 ? styleFooter.border_selected : '',
          ]}>
          <FontAwesomeIcon
            style={
              props.tab == 2
                ? styleFooter.color_selected
                : styleFooter.color_unselected
            }
            icon={faBookmark}
            size={26}
          />
          {props.tab == 2 ? (
            <Text
              style={[
                styleFooter.text,
                props.tab == 2
                  ? styleFooter.color_selected
                  : styleFooter.color_unselected,
              ]}>
              Danh mục
            </Text>
          ) : (
            <Text></Text>
          )}
        </View>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => {
          RootNavigation.navigate(NEWSFEED);
        }}>
        <View
          style={[
            styleFooter.tab_container,
            props.tab == 3 ? styleFooter.border_selected : '',
          ]}>
          <FontAwesomeIcon
            style={
              props.tab == 3
                ? styleFooter.color_selected
                : styleFooter.color_unselected
            }
            icon={faNewspaper}
            size={26}
          />
          {props.tab == 3 ? (
            <Text
              style={[
                styleFooter.text,
                props.tab == 3
                  ? styleFooter.color_selected
                  : styleFooter.color_unselected,
              ]}>
              Tin tức
            </Text>
          ) : (
            <Text></Text>
          )}
        </View>
      </TouchableOpacity>
    </View>
  );
}
