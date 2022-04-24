import {StyleSheet} from 'react-native';
import Colors from '../../themes/Colors';
import {SPACING, FONT_SIZE, HEIGHT, WIDTH} from '../../themes/Constants';

export default StyleSheet.create({
  container: {
    flex: 1,
  },
  notificationView: {
    flexDirection: 'row',
    paddingHorizontal: SPACING.v15,
    borderRadius: SPACING.v10,
    paddingVertical: SPACING.v8,
    backgroundColor: Colors.white,
    alignItems: 'center',
    marginHorizontal: SPACING.v15,
    marginVertical: SPACING.v8,
    elevation: 5,
    shadowProp: {
      shadowColor: Colors.txtDark,
      shadowOffset: {width: -2, height: 4},
      shadowOpacity: 0.2,
      shadowRadius: 3,
    },
  },
  nameText: {
    fontSize: FONT_SIZE.f12,
    color: Colors.txtDark,
  },

  leftSideNotification: {
    flexDirection: 'row',
    alignItems: 'center',
    width: '70%',
  },
  icon: {
    height: HEIGHT.h40,
    width: WIDTH.w45,
    marginRight: SPACING.v20,
  },
  rightSideView: {
    width: '20%',
    alignItems: 'flex-end',
  },
});
