import {StyleSheet} from 'react-native';

export const Search2Style = StyleSheet.create({
  containerVertical: {
    flex: 1,
  },
  viewBorderMinMax: {
    flexDirection: 'row',
    marginBottom: 5,
  },
  viewMinMax: {
    width: 120,
    backgroundColor: '#EFEEEE',
    borderRadius: 5,
    height: 21,
    fontSize: 12,
    padding: 0,
    paddingLeft: 10,
    alignSelf: 'center',
  },
  searchBar: {
    width: '100%',
    alignSelf: 'center',
    marginLeft: 30,
  },
  imageSearchIcon: {
    width: 20,
    height: 20,
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
  },
  hdcontainer: {
    height: 95,
    backgroundColor: 'white',
    width: '90%',
    alignItems: 'center',
    justifyContent: 'center',
    alignSelf: 'center',
  },
  hdbody: {
    width: '100%',
    height: 63,
    justifyContent: 'center',
    flexDirection: 'row',
  },

  imgSearch: {
    width: 20,
    height: 18,
    marginRight: 20,
    marginLeft: 10,
  },

  text_Search: {
    flex: 1,
  },
  pickerStyle: {
    fontSize: 17,
    width: '100%',
    color: '#FA4A0C',
    fontWeight: '500',
    height: '100%',
  },

  item: {
    marginLeft: 15,
    flexDirection: 'column',
    alignItems: 'center',
  },
  item2: {
    flexDirection: 'column',
    alignItems: 'center',
  },

  colText: {
    fontSize: 10,
    color: '#000000',
    marginTop: 2,
    fontWeight: `500`,
  },
  colImg: {
    height: 70,
    width: 70,
    borderRadius: 10,
    backgroundColor: 'white',
    elevation: 5,
    shadowColor: 'black',
    marginTop: 5,
  },
  colImg2: {
    height: 70,
    width: 70,
    borderRadius: 10,
    borderWidth: 2,
    borderColor: '#FA4A0C',
    backgroundColor: 'white',
    elevation: 5,
    shadowColor: 'black',
    marginTop: 5,
  },
  img: {
    height: '100%',
    width: '100%',
    borderRadius: 8,
  },

  imageVertical: {
    resizeMode: 'stretch',
    width: '40%',
    marginLeft: '-5%',
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
});
