import {StyleSheet} from 'react-native';
import {styles} from '../../shared/styles';

export const categoryStyle = StyleSheet.create({
  item: {
    backgroundColor: 'white',
    marginLeft: 15,
    flexDirection: 'column',
    alignItems: 'center',
  },
  item2: {
    backgroundColor: 'white',
    flexDirection: 'column',
    alignItems: 'center',
  },
  colImg: {
    height: 96,
    width: 150,
    borderRadius: 15,
  },
  colText: {
    fontSize: 18,
    color: '#727272',
    marginTop: 5,
    fontWeight: `500`,
  },

  flexCol: {
    alignSelf: 'center',
    backgroundColor: 'white',
    justifyContent: 'center',
    width: '100%',
    marginBottom: 20,
  },
  category1: {
    width: '90%',
    alignSelf: 'center',
    height: 235,
    marginBottom: 15,
    justifyContent: 'center',
    elevation: 5,
    shadowColor: 'black',
    borderRadius: 12,
  },
  img: {
    resizeMode: 'cover',
    height: '100%',
    width: '100%',
    borderRadius: 15,
    justifyContent: 'center',
  },
  textIMGBG: {
    fontSize: 36,
    fontWeight: 'bold',
    color: 'white',
    textAlign: 'center',
  },

  scroll: {
    backgroundColor: 'white',
    marginTop: 15,
  },
  alignSelfCenter: {
    alignSelf: 'center',
  },
  category2: {
    height: 180,
    elevation: 5,
    shadowColor: 'black',
    borderRadius: 12,
  },
  mb15: {
    marginBottom: 15,
  },
  mt15: {
    marginTop: 15,
  },
  h375: {
    height: 375,
    elevation: 5,
    shadowColor: 'black',
    borderRadius: 12,
  },
  alsC: {
    alignSelf: 'center',
  },
  container: {width: '90%', alignSelf: 'center'},
});
