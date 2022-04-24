import {StyleSheet} from 'react-native';
import Color from '../../themes/Colors';
import {FONT_SIZE, HEIGHT, SPACING, WIDTH} from '../../themes/Constants';

export default StyleSheet.create({
  container: {
    backgroundColor: Color.white,
    height: HEIGHT.h50,
    borderBottomWidth: 0.5,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    width: '100%',
    paddingHorizontal: SPACING.v15,
  },
  leftSideHeader: {
    width: '50%',
  },
  headerText: {
    fontSize: FONT_SIZE.f30,
    color: Color.black,
    fontWeight: '600',
  },
  rightSideHeader: {
    width: '50%',
    flexDirection: 'row',
    justifyContent: 'flex-end',
  },
});
