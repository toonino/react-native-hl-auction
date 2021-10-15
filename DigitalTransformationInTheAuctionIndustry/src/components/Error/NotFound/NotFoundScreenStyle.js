import { StyleSheet } from "react-native";



export const notFoundScreenStyle = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },

    stylebutton: {
        flex: 1,
        width: 320,
        height: 70,
        backgroundColor: '#FB3F39',
    },


    notFoundText: {
        marginTop: 22,
        fontWeight: '700',
        fontSize: 28,
        lineHeight: 32.81,
        marginBottom: 30,
    },
    messageDisplay: {
        flexDirection: 'column',
        marginBottom: 36,
        fontSize: 17,
        justifyContent: 'center',
        alignItems: 'center',
    },
    button: {
        backgroundColor: '#FB3F39',
        paddingTop: 16,
        paddingBottom: 16,
        width: 280,
        borderRadius: 10,
        alignItems: 'center',
        justifyContent: 'center',
    },

    tryAgain: {
        color: '#fff',
        fontSize: 24,
        fontWeight: '700',
        fontFamily: 'Roboto'
    }
});