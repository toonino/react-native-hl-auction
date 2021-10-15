import { StyleSheet } from "react-native";

export const SearchPropertyStyles = StyleSheet.create({
    container: {
        flex: 1,
        width: '100%',
        backgroundColor: '#FFFFFF'
    },
    text_suggest: {
        fontWeight: 'bold',
        fontSize: 24,
    },

    item_suggest: {
        width: '100%',
        paddingVertical: 10,
        borderBottomWidth: 1,
        borderBottomColor: 'rgba(0, 0, 0, 0.29)'
    },

    
    text_title: {
        fontSize: 17,
        fontWeight: 'bold',
        marginLeft: 10,

    },
    text_category: {
        fontSize: 13,
        fontWeight: 'bold',
        color: 'rgba(142, 142, 142, 1)',
        marginLeft: 10,
    },

    item_newProperty: {
        width: 182,
        height: 160,
    },
    img: {
        width: '100%',
        height: 120,
        borderRadius: 10,
    },

    text_description: {
        fontWeight: 'bold',
        fontSize: 12,
    }
})