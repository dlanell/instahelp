import {StyleSheet} from 'react-native';
import {appColors} from '../../../colors';
import {
  heightPercentageToDP,
  widthPercentageToDP,
} from 'react-native-responsive-screen';

export default StyleSheet.create({
  safeArea: {flex: 1, backgroundColor: appColors.white},
  text: {
    fontSize: heightPercentageToDP('2%'),
  },
  textInputField: {
    borderWidth: 1,
    borderColor: appColors.grey,
    borderRadius: 10,
    paddingLeft: 10,
    paddingRight: 10,
    height: heightPercentageToDP('5%'),
    width: widthPercentageToDP('80%'),
    fontSize: heightPercentageToDP('2%'),
  },
  screen: {
    height: heightPercentageToDP('88%'),
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
