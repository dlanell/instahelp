/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {isMountedRef, navigationRef} from './src/navigation/NavigationService';
import {createStackNavigator} from '@react-navigation/stack';
import {WelcomeScreen} from './src/components/screens/welcome/WelcomeScreen';
import {Screen} from './src/navigation/screenConstants';
import {SubmitRequestScreen} from './src/components/screens/submitRequestScreen/SubmitRequestScreen';
import {BrowseRequestsScreen} from './src/components/screens/browseRequestsScreen/BrowseRequestsScreen';
import {VolunteerScreen} from './src/components/screens/volunteerScreen/VolunteerScreen';
import {Icon} from 'native-base';
import {TouchableOpacity, Alert} from 'react-native';
import styles from './App.styles';
import {appColors} from './src/colors';

const Stack = createStackNavigator();
const App: () => React$Node = () => {
  React.useEffect(() => {
    isMountedRef.current = true;

    return () => (isMountedRef.current = false);
  }, []);

  return (
    <NavigationContainer ref={navigationRef}>
      <Stack.Navigator initialRouteName={Screen.WELCOME}>
        <Stack.Screen
          name={Screen.WELCOME}
          component={WelcomeScreen}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name={Screen.SUBMIT_REQUEST}
          component={SubmitRequestScreen}
          options={{
            title: 'Make a Request',
            headerStyle: {
              backgroundColor: appColors.offWhite,
            },
            headerRight: () => (
              <TouchableOpacity
                style={styles.headerButtonRight}
                onPress={() =>
                  Alert.alert(
                    'Help',
                    'For questions and support, please email thtran@pivotal.io',
                    [{text: 'Close'}],
                  )
                }>
                <Icon name={'ios-help-circle-outline'} />
              </TouchableOpacity>
            ),
          }}
        />
        <Stack.Screen
          name={Screen.BROWSE_REQUESTS}
          component={BrowseRequestsScreen}
          options={{
            title: 'Browse Requests',
            headerStyle: {
              backgroundColor: appColors.offWhite,
            },
            headerRight: () => (
              <TouchableOpacity
                style={styles.headerButtonRight}
                onPress={() =>
                  Alert.alert(
                    'Help',
                    'For questions and support, please email thtran@pivotal.io',
                    [{text: 'Close'}],
                  )
                }>
                <Icon name={'ios-help-circle-outline'} />
              </TouchableOpacity>
            ),
          }}
        />
        <Stack.Screen
          name={Screen.VOLUNTEER}
          component={VolunteerScreen}
          options={{
            title: 'Browse Requests',
            headerBackTitle: 'Back',
            headerStyle: {
              backgroundColor: appColors.offWhite,
            },
            headerRight: () => (
              <TouchableOpacity
                style={styles.headerButtonRight}
                onPress={() =>
                  Alert.alert(
                    'Help',
                    'For questions and support, please email thtran@pivotal.io',
                    [{text: 'Close'}],
                  )
                }>
                <Icon name={'ios-help-circle-outline'} />
              </TouchableOpacity>
            ),
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
