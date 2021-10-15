import React, { Component } from "react";
import { Svg, Path } from "react-native-svg";
import {
    View,
    Text,
    TextInput,
    TouchableOpacity,
} from "react-native";
import { addBankStyle } from "./AddBankStyle";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { faTimes } from "@fortawesome/free-solid-svg-icons";
import { Checkbox } from 'galio-framework';



export default class AddBankScreen extends Component {
    render() {
        return (
            <View>
                <FontAwesomeIcon size={20} style={addBankStyle.existIcon} icon={faTimes} />
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

                    <View style={{
                        paddingVertical: 24,
                        paddingTop: 30,
                        paddingBottom: 15,
                    
                    }}>
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
        );
    }
}