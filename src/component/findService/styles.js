import {StyleSheet} from 'react-native';
import Color from '../../themes/Colors';
import {FONT_SIZE, HEIGHT, SPACING, WIDTH} from '../../themes/Constants';

export default StyleSheet.create({
  box: {
    flexDirection: 'row',
    marginHorizontal: SPACING.v8,
    marginVertical: SPACING.v10,
  },
  leftSide: {
    width: '30%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    height: HEIGHT.h80,
    width: WIDTH.w100,
  },
  rightSide: {
    width: '70%',
    paddingHorizontal: SPACING.v10,
  },
  titleText: {
    fontSize: FONT_SIZE.f12,
    color: Color.txtDark,
    fontWeight: '600',
  },
  priceText: {
    fontSize: FONT_SIZE.f15,
    color: Color.black,
    fontWeight: '600',
    marginVertical: SPACING.v5,
  },
  nameText: {
    fontSize: FONT_SIZE.f15,
    color: Color.txtDark,
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
    paddingVertical: SPACING.v5,
    paddingHorizontal: SPACING.v10,
  },
  buttonText: {
    fontSize: FONT_SIZE.f12,
    color: Color.white,
    fontWeight: '600',
  },
});
