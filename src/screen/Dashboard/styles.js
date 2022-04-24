import {StyleSheet} from 'react-native';
import Colors from '../../themes/Colors';
import {SPACING, FONT_SIZE, HEIGHT, WIDTH} from '../../themes/Constants';

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.white,
  },
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
    width: WIDTH.w40,
    marginHorizontal: SPACING.v8,
  },
  notificationView: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: SPACING.v15,
    borderBottomColor: Colors.txtDark,
    borderBottomWidth: 0.5,
    paddingVertical: SPACING.v8,
    alignItems: 'center',
    width: '100%',
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
    height: HEIGHT.h50,
    width: WIDTH.w45,
    marginRight: SPACING.v20,
  },
  rightSideView: {
    width: '20%',
    alignItems: 'flex-end',
  },
  plusIcon: {
    height: HEIGHT.h50,
    width: WIDTH.w50,
    tintColor: Colors.blue,
    position: 'absolute',
    bottom: SPACING.v8,
    right: SPACING.v10,
  },
});
