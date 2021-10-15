import { StyleSheet } from "react-native"

export const payButtonStyle = StyleSheet.create({
    wrapper: {
        height: 335,
        marginTop: 'auto',
        marginBottom: 'auto',
        backgroundColor: '#fff',
    },

    blockUnderExits: {
        paddingTop: 32,
        alignItems: 'center',
        flex: 1
    },

    mainBoxPaddingHorizontal: {
        width: '100%',
        paddingHorizontal: 32,
    },

    existIcon: {
        position: 'absolute',
        top: 12,
        right: 12,
        paddingRight: 27,
    },
    titleBlock: {
        flexDirection: 'row',
        alignItems: 'center',

    },
    accountFeeText: {
        fontFamily: 'Roboto',
        fontWeight: '500',
        lineHeight: 21,
        textAlign: 'left',
        fontSize: 18,
        marginLeft: 9,
    },

    image: {
        height: 43,
        width: 60,
        paddingTop: 62,
    },

    button: {
        backgroundColor: '#FB3F39',
        paddingTop: 16,
        paddingBottom: 16,
        width: 280,
        borderRadius: 10,
        justifyContent: 'center',
        alignSelf: 'center',
        marginVertical: 12,
        // flex: 1,
    },
    paymentButton: {
        color: '#fff',
        fontSize: 24,
        fontWeight: '700',
        fontFamily: 'Roboto',
        alignSelf: 'center'
    },
    changeTextButton: {
        borderWidth: 1,
        borderColor: '#B4B4B4',
        borderRadius: 8,
        marginLeft: 31,
        paddingHorizontal: 12,
        paddingVertical: 6,

    },
    changeText: {
        color: '#B4B4B4',
        fontFamily: 'Roboto',
        fontWeight: '500',
        lineHeight: 21,
        textAlign: 'left',
        fontSize: 10,

    },
    radioButton: {
        borderWidth: 1,
        borderColor: '#D9D9D9',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingVertical: 11,
        paddingHorizontal: 13,
        marginTop: 11,
        borderRadius: 4,
    },

    radioTitle: {
        color: '#000000',
        fontFamily: 'Roboto',
        fontWeight: '800',
        lineHeight: 21,
        textAlign: 'left',
        fontSize: 14,
    },
    radioSubTitle: {
        color: '#969696',
        fontFamily: 'Roboto',
        fontWeight: '600',
        lineHeight: 21,
        textAlign: 'left',
        fontSize: 12,
    },





})