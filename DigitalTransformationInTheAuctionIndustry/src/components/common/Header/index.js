import React, {useState} from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {faChevronLeft} from '@fortawesome/free-solid-svg-icons';
import {styleHeader} from './stylesHeader';
import * as RootNavigation from '../../../navigation/rootNavigator';
export default function (props) {
  const [isClick, setisClick] = useState(false);
  return (
    <View style={styleHeader.container2}>
      <View style={styleHeader.body}>
        <TouchableOpacity
          style={{flexDirection: 'row'}}
          onPress={() => {
            if (!isClick) {
              setisClick(true);
              props.stop != null ? props.stop() : null;
              props.navigator != null
                ? props.navigator.goBack()
                : RootNavigation.goBack();
            }
          }}>
          <FontAwesomeIcon
            style={{color: '#000000', marginLeft: -10}}
            icon={faChevronLeft}
            size={22}
          />
        </TouchableOpacity>
        <View style={{flex: 1, alignItems: 'center'}}>
          <Text style={styleHeader.text}>{props.title}</Text>
        </View>
      </View>
    </View>
  );
}
