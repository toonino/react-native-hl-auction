import {StyleSheet} from 'react-native';
import {styles} from '../../shared/styles';

export const notiStyle = StyleSheet.create({
  textTitle: {
    fontFamily: 'Roboto',
    fontWeight: 'bold',
    fontSize: 24,
  },

  textMess: {
    fontFamily: 'Roboto',
    fontWeight: '400',
    fontSize: 18,
    marginTop: '10%',
    marginBottom: '5%',
    marginRight: '15%',
  },
  textInputFindPass: {
    height: '7%',
    width: '84%',
    borderBottomColor: 'black',
    borderBottomWidth: 1,
  },
  mid: {
    marginTop: 10,
    alignSelf: 'center',
    marginBottom: 20,
    height: '95%',
  },
  width80: {
    width: '80%',
  },
  resend: {
    fontFamily: 'Roboto',
    fontSize: 13,
    fontWeight: 'bold',
    marginTop: '10%',
  },
  container: {},
  item: {
    marginTop: 19,
    height: 180,
    width: 182,
    marginRight: 15,
  },
  image: {
    width: '100%',
    height: '66%',
  },
  titleText: {
    fontFamily: 'Roboto',
    fontWeight: 'bold',
    fontSize: 12,
    marginTop: '5%',
  },
  viewText: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 'auto',
    marginBottom: 5,
  },
  textDate: {
    fontFamily: 'Roboto',
    fontWeight: '500',
    fontSize: 11,
    marginTop: '5%',
    color: '#989898',
  },
  containerVertical: {
    flex: 1,
  },
  itemVertical: {
    height: 100,
    width: '100%',
    flexDirection: 'row',
    alignSelf: 'center',
    justifyContent: 'center',
    borderBottomWidth: 1,
    borderBottomColor: '#989898',
  },
  imageVertical: {
    width: '100%',
    height: 30,
    resizeMode: 'cover',
    alignSelf: 'center',
  },
  titleTextVertical: {
    fontFamily: 'Roboto',
    fontWeight: 'bold',
    fontSize: 14,
    marginTop: 20,
  },
  textDateVertical: {
    fontFamily: 'Roboto',
    fontWeight: '500',
    fontSize: 11,
    marginTop: '5%',
    color: '#989898',
  },
  textAuthorVertical: {
    fontFamily: 'Roboto',
    fontWeight: '500',
    fontSize: 11,
    marginTop: '10%',
    color: '#989898',
    marginRight: '5%',
  },
  ViewVertical: {width: '60%'},
  searchBar: {
    height: 40,
    borderWidth: 1,
    backgroundColor: '#EFEEEE',
    width: '90%',
    marginTop: '5%',
    marginLeft: '2%',
    borderRadius: 20,
    borderColor: '#EFEEEE',
  },
  imageBack: {
    marginTop: '10%',
    width: 11,
    height: 15,
  },
  imageSearchIcon: {
    width: 15,
    height: 15,
  },
  textNewsLast: {
    fontWeight: 'bold',
    fontSize: 24,
    // marginTop: '3%',
    // justifyContent: 'space-between',
  },
  textNewsLastDate: {
    fontWeight: 'bold',
    fontSize: 11,
    marginTop: '3%',
    color: '#989898',
  },
  viewTextLast: {
    justifyContent: 'space-between',
    flexDirection: 'row',
    marginTop: '10%',
  },
  textNewsCurrent: {
    fontWeight: 'bold',
    fontSize: 24,
    marginTop: '3%',
  },
  textSeen: {
    color: '#77EF64',
    fontSize: 11,
    fontWeight: 'bold',
    marginTop: 5,
  },
  textUnSeen: {
    color: '#FF7B4D',
    fontSize: 11,
    fontWeight: 'bold',
    marginTop: 5,
  },
});
