import { StyleSheet } from "react-native";



export const noWifiStyle = StyleSheet.create({
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

    noWifiIcon: {
        width: 133.29,
        height: 120.07,
        marginBottom: 30,
    },

    noWifiText: {
        fontWeight: '700',
        fontSize: 28,
        lineHeight: 32.81,
        marginBottom: 30,
        marginTop: 28,
    },
    messageDisplay: {
        flexDirection: 'column',
        marginBottom: 36,
        justifyContent: 'center',
        fontSize: 17,
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
    tryAgainText: {
        color: '#fff',
        fontSize: 24,
        fontWeight: '700',
        fontFamily: 'Roboto'
    },
});