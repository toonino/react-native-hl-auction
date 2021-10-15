import React, {Component, useState} from 'react';

import {TouchableOpacity, Image, View, Modal, Text, Alert} from 'react-native';
import ImageCropPicker from 'react-native-image-crop-picker';
import {RegisterStyle} from './styles';
import axios from 'axios';
import RegisterService from '../../services/register';
export default class ModelCamera extends Component {
  constructor(props) {
    super(props);
    this.state = {
      image: null,
      show: false,
      isUpdate: false,
    };
  }

  Cam = () => {
    const pickSingleWithCamera = (cropping, mediaType = 'photo') => {
      ImageCropPicker.openCamera({
        cropping: cropping,
        width: 300,
        height: 190,
        includeExif: true,
        mediaType,
      })
        .then(image => {
          const data1 = new FormData();
          var name = image.path.substring(
            image.path.lastIndexOf('/') + 1,
            image.path.length,
          );
          data1.append('file', {
            name: name,
            type: image.mime,
            uri: image.path,
          });
          let reg = new RegisterService();
          reg
            .uploadImage(data1)
            .then(res1 => {
              this.props.passImage(res1.data.imageUrl);
            })
            .catch(error => {
                ToastAndroid.show('Có lỗi xảy ra', 1);
            });

          this.setState({
            image: {
              uri: image.path,
              width: image.width,
              height: image.height,
              mime: image.mime,
            },
            isUpdate: true,
          });
        })
        .finally(() => {
          this.setState({show: false});
        })
        .catch(e => {
            ToastAndroid.show('Có lỗi xảy ra', 1);
        });
    };
    const pickSingle = (cropit, circular = false, mediaType) => {
      ImageCropPicker.openPicker({
        width: 300,
        height: 190,
        cropping: cropit,
        cropperCircleOverlay: circular,
        sortOrder: 'none',
        compressImageMaxWidth: 1000,
        compressImageMaxHeight: 1000,
        compressImageQuality: 1,
        compressVideoPreset: 'MediumQuality',
        includeExif: true,
        cropperStatusBarColor: 'white',
        cropperToolbarColor: 'white',
        cropperActiveWidgetColor: 'white',
        cropperToolbarWidgetColor: '#3498DB',
      })
        .then(image => {
          const data1 = new FormData();
          var name = image.path.substring(
            image.path.lastIndexOf('/') + 1,
            image.path.length,
          );
          data1.append('file', {
            name: name,
            type: image.mime,
            uri: image.path,
          });
          let reg = new RegisterService();
          reg
            .uploadImage(data1)
            .then(res1 => {
              this.props.passImage(res1.data.imageUrl);
            })
            .catch(error => {
              ToastAndroid.show('Có lỗi xảy ra', 1);
            });

          this.setState({
            image: {
              uri: image.path,
              width: image.width,
              height: image.height,
              mime: image.mime,
            },
            isUpdate: true,
          });
        })
        .finally(() => {
          this.setState({show: false});
        })
        .catch(e => {
          ToastAndroid.show('Có lỗi xảy ra', 1);
        });
    };
    const renderAsset = image => {
      return renderImage(image);
    };

    const renderImage = image => {
      return <Image style={RegisterStyle.imageID} source={image} />;
    };
    return (
      <View>
        <TouchableOpacity
          style={[
            RegisterStyle.button,
            {
              width: 300,
              height: 200,
              alignSelf: 'center',
              justifyContent: 'center',
            },
          ]}
          activeOpacity={0.5}
          onPress={() => this.setState({show: true})}>
          {this.props.img == null || this.state.isUpdate ? (
            this.state.image ? (
              renderAsset(this.state.image)
            ) : (
              <Image
                style={RegisterStyle.imageID}
                source={require('../../assets/images/student-card.png')}
              />
            )
          ) : (
            <Image
              style={RegisterStyle.imageID}
              source={{uri: this.props.img}}
            />
          )}
        </TouchableOpacity>
        <Modal
          transparent={true}
          visible={this.state.show}
          animationType="slide">
          <View style={RegisterStyle.modelView}>
            <TouchableOpacity
              style={[RegisterStyle.modelCameraBtn, {marginTop: 20}]}
              onPress={() => pickSingleWithCamera(true)}>
              <Text style={RegisterStyle.modelCameraText}>Bật camera</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={RegisterStyle.modelCameraBtn}
              onPress={() => pickSingle(true)}>
              <Text style={RegisterStyle.modelCameraText}>
                Chọn ảnh từ thư viện
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={RegisterStyle.modelCameraCancel}
              onPress={() => this.setState({show: false})}>
              <Text style={RegisterStyle.modelCameraTextCancel}>Huỷ</Text>
            </TouchableOpacity>
          </View>
        </Modal>
      </View>
    );
  };

  render() {
    return <>{this.Cam()}</>;
  }
}
