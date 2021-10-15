
import { StyleSheet } from "react-native";
import {
    StatusBar,
} from 'react-native'

export const documentStyle = StyleSheet.create({

    container: {
        flex: 1,
        marginTop: StatusBar.currentHeight || 0,
    },
    item: {
        flex: 1,
        flexDirection: 'row',
        marginVertical: 8,
        borderBottomWidth: 1,
        borderBottomColor: '#989898',
        marginHorizontal: 6,
    },
    title: {
        fontSize: 32,
    },

    image: {
        paddingBottom: 8,
        paddingRight: 15,
    },
    content: {
        paddingTop: 8,
        fontFamily: 'Roboto',
        fontWeight: '700',
        lineHeight: 17,
        fontSize: 14,
        flex: 1,
    },
    date: {

        fontFamily: 'Roboto',
        fontWeight: '500',
        lineHeight: 13,
        fontSize: 11,
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: 30,
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
        paddingLeft: 5,
        fontSize: 11,
    },




});