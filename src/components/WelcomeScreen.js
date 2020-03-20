import React from 'react';
import {TouchableOpacity, Text, View, Image, SafeAreaView} from 'react-native';
import styles from './WelcomeScreen.styles';

export const WelcomeScreen = () => {
  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.screen}>
        <View style={styles.welcomeTextContainer}>
          <Image
            testID={'welcome-img'}
            style={styles.welcomeImg}
            source={require('../assets/groceries.png')}
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
        <TouchableOpacity
          testID={'make-a-request-button'}
          style={[styles.button, styles.primaryButton]}>
          <Text style={styles.primaryButtonText}>Make A Request</Text>
        </TouchableOpacity>
        <TouchableOpacity
          testID={'browse-requests-button'}
          style={[styles.button, styles.secondaryButton]}>
          <Text style={styles.secondaryButtonText}>Browse Requests</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};
