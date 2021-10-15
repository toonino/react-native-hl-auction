import React from 'react';
import {View, Text, TouchableOpacity, StyleSheet, Image} from 'react-native';

const RadioBank = ({options = [], onChangeSelect, selected}) => {
  return (
    <View style={styles.horizontal}>
      {options.map((opt, index) => (
        <View style={{width: '50%', alignItems: 'center', marginTop: 10}}>
          {selected == index && (
            <TouchableOpacity
              onPress={() => onChangeSelect(opt, index)}
              style={styles.optContainer}>
              <View style={{flex: 1, flexDirection: 'row'}}>
                <View style={styles.outlineCircle}>
                  {selected == index && <View style={styles.innerCircle} />}
                </View>

                <View>
                  {index == 1 && (
                    <Text
                      style={{
                        fontWeight: 'bold',
                        marginLeft: 10,
                      }}>
                      {' '}
                      {opt}
                      {'  '}
                      <Image
                        style={{with: 24, height: 17}}
                        resizeMode="stretch"
                        source={require('../../../assets/images/visaImg.png')}
                      />
                    </Text>
                  )}
                  {index != 1 && (
                    <Text
                      style={{
                        fontWeight: 'bold',
                        marginLeft: 10,
                      }}>
                      {' '}
                      {opt}
                      {'  '}
                    </Text>
                  )}
                </View>
              </View>
            </TouchableOpacity>
          )}
          {selected != index && (
            <TouchableOpacity
              onPress={() => onChangeSelect(opt, index)}
              style={styles.optContainer02}>
              <View style={{flex: 1, flexDirection: 'row'}}>
                <View style={styles.outlineCircle02}>
                  {selected == index && <View style={styles.innerCircle} />}
                </View>
                <View>
                  {index == 1 && (
                    <Text
                      style={{
                        fontWeight: 'bold',
                        marginLeft: 10,
                      }}>
                      {' '}
                      {opt}
                      {'  '}
                      <Image
                        style={{with: 24, height: 17}}
                        resizeMode="stretch"
                        source={require('../../../assets/images/visaImg.png')}
                      />
                    </Text>
                  )}
                  {index != 1 && (
                    <Text
                      style={{
                        fontWeight: 'bold',
                        marginLeft: 10,
                      }}>
                      {' '}
                      {opt}
                    </Text>
                  )}
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
    width: '90%',
  },
  optContainer: {
    marginLeft: '2%',
    height: 55,
    width: 145,
    flexDirection: 'row',
    alignItems: 'center',
    borderColor: '#FB3F39',
    borderWidth: 2,
    borderRadius: 4,
  },
  optContainer02: {
    marginLeft: '2%',
    height: 55,
    width: 145,
    flexDirection: 'row',
    alignItems: 'center',
    borderColor: '#D9D9D9',
    borderWidth: 2,
    borderRadius: 4,
  },
  outlineCircle: {
    marginLeft: '5%',
    width: 20,
    height: 20,
    borderRadius: 10,
    borderColor: '#FB3F39',
    borderWidth: 2,
    justifyContent: 'center',
    alignItems: 'center',
  },
  outlineCircle02: {
    marginLeft: '5%',
    width: 20,
    height: 20,
    borderRadius: 10,
    borderColor: '#D9D9D9',
    borderWidth: 2,
    justifyContent: 'center',
    alignItems: 'center',
  },
  innerCircle: {
    width: 10,
    height: 10,
    borderRadius: 5,
    backgroundColor: '#FB3F39',
  },
});
export default RadioBank;
