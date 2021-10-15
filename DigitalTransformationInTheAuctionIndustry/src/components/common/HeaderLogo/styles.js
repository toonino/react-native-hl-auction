import {StyleSheet} from 'react-native';

export const styleHeaderLogo = StyleSheet.create({
  container: {
    height: 95,
    borderBottomWidth: 0.7,
    borderBottomColor: '#AAAAAA',
    backgroundColor: 'white',
    width: '90%',
    justifyContent: 'space-between',
    alignSelf: 'center',
    flexDirection: 'row',
  },
  nav: {width: 25, height: 18, alignSelf: 'center'},
  logo: {
    width: 225,
    height: 90,
    alignSelf: 'center',
    justifyContent: 'center'
  },
  img: {
    width: '100%',
    height: '100%',
    alignSelf: 'center',
    resizeMode: 'stretch'
  },
});
