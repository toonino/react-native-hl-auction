import {StyleSheet} from 'react-native';
import {styles} from '../../shared/styles';

export const FindPassStyle = StyleSheet.create({
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
    marginTop: 20,
    flex: 2,
    alignSelf: 'center',
    backgroundColor: '#FFFFFF'
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

  container_cf: {  width: "100%", alignItems: 'center', marginTop: 50, marginBottom: 80}
});
