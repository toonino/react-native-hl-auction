import {Picker} from '@react-native-picker/picker';
import React, {Component, useState} from 'react';
import {View, Text, StyleSheet, ActivityIndicator} from 'react-native';

export default class TestAPI extends Component {
  constructor(props) {
    super(props);
    this.state = {
      providence: [],
      district: [],
      commune: [],
      pickerProvidenceValue:
        this.props.pickerProvidenceValue != null
          ? this.props.pickerProvidenceValue
          : '0',
      pickerDistrictValue:
        this.props.pickerDistrictValue != null
          ? this.props.pickerDistrictValue
          : '0',
      pickerCommuneValue:
        this.props.pickerCommuneValue != null
          ? this.props.pickerCommuneValue
          : '0',
      isLoading: true,
    };
  }
  componentWillUnmount() {
    this.setState = (state, callback) => {
      return;
    };
  }
  componentDidMount() {
    fetch('https://sheltered-anchorage-60344.herokuapp.com/Province')
      .then(response => response.json())
      .then(json => {
        this.setState({providence: json, isLoading: false});
      })
      .then(() => {
        if (this.props.pickerProvidenceValue != null) {
          this.setState({isLoading: true});
          fetch(
            'https://sheltered-anchorage-60344.herokuapp.com/district/?idProvince=' +
              this.props.pickerProvidenceValue,
          )
            .then(response => response.json())
            .then(json => {
              this.setState({district: json, isLoading: false});
            })
            .catch(error => {
              ToastAndroid.show('Lỗi hệ thống', 1000);
            });
        }
        if (this.props.pickerDistrictValue != null) {
          this.setState({isLoading: true});
          fetch(
            'https://sheltered-anchorage-60344.herokuapp.com/commune/?idDistrict=' +
              this.props.pickerDistrictValue,
          )
            .then(response => response.json())
            .then(json => {
              this.setState({commune: json, isLoading: false}, () => {});
            })
            .catch(error => {
              ToastAndroid.show('Lỗi hệ thống', 1000);
            });
        }
      })
      .catch(error => {
        ToastAndroid.show('Lỗi hệ thống', 1000);
      });
  }
  render() {
    return (
      <View style={styles.container}>
        {this.state.isLoading ? (
          <ActivityIndicator size="large" color="black" />
        ) : (
          <View>
            <View style={styles.viewPicker}>
              <Picker
                style={styles.pickerStyles}
                selectedValue={this.state.pickerProvidenceValue}
                onValueChange={itemValue => {
                  this.props.changeProvince(itemValue);
                  this.setState({pickerProvidenceValue: itemValue}, () =>
                    fetch(
                      'https://sheltered-anchorage-60344.herokuapp.com/district/?idProvince=' +
                        itemValue,
                    )
                      .then(response => response.json())
                      .then(json => {
                        this.setState({district: json});
                      })
                      .catch(error => {
                        ToastAndroid.show('Lỗi hệ thống', 1000);
                      }),
                  );
                  this.setState({commune: []});
                }}>
                <Picker.Item label={'Chọn tỉnh/thành phố'} value={0} key={0} />
                {this.state.providence.map((item, key) => (
                  <Picker.Item
                    label={item.name}
                    value={item.idProvince}
                    key={item.idProvince}
                  />
                ))}
              </Picker>
            </View>
            <View style={styles.viewPicker}>
              <Picker
                style={styles.pickerStyles}
                selectedValue={this.state.pickerDistrictValue}
                onValueChange={itemValue => {
                  this.props.changeDistrict(itemValue);
                  this.setState({pickerDistrictValue: itemValue}, () =>
                    fetch(
                      'https://sheltered-anchorage-60344.herokuapp.com/commune/?idDistrict=' +
                        itemValue,
                    )
                      .then(response => response.json())
                      .then(json => {
                        this.setState({commune: json});
                      })
                      .catch(error => {
                        ToastAndroid.show('Lỗi hệ thống', 1000);
                      }),
                  );
                }}>
                <Picker.Item label={'Chọn quận/huyện'} value={0} key={0} />
                {this.state.district.map((item, key) => (
                  <Picker.Item
                    label={item.name}
                    value={item.idDistrict}
                    key={item.idDistrict}
                  />
                ))}
              </Picker>
            </View>
            <View style={styles.viewPicker}>
              <Picker
                style={styles.pickerStyles}
                selectedValue={this.state.pickerCommuneValue}
                onValueChange={itemValue => {
                  this.props.changeCommune(itemValue);
                  this.setState({pickerCommuneValue: itemValue});
                }}>
                <Picker.Item label={'Chọn phường/xã'} value={0} key={0} />
                {this.state.commune.map((item, key) => (
                  <Picker.Item
                    label={item.name}
                    value={item.idCommune}
                    key={item.idCommune}
                  />
                ))}
              </Picker>
            </View>
          </View>
        )}
      </View>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    flex: 1,
    width: '100%',
    alignSelf: 'center',
  },
  viewPicker: {
    width: '100%',
    height: 45,
    borderWidth: 1,
    alignSelf: 'center',
    borderRadius: 7,
    justifyContent: 'center',
    marginBottom: 5,
    borderColor: '#D9D9D9',
  },
  pickerStyles: {
    width: '100%',
    height: '100%',
    alignSelf: 'center',
  },
});
