import React, {useState} from 'react';
import PropTypes from 'prop-types';
import {Text, View, TouchableOpacity, Platform} from 'react-native';
import DateTimePicker from '@react-native-community/datetimepicker';
import styles from '../../screens/submitRequestScreen/SubmitRequestScreen.styles';
import {Label} from '../label/Label';

export const DatePicker = ({date, setDateFn, label, testID}) => {
  const [showDatePicker, setShowDatePicker] = useState(false);

  const handleChange = (event, selectedDate) => {
    const currentDate = selectedDate || date;
    setShowDatePicker(Platform.OS === 'ios');
    setDateFn(currentDate);
  };

  return (
    <View testID={testID} style={styles.formField}>
      <Label required label={label} />
      <View style={styles.textFieldContainer}>
        <Text
          style={[styles.textField]}
          onPress={() => setShowDatePicker(!showDatePicker)}>
          {`${date.toString().substr(4, 12)}`}
        </Text>
      </View>
      {showDatePicker && (
        <View>
          <TouchableOpacity>
            <Text
              style={styles.doneText}
              onPress={() => setShowDatePicker(false)}>
              Done
            </Text>
          </TouchableOpacity>
          <DateTimePicker
            value={date}
            onChange={handleChange}
            minimumDate={new Date()}
            maximumDate={new Date(2020, 12, 31)}
          />
        </View>
      )}
    </View>
  );
};

DatePicker.propTypes = {
  setDateFn: PropTypes.func.isRequired,
  date: PropTypes.object.isRequired,
  label: PropTypes.string.isRequired,
  testID: PropTypes.string,
};
