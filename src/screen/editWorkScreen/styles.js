import {StyleSheet} from 'react-native';
import Color from '../../themes/Colors';
import {FONT_SIZE, HEIGHT, SPACING, WIDTH} from '../../themes/Constants';

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
  box: {
    marginHorizontal: SPACING.v8,
    marginVertical: SPACING.v5,
    borderWidth: 2,
    paddingTop: SPACING.v5,
    borderRadius: SPACING.v10,
    paddingHorizontal: SPACING.v8,
    marginBottom: SPACING.v15,
  },

  image: {
    height: 60,
    width: 60,
    borderRadius: 30,
    marginRight: SPACING.v20,
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

  appliedButton: {
    backgroundColor: Color.green,
    paddingHorizontal: SPACING.v10,
    paddingVertical: SPACING.v5,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: SPACING.v8,
  },
  editButton: {
    backgroundColor: Color.blue,
    paddingHorizontal: SPACING.v15,
    paddingVertical: SPACING.v5,
    marginRight: SPACING.v15,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: SPACING.v8,
  },
  userDetailbox: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: SPACING.v15,
    borderWidth: 1,
    marginVertical: SPACING.v3,
    marginHorizontal: SPACING.v15,
    justifyContent: 'space-between',
    paddingVertical: SPACING.v8,
  },
  icon: {
    height: 50,
    width: 50,
    borderRadius: 25,
    marginRight: SPACING.v20,
  },
  userleftSideView: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  userRightSideView: {
    backgroundColor: Color.blue,
    paddingHorizontal: SPACING.v15,
    paddingVertical: SPACING.v5,
    borderRadius: SPACING.v8,
  },
  profileButtonText: {
    fontSize: FONT_SIZE.f15,
    fontWeight: '600',
    color: Color.white,
  },
});
