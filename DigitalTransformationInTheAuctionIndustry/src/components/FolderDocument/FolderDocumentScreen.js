import {Component} from 'react';
import Header from '../common/Header';
import React from 'react';
import Footer from '../common/Footer';
import {
  ScrollView,
  View,
  Text,
  FlatList,
  SafeAreaView,
  Image,
} from 'react-native';
import {documentStyle} from './FolderDocumentStyle';
import {Svg, Path} from 'react-native-svg';

const TimeIcon = () => (
  <Svg
    width="10"
    height="10"
    viewBox="0 0 10 10"
    fill="none"
    xmlns="http://www.w3.org/2000/svg">
    <Path
      d="M5 0C2.2379 0 0 2.2379 0 5C0 7.7621 2.2379 10 5 10C7.7621 10 10 7.7621 10 5C10 2.2379 7.7621 0 5 0ZM6.15121 7.05847L4.37298 5.76613C4.31048 5.71976 4.27419 5.64718 4.27419 5.57056V2.17742C4.27419 2.04435 4.38306 1.93548 4.51613 1.93548H5.48387C5.61694 1.93548 5.72581 2.04435 5.72581 2.17742V4.95363L7.00605 5.88508C7.11492 5.96371 7.1371 6.11492 7.05847 6.22379L6.48992 7.00605C6.41129 7.1129 6.26008 7.1371 6.15121 7.05847Z"
      fill="#989898"
    />
  </Svg>
);

const DownloadIcon = () => (
  <Svg
    width="14"
    height="11"
    viewBox="0 0 14 11"
    fill="none"
    xmlns="http://www.w3.org/2000/svg">
    <Path
      fill-rule="evenodd"
      clip-rule="evenodd"
      d="M3.69562 2.39312C4.21937 1.6075 5.39125 0.5 7.1875 0.5C8.51875 0.5 9.46875 1.175 10.0669 1.95625C10.4544 2.46399 10.7283 3.04907 10.87 3.67188C11.3606 3.75125 11.9294 3.94062 12.4356 4.30562C13.1825 4.8425 13.75 5.73312 13.75 7.0625C13.75 8.39125 13.1825 9.28188 12.4356 9.82C11.7206 10.3344 10.8812 10.5 10.3125 10.5H7.5V6.38375L8.30812 7.19187C8.426 7.30572 8.58388 7.36872 8.74775 7.3673C8.91162 7.36587 9.06838 7.30014 9.18426 7.18426C9.30014 7.06838 9.36587 6.91162 9.3673 6.74775C9.36872 6.58388 9.30572 6.426 9.19187 6.30813L7.31687 4.43313C7.19967 4.31596 7.04073 4.25013 6.875 4.25013C6.70927 4.25013 6.55033 4.31596 6.43312 4.43313L4.55812 6.30813C4.49843 6.36578 4.45082 6.43474 4.41806 6.511C4.38531 6.58725 4.36806 6.66926 4.36734 6.75225C4.36662 6.83524 4.38244 6.91754 4.41386 6.99435C4.44529 7.07116 4.49169 7.14094 4.55038 7.19962C4.60906 7.2583 4.67884 7.30471 4.75565 7.33614C4.83246 7.36756 4.91476 7.38338 4.99775 7.38266C5.08074 7.38194 5.16275 7.36469 5.239 7.33194C5.31525 7.29918 5.38422 7.25157 5.44187 7.19187L6.25 6.38375V10.5H4.0625C3.38937 10.5 2.39375 10.3031 1.54875 9.695C0.671875 9.06312 0 8.01625 0 6.4375C0 4.85875 0.671875 3.81188 1.54875 3.18C2.25125 2.67438 3.05687 2.45312 3.69562 2.3925V2.39312Z"
      fill="#989898"
    />
  </Svg>
);

export default class FolderDocumentScreen extends Component {
  render() {
    const renderItem = ({item}) => <Item {...item} />;
    return (
      <View style={{flex: 1, width: '90%', justifyContent: 'center', alignSelf: 'center'}}>
        <Header title="Tài liệu" />
        <View style={{flex: 1, alignSelf: 'center',width: '100%'}}>
          <FlatList
            data={DATA}
            renderItem={renderItem}
            keyExtractor={item => item.id}
            showsVerticalScrollIndicator={false}
          />
        </View>
      </View>
    );
  }
}

const DATA = [
  {
    id: '1',
    title: 'Hợp đồng mua bán VinHome smart city 1',
    text: 'hehei',
    thumb: 'word',
  },
  {
    id: '2',
    title: 'Hợp đồng mua bán VinHome smart city 1',
    thumb: 'powerpoint',
  },
  {
    id: '3',
    title: 'Hợp đồng mua bán VinHome smart city 1',
    thumb: 'pdf',
  },
  {
    id: '4',
    title: 'Hợp đồng mua bán VinHome smart city 1',
    thumb: 'excel',
  },
  {
    id: '5',
    title: 'Hợp đồng mua bán VinHome smart city 1',
    thumb: 'word',
  },
  {
    id: '6',
    title: 'Hợp đồng mua bán VinHome smart city 1',
    thumb: 'excel',
  },
  {
    id: '7',
    title: 'Hợp đồng mua bán VinHome smart city 1',
    thumb: 'word',
  },
];

const THUMBS = {
  excel: require('../../assets/images/excel.png'),
  word: require('../../assets/images/word.png'),
  pdf: require('../../assets/images/pdf.png'),
  powerpoint: require('../../assets/images/powerpoint.png'),
};

const Item = ({title, thumb}) => (
  <View style={{}}>
    <View style={documentStyle.item}>
      <View style={documentStyle.image}>
        <Image source={THUMBS[thumb]} />
      </View>
      <View style={{flex: 1}}>
        <View style={{flexDirection: 'row'}}>
          <Text style={documentStyle.content}>{title}</Text>
        </View>
        <View style={documentStyle.date}>
          <View style={documentStyle.dateText}>
            <TimeIcon />
            <Text style={documentStyle.dateContent}>10/06/2021</Text>
          </View>
          <View style={documentStyle.downloadStyle}>
            <DownloadIcon />
            <Text style={documentStyle.downloadTextStyle}>Tải lên</Text>
          </View>
        </View>
      </View>
    </View>
  </View>
);
