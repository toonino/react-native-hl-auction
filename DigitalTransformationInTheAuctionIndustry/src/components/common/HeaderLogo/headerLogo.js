import React, {Component} from 'react';
import {Image, View, TouchableOpacity, Text} from 'react-native';
import {styleHeaderLogo} from './styles';
import * as RootNavigation from '../../../navigation/rootNavigator';
import {HOME, NOTIFICATION} from '../../../navigation/routeNames';
export class HeaderLogo extends Component {
  render() {
    return (
      <View style={styleHeaderLogo.container}>
        <TouchableOpacity
          style={styleHeaderLogo.nav}
          onPress={() => {
            this.props.navigator.toggleDrawer();
          }}>
          <Image
            style={{width: '100%', height: '100%', resizeMode: 'cover'}}
            source={require('../../../assets/images/nav.png')}
          />
        </TouchableOpacity>
        <TouchableOpacity
          style={styleHeaderLogo.logo}
          onPress={() => {
            RootNavigation.navigate(HOME)
          }}>
          <Image
            source={require('../../../assets/images/logoLacViet.png')}
            style={styleHeaderLogo.img}
          />
        </TouchableOpacity>
        {this.props.isAuthen && (
          <TouchableOpacity
            style={{
              justifyContent: 'center',
              alignSelf: 'center',
              position: 'relative',
            }}
            onPress={() => {
              RootNavigation.navigate(NOTIFICATION);
            }}>
            <View
              style={{
                backgroundColor: '#E8E6E6',
                width: 37,
                height: 37,
                borderRadius: 100,
                alignSelf: 'center',
                justifyContent: 'center',
              }}>
              <Image
                style={{
                  width: 20,
                  height: 23,
                  resizeMode: 'cover',
                  alignSelf: 'center',
                }}
                source={require('../../../assets/images/imgNotificationBell.png')}
              />
            </View>
            {this.props.count != 0 && (
              <TouchableOpacity
                onPress={() => {
                  RootNavigation.navigate(NOTIFICATION);
                }}
                style={{
                  position: 'absolute',
                  width: 20,
                  height: 20,
                  borderRadius: 50,
                  backgroundColor: '#FF3636',
                  justifyContent: 'center',
                  right: -5,
                  top: -5,
                }}>
                <Text style={{color: 'white', textAlign: 'center'}}>
                  {this.props.count}
                </Text>
              </TouchableOpacity>
            )}
          </TouchableOpacity>
        )}
        {!this.props.isAuthen && (
          <View
            style={{
              justifyContent: 'center',
              alignSelf: 'center',
              position: 'relative',
            }}>
            <View
              style={{
                backgroundColor: 'white',
                width: 37,
                height: 37,
                borderRadius: 100,
                alignSelf: 'center',
                justifyContent: 'center',
              }}></View>
          </View>
        )}
      </View>
    );
  }
}
