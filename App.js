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
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
