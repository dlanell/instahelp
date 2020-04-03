import {StyleSheet} from 'react-native';
import {appColors} from '../../../colors';
import {
  heightPercentageToDP,
  widthPercentageToDP,
} from 'react-native-responsive-screen';

export default StyleSheet.create({
  button: {
    width: widthPercentageToDP('88%'),
    height: 50,
    borderRadius: 30,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  primaryButton: {
    backgroundColor: appColors.brightOrange,
  },
  disabledButton: {
    backgroundColor: appColors.disabledGrey,
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
  disabledButtonText: {
    color: appColors.white,
    fontWeight: '500',
    fontSize: heightPercentageToDP('2%'),
  },
});
