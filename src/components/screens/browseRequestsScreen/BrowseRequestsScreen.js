import React, {useEffect, useState} from 'react';
import {CommonScreenTemplate} from '../../templates/commonScreenTemplate/CommonScreenTemplate';
import {View, Text, FlatList, TouchableOpacity} from 'react-native';
import styles from './BrowseRequestsScreen.styles';
import {VolunteerRequestService} from '../../../services/VolunteerRequestService';
import {convertToMonthDayFormat} from '../../../dateUtil';
import {Icon} from 'native-base';
import {Screen} from '../../../navigation/screenConstants';

export const BrowseRequestsScreen = ({navigation}) => {
  const [volunteerRequests, setVolunteerRequests] = useState([]);

  useEffect(() => {
    const unsubscribe = navigation.addListener('focus', () => {
      VolunteerRequestService.getVolunteerRequests().then(response => {
        setVolunteerRequests(response.data);
      });
    });

    return unsubscribe;
  }, [navigation]);

  return (
    <CommonScreenTemplate>
      <View style={styles.screen}>
        <Text testID={'browse-requests-details'} style={styles.pageAction}>
          Select the requests you'll like to volunteer for.
        </Text>
        <Text testID={'browse-requests-list-title'} style={styles.title}>
          Open Requests
        </Text>
        <View style={styles.listContainer}>
          <FlatList
            data={volunteerRequests}
            keyExtractor={item => `${item.title}${item.id}`}
            renderItem={({item}) => (
              <View style={styles.cardContainer}>
                <TouchableOpacity
                  style={styles.requestCard}
                  onPress={() =>
                    navigation.navigate(Screen.VOLUNTEER, {
                      volunteerRequest: item,
                    })
                  }>
                  <View style={styles.cardDetails}>
                    <Text style={styles.cardTitle}>{item.title}</Text>
                    <Text style={styles.cardText}>
                      {`Date needed: ${convertToMonthDayFormat(item.date)}`}
                    </Text>
                    <Text style={styles.cardText}>{`Where to: ${
                      item.zip
                    }`}</Text>
                  </View>
                  <Icon name={'arrow-forward'} />
                </TouchableOpacity>
              </View>
            )}
          />
        </View>
      </View>
    </CommonScreenTemplate>
  );
};
