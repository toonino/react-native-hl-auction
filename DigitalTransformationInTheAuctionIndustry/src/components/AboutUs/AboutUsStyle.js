import {StyleSheet} from 'react-native';

export const aboutUsStyle = StyleSheet.create({
  container: {
    flex: 1,
  },
  titleWrapContent: {
    paddingHorizontal: 30,
    marginTop: 20,
    marginBottom: 20,
  },
  titleStyle: {
    fontWeight: '700',
    fontSize: 24,
    marginBottom: 20,
  },
  button: {
    backgroundColor: '#FB3F39',
    paddingTop: 16,
    paddingBottom: 16,
    width: 175,
    borderRadius: 10,
    justifyContent: 'center',
    alignSelf: 'center',
    marginTop: 32,
    marginBottom: 32,
  },

  readMore: {
    color: '#fff',
    fontSize: 18,
    fontWeight: '700',
    fontFamily: 'Roboto',
    alignSelf: 'center',
  },

  mainBlockStyle: {
    flex: 1,
    borderRadius: 30,
    backgroundColor: '#F4F5F7',
  },

  backgroundImageStyle: {
    flex: 1,
    paddingVertical: 40,
    paddingHorizontal: 24,
  },

  contentStyle: {
    marginBottom: 20,
    textAlign: 'justify',
  },
});
