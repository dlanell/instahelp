import {StyleSheet} from 'react-native';
import {appColors} from '../colors';
import {
  heightPercentageToDP,
  widthPercentageToDP,
} from 'react-native-responsive-screen';

export default StyleSheet.create({
  welcomeTextContainer: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    marginBottom: heightPercentageToDP('15%'),
  },
  screen: {
    height: heightPercentageToDP('100%'),
    width: widthPercentageToDP('100%'),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    backgroundColor: appColors.greyWhite,
    padding: 20,
  },
  welcomeImg: {
    height: widthPercentageToDP('60%'),
    width: widthPercentageToDP('60%'),
  },
  welcomeText: {
    textAlign: 'center',
    fontSize: heightPercentageToDP('1.8%'),
    lineHeight: heightPercentageToDP('3%'),
  },
  firstParagraph: {
    marginBottom: 30,
  },
  button: {
    width: widthPercentageToDP('80%'),
    height: 50,
    borderRadius: 30,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  primaryButton: {
    backgroundColor: appColors.brightOrange,
    marginBottom: heightPercentageToDP('2.5%'),
  },
  primaryButtonText: {
    color: appColors.white,
    fontWeight: '800',
    fontSize: heightPercentageToDP('2%'),
  },
  secondaryButton: {
    backgroundColor: appColors.offWhite,
    shadowColor: '#000',
    shadowOpacity: 0.3,
    shadowRadius: 3,
    shadowOffset: {
      width: 0,
      height: 2,
    },
  },
  secondaryButtonText: {
    color: appColors.black,
    fontWeight: '500',
    fontSize: heightPercentageToDP('2%'),
  },
  safeArea: {
    backgroundColor: appColors.greyWhite,
  },
  title: {
    fontSize: heightPercentageToDP('4%'),
    fontWeight: '600',
    marginBottom: 20,
  },
});
