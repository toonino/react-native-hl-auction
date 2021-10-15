import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

const Radio = ({ options = [], onChangeSelect, selected }) => {
  return (
    <View style={styles.horizontal}>
      {options.map((opt, index) => (
        <View style={{ width: '50%', alignItems: 'center' }} key={index}>
          {selected == index && (
            <TouchableOpacity
              onPress={() => onChangeSelect(opt, index)}
              style={[styles.optContainer, index == 0 ? { marginRight: 15 } : { marginLeft: 15 }]}>
              <View style={{ flex: 1, flexDirection: 'row' }}>
                <View style={styles.outlineCircle}>
                  {selected == index && <View style={styles.innerCircle} />}
                </View>
                <View>
                  <Text style={{ color: '#FB3F39' }}> {opt}</Text>
                </View>
              </View>
            </TouchableOpacity>
          )}
          {selected != index && (
            <TouchableOpacity
              onPress={() => onChangeSelect(opt, index)}
              style={[styles.optContainer02, index == 0 ? { marginRight: 15 } : { marginLeft: 15 }]}>
              <View style={{ flex: 1, flexDirection: 'row' }}>
                <View style={styles.outlineCircle02}>
                  {selected == index && <View style={styles.innerCircle} />}
                </View>
                <View>
                  <Text style={{ color: 'black' }}> {opt}</Text>
                </View>
              </View>
            </TouchableOpacity>
          )}
        </View>
      ))}
    </View>
  );
};
const styles = StyleSheet.create({
  horizontal: {
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  optContainer: {
    height: 30,
    // width: '80%',
    flexDirection: 'row',
    alignItems: 'center',
    borderColor: '#FB3F39',
    borderWidth: 2,
    borderRadius: 7,
  },
  optContainer02: {
    height: 30,
    // width: '80%',
    flexDirection: 'row',
    alignItems: 'center',
    borderColor: '#D9D9D9',
    borderWidth: 2,
    borderRadius: 7,
  },
  outlineCircle: {
    marginLeft: '5%',
    width: 15,
    height: 15,
    borderRadius: 7.5,
    borderColor: '#FB3F39',
    borderWidth: 2,
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
    marginRight: 22,
    marginLeft: 12,
  },
  outlineCircle02: {
    marginLeft: '5%',
    width: 15,
    height: 15,
    borderRadius: 7.5,
    borderColor: '#D9D9D9',
    borderWidth: 2,
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
    marginRight: 22,
    marginLeft: 12,
  },
  innerCircle: {
    width: 7,
    height: 7,
    borderRadius: 3.5,
    backgroundColor: '#FB3F39',
  },
});
export default Radio;
