import {StyleSheet} from 'react-native';

export const NewsFeedScreenStyle = StyleSheet.create({
  item: {
    marginTop: 19,
    height: 180,
    width: 182,
  },
  item2: {
    marginTop: 19,
    height: 180,
    width: 182,
    marginLeft: 15,
  },
  titleText: {
    fontFamily: 'Roboto',
    fontWeight: 'bold',
    fontSize: 12,
    marginTop: '5%',
  },
  NFviewText: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  NFtextDate: {
    fontWeight: 'bold',
    fontSize: 11,
    marginTop: '2%',
    color: '#989898',
  },
  container: {
    flex: 1,
    backgroundColor: 'white',
    width: '90%',
    marginBottom: 20,
  },
  image: {width: '100%', height: '100%', borderRadius: 15, resizeMode: 'cover'},
  txtTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginTop: 20,
  },
  viewText: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '50%',
  },
  textDate: {
    fontFamily: 'Roboto',
    fontWeight: '500',
    fontSize: 11,
    marginTop: 7,
    color: '#989898',
    marginBottom: 7,
  },
  btnInfo: {
    width: '50%',
    justifyContent: 'center',
    backgroundColor: '#FE703E',
    flexDirection: 'row',
    borderRadius: 10,
    height: 33,
    alignItems: 'center',
    marginBottom: 7,
  },
  btnInfoText: {
    fontSize: 16,
    color: 'white',
    textAlign: 'center',
    fontWeight: 'bold',
  },
  textContent: {fontSize: 16, marginTop: 20},
});
