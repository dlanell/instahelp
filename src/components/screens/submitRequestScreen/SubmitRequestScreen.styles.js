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
  textFieldContainer: {
    borderWidth: 1,
    borderColor: appColors.grey,
    borderRadius: 10,
    height: heightPercentageToDP('5%'),
    width: widthPercentageToDP('80%'),
    fontSize: heightPercentageToDP('2%'),
    marginBottom: heightPercentageToDP('1%'),
    display: 'flex',
    justifyContent: 'center',
  },
  textField: {
    paddingLeft: 20,
    fontSize: heightPercentageToDP('2%'),
  },
  doneText: {
    color: appColors.lightBlue,
    textAlign: 'right',
    fontWeight: '600',
    paddingRight: 20,
    fontSize: heightPercentageToDP('2.2%'),
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
