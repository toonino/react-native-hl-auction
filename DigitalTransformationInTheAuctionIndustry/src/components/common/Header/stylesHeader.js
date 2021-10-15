import {StyleSheet} from 'react-native';

export const styleHeader = StyleSheet.create({
  container: {
    height: 62,
    alignItems: 'center',
    justifyContent: 'center',
    borderBottomColor: 'rgba(0, 0, 0, 0.25)',
    borderBottomWidth: 1,
    flexDirection: 'row',
    padding: 16,
    backgroundColor: 'white',
  },
  text: {
    fontFamily: 'Roboto',
    fontSize: 24,
    fontWeight: '700',
    lineHeight: 28.13,
  },
  container2: {
    height: 70,
    // height:95,
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
    flexDirection: 'row',
    marginTop: 42,
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
