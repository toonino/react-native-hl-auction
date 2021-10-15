import { StyleSheet } from "react-native";
import { Dimensions } from "react-native";

export const styleFooter = StyleSheet.create({
    container: {
        height: 68,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        position: 'relative',
        paddingVertical: 10,
    },

    line: {
        borderTopColor: 'rgba(0, 0, 0, 0.1)',
        borderTopWidth: 1,
        width: '100%',
        position: 'absolute',
        alignSelf: 'flex-start',

    },

    tab_container: {
        flexDirection: 'row',
        alignItems: 'center',
        flex:1,
        paddingLeft: 12,
        paddingRight: 12,
        paddingTop: 8,
        paddingBottom: 8,
        
    },
    color_unselected: { color: '#C9C9C9' },
    color_selected: { color: '#FF7B4D' },
    border_selected: {
        backgroundColor: 'rgba(228, 228, 228, 0.37)',
        borderRadius: 12
    },
    text: {
         paddingLeft: 8, fontFamily: 'Roboto', fontWeight: '700', fontSize: 17, lineHeight: 20 
    }
    
})