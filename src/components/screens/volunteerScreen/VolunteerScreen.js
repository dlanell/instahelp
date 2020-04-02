import React, {useState} from 'react';
import {View, Text, ScrollView} from 'react-native';
import {CommonScreenTemplate} from '../../templates/commonScreenTemplate/CommonScreenTemplate';
import styles from './VolunteerScreen.styles';
import {convertToMonthDayFormat} from '../../../dateUtil';
import {CommonInput} from '../../elements/commonInput/CommonInput';
import {Button, ButtonStyleEnum} from '../../elements/button/Button';
import {Screen} from '../../../navigation/screenConstants';

export const VolunteerScreen = ({route, navigation}) => {
  const [name, setName] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');

  const handleSubmit = () => {
    navigation.navigate(Screen.WELCOME);
  };

  const {volunteerRequest} = route.params;
  return (
    <CommonScreenTemplate>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.infoContainer}>
          <Text
            testID={'volunteer-request-title'}
            style={[styles.title, styles.infoSpacing]}>
            {volunteerRequest.title}
          </Text>
          <Text
            testID={'volunteer-request-date'}
            style={[
              styles.text,
              styles.infoSpacing,
            ]}>{`Date needed: ${convertToMonthDayFormat(
            volunteerRequest.date,
          )}`}</Text>
          <Text
            testID={'volunteer-request-zip'}
            style={[styles.text]}>{`Where to: ${volunteerRequest.zip}`}</Text>
        </View>
        <Text style={[styles.detailsTitle, styles.infoSpacing]}>
          Additional Details:
        </Text>
        <Text
          testID={'volunteer-request-details'}
          style={[styles.text, styles.detailsSpacing]}>
          {volunteerRequest.details}
        </Text>
        <View style={[styles.divider, styles.detailsSpacing]} />
        <View style={styles.formContainer}>
          <View>
            <Text style={[styles.detailsTitle, styles.volunteerTitleSpacing]}>
              Volunteer Information
            </Text>
            <CommonInput
              testID={'volunteer-name-field'}
              label={'Name'}
              onChangeText={text => setName(text)}
              value={name}
              placeholder={'Name'}
              containerStyle={styles.formField}
              required
            />
            <CommonInput
              testID={'volunteer-phone-number-field'}
              label={'Phone number'}
              detailedLabel={"We'll text you the requester's contact."}
              onChangeText={text => setPhoneNumber(text)}
              value={phoneNumber}
              containerStyle={styles.lastField}
              placeholder={'(000) 000 - 0000'}
              required
            />
          </View>
          <Button
            testID={'volunteer-request-submit-button'}
            onPress={handleSubmit}
            text={'Volunteer'}
            buttonStyle={ButtonStyleEnum.PRIMARY}
          />
        </View>
      </ScrollView>
    </CommonScreenTemplate>
  );
};
