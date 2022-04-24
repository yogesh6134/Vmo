import {StyleSheet} from 'react-native';
import Color from '../../themes/Colors';
import {FONT_SIZE, HEIGHT, SPACING, WIDTH} from '../../themes/Constants';

export default StyleSheet.create({
  box: {
    marginHorizontal: SPACING.v8,
    marginVertical: SPACING.v5,
    borderWidth: 2,
    paddingVertical: SPACING.v5,
    borderRadius: SPACING.v10,
    paddingHorizontal: SPACING.v8,
  },

  image: {
    height: 60,
    width: 60,
    borderRadius: 30,
  },
  borderStyle: {
    height: 1,
    backgroundColor: Color.txtDark,
    marginVertical: SPACING.v10,
    marginHorizontal: SPACING.v15,
  },
  titleText: {
    fontSize: FONT_SIZE.f13,
    color: Color.txtDark,
    fontWeight: '600',
    paddingBottom: SPACING.v3,
  },
  priceText: {
    fontSize: FONT_SIZE.f15,
    color: Color.black,
    fontWeight: '600',
    marginVertical: SPACING.v5,
  },
  nameText: {
    fontSize: FONT_SIZE.f15,
    color: Color.black,
    fontWeight: '600',
  },
  shareIconView: {
    height: 25,
    width: 25,
    backgroundColor: 'red',
    borderRadius: 12,
    justifyContent: 'center',
    alignItems: 'center',
  },
  shareIcon: {
    height: 20,
    width: 20,
    tintColor: Color.white,
  },
  button: {
    backgroundColor: Color.blue,
    paddingHorizontal: SPACING.v15,
    justifyContent: 'center',
    height: HEIGHT.h25,
    borderRadius: SPACING.v8,
  },
  buttonText: {
    fontSize: FONT_SIZE.f12,
    color: Color.white,
    fontWeight: '600',
  },
});
