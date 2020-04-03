import React from 'react';
import PropTypes from 'prop-types';
import {Text, View, TouchableWithoutFeedback} from 'react-native';
import styles from '../../screens/submitRequestScreen/SubmitRequestScreen.styles';
import {Label} from '../label/Label';
import {Icon} from 'native-base';

export const IOSPicker = ({
  testID,
  label,
  detailedLabel,
  value,
  handleActionSheet,
  required,
  placeholder,
}) => {
  return (
    <View testID={testID} style={styles.formField}>
      <Label required={required} detailedLabel={detailedLabel} label={label} />
      <TouchableWithoutFeedback onPress={handleActionSheet}>
        <View style={styles.dateFieldContainer}>
          <Text
            style={[
              value === null ? styles.placeholderText : styles.dateField,
            ]}>
            {value === null ? placeholder : value}
          </Text>
          <Icon name={'ios-arrow-down'} />
        </View>
      </TouchableWithoutFeedback>
    </View>
  );
};

IOSPicker.propTypes = {
  label: PropTypes.string.isRequired,
  detailedLabel: PropTypes.string,
  testID: PropTypes.string,
  value: PropTypes.string,
  handleActionSheet: PropTypes.func.isRequired,
  required: PropTypes.bool,
  placeholder: PropTypes.string.isRequired,
};
