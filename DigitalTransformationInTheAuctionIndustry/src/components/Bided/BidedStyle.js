import { StyleSheet } from "react-native";


export const bidedStyle = StyleSheet.create({
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

    endSessionText: {
        color: '#FF0000',
        fontWeight: 'bold',
        fontSize: 13,
    },

    blockRow1: {
        paddingHorizontal: 31,
        paddingVertical: 18,

    },

    listAutionInSession: {
        fontWeight: '700',
        fontSize: 18,
        lineHeight: 21,
        paddingTop: 14,
        paddingBottom: 18,
    },

    wrapBlock: {
        paddingTop: 18,
        paddingBottom: 12,
        borderBottomWidth: 1,
        borderBottomColor: '#989898',
    }

})