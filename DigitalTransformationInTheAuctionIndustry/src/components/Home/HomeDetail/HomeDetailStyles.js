import { StyleSheet } from "react-native";

export const HomeDetailStyles = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',
    backgroundColor: '#FFFFFF',
  },

  search_container: {
    height: 54,
    alignItems: 'center',
    flexDirection: 'row',
    marginBottom: 15,
  },

  search_bar: {
    backgroundColor: '#EFEEEE',
    borderRadius: 30,
    flexDirection: 'row',
    paddingHorizontal: 20,
    flex: 1,
    alignItems: 'center',
    marginRight: 10,
  },

  imgSearch: {
    width: 20,
    height: 18,
    marginRight: 30,
  },

  text_Search: {
    flex: 1,
  },

  text_cancel: {
    fontWeight: 'bold',
    fontSize: 17,
  },

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

  selected_categories: {
    borderBottomColor: '#FA4A0C',
    color: '#FA4A0C',
    borderBottomWidth: 3,
  },
});