import React from 'react';
import PropTypes from 'prop-types';
import {Text, View, TextInput} from 'react-native';
import styles from './CommonInput.styles';
import {appColors} from '../../../colors';

export const TextContentEnum = {
  NUMBER: 'number-pad',
  TEXT: 'default',
};

export const CommonInput = ({
  label,
  value,
  onChangeText,
  placeholder,
  required,
  testID,
  containerStyle,
  isMultiline,
  maxLength,
  detailedLabel,
  keyboardType,
}) => {
  return (
    <View testID={testID && testID} style={containerStyle && containerStyle}>
      <View style={styles.textInputLabelContainer}>
        <Text
          style={[
            detailedLabel
              ? styles.textInputLabelWithDetails
              : styles.textInputLabel,
            styles.text,
          ]}>
          {label}
        </Text>
        {required && <Text style={[styles.textAsterisk, styles.text]}>*</Text>}
      </View>
      {detailedLabel && (
        <Text style={styles.detailedText}>{detailedLabel}</Text>
      )}
      <TextInput
        style={[
          isMultiline ? styles.multilineTextInputField : styles.textInputField,
          styles.text,
        ]}
        value={value}
        onChangeText={onChangeText}
        placeholder={placeholder}
        placeholderTextColor={appColors.darkGrey}
        multiline={isMultiline}
        maxLength={maxLength}
        keyboardType={keyboardType ? keyboardType : TextContentEnum.TEXT}
      />
    </View>
  );
};

CommonInput.propTypes = {
  testID: PropTypes.string,
  maxLength: PropTypes.number,
  label: PropTypes.string.isRequired,
  detailedLabel: PropTypes.string,
  value: PropTypes.string.isRequired,
  onChangeText: PropTypes.func.isRequired,
  placeholder: PropTypes.string.isRequired,
  required: PropTypes.bool,
  isMultiline: PropTypes.bool,
  containerStyle: PropTypes.object,
  keyboardType: PropTypes.string,
};
