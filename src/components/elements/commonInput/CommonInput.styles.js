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
  detailedText: {
    fontSize: heightPercentageToDP('1.8%'),
    marginBottom: heightPercentageToDP('2%'),
  },
  textInputField: {
    borderWidth: 1,
    borderColor: appColors.grey,
    borderRadius: 10,
    paddingLeft: 10,
    paddingRight: 10,
    height: heightPercentageToDP('5%'),
    width: widthPercentageToDP('88%'),
    fontSize: heightPercentageToDP('2%'),
  },
  multilineTextInputField: {
    borderWidth: 1,
    borderColor: appColors.grey,
    borderRadius: 10,
    paddingLeft: 10,
    paddingRight: 10,
    paddingTop: 10,
    textAlignVertical: 'top',
    lineHeight: heightPercentageToDP('2.7%'),
    height: heightPercentageToDP('15%'),
    width: widthPercentageToDP('88%'),
    fontSize: heightPercentageToDP('2%'),
  },
  textInputLabelContainer: {
    display: 'flex',
    flexDirection: 'row',
  },
  textInputLabel: {
    marginBottom: heightPercentageToDP('2%'),
    marginRight: widthPercentageToDP('1%'),
  },
  textInputLabelWithDetails: {
    marginBottom: heightPercentageToDP('1%'),
    marginRight: widthPercentageToDP('1%'),
  },
  textAsterisk: {
    color: appColors.red,
  },
});
