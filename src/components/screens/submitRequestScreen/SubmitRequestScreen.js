import React, {useState} from 'react';
import {Text, View, SafeAreaView, ScrollView} from 'react-native';
import styles from './SubmitRequestScreen.styles';
import {CommonInput} from '../../elements/commonInput/CommonInput';

export const SubmitRequestScreen = () => {
  const [name, setName] = useState('');

  return (
    <SafeAreaView>
      <View style={styles.screen}>
        <ScrollView>
          <Text
            style={[styles.text, styles.instructionText]}
            testID={'submit-request-instructions'}>
            Please fill out the form bellow and we will match you with a
            volunteer to help.
          </Text>
          <CommonInput
            testID={'name-field'}
            label={"What's your name"}
            onChangeText={text => setName(text)}
            value={name}
            placeholder={'Name'}
            required={true}
            containerStyle={styles.formField}
            maxLength={40}
          />
        </ScrollView>
      </View>
    </SafeAreaView>
  );
};
