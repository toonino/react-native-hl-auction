import { Children, Component } from "react";
import React from "react";
import {
    View,
    Text,
    FlatList,
    TouchableOpacity,
    ImageBackground,
    ScrollView,
    Dimensions,
} from 'react-native';
import Carousel from 'react-native-snap-carousel';
import LinearGradient from 'react-native-linear-gradient';
import { Svg, Path } from "react-native-svg";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";

import { itemWidth, paymentStyle, sliderWidth } from "./PaymentStyle";
import Footer from "../common/Footer";
import AddBankButton from "../AddBank/AddBankButton";
import PayButton from "../Pay/PayButton";
import { faEllipsisH } from "@fortawesome/free-solid-svg-icons";


const VisaLogo = () => (
    <Svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
        <Path d="M16.0163 14.0478L13.9834 25.9774H17.2346L19.2692 14.0478H16.0163Z" fill="white" />
        <Path d="M11.2573 14.0611L8.07291 22.1968L7.7334 20.9684C7.1054 19.4882 5.32256 17.3625 3.22949 16.0229L6.14123 25.9715L9.58146 25.9656L14.7017 14.0586L11.2573 14.0611Z" fill="white" />
        <Path d="M6.49914 14.9149C6.31016 14.1882 5.76243 13.9717 5.08258 13.9457H0.0418113L0 14.1832C3.92273 15.1349 6.51838 17.4278 7.59543 20.1848L6.49914 14.9149Z" fill="white" />
        <Path d="M25.8585 16.3348C26.9222 16.3181 27.6932 16.5506 28.2919 16.7914L28.5854 16.9294L29.0253 14.3438C28.3814 14.1021 27.3721 13.8429 26.1127 13.8429C22.8999 13.8429 20.6354 15.461 20.6179 17.7798C20.597 19.4932 22.231 20.4499 23.4652 21.021C24.7321 21.6064 25.1569 21.9785 25.1511 22.5011C25.141 23.2997 24.1409 23.666 23.2068 23.666C21.9048 23.666 21.2133 23.4862 20.1454 23.0413L19.7265 22.8507L19.269 25.5208C20.03 25.8544 21.434 26.1412 22.8916 26.1563C26.3092 26.1563 28.5302 24.5574 28.5537 22.0797C28.5679 20.7242 27.7007 19.6898 25.8217 18.841C24.6844 18.2874 23.9887 17.9195 23.9954 17.3609C23.9954 16.865 24.5858 16.3348 25.8585 16.3348Z" fill="white" />
        <Path d="M37.3691 14.0611H34.8571C34.0769 14.0611 33.4966 14.2735 33.1537 15.0512L28.3262 25.984H31.7405C31.7405 25.984 32.2974 24.5139 32.4237 24.192C32.7975 24.192 36.1148 24.197 36.5872 24.197C36.6842 24.6135 36.9836 25.984 36.9836 25.984H39.9999L37.3691 14.0611ZM33.3594 21.7502C33.627 21.0654 34.6547 18.4162 34.6547 18.4162C34.6372 18.4488 34.9198 17.7263 35.0879 17.2772L35.307 18.3058C35.307 18.3058 35.93 21.154 36.0604 21.7502H33.3594Z" fill="white" />
    </Svg>
)

export default class PaymentScreen extends Component {

    state = {
        cards: [
            {
                numbers: ['****', '****', '****', '8014'],
                background: ['#54D3AD', '#63E2BC'],
            },
            {
                numbers: ['****', '****', '****', '8014'],
                background: ['#CDD028', '#E25757'],
            },
            {
                numbers: ['****', '****', '****', '8014'],
                background: ['#F09D5A', '#FFAD6A'],
            },
        ],
        historyPayment: [
            {
                name: 'Phí đăng kí tài khoản',
                date: '02/20/2021',
                price: '20.00',
                type: 1,
            },
            {
                name: 'Phí đăng kí tài khoản',
                date: '02/20/2021',
                price: '20.00',
                type: 2,
            },
            {
                name: 'Phí đăng kí tài khoản',
                date: '02/20/2021',
                price: '20.00',
                type: 2,
            },
            {
                name: 'Phí đăng kí tài khoản',
                date: '02/20/2021',
                price: '20.00',
                type: 2,
            },
        ],
    }

    _renderCard = ({ item, index }) => {
        return (
            <TouchableOpacity
                activeOpacity={1}
                style={paymentStyle.slideInnerContainer}
            >
                <View style={paymentStyle.shadow} />
                <LinearGradient
                    colors={item.background}
                    start={{ x: -1, y: 0 }}
                    end={{ x: 1, y: 0 }}
                    style={paymentStyle.wrapPaymentBoder}
                >
                    <View style={paymentStyle.paddingVisaAndLogo}>
                        <VisaLogo />
                        <FontAwesomeIcon
                            icon={faEllipsisH}
                            color="#fff" />
                    </View>
                    <View style={paymentStyle.paddingCardNumber}>
                        {Children.toArray(item.numbers.map((number) => (
                            <Text style={paymentStyle.textCardNumber}>
                                {number}
                            </Text>
                        )))}
                    </View>
                    <View style={{ flex: 1 }}>
                        <ImageBackground
                            source={require('../../assets/images/wave.png')}
                            style={{
                                flex: 1,
                                paddingHorizontal: 12
                            }}
                            imageStyle={paymentStyle.imageStyle}
                            resizeMode="cover"
                        >
                            <View style={paymentStyle.wrapCardHolderAndExpired}>
                                <View>
                                    <Text style={paymentStyle.textCardHolderAndExpired}>CARD HOLDER</Text>
                                    <Text style={paymentStyle.cardHolderStyle}>BUI TIEN PHONG</Text>
                                </View>
                                <View style={{ alignItems: 'flex-end' }}>
                                    <Text style={paymentStyle.expiredTextStyle}>EXPIRED</Text>
                                    <Text style={paymentStyle.expriedValueStyle}>08/21</Text>
                                </View>
                            </View>
                        </ImageBackground>
                    </View>
                </LinearGradient>
            </TouchableOpacity >
        );
    }

    render() {

        const renderItem = ({ item }) => (
            <Item {...item} />
        );

        return (
            <View style={{ flex: 1 }}>
                <View style={{ flex: 1 }}>
                    <View style={paymentStyle.header}>
                        <Text style={paymentStyle.paymentText}>Thanh toán</Text>
                        <AddBankButton />
                    </View>
                    <View>
                        <Carousel
                            ref={(c) => { this._carousel = c; }}
                            data={this.state.cards}
                            renderItem={this._renderCard}
                            sliderWidth={sliderWidth}
                            itemWidth={itemWidth}
                            firstItem={1}
                        />
                    </View>
                    <View>
                        <Text style={paymentStyle.paymentText}>Các khoản thanh toán:</Text>
                        <View style={paymentStyle.paymentList}>
                            {Children.toArray(this.state.historyPayment.map(payment => <PayButton data={payment} />))}
                        </View>
                    </View>
                    <View style={paymentStyle.historyScreen}>
                        <Text style={paymentStyle.paymentText}>Lịch sử thanh toán:</Text>
                        <FlatList
                            data={DATA}
                            renderItem={renderItem}
                            keyExtractor={item => item.id}
                            style={{ paddingHorizontal: 24 }}
                        />
                    </View>
                </View>
                <Footer />
            </View >
        )
    }



}

const Item = ({ title, date, price }) => (
    <View style={paymentStyle.wrapBoxHistoryPayment}>
        <View>
            <Text style={paymentStyle.titleHistoryPayment}>{title}</Text>
            <Text style={paymentStyle.dateHistoryPayment}>{date}</Text>
        </View>
        <Text style={paymentStyle.priceHistoryPayment}>{price}</Text>
    </View >
);

const DATA = [
    {
        id: '1',
        title: 'Phí đăng kí tài khoản',
        date: '20 Tháng 3, 2021',
        price: '$ 20.05',
    },
    {
        id: '2',
        title: 'Phí đăng kí tài khoản',
        date: '20 Tháng 3, 2021',
        price: '$ 20.05',
    },
    {
        id: '3',
        title: 'Phí đăng kí tài khoản',
        date: '20 Tháng 3, 2021',
        price: '$ 20.05',
    },
    {
        id: '4',
        title: 'Phí đăng kí tài khoản',
        date: '20 Tháng 3, 2021',
        price: '$ 20.05',
    },
    {
        id: '5',
        title: 'Phí đăng kí tài khoản',
        date: '20 Tháng 3, 2021',
        price: '$ 20.05',
    },
];