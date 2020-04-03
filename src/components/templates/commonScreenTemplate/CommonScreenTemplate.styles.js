import {StyleSheet} from 'react-native';
import {appColors} from '../../../colors';
import {
  heightPercentageToDP,
  widthPercentageToDP,
} from 'react-native-responsive-screen';

export default StyleSheet.create({
  safeArea: {flex: 1, backgroundColor: appColors.white},
  screen: {
    height: heightPercentageToDP('88%'),
    width: widthPercentageToDP('100%'),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    backgroundColor: appColors.offWhite,
    padding: 20,
  },
});
