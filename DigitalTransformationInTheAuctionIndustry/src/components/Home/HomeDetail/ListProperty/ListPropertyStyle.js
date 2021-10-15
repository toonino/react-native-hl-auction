import {StyleSheet} from 'react-native';

export const ListPropertyStyle = StyleSheet.create({
  categories_container: {
    marginBottom: 20,
  },

  text_categories: {
    color: '#A6A5A5',
    fontWeight: 'bold',
    fontSize: 17,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 10,
    paddingBottom: 3,
  },

  list_container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
  },

  selected_categories: {
    borderBottomColor: '#FA4A0C',
    color: '#FA4A0C',
    borderBottomWidth: 3,
  },

  item_container: {
    width: '100%',
    height: 320,
    backgroundColor: 'rgba(239, 236, 236, 0.6)',
    paddingHorizontal: 5,
    paddingVertical: 10,
    borderRadius: 10,
  },
  item_img: {
    width: '100%',
    height: 211,
    marginBottom: 20,
    borderRadius: 10,
  },

  text_container: {
    width: '90%',
    alignSelf: 'center',
  },

  text_title: {
    color: '#3C3C3C',
    fontSize: 18,
    fontWeight: 'bold',
    alignSelf: 'center',
  },

  bidding_container: {
    position: 'relative',
    justifyContent: 'center',
  },

  flex_row: {
    flexDirection: 'row',
    alignItems: 'center',
  },

  img_price: {
    width: 14,
    height: 9,
  },
  img_time: {
    width: 15,
    height: 13,
  },
  text_price: {
    fontSize: 11,
    color: '#8F8F8F',
    marginLeft: 10,
    maxWidth: '70%',
  },
  text_time: {
    fontSize: 11,
    color: '#26D3DE',
    marginLeft: 10,
  },
  img_bidding: {
    width: 30,
    height: 28,
    position: 'absolute',
    alignSelf: 'flex-end',
    resizeMode: 'contain',
  },
  list2View: {
    backgroundColor: 'white',
    marginLeft: 15,
    flexDirection: 'column',
    alignItems: 'center',
  },
  list2View2: {
    backgroundColor: 'white',
    flexDirection: 'column',
    alignItems: 'center',
  },
  list2ViewView: {
    height: 96,
    width: 150,
    borderRadius: 15,
  },
  list2ViewImg: {
    resizeMode: 'cover',
    height: '100%',
    width: '100%',
    borderRadius: 15,
    justifyContent: 'center',
  },
  list2ViewTxt: {
    fontSize: 18,
    color: '#727272',
    marginTop: 5,
    fontWeight: `500`,
  },
  list2: {alignSelf: 'center', height: 130},
  list3View: {
    height: 180,
    width: 182,
  },
  list32View: {
    height: 180,
    width: 182,
    marginLeft: 15,
  },
  list3IMG: {
    width: '100%',
    height: '100%',
    borderRadius: 13,
  },
  list3Txt: {
    fontWeight: 'bold',
    fontSize: 12,
    marginTop: 8,
  },
  list3View2: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  list3Txt2: {
    fontWeight: 'bold',
    fontSize: 11,
    marginTop: 8,
    color: '#989898',
  },
  list3Txt3: {
    fontWeight: 'bold',
    fontSize: 11,
    marginTop: 4,
    color: '#FF0000',
  },
  // list1
  list1View: {
    height: 200,
    width: 182,
    backgroundColor: '#EFEFEF',
    borderRadius: 10,
    marginTop: 7,
  },
  list12View: {
    height: 200,
    width: 182,
    backgroundColor: '#EFEFEF',
    borderRadius: 10,
    marginTop: 7,
    marginLeft: 15,
  },
  list1IMG: {
    width: '100%',
    height: 120,
    borderRadius: 10,
  },
  list1Txt: {
    fontWeight: 'bold',
    fontSize: 12,
    marginTop: 8,
  },
  list1View2: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    height: 20,
    marginTop: 7,
  },
  list1Txt2: {
    fontWeight: 'bold',
    fontSize: 11,
    marginTop: 4,
    color: '#989898',
  },
  list1Txt3: {
    fontWeight: 'bold',
    fontSize: 11,
    marginTop: 7,
    color: '#FF0000',
  },
  viewTextContainer: {
    justifyContent: 'space-between',
    flexDirection: 'row',
    marginBottom: 7,
    marginTop: 10,
  },
  text1Container: {fontWeight: 'bold', fontSize: 24},
  text2Container: {fontWeight: 'bold', fontSize: 17, color: '#FA4A0C'},
});
