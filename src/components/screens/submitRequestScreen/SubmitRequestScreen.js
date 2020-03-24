import React from 'react';
import {Text, View, SafeAreaView, ScrollView} from 'react-native';

export const SubmitRequestScreen = () => {
  return (
    <SafeAreaView>
      <View>
        <ScrollView>
          <Text testID={'submit-request-instructions'}>
            Please fill out the form bellow and we will match you with a
            volunteer to help
          </Text>
        </ScrollView>
      </View>
    </SafeAreaView>
  );
};
