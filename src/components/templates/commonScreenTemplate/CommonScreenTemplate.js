import React from 'react';
import styles from './CommonScreenTemplate.styles';
import {KeyboardAvoidingView, Platform, SafeAreaView} from 'react-native';

export const CommonScreenTemplate = ({children}) => {
  return (
    <SafeAreaView style={styles.safeArea}>
      <KeyboardAvoidingView
        style={styles.screen}
        enabled
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}>
        {children}
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
};
