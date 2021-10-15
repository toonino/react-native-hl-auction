import {StyleSheet} from 'react-native';
import {styles} from '../../shared/styles';

export const newsFeedStyle = StyleSheet.create({
  pickerStyleView: {
    width: '100%',
    height: 40,
    borderColor: '#e0e0d1',
    borderRadius: 7,
    borderWidth: 1,
    justifyContent: 'center',
    marginTop: 5,
    marginBottom: 5,
  },
  textTitle: {
    fontFamily: 'Roboto',
    fontWeight: 'bold',
    fontSize: 24,
    marginTop: '7%',
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
    alignSelf: 'center',
    flex: 1,
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
    fontWeight: 'bold',
    fontSize: 12,
    marginTop: '5%',
  },
  viewText: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  textDate: {
    fontWeight: 'bold',
    fontSize: 11,
    marginTop: '2%',
    color: '#989898',
  },
  containerVertical: {
    flex: 1,
  },
  itemVertical: {
    height: 130,
    width: '100%',
    flexDirection: 'row',
    borderBottomWidth: 1,
    borderBottomColor: '#989898',
    justifyContent: 'center',
    backgroundColor: 'white',
  },
  viewIMG: {
    width: '40%',
    height: '85%',
    borderWidth: 1,
    borderColor: '#989898',
    justifyContent: 'center',
    borderRadius: 15,
    alignSelf: 'center',
  },
  imageVertical: {
    width: '100%',
    height: '100%',
    resizeMode: 'cover',
    borderRadius: 14,
    alignSelf: 'center',
  },
  titleTextVertical: {
    fontFamily: 'Roboto',
    fontWeight: 'bold',
    fontSize: 14,
  },
  textDateVertical: {
    fontFamily: 'Roboto',
    fontWeight: '500',
    fontSize: 11,
    color: '#989898',
  },
  textAuthorVertical: {
    fontSize: 11,
    color: '#989898',
    marginRight: 10,
  },
  ViewVertical: {width: '57%', marginLeft: '3%', alignSelf: 'center', height: 100, justifyContent: 'space-between', paddingVertical: 5},

  nav: {
    flexDirection: 'column',
    justifyContent: 'center',
    marginLeft: '10%',
    marginRight: 10,
  },
  toIMGBack: {justifyContent: 'center', marginTop: 15},
  imageBack: {
    marginTop: '10%',
    width: 11,
    height: 15,
    marginRight: 30,
  },

  textNewsLast: {
    fontWeight: 'bold',
    fontSize: 18,
    marginTop: '3%',
  },
  textNewsCurrent: {
    fontWeight: 'bold',
    fontSize: 24,
    marginTop: '3%',
  },
  search_container: {
    width: '80%',
    backgroundColor: '#EFEEEE',
    borderRadius: 30,
    height: 54,
    flexDirection: 'row',
    alignSelf: 'center',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: -35,
    marginLeft: 30,
  },
  searchBar: {
    width: '80%',
    alignSelf: 'center',
    marginLeft: 10,
  },
  imageSearchIcon: {
    width: 15,
    height: 15,
    marginRight: 20,
    marginLeft: 10,
  },
  containerHeader: {
    flexDirection: 'row',
    height: 90,
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',
  },
  hdcontainer: {
    height: 95,
    borderBottomWidth: 0.7,
    borderBottomColor: '#AAAAAA',
    backgroundColor: 'white',
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  hdbody: {
    width: '90%',
    position: 'relative',
    height: 63,
    justifyContent: 'center',
  },
});
