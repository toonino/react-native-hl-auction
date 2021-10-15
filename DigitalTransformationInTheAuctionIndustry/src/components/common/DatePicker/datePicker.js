import React, {useState} from 'react';
import {Text, TouchableHighlight, View, TouchableOpacity} from 'react-native';
import DateTimePicker from '@react-native-community/datetimepicker';
import moment from 'moment';

const CustomDateTimePicker = props => {
  const {textStyle, defaultDate} = props;
  const [date, setDate] = useState(moment(defaultDate));
  const [show, setShow] = useState(false);

  const onAndroidChange = (e, selectedDate) => {
    setShow(false);
    if (selectedDate) {
      setDate(moment(selectedDate));
      props.onDateChange(moment(selectedDate).format('YYYY-MM-DD'));
    }
  };
  const renderDatePicker = () => {
    return (
      <DateTimePicker
        timeZoneOffsetInMinutes={0}
        value={new Date(date)}
        mode="date"
        minimumDate={
          new Date(moment().subtract(120, 'years').format('YYYY-MM-DD'))
        }
        maximumDate={new Date(moment().format('YYYY-MM-DD'))}
        onChange={onAndroidChange}
      />
    );
  };

  return (
    <TouchableOpacity
      style={{
        flex: 1,
        justifyContent: 'center',
        borderRadius: 6,
        borderColor: '#D9D9D9',
        borderWidth: 1,
        width: '90%',
        marginLeft: '10%'
      }}
      activeOpacity={0}
      onPress={() => setShow(true)}>
      <Text style={{color: 'black', marginLeft: 20, width: '100%'}}>
        {date.format('DD-MM-YYYY')}
      </Text>
      {show && renderDatePicker()}
    </TouchableOpacity>
  );
};

CustomDateTimePicker.defaultProps = {
  textStyle: {},
  defaultDate: moment(),
  onDateChange: () => {},
};

export default CustomDateTimePicker;
