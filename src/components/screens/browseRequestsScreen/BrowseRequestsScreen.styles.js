import {StyleSheet} from 'react-native';
import {
  heightPercentageToDP,
  widthPercentageToDP,
} from 'react-native-responsive-screen';
import {appColors} from '../../../colors';

export default StyleSheet.create({
  pageAction: {
    fontSize: heightPercentageToDP('2%'),
    width: widthPercentageToDP('90%'),
    marginBottom: heightPercentageToDP('3%'),
    paddingTop: heightPercentageToDP('1%'),
  },
  title: {
    fontSize: heightPercentageToDP('3%'),
    fontWeight: '600',
    width: widthPercentageToDP('90%'),
    textAlign: 'left',
    marginBottom: heightPercentageToDP('1%'),
  },
  screen: {
    width: widthPercentageToDP('90%'),
    alignItems: 'center',
  },
  listContainer: {
    height: heightPercentageToDP('74%'),
    width: widthPercentageToDP('90'),
    alignItems: 'center',
    paddingTop: 5,
  },
  cardContainer: {
    padding: 5,
  },
  requestCard: {
    backgroundColor: appColors.offWhite,
    display: 'flex',
    flexDirection: 'row',
    height: heightPercentageToDP('11%'),
    width: widthPercentageToDP('88%'),
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: heightPercentageToDP('2%'),
    borderRadius: 10,
    shadowColor: appColors.black,
    shadowOpacity: 0.3,
    shadowRadius: 3,
    shadowOffset: {
      width: 0,
      height: 2,
    },
  },
  cardDetails: {
    display: 'flex',
    flexDirection: 'column',
    height: heightPercentageToDP('8%'),
    justifyContent: 'space-between',
  },
  cardText: {
    fontSize: heightPercentageToDP('1.8%'),
  },
  cardTitle: {
    fontSize: heightPercentageToDP('2%'),
    fontWeight: '900',
  },
});
