import {StyleSheet} from 'react-native';

export const sellingContactStyle = StyleSheet.create({
  container: {},

  titleStyle: {
    fontWeight: '700',
    fontSize: 24,
  },

  contentTextBox: {
    fontSize: 14,
    color: '#ADB5BD',
  },

  inforAssetStyle: {
    paddingVertical: 14,
    flexDirection: 'row',
    paddingLeft: 42,
    paddingTop: 47,
    paddingBottom: 55,
  },

  button: {
    backgroundColor: '#FB3F39',
    paddingTop: 16,
    paddingBottom: 16,
    width: 280,
    borderRadius: 10,
    justifyContent: 'center',
    alignSelf: 'center',
    marginTop: 50,
  },

  addRequest: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '700',
    fontFamily: 'Roboto',
    alignSelf: 'center',
  },

  footerWrapContent: {
    backgroundColor: '#D4A911',
    paddingVertical: 110,
    paddingHorizontal: 55,
  },

  footerContentStyle: {
    flexDirection: 'row',
    paddingVertical: 4,
  },

  footerContent: {
    color: '#FFFFFF',
    lineHeight: 24,
  },
  footerIconStyle: {
    marginRight: 13,
  },

  imageBackGroundStyle: {
    resizeMode: 'cover',
    height: 197,
  },

  boderBlock: {
    width: '80%',
    height: 800,
    borderRadius: 30,
    backgroundColor: '#F4F5F7',
    alignSelf: 'center',
  },
  nameTextBoxWrap: {
    borderRadius: 5,
    borderWidth: 1,
    borderColor: '#FFFFFF',
    backgroundColor: '#FFFFFF',
    width: '100%',
    height: 50,
    marginTop: 25,
    flexDirection: 'row',
    justifyContent: 'center',
  },
  titleWrapContent: {
    width: '100%',
    marginTop: 60,
  },
  contentStyle: {
    width: '90%',
    height: '100%',
    textAlignVertical: 'center',
    alignSelf: 'center',
  },
  iconStyle: {
    width: '100%',
    color: '#ADB5BD',
    alignSelf: 'center',
  },
  viewIcon: {
    height: '100%',
    justifyContent: 'center',
    width: '10%',
  },
});
