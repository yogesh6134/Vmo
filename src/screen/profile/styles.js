import {StyleSheet} from 'react-native';
import Colors from '../../themes/Colors';
import {SPACING, FONT_SIZE, HEIGHT, WIDTH} from '../../themes/Constants';

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.white,
    paddingHorizontal: SPACING.v15,
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
  topBar: {
    flexDirection: 'row',
    backgroundColor: Colors.white,
    width: '100%',
    marginVertical: SPACING.v15,
  },
  leftSideView: {
    width: '25%',
  },
  rightSideView: {
    width: '70%',
    paddingLeft: SPACING.v10,
  },
  profilePicture: {
    height: HEIGHT.h70,
    width: WIDTH.w90,
    borderRadius: SPACING.v15,
    marginRight: SPACING.v10,
  },
  userdetailView: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: SPACING.v10,
  },
  userdetailPostsView: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: SPACING.v10,
    justifyContent: 'space-between',
  },
  userNameText: {
    fontSize: FONT_SIZE.f15,
    color: Colors.black,
    marginRight: SPACING.v10,
    fontWeight: '600',
  },
  mailText: {
    fontSize: FONT_SIZE.f12,
    color: Colors.txtDark,
    fontWeight: '400',
  },
  noOfCount: {
    fontSize: FONT_SIZE.f12,
    color: Colors.black,
    fontWeight: '600',
  },
  buttonView: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: SPACING.v15,
  },
  button: {
    borderWidth: 0.5,
    width: WIDTH.w140,
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: SPACING.v5,
  },
  activeButton: {
    borderWidth: 0.5,
    width: WIDTH.w140,
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: SPACING.v5,
    backgroundColor: Colors.blue,
  },
  shareIcon: {
    height: HEIGHT.h20,
    width: WIDTH.w25,
    alignSelf: 'flex-end',
    marginVertical: SPACING.v5,
  },
  tabStyle: {
    backgroundColor: 'none',
  },
  tabTextStyle: {
    fontSize: FONT_SIZE.f15,
    color: Colors.txtDark,
  },
});
