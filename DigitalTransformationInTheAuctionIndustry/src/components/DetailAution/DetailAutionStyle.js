import {StyleSheet} from 'react-native';

export const detailAutionStyle = StyleSheet.create({
  imageStyle: {
    width:'100%',
    height: 250,
    borderRadius: 5,
    marginTop: 10,
  },
  title: {
    fontFamily: 'Roboto',
    fontWeight: '700',
    fontSize: 18,
    marginVertical: 12,
  },

  icon: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  contentStyle: {
    marginLeft: 18,
    marginBottom: 5,
  },
  item: {
    borderBottomWidth: 1,
    borderBottomColor: '#989898',
    paddingHorizontal: 10,
    paddingVertical: 12,
  },

  content: {
    fontWeight: 'bold',
    fontSize: 20,
    textAlign: 'center',
    marginTop: 10,
  },
  date: {
    fontFamily: 'Roboto',
    fontWeight: '500',
    lineHeight: 13,
    fontSize: 11,
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 5,
  },

  dateText: {
    flexDirection: 'row',
    alignItems: 'center',
    color: '#989898',
  },

  dateContent: {
    color: '#989898',
    paddingLeft: 5,
    fontSize: 11,
  },

  downloadStyle: {
    flexDirection: 'row',
    alignItems: 'center',
  },

  downloadTextStyle: {
    color: '#989898',
    fontSize: 18,
    textAlign: 'center',
  },

  priceStyle: {
    fontSize: 15,
    marginRight: 'auto',
  },

  leftBlock: {
    flex: 1,
    marginHorizontal: 15,
  },

  listAutionInSession: {
    fontWeight: '700',
    fontSize: 18,
    lineHeight: 21,
    marginTop: 10,
    marginBottom: 10,
  },
  wrapblock: {
    paddingBottom: 12,
    borderBottomWidth: 1,
    borderBottomColor: '#989898',
  },
});
