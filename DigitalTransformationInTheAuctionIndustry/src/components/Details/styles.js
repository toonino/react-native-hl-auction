import {StyleSheet, Dimensions} from 'react-native';
import {styles} from '../../shared/styles';
const {width} = Dimensions.get('window');
const height = width * 0.6;
export const DetailProductStyles = StyleSheet.create({
  mid: {
    height: '100%',
    backgroundColor: '#FFFFFF',
  },
  image: {
    resizeMode: 'cover',
    width: '100%',
    height: height,
    borderTopLeftRadius: 5,
    borderTopRightRadius: 5,
  },
  item: {
    height: 180,
    width: 182,
    borderWidth: 1,
  },
  textName: {
    fontSize: 28,
    fontWeight: 'bold',
    marginLeft: 15,
    marginTop: 15,
  },
  containerScrollVIew: {
    width: width,
    height: height,
    marginTop: 20,
  },
  txtNgayGio: {textAlign: 'center', fontSize: 11, color: 'white'},
  txtCount: {
    marginHorizontal: 10,
    color: '#223263',
    fontWeight: 'bold',
    fontSize: 16,
  },
  viewCount: {
    borderRadius: 5,
    width: 40,
    height: 40,
    backgroundColor: 'white',
    justifyContent: 'center',
  },
  viewTime: {
    justifyContent: 'center',
    width: 40,
    marginRight: 5,
  },
  viewLeft: {
    justifyContent: 'center',
    width: '50%',
    paddingLeft: 10,
  },
  textTitleLeft: {
    fontSize: 13,
    color: 'white',
    fontWeight: '500',
    marginRight: 'auto',
  },
  textPrice: {
    fontSize: 18,
    color: 'white',
    fontWeight: 'bold',
  },
  viewContainerPrice: {
    backgroundColor: '#FF6027',
    width: '100%',
    height: 70,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  containerUser: {
    flexDirection: 'row',
    width: width,
    height: 60,
    justifyContent: 'space-evenly',
  },
  viewPart: {
    justifyContent: 'center',
  },
  txtUserWin: {
    fontSize: 10,
    color: '#BEBEBE',
    textAlign: 'center',
    fontWeight: 'bold',
  },
  txtNameUser: {
    fontSize: 13,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  txtPrice: {
    fontSize: 13,
    fontWeight: 'bold',
    color: '#FF0000',
    textAlign: 'center',
  },
  TOstyle: {
    backgroundColor: '#5CCD61',
    width: 90,
    height: 30,
    justifyContent: 'center',
    borderRadius: 5,
  },
  txtTO: {
    textAlign: 'center',
    color: 'white',
    fontSize: 11,
    fontWeight: 'bold',
  },
  viewLine: {
    backgroundColor: '#C4C4C4',
    width: width,
    height: 5,
  },
  viewLine2: {
    backgroundColor: '#C4C4C4',
    width: width,
    height: 2,
  },
  txtDetails: {
    fontWeight: 'bold',
    fontSize: 20,
    marginLeft: 20,
    marginTop: 20,
    paddingBottom: 10,
  },
  viewTextLine: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginTop: 10,
  },
  textLeft: {
    color: '#808080',
    fontSize: 15,
    width: width * 0.4,
    marginLeft: 10,
    fontWeight: 'bold',
  },
  textRight: {
    color: '#3D39FB',
    fontSize: 15,
    width: width * 0.4,
    fontWeight: 'bold',
  },
  TOBTNStyles: {
    marginTop: 20,
    backgroundColor: '#FF5F27',
    width: 320,
    height: 70,
    justifyContent: 'center',
    borderRadius: 20,
    alignSelf: 'center',
    marginBottom: 15,
    bottom: 0,
    left: 0,
    right: 0,
  },
  txtTO2: {
    textAlign: 'center',
    color: 'white',
    fontSize: 24,
    fontWeight: 'bold',
  },
  viewInfo: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginTop: 10,
    width: '90%',
    alignSelf: 'center',
  },
  viewStyleSelected: {
    borderColor: '#FF5F27',
    borderWidth: 1,
    width: '30%',
    height: 80,
    borderRadius: 5,
    justifyContent: 'center',
  },
  textSelected: {
    fontSize: 12,
    fontWeight: 'bold',
    color: '#FF5F27',
    textAlign: 'center',
  },
  viewStyleUnselected: {
    backgroundColor: '#FF5F27',
    width: '30%',
    height: 80,
    borderRadius: 5,
    justifyContent: 'center',
  },
  textUnselected: {
    fontSize: 12,
    fontWeight: 'bold',
    color: 'white',
    textAlign: 'center',
  },
  txtInfo: {fontSize: 14, fontWeight: 'bold'},
  txtInfo1: {fontSize: 14, fontWeight: 'bold', marginTop: 10},
  txtI4s: {fontSize: 14, fontWeight: 'bold', color: '#C30000'},
  txtI4s2: {fontSize: 14, fontWeight: 'bold', color: '#3D39FB'},
  txt1: {fontWeight: 'bold', fontSize: 30, marginLeft: 20, marginTop: 10},
  viewSamePrd: {width: '90%%', backgroundColor: '#FFFFFF'},
  viewSameLine: {flexDirection: 'row', justifyContent: 'space-evenly'},
  viewShadowItem: {
    elevation: 10,
    width: 150,
    height: 210,
    shadowColor: 'black',
    backgroundColor: '#FFFFFF',
    marginTop: 20,
    borderRadius: 5,
  },
  imageItem: {
    width: '90%',
    height: 140,
    resizeMode: 'stretch',
    alignSelf: 'center',
    marginTop: 5,
  },
  textItem1: {
    textAlign: 'center',
    fontWeight: 'bold',
    fontSize: 18,
  },
  textItem2: {
    textAlign: 'center',
    fontWeight: 'bold',
    fontSize: 9,
    color: '#898989',
    marginTop: 5,
  },
  textItem3: {
    textAlign: 'center',
    fontWeight: 'bold',
    fontSize: 9,
    color: '#C30000',
  },
  txtIDModal: {
    fontSize: 13,
    fontWeight: 'bold',
  },
  //historyBid
  viewModalStyles: {
    backgroundColor: 'white',
    marginTop: 'auto',
    borderRadius: 10,
    height: '50%',
  },
  viewSmallModalStyles: {
    flexDirection: 'row',
  },
  viewTextModal1: {
    width: '90%',
    height: 70,
    justifyContent: 'center',
  },
  textModal1: {
    textAlign: 'center',
    fontSize: 24,
    fontWeight: 'bold',
  },
  viewImageStyles: {
    width: '10%',
    justifyContent: 'center',
  },
  imageStyles2: {
    width: 20,
    height: 20,
  },
  textModal2: {
    color: '#808080',
    fontSize: 15,
    fontWeight: 'bold',
    marginTop: 20,
    paddingBottom: 10,
    textAlign: 'center',
  },
  textModal3: {
    color: '#808080',
    fontSize: 15,
    fontWeight: 'bold',
    marginTop: 20,
    textAlign: 'center',
  },
  viewFirstStyles: {
    flexDirection: 'row',
    height: 50,
    backgroundColor: '#ffff99',
  },
  viewSmallFirstStyles: {
    flexDirection: 'row',
    width: '25%',
  },
  viewImageFirstStyles: {
    width: 30,
    height: 30,
    borderRadius: 30,
    alignSelf: 'center',
    marginLeft: 8,
  },
  viewFirstText1: {
    alignSelf: 'center',
    marginLeft: 20,
  },
  viewFirstText2: {
    fontSize: 10,
    fontWeight: 'bold',
    color: '#BEBEBE',
  },
  viewFirstStyle2: {
    alignSelf: 'center',
    marginLeft: 'auto',
    marginRight: 20,
  },
  viewFirstStyle2Text1: {
    fontSize: 15,
    fontWeight: 'bold',
    color: 'red',
  },
  viewFirstStyle2Text2: {
    fontSize: 15,
    fontWeight: 'bold',
  },
  imageWin: {
    alignSelf: 'center',
    marginLeft: 55,
  },
  viewSecondModal: {
    flexDirection: 'row',
    height: 50,
    borderBottomWidth: 0.5,
    borderBottomColor: '#cccccc',
  },
  // doneBid
  imageDoneBidStyles2: {
    width: 20,
    height: 20,
  },
  viewDonBidStyles: {
    marginTop: '50%',
    backgroundColor: 'white',
    borderRadius: 10,
    height: 550,
    marginTop: 'auto',
    alignItems: 'center',
  },
  viewDonBidStyles2: {
    marginTop: '50%',
    backgroundColor: 'white',
    borderRadius: 10,
    height: 450,
    marginTop: 'auto',
    alignItems: 'center',
  },
  viewDonBidImageStyles: {
    width: '10%',
    justifyContent: 'center',
    marginLeft: 'auto',
  },
  viewDoneBidText1: {
    flex: 1,
    width: '75%',
    justifyContent: 'center',
  },
  viewDoneBidText1STT: {
    width: '75%',
    justifyContent: 'center',
    marginTop: 30,
  },
  viewDoneBidText2: {
    fontSize: 20,
    fontFamily: 'Open Sans',
    fontWeight: 'bold',
  },
  viewDoneBidTouch: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: '100%',
    marginTop: 50,
  },
  viewDoneBidTouch2: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: '100%',
    marginTop: 20,
  },
  touchStyles: {
    height: 45,
    width: 125,
    borderRadius: 15,
    justifyContent: 'center',
  },
  touchStyles2: {
    height: 45,
    width: 125,
    borderRadius: 15,
    justifyContent: 'center',
    backgroundColor: '#a3a375',
  },
  touchPlusStyles: {
    height: 45,
    width: 125,
    borderRadius: 15,
    justifyContent: 'center',
    backgroundColor: '#26D3DE',
  },
  touchMinusStyles: {
    height: 50,
    width: 50,
    borderRadius: 10,
    justifyContent: 'center',
    backgroundColor: '#EDEDED',
  },
  touchText: {
    textAlign: 'center',
    fontSize: 16,
    fontWeight: 'bold',
  },
  //CancelBid
  imageCancelBidStyles2: {
    width: 20,
    height: 20,
  },
  viewCancelBidImageStyles: {
    width: '10%',
    justifyContent: 'center',
    marginLeft: 'auto',
    marginTop: 20,
  },
  viewCancelBidStyles: {
    marginTop: '50%',
    backgroundColor: 'white',
    borderRadius: 10,
    height: 300,
    marginTop: 'auto',
    alignItems: 'center',
  },
  imageCancelBidStyle: {
    width: 100,
    height: 100,
  },
  viewCancelBidText1: {
    width: '75 %',
    justifyContent: 'center',
  },
  touchStyles3: {
    height: 55,
    width: 180,
    borderRadius: 15,
    justifyContent: 'center',
    marginTop: 20,
    backgroundColor: '#FB3F39',
  },
  viewCancelBid: {
    fontSize: 18,
    fontFamily: 'Open Sans',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  touchTextCancelBid: {
    textAlign: 'center',
    fontSize: 24,
    fontWeight: 'bold',
    color: 'white',
  },
});
