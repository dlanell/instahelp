import React from 'react';
import {Text, View, Image, SafeAreaView} from 'react-native';
import styles from './WelcomeScreen.styles';
import {Button, ButtonStyleEnum} from '../../elements/button/Button';
import {Screen} from '../../../navigation/screenConstants';
// import {Screen} from '../../../navigation/screenConstants';

export const WelcomeScreen = ({navigation}) => {
  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.screen}>
        <View style={styles.welcomeTextContainer}>
          <Image
            testID={'welcome-img'}
            style={styles.welcomeImg}
            source={require('../../../assets/groceries.png')}
          />
          <Text testID={'welcome-title'} style={styles.title}>
            InstaHelp
          </Text>
          <View testID={'welcome-text'}>
            <Text style={[styles.welcomeText, styles.firstParagraph]}>
              We're connecting busy healthcare workers with volunteers to help
              assist with basic needs.
            </Text>
            <Text style={styles.welcomeText}>
              If you're a doctor, nurse, or hospital staff, please make a
              request. Otherwise, browse requests and volunteer to help!
            </Text>
          </View>
        </View>
        <Button
          buttonStyle={ButtonStyleEnum.PRIMARY}
          testID={'make-request-button'}
          text={'Make A Request'}
          onPress={() => navigation.navigate(Screen.SUBMIT_REQUEST)}
          optionalStyle={styles.button}
        />
        <Button
          buttonStyle={ButtonStyleEnum.SECONDARY}
          text={'Browse Requests'}
          onPress={() => {}}
        />
      </View>
    </SafeAreaView>
  );
};
