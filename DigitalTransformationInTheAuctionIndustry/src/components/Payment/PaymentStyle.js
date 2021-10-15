import { StyleSheet, Dimensions, Platform } from "react-native";

const IS_IOS = Platform.OS === 'ios';
const { width: viewportWidth, height: viewportHeight } = Dimensions.get('window');

function wp(percentage) {
    const value = (percentage * viewportWidth) / 100;
    return Math.round(value);
}

const slideHeight = viewportHeight * 0.28;
const slideWidth = wp(75);
const itemHorizontalMargin = wp(2);

export const sliderWidth = viewportWidth;
export const itemWidth = slideWidth + itemHorizontalMargin * 2;

const entryBorderRadius = 8;

export const paymentStyle = StyleSheet.create({
    slideInnerContainer: {
        width: itemWidth,
        height: slideHeight,
        paddingHorizontal: itemHorizontalMargin,
        paddingBottom: 18 // needed for shadow
    },
    shadow: {
        position: 'absolute',
        top: 0,
        left: itemHorizontalMargin,
        right: itemHorizontalMargin,
        bottom: 18,
        shadowColor: '#000',
        shadowOpacity: 0.25,
        shadowOffset: { width: 0, height: 10 },
        shadowRadius: 10,
        borderRadius: entryBorderRadius
    },
    header: {
        flexDirection: 'row',
        justifyContent: "space-between",
        alignItems: 'center',
        paddingTop: 36,
        paddingHorizontal: 24,
    },
    paymentText: {
        fontFamily: 'Roboto',
        fontWeight: '700',
        fontSize: 24,
        paddingVertical: 8,
        paddingHorizontal: 24,
    },

    wrapPaymentBoder: {
        height: '100%',
        borderRadius: 6,
        justifyContent: 'space-between',
    },

    paddingVisaAndLogo: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingHorizontal: 12
    },

    paddingCardNumber: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingHorizontal: 12
    },

    textCardNumber: {
        color: '#fff',
        fontWeight: '700',
        fontSize: 20,
        lineHeight: 26,
        paddingHorizontal: 6,
    },

    addIconStyle: {
        paddingRight: 20,
    },

    wrapCardHolderAndExpired: {
        height: '100%',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'flex-end',
        paddingBottom: 12,
    },
    textCardHolderAndExpired: {
        color: '#fff',
        fontSize: 12,
        fontWeight: '300'
    },


    mainScreen: {
        flexDirection: 'column',
    },
    historyScreen: {
        flex: 1,
        backgroundColor: '#DDEBFF',
    },

    imageStyle: {
        borderBottomLeftRadius: 6,
        borderBottomRightRadius: 6,
    },
    cardHolderStyle: {
        color: '#fff',
        fontSize: 16,
        fontWeight: '700'
    },
    expiredTextStyle: {
        color: '#fff',
        fontSize: 12,
        fontWeight: '300'
    },
    expriedValueStyle: {
        color: '#fff',
        fontSize: 16,
        fontWeight: '700'
    },

    paymentList: {
        paddingHorizontal: 16,
        paddingVertical: 16,
        flexDirection: 'row',
        justifyContent: 'space-between',
    },

    wrapBoxHistoryPayment: {
        flexDirection: 'row',
        backgroundColor: '#FFFFFF',
        borderRadius: 6,
        marginVertical: 4,
        paddingVertical: 12,
        paddingHorizontal: 16,
        justifyContent: 'space-between',
    },

    titleHistoryPayment: {
        fontWeight: '700',
        fontSize: 14,
    },

    dateHistoryPayment: {
        fontWeight: '400',
        fontSize: 12,
        color: '#757F8C',
    },

    priceHistoryPayment: {
        fontWeight: '600',
        color: '#FA2E69'
    },
});