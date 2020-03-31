import React, {useEffect} from 'react';
import {CommonScreenTemplate} from '../../templates/commonScreenTemplate/CommonScreenTemplate';
import {ScrollView, Text, Alert} from 'react-native';
import styles from './BrowseRequestsScreen.styles';
import {VolunteerRequestService} from '../../../services/VolunteerRequestService';
export const BrowseRequestsScreen = ({navigation}) => {
  useEffect(() => {
    const unsubscribe = navigation.addListener('focus', () => {
      VolunteerRequestService.getVolunteerRequests().then(response => {
        Alert.alert('Success', JSON.stringify(response.data));
      });
    });

    return unsubscribe;
  }, [navigation]);
  return (
    <CommonScreenTemplate>
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.screen}>
        <Text testID={'browse-requests-details'}>
          Select the requests you'll like to volunteer for.
        </Text>
        <Text testID={'browse-requests-list-title'}>Open Requests</Text>
      </ScrollView>
    </CommonScreenTemplate>
  );
};
