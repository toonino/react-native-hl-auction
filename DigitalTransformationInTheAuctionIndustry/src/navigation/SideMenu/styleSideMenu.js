import {StyleSheet} from 'react-native'

export const styleSideMenu = StyleSheet.create({

    container: {
        flex: 1,
        backgroundColor: '#FA4A0C',
        alignItems: 'flex-start',
        justifyContent: 'flex-start',
        paddingLeft: 20,
        paddingBottom: 30,
        paddingTop: 40,
    },

    containerOption: {
        // flexGrow: 1,
    },

    viewOption: {
        flexDirection: 'row',
        alignItems: 'center',
        height: 52,
    },
    viewImage : {
        height: '100%',
        width: 52,
        justifyContent: 'center',
    },

    textMenu: {
        fontSize: 17,
        fontWeight: 'bold',
        color: '#FFFFFF'
    },

    textlogOut: {
        marginRight: 20,
    },

    line: {
        borderWidth: 0.3,
        marginLeft: 52,
        borderColor: '#F4F4F8',
        width: 132
    },

    logoutView: {
        // marginBottom: 20
    }
});