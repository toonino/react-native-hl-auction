import React, { Component } from "react";
import {
    View,
    Text,
    StyleSheet,
    TouchableOpacity,
} from 'react-native';
import {
    Svg,
    Path
} from "react-native-svg";
import { notFoundScreenStyle } from "./NotFoundScreenStyle";
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faBan } from '@fortawesome/free-solid-svg-icons';

export default class ErrorInternetScreen extends Component {
    render() {
        return (

            <View style={notFoundScreenStyle.container}>

                <FontAwesomeIcon style={{ color: '#D50000' }} icon={faBan} size={120} transform={{ rotate: 270 }} />
                <View>
                    <Text style={notFoundScreenStyle.notFoundText}>Không tìm thấy</Text>
                </View>
                <View style={notFoundScreenStyle.messageDisplay}>
                    <Text>Có vẻ là không thể tím thấy</Text>
                    <Text> kết quả tìm kiếm </Text>
                </View>
                <TouchableOpacity>
                    <View style={notFoundScreenStyle.button}>
                        <Text style={notFoundScreenStyle.tryAgain}>
                            Thử lại
                        </Text>
                    </View>
                </TouchableOpacity>
            </View>
        );
    };
}

