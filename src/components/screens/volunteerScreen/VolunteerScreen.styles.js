import {StyleSheet} from 'react-native';
import {
  heightPercentageToDP,
  widthPercentageToDP,
} from 'react-native-responsive-screen';
import {appColors} from '../../../colors';

export default StyleSheet.create({
  infoContainer: {
    marginBottom: heightPercentageToDP('3%'),
  },
  detailsSpacing: {
    marginBottom: heightPercentageToDP('6%'),
  },
  divider: {
    borderWidth: heightPercentageToDP('0.1%'),
    borderColor: appColors.grey,
    width: widthPercentageToDP('88%'),
  },
  title: {
    fontSize: heightPercentageToDP('3%'),
    fontWeight: '600',
    width: widthPercentageToDP('88%'),
    textAlign: 'left',
  },
  infoSpacing: {
    marginBottom: heightPercentageToDP('0.7%'),
  },
  text: {
    fontSize: heightPercentageToDP('2%'),
    width: widthPercentageToDP('88%'),
    textAlign: 'left',
  },
  detailsTitle: {
    fontSize: heightPercentageToDP('2.2%'),
    width: widthPercentageToDP('88%'),
    textAlign: 'left',
    fontWeight: '600',
  },
  formField: {
    marginBottom: heightPercentageToDP('3%'),
  },
  lastField: {
    marginBottom: heightPercentageToDP('8%'),
  },
  screen: {
    width: widthPercentageToDP('90%'),
    alignItems: 'center',
  },
  volunteerTitleSpacing: {
    marginBottom: heightPercentageToDP('3%'),
  },
  formContainer: {
    display: 'flex',
    flexDirection: 'column',
    height: heightPercentageToDP('45%'),
    justifyContent: 'space-between',
  },
});
