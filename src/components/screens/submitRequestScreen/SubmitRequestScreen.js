import React, {useState} from 'react';
import {
  Text,
  SafeAreaView,
  ScrollView,
  KeyboardAvoidingView,
  Platform,
  Alert,
} from 'react-native';
import {Screen} from '../../../navigation/screenConstants';
import styles from './SubmitRequestScreen.styles';
import {
  CommonInput,
  TextContentEnum,
} from '../../elements/commonInput/CommonInput';
import {Button, ButtonStyleEnum} from '../../elements/button/Button';
import {DatePicker} from '../../elements/datePicker/DatePicker';
import {VolunteerRequestService} from '../../../services/VolunteerRequestService';

export const SubmitRequestScreen = ({navigation}) => {
  const [name, setName] = useState('');
  const [request, setRequest] = useState('');
  const [requestDetails, setRequestDetails] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [zipCode, setZipCode] = useState('');
  const [date, setDate] = useState(new Date());
  const [disableSubmit, setDisableSubmit] = useState(false);

  const handleSubmit = async () => {
    if (disableSubmit) {
      return;
    }
    setDisableSubmit(true);
    await VolunteerRequestService.submitVolunteerRequest({})
      .then(() => {
        Alert.alert('Success', 'successfully submitted volunteer request');
        navigation.navigate(Screen.WELCOME);
      })
      .catch(() => {})
      .finally(() => setDisableSubmit(false));
  };

  return (
    <SafeAreaView style={styles.safeArea}>
      <KeyboardAvoidingView
        style={styles.screen}
        enabled
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}>
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
            label={'Any other additional details?'}
            onChangeText={text => setRequestDetails(text)}
            value={requestDetails}
            placeholder={
              'Provide additional information like your location or what you need.'
            }
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
          <DatePicker
            testID={'date-field'}
            date={date}
            setDateFn={setDate}
            label={'When do you need it by?'}
          />
          <CommonInput
            testID={'phone-number-field'}
            label={'Phone number'}
            detailedLabel={'Your number wont be shared publicly.'}
            onChangeText={text => setPhoneNumber(text)}
            value={phoneNumber}
            placeholder={'(000) 000-0000'}
            required={true}
            containerStyle={styles.lastField}
            maxLength={10}
            keyboardType={TextContentEnum.NUMBER}
          />
          <Button
            testID={'submit-volunteer-request-button'}
            disabled={disableSubmit}
            onPress={handleSubmit}
            buttonStyle={ButtonStyleEnum.PRIMARY}
            text={'Submit Request'}
          />
        </ScrollView>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
};
