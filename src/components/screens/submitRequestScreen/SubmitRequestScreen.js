import React, {useState} from 'react';
import {Text, View, SafeAreaView, ScrollView} from 'react-native';
import styles from './SubmitRequestScreen.styles';
import {
  CommonInput,
  TextContentEnum,
} from '../../elements/commonInput/CommonInput';
import {Button, ButtonStyleEnum} from '../../elements/button/Button';

export const SubmitRequestScreen = () => {
  const [name, setName] = useState('');
  const [request, setRequest] = useState('');
  const [requestDetails, setRequestDetails] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [zipCode, setZipCode] = useState('');

  return (
    <SafeAreaView>
      <View style={styles.screen}>
        <ScrollView showsVerticalScrollIndicator={false}>
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
            keyboardType={TextContentEnum.TEXT}
          />
          <CommonInput
            testID={'request-field'}
            label={'What do you need help with?'}
            onChangeText={text => setRequest(text)}
            value={request}
            placeholder={'Short blurb'}
            required={true}
            containerStyle={styles.formField}
            maxLength={100}
            keyboardType={TextContentEnum.TEXT}
          />
          <CommonInput
            testID={'request-details-field'}
            label={'Additional Details'}
            onChangeText={text => setRequestDetails(text)}
            value={requestDetails}
            placeholder={'Write here...'}
            required={true}
            containerStyle={styles.formField}
            maxLength={350}
            keyboardType={TextContentEnum.TEXT}
            isMultiline={true}
          />
          <CommonInput
            testID={'zip-code-field'}
            label={"What's your zip code?"}
            onChangeText={text => setZipCode(text)}
            value={zipCode}
            placeholder={'Zip code'}
            required={true}
            containerStyle={styles.formField}
            maxLength={5}
            keyboardType={TextContentEnum.NUMBER}
          />
          <CommonInput
            testID={'phone-number-field'}
            label={'Phone number'}
            onChangeText={text => setPhoneNumber(text)}
            value={phoneNumber}
            placeholder={'(000) 000-0000'}
            required={true}
            containerStyle={styles.lastField}
            maxLength={10}
            keyboardType={TextContentEnum.NUMBER}
          />
          <Button
            onPress={() => {}}
            buttonStyle={ButtonStyleEnum.PRIMARY}
            text={'Submit Request'}
          />
        </ScrollView>
      </View>
    </SafeAreaView>
  );
};
