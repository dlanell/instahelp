import React from 'react';
import PropTypes from 'prop-types';
import {Text, View} from 'react-native';
import styles from './Label.styles';

export const Label = ({detailedLabel, required, label, containerStyle}) => {
  return (
    <View style={containerStyle ? containerStyle : styles.container}>
      <View style={styles.labelContainer}>
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
    </View>
  );
};

Label.prototypes = {
  detailedLabel: PropTypes.string,
  required: PropTypes.bool,
  label: PropTypes.string.isRequired,
  containerStyle: PropTypes.object,
};
