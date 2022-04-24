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
    borderBottomWidth: 0.5,
    borderBottomColor: Color.txtDark,
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
  professionText: {
    fontSize: FONT_SIZE.f12,
    color: Color.black,
    fontWeight: '600',
    marginRight: SPACING.v10,
  },
  timeText: {
    fontSize: FONT_SIZE.f10,
    color: Color.txtDark,
  },
  storyText: {
    fontSize: FONT_SIZE.f13,
    color: Color.txtDark,
  },
  userImageIcon: {
    height: HEIGHT.h50,
    width: WIDTH.w55,
    marginRight: SPACING.v10,
  },
  threeDotIcon: {
    height: HEIGHT.h20,
    width: WIDTH.w25,
  },
  image: {
    height: HEIGHT.h300,
    width: WIDTH.w300,
    alignSelf: 'center',
    marginVertical: SPACING.v15,
    borderRadius: SPACING.v15,
  },
  likesCommentView: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginHorizontal: SPACING.v15,
    marginBottom: SPACING.v15,
  },
  bottomViewButton: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginHorizontal: SPACING.v40,
    marginBottom: SPACING.v8,
  },
  buttonView: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  buttonText: {
    fontSize: FONT_SIZE.f12,
    color: Color.txtDark,
    marginLeft: SPACING.v5,
  },
});
