import React, { Component } from "react";
import Header from "../common/Header";
import {
    View,
    Text,
    Image,
} from "react-native";
import Footer from "../common/Footer";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { faInfoCircle } from '@fortawesome/free-solid-svg-icons';
import { faUser } from '@fortawesome/free-solid-svg-icons';
import { faClock } from '@fortawesome/free-solid-svg-icons';
import { bidedStyle } from "./BidedStyle";

export default class BidedScreen extends Component {
    render() {
        return (
            <View style={{ flex: 1 }}>
                <Header title="Chi tiết cuộc đấu giá " />
                <View style={{ flex: 1, paddingHorizontal: 16 }}>
                    <View style={bidedStyle.wrapBlock}>
                        <Image
                            style={{ width: '100%' }}
                            source={require('../../assets/images/aution-detail1.png')}
                        />
                        <Text style={bidedStyle.title}>Phiên đấu giá Vinhome Smart 1</Text>
                        <View style={bidedStyle.icon}>
                            <FontAwesomeIcon icon={faInfoCircle} />
                            <Text style={bidedStyle.contentStyle}>Mã phiên: PDG-6QFN6</Text>
                        </View>
                        <View style={bidedStyle.icon}>
                            <FontAwesomeIcon icon={faUser} />
                            <Text style={bidedStyle.contentStyle}>Đấu giá viên: Bùi Tiền Phong</Text>
                        </View>
                        <View style={bidedStyle.icon}>
                            <FontAwesomeIcon icon={faClock} />
                            <Text style={bidedStyle.contentStyle}>Thời gian bắt đầu: 06/05/2021 15:00:00</Text>
                        </View>
                        <View style={bidedStyle.icon}>
                            <FontAwesomeIcon icon={faClock} />
                            <Text style={bidedStyle.contentStyle}>Thời gian kết thúc: 06/05/2021 15:00:00</Text>
                        </View>
                        <View style={[bidedStyle.icon, { justifyContent: 'space-between' }]}>
                            <View style={{ flexDirection: 'row' }}>
                                <FontAwesomeIcon icon={faClock} />
                                <Text style={bidedStyle.contentStyle}>Số lượng tài sản: 2</Text>
                            </View>
                            <View>
                                <Text style={bidedStyle.endSessionText}>Phiên đã kết thúc</Text>
                            </View>
                        </View>
                    </View>
                    <View>
                        <Text style={bidedStyle.listAutionInSession}>Danh sách tài sản trong phiên : </Text>
                        <Image
                            style={{ width: '100%' }}
                            source={require('../../assets/images/aution-detail2.png')}
                        />
                    </View>
                </View>

                <Footer />
            </View>
        )
    }
}