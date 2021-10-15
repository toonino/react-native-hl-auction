import React, { Component } from "react";
import {
    View,
    Text,
    TextInput,
    TouchableOpacity,
    Modal,
    Pressable,
} from "react-native";
import {
    Svg,
    Path
} from "react-native-svg";
import { addBankStyle } from "./AddBankStyle";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { faTimes } from "@fortawesome/free-solid-svg-icons";
import { Checkbox } from 'galio-framework';


const AddIcon = () => (
    <Svg width="29" height="29" viewBox="0 0 29 29" fill="none" xmlns="http://www.w3.org/2000/svg">
        <Path d="M14.5 3.625C20.4813 3.625 25.375 8.51875 25.375 14.5C25.375 20.4813 20.4813 25.375 14.5 25.375C8.51875 25.375 3.625 20.4813 3.625 14.5C3.625 8.51875 8.51875 3.625 14.5 3.625ZM14.5 1.8125C7.52188 1.8125 1.8125 7.52188 1.8125 14.5C1.8125 21.4781 7.52188 27.1875 14.5 27.1875C21.4781 27.1875 27.1875 21.4781 27.1875 14.5C27.1875 7.52188 21.4781 1.8125 14.5 1.8125Z" fill="black" />
        <Path d="M21.75 13.5938H15.4062V7.25H13.5938V13.5938H7.25V15.4062H13.5938V21.75H15.4062V15.4062H21.75V13.5938Z" fill="black" />
    </Svg>
)

export default class AddBankButton extends Component {
    state = {
        modalVisible: false,
    }

    setModalVisible = (visible) => {
        this.setState({ modalVisible: visible })
    }

    render() {
        return (
            <View>
                <Pressable onPress={() => this.setModalVisible(true)}>
                    <AddIcon />
                </Pressable>
                <Modal
                    animationType="slide"
                    visible={this.state.modalVisible}
                    onRequestClose={() => this.setModalVisible(!this.state.modalVisible)}
                >
                    <View>
                        <FontAwesomeIcon
                            onPress={() => this.setModalVisible(!this.state.modalVisible)}
                            size={20}
                            style={addBankStyle.existIcon}
                            icon={faTimes}
                        />
                        <View style={{ paddingHorizontal: 32, paddingTop: 32 }}>
                            <View>
                                <Text style={addBankStyle.labelText}>Ngân Hàng</Text>
                                <View style={addBankStyle.inputWapper}>
                                    <TextInput
                                        style={addBankStyle.bankTextInput}
                                        value={'BIDV'}
                                    />
                                </View>
                            </View>
                            <View>
                                <Text style={addBankStyle.labelText}>Chi nhánh</Text>
                                <View style={addBankStyle.inputWapper}>
                                    <TextInput
                                        style={addBankStyle.bankTextInput}
                                        value={'Trung Kính, Hà Nội'}
                                    />
                                </View>
                            </View>
                            <View>
                                <Text style={addBankStyle.labelText}>Số tài khoản</Text>
                                <View style={addBankStyle.inputWapper}>
                                    <TextInput
                                        style={addBankStyle.bankTextInput}
                                        value={'6246  3681  3221  4621'}
                                    />
                                </View>
                            </View>
                            <View>
                                <Text style={addBankStyle.labelText}>Chi nhánh</Text>
                                <View style={addBankStyle.inputWapper}>
                                    <TextInput
                                        style={addBankStyle.bankTextInput}
                                        secureTextEntry={true}
                                        value="abccccccccccc"
                                    />
                                </View>
                            </View>

                            <View style={{ flexDirection: 'row' }}>
                                <View style={{ flex: 1, paddingRight: 8 }}>
                                    <Text style={addBankStyle.labelText}>CCV</Text>
                                    <View>
                                        <TextInput
                                            style={addBankStyle.bankTextInput}
                                            value=""
                                        />
                                    </View>
                                </View>

                                <View style={{ flex: 1, paddingLeft: 8 }}>
                                    <Text style={addBankStyle.labelText}>Ngày hết hạn</Text>
                                    <View>
                                        <TextInput
                                            style={addBankStyle.bankTextInput}
                                            value=""
                                        />
                                    </View>
                                </View>
                            </View>

                            <View style={addBankStyle.wrapButton}>
                                <Checkbox
                                    label="Lưu thẻ"
                                    initialValue={false}
                                    labelStyle={addBankStyle.checkBoxStyle}
                                    color="#FB3F39"
                                />
                            </View>
                            <View>
                                <TouchableOpacity>
                                    <View style={addBankStyle.button}>
                                        <Text style={addBankStyle.addCard}>
                                            Thêm thẻ
                                        </Text>
                                    </View>
                                </TouchableOpacity>
                            </View>
                        </View>
                    </View>
                </Modal>
            </View>
        );
    }
}