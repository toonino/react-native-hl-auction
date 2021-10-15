import {StyleSheet} from 'react-native';

export const styleHeaderLogo = StyleSheet.create({
  container: {
    height: 95,
    borderBottomWidth: 0.7,
    borderBottomColor: '#AAAAAA',
    backgroundColor: 'white',
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  body: {
    width: '90%',
    position: 'relative',
    height: 63,
    justifyContent: 'center',
  },
  textHeader: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    marginTop: 17,
  },
  logo: {
    width: '80%',
    height: '100%',
    position: 'absolute',
    alignSelf: 'center',
  },
  img: {
    width: '100%',
    height: '100%',
  },
});
