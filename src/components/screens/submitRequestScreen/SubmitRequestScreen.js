import React, {useState} from 'react';
import {Text, ScrollView, Alert, ActionSheetIOS} from 'react-native';
import {Screen} from '../../../navigation/screenConstants';
import styles from './SubmitRequestScreen.styles';
import {
  CommonInput,
  TextContentEnum,
} from '../../elements/commonInput/CommonInput';
import {Button, ButtonStyleEnum} from '../../elements/button/Button';
import {DatePicker} from '../../elements/datePicker/DatePicker';
import {VolunteerRequestService} from '../../../services/VolunteerRequestService';
import {CommonScreenTemplate} from '../../templates/commonScreenTemplate/CommonScreenTemplate';
import {IOSPicker} from '../../elements/iOSPicker/IOSPicker';

export const SubmitRequestScreen = ({navigation}) => {
  const [name, setName] = useState('');
  const [title, setTitle] = useState('');
  const [details, setDetails] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [zip, setZip] = useState('');
  const [preferredPaymentMethod, setPreferredPaymentMethod] = useState(null);
  const [date, setDate] = useState(new Date());
  const [disableSubmit, setDisableSubmit] = useState(false);

  function addDays(dateValue) {
    const copy = new Date(Number(dateValue));
    copy.setDate(dateValue.getDate() + 2);
    return copy;
  }

  const handleActionSheet = () => {
    ActionSheetIOS.showActionSheetWithOptions(
      {
        options: ['Cancel', 'CashApp', 'PayPal', 'Venmo', 'Zelle'],
        cancelButtonIndex: 0,
        title: 'Please select reimbursement method',
      },
      buttonIndex => {
        switch (buttonIndex) {
          case 1:
            setPreferredPaymentMethod('CashApp');
            return;
          case 2:
            setPreferredPaymentMethod('PayPal');
            return;
          case 3:
            setPreferredPaymentMethod('Venmo');
            return;
          case 4:
            setPreferredPaymentMethod('Zelle');
            return;
        }
      },
    );
  };

  const validateInputs = () => {
    const validName = name !== '';
    const validTitle = title !== '';
    const validDetails = details !== '';
    const validPhoneNumber = phoneNumber.length === 10;
    const validZip = zip.length === 5;

    return (
      validName && validTitle && validDetails && validPhoneNumber && validZip
    );
  };

  async function handleSubmitRequestAPI() {
    if (disableSubmit) {
      return;
    }

    setDisableSubmit(true);
    await VolunteerRequestService.submitVolunteerRequest({
      name,
      title,
      details,
      date,
      zip,
      phoneNumber,
      preferredPaymentMethod,
      email: '',
    })
      .then(() => {
        Alert.alert('Success', 'successfully submitted volunteer request');
        navigation.navigate(Screen.WELCOME);
      })
      .catch(error => {
        Alert.alert('Error', JSON.stringify(error));
      })
      .finally(() => setDisableSubmit(false));
  }

  const handleSubmit = async () => {
    validateInputs()
      ? await handleSubmitRequestAPI()
      : Alert.alert(
          'Check Entries',
          'Please fill out all fields to submit request',
        );
  };

  return (
    <CommonScreenTemplate>
      <ScrollView showsVerticalScrollIndicator={false}>
        <Text
          style={[styles.text, styles.instructionText]}
          testID={'submit-request-instructions'}>
          Please fill out the form bellow and we will match you with a volunteer
          to help.
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
          onChangeText={text => setTitle(text)}
          value={title}
          placeholder={'Short blurb'}
          required={true}
          containerStyle={styles.formField}
          maxLength={100}
          keyboardType={TextContentEnum.TEXT}
        />
        <CommonInput
          testID={'request-details-field'}
          label={'Any other additional details?'}
          onChangeText={text => setDetails(text)}
          value={details}
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
          onChangeText={text => setZip(text)}
          value={zip}
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
        <IOSPicker
          testID={'reimbursement-method-field'}
          detailedLabel={'If applicable to your request'}
          label={'How would you like to reimburse?'}
          handleActionSheet={handleActionSheet}
          value={preferredPaymentMethod}
          placeholder={'Reimbursement method'}
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
          disabled={disableSubmit || !validateInputs()}
          onPress={handleSubmit}
          buttonStyle={ButtonStyleEnum.PRIMARY}
          text={'Submit Request'}
        />
      </ScrollView>
    </CommonScreenTemplate>
  );
};
