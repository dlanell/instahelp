import React from 'react';
import PropTypes from 'prop-types';
import {View, TextInput} from 'react-native';
import styles from './CommonInput.styles';
import {appColors} from '../../../colors';
import {Label} from '../label/Label';

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
      <Label detailedLabel={detailedLabel} required={required} label={label} />
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
