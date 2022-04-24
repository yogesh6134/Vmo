import {StyleSheet} from 'react-native';
import Color from '../../themes/Colors';
import {FONT_SIZE, HEIGHT, SPACING, WIDTH} from '../../themes/Constants';

export default StyleSheet.create({
  container: {
    marginBottom: SPACING.v100,
  },
  box: {
    borderWidth: 2.5,
    borderColor: Color.black,
    width: WIDTH.w160,
    alignItems: 'center',
    alignSelf: 'center',
    marginHorizontal: SPACING.v3,
    marginVertical: SPACING.v8,
    paddingBottom: SPACING.v8,
    paddingHorizontal: SPACING.v5,
  },
  Image: {
    height: HEIGHT.h150,
    width: WIDTH.w160,
    marginBottom: SPACING.v8,
  },
  headingText: {
    fontSize: FONT_SIZE.f12,
    marginVertical: SPACING.v5,
    color: Color.black,
    fontWeight: '500',
  },
  priceText: {
    fontSize: FONT_SIZE.f15,
    marginVertical: SPACING.v10,
    color: Color.black,
    fontWeight: '600',
  },
  shareIconView: {
    height: 35,
    width: 35,
    backgroundColor: 'red',
    borderRadius: 18,
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
    right: 10,
    bottom: SPACING.v45,
  },
  shareIcon: {
    height: HEIGHT.h25,
    width: WIDTH.w25,
  },
  buttonView: {
    flexDirection: 'row',
    marginTop: SPACING.v10,
    alignItems: 'center',
    width: '100%',
    justifyContent: 'space-between',
  },
  detailButton: {
    backgroundColor: Color.green,
    paddingHorizontal: SPACING.v8,
    paddingVertical: SPACING.v5,
  },
  messageButton: {
    backgroundColor: Color.blue,
    paddingHorizontal: SPACING.v8,
    paddingVertical: SPACING.v5,
  },
});
