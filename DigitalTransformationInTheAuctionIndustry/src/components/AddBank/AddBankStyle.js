import { StyleSheet } from "react-native"

export const addBankStyle = StyleSheet.create({
    container: {

    },

    labelText: {
        fontFamily: 'Roboto',
        fontWeight: '500',
        fontSize: 18,
        lineHeight: 21,
        color: '#A4A4A4',
        marginBottom: 8,
    },

    inputWapper: {
        marginBottom: 16,
    },


    bankTextInput: {
        backgroundColor: '#fff',
        fontFamily: 'Roboto',
        fontWeight: '700',
        fontSize: 18,
        lineHeight: 21,
        color: '#223263',
        paddingLeft: 20,
        borderRadius: 10,
        shadowColor: "#32325D",
        shadowOffset: {
            width: 0,
            height: 1,
        },
        shadowOpacity: 0.33,
        shadowRadius: 2.22,

        elevation: 15,
        // boxShadow: ' 0px 1px 15px rgba(50, 50, 93, 0.33), 0px 1px 0px rgba(0, 0, 0, 0.02)',
    },

    existIcon: {
        position: 'absolute',
        top: 12,
        right: 12,
        paddingRight: 27,
    },
    checkBoxStyle: {
        color: '#223263',
        fontSize: 24,
        fontWeight: '700',
        lineHeight: 28,

    },

    button: {
        backgroundColor: '#FB3F39',
        paddingTop: 16,
        paddingBottom: 16,
        width: 280,
        borderRadius: 10,
        justifyContent: 'center',
        alignSelf: 'center'
    },
    addCard: {
        color: '#fff',
        fontSize: 24,
        fontWeight: '700',
        fontFamily: 'Roboto',
        alignSelf: 'center'
    },

    wrapButton: {
        paddingVertical: 24,
        paddingTop: 30,
        paddingBottom: 15,
    },

}
)