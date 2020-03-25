import {StyleSheet} from 'react-native';
import {appColors} from '../../../colors';
import {
  heightPercentageToDP,
  widthPercentageToDP,
} from 'react-native-responsive-screen';

export default StyleSheet.create({
  text: {
    fontSize: heightPercentageToDP('2%'),
  },
  screen: {
    height: heightPercentageToDP('90%'),
    width: widthPercentageToDP('100%'),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    backgroundColor: appColors.white,
    padding: 20,
  },
  instructionText: {
    marginBottom: heightPercentageToDP('5%'),
  },
  formField: {
    marginBottom: heightPercentageToDP('3%'),
  },
  lastField: {
    marginBottom: heightPercentageToDP('7%'),
  },
});
