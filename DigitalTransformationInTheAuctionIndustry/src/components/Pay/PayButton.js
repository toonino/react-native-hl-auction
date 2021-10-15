import React, { Component } from "react";
import {
    Modal,
    View,
    Text,
    Image,
    TouchableOpacity,
    Pressable,
    Dimensions,
} from "react-native";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { faTimes } from "@fortawesome/free-solid-svg-icons";
import { Radio } from 'galio-framework';
import LinearGradient from 'react-native-linear-gradient';
import { Svg, Circle } from 'react-native-svg';

import { payButtonStyle } from "./PayButtonStyle";

const PAY_OPTIONS = [
    {
        key: 'MONTH',
        title: 'Theo tháng',
        subTitle: 'Trả theo tháng, có thể hủy',
        price: 20,
    },
    {
        key: 'YEAR',
        title: 'Theo năm',
        subTitle: 'Tiết kiệm 20%',
        price: 20,
    }
];

const PayIcon1 = () => (
    <Svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
        <Circle cx="10" cy="10" r="10" fill="#EF785E" />
        <Circle cx="12.5" cy="14.5" r="4.5" fill="#FFFFFF" />
    </Svg>
)

const PayIcon2 = () => (
    <Svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
        <Circle cx="10" cy="10" r="10" fill="#223263" />
        <Circle cx="12.5" cy="14.5" r="4.5" fill="#EF785E" />
    </Svg>
)

export default class PayButton extends Component {
    state = {
        modalVisible: false,
    }

    setModalVisible = (visible) => {
        this.setState({ modalVisible: visible })
    }

    render() {
        const { data } = this.props;

        return (
            <View>
                <Pressable style={{ height: 96, width: Dimensions.get('window').width / 4 - 16 }} onPress={() => this.setModalVisible(true)}>
                    <LinearGradient
                        start={{ x: -1, y: 0 }}
                        end={{ x: 1, y: 0 }}
                        colors={data.type === 1 ? ['#5754FF', '#FF7B4D'] : ['#FFC89C', '#FFFFFF']}
                        style={{
                            flex: 1,
                            paddingVertical: 16,
                            paddingHorizontal: 12,
                            borderRadius: 10,
                            alignItems: 'center',
                            justifyContent: 'space-between',
                        }}
                    >
                        <View style={{ position: 'absolute', top: 0, left: 0 }}>
                            {data.type === 1 ? <PayIcon1 /> : <PayIcon2 />}
                        </View>
                        <Text style={{ fontSize: 11, fontWeight: '800', marginVertical: 8 }}>{data.name}</Text>
                        <Text style={{ fontSize: 7, marginVertical: 2 }}>{data.date}</Text>
                        <View style={{ backgroundColor: '#223263', borderRadius: 4, marginVertical: 2, paddingHorizontal: 12, paddingVertical: 2 }}>
                            <Text style={{ color: '#fff', fontSize: 7, }}>{data.price}$</Text>
                        </View>
                    </LinearGradient>
                </Pressable>
                <Modal
                    transparent
                    animationType="slide"
                    visible={this.state.modalVisible}
                    onRequestClose={() => this.setModalVisible(!this.state.modalVisible)}
                >
                    <View style={payButtonStyle.wrapper}>
                        <FontAwesomeIcon
                            onPress={() => this.setModalVisible(!this.state.modalVisible)}
                            size={20}
                            style={payButtonStyle.existIcon}
                            icon={faTimes}
                        />

                        <View style={payButtonStyle.blockUnderExits}>
                            <View style={payButtonStyle.titleBlock}>
                                <View>
                                    <Image
                                        style={payButtonStyle.image}
                                        source={require('../../assets/images/wallet.png')} />
                                </View>
                                <View>
                                    <Text style={payButtonStyle.accountFeeText}>Phí duy trì tài khoản</Text>
                                </View>
                                <TouchableOpacity>
                                    <View style={payButtonStyle.changeTextButton} >
                                        <Text style={payButtonStyle.changeText}>Thay đổi</Text>
                                    </View>
                                </TouchableOpacity>
                            </View>
                            <View style={payButtonStyle.mainBoxPaddingHorizontal}>
                                {PAY_OPTIONS.map((opt) => (
                                    <View style={payButtonStyle.radioButton}>
                                        <Radio
                                            label={
                                                <View>
                                                    <Text style={payButtonStyle.radioTitle}>{opt.title}</Text>
                                                    <Text style={payButtonStyle.radioSubTitle}>{opt.subTitle}</Text>
                                                </View>
                                            }
                                            color="#F06565"
                                        />
                                        <Text>{opt.price}$</Text>
                                    </View>
                                ))}
                            </View>
                        </View>
                        <TouchableOpacity>
                            <View style={payButtonStyle.button}>
                                <Text style={payButtonStyle.paymentButton}>
                                    Thanh toán
                                </Text>
                            </View>
                        </TouchableOpacity>
                    </View>
                </Modal>
            </View>
        )
    }

}

