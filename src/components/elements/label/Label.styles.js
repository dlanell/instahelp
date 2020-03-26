import {StyleSheet} from 'react-native';
import {appColors} from '../../../colors';
import {
  heightPercentageToDP,
  widthPercentageToDP,
} from 'react-native-responsive-screen';

export default StyleSheet.create({
  container: {
    marginBottom: heightPercentageToDP('1.8%'),
  },
  text: {
    fontSize: heightPercentageToDP('2%'),
  },
  detailedText: {
    fontSize: heightPercentageToDP('1.8%'),
  },
  labelContainer: {
    display: 'flex',
    flexDirection: 'row',
  },
  textInputLabel: {
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
