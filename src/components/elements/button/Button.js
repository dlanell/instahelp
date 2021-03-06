import React from 'react';
import PropTypes from 'prop-types';
import {Text, TouchableOpacity} from 'react-native';
import styles from './Button.styles';

export const ButtonStyleEnum = {
  PRIMARY: 'primary',
  SECONDARY: 'Secondary',
};

export const Button = ({
  text,
  buttonStyle,
  testID,
  optionalStyle,
  onPress,
  disabled,
  disablePress,
}) => {
  return (
    <TouchableOpacity
      disabled={disabled}
      testID={testID}
      onPress={onPress}
      style={[
        styles.button,
        disabled
          ? styles.disabledButton
          : buttonStyle === ButtonStyleEnum.PRIMARY
          ? styles.primaryButton
          : styles.secondaryButton,
        optionalStyle && optionalStyle,
      ]}>
      <Text
        style={
          disabled
            ? styles.disabledButtonText
            : buttonStyle === ButtonStyleEnum.PRIMARY
            ? styles.primaryButtonText
            : styles.secondaryButtonText
        }>
        {text}
      </Text>
    </TouchableOpacity>
  );
};

Button.propTypes = {
  optionalStyle: PropTypes.object,
  text: PropTypes.string.isRequired,
  buttonStyle: PropTypes.string.isRequired,
  testID: PropTypes.string,
  onPress: PropTypes.func.isRequired,
  disabled: PropTypes.bool,
  disablePress: PropTypes.bool,
};
