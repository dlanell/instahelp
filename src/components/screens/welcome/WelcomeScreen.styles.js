import {StyleSheet} from 'react-native';
import {appColors} from '../../../colors';
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
    marginBottom: heightPercentageToDP('2.5%'),
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
