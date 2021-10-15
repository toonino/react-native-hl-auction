import {StyleSheet} from 'react-native';

export const stylesUserDetail = StyleSheet.create({
  txtIP: {
    marginTop: 5,
    width: '90%',
    borderWidth: 1,
    alignSelf: 'center',
    height: 40,
    borderColor: '#A6A6A6',
    borderRadius: 7,
  },
  container: {
    backgroundColor: '#FFFFFF',
    alignContent: 'center',
    flex: 1,
  },
  row_container: {
    flexDirection: 'row',
    width: '100%',
    marginBottom: 18,
  },
  column_text: {
    flex: 1,
    flexDirection: 'column',
    maxWidth: '50%',
  },

  button_verify: {
    flexDirection: 'row',
    width: '80%',
    height: 30,
    borderRadius: 8,
    alignItems: 'center',
    paddingLeft: 10,
    marginTop: 5,
  },
  button_verify_transstt1: {
    flexDirection: 'row',
    width: 160,
    height: 30,
    borderRadius: 8,
    alignItems: 'center',
    paddingLeft: 10,
    marginTop: 5,
  },
  button_verify_stt4: {
    flexDirection: 'row',
    width: 170,
    height: 30,
    borderRadius: 8,
    alignItems: 'center',
    paddingLeft: 10,
    marginTop: 5,
  },
  button_verify_stt3: {
    flexDirection: 'row',
    width: '90%',
    height: 40,
    borderRadius: 8,
    alignItems: 'center',
    paddingLeft: 10,
    marginTop: 5,
  },
  button_verify_stt1: {
    flexDirection: 'row',
    width: 200,
    height: 40,
    borderRadius: 8,
    alignItems: 'center',
    paddingLeft: 10,
    marginTop: 5,
  },

  text_verify: {
    color: 'white',
    marginLeft: 10,
    fontSize: 13,
    fontWeight: 'bold',
  },

  color_verify: {
    backgroundColor: '#3AE81E',
  },
  color_noverify: {
    backgroundColor: '#D13A3A',
  },

  text_general: {
    fontWeight: 'bold',
    fontSize: 13,
    color: '#A6A5A5',
  },
  text_general2: {
    fontWeight: 'bold',
    fontSize: 13,
    color: '#A6A5A5',
    marginBottom: 10,
  },
  text_user: {
    fontSize: 13,
    fontWeight: 'bold',
    color: 'black',
    marginTop: 5,
  },
  cmnd: {
    marginTop: 11,
    width: '90%',
    height: 107,
    resizeMode: 'stretch',
  },
});