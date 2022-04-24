import {StyleSheet} from 'react-native';
import Color from '../../themes/Colors';
import {FONT_SIZE, HEIGHT, SPACING, WIDTH} from '../../themes/Constants';

export default StyleSheet.create({
  box: {
    marginVertical: SPACING.v5,
    marginHorizontal: SPACING.v10,
    paddingVertical: SPACING.v8,
    borderWidth: 0.5,
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: Color.white,
  },
  leftSide: {
    width: '25%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  rightSide: {
    width: '75%',
    paddingHorizontal: SPACING.v8,
  },
  image: {
    height: 60,
    width: 60,
    borderRadius: 30,
  },
  nameText: {
    fontSize: FONT_SIZE.f16,
    fontWeight: '600',
    color: Color.black,
  },
  professionText: {
    fontSize: FONT_SIZE.f12,
    fontWeight: '400',
    color: Color.txtDark,
  },
  insideBoxRightSideView: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  buttonRightSideView: {
    flexDirection: 'row',
  },
  buttton: {
    borderWidth: 2,
    marginHorizontal: SPACING.v3,
    paddingHorizontal: SPACING.v8,
    paddingVertical: SPACING.v3,
  },
  buttonText: {
    fontSize: FONT_SIZE.f13,
    color: Color.black,
    fontWeight: '700',
  },
});