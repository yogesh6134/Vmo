import {StyleSheet} from 'react-native';
import Color from '../../themes/Colors';
import {SPACING, FONT_SIZE, HEIGHT, WIDTH} from '../../themes/Constants';

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Color.white,
  },
  mainView: {
    marginBottom: SPACING.h15,
    marginHorizontal: SPACING.v15,
  },
  topView: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: SPACING.v6,
  },
  topLeftView: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  nameText: {
    fontSize: FONT_SIZE.f18,
    color: Color.black,
    fontWeight: '600',
  },

  timeText: {
    fontSize: FONT_SIZE.f12,
    color: Color.txtDark,
  },
  userImageIcon: {
    height: HEIGHT.h50,
    width: WIDTH.w55,
    marginRight: SPACING.v10,
  },
  button: {
    backgroundColor: Color.blue,
    justifyContent: 'center',
    alignSelf: 'flex-end',
    paddingVertical: SPACING.v5,
    paddingHorizontal: SPACING.v15,
    borderRadius: SPACING.v10,
    marginBottom: SPACING.v5,
  },
  buttonText: {
    fontSize: FONT_SIZE.f15,
  },
});
