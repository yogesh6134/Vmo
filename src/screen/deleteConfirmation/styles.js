import {StyleSheet} from 'react-native';
import Color from '../../themes/Colors';
import {FONT_SIZE, HEIGHT, SPACING, WIDTH} from '../../themes/Constants';

const headerBg = '#282f3f';
const activeBg = '#384153';
const normalBg = '#434e64';
const activeText = '#ffffff';
const normalText = '#222222';
export default StyleSheet.create({
  thirdicon: {
    height: HEIGHT.h40,
    width: WIDTH.w40,
    marginHorizontal: SPACING.v8,
  },
  secondicon: {
    height: HEIGHT.h40,
    width: WIDTH.w40,
    marginHorizontal: SPACING.v8,
  },
  firsticon: {
    height: HEIGHT.h40,
    width: WIDTH.w45,
    marginHorizontal: SPACING.v8,
  },
  tabStyle: {
    opacity: 1,
    backgroundColor: Color.white,
  },
  tab: {
    backgroundColor: Color.black,
  },
  indicator: {
    backgroundColor: 'none',
  },
  tabTextStyle: {
    fontSize: FONT_SIZE.f13,
    color: Color.black,
  },
});
