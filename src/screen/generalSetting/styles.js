import {StyleSheet} from 'react-native';
import Colors from '../../themes/Colors';
import {FONT_SIZE, HEIGHT, SPACING, WIDTH} from '../../themes/Constants';

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.white,
    paddingHorizontal: SPACING.v15,
  },
  heading: {
    fontSize: FONT_SIZE.f30,
    color: Colors.green,
    marginTop: SPACING.v15,
    fontFamily: 'AkayaTelivigala-Regular',
  },
  topBoxView: {
    borderWidth: 1,
    borderRadius: SPACING.v8,
    marginBottom: SPACING.v15,
    paddingHorizontal: SPACING.v15,
    paddingVertical: SPACING.v15,
  },
  userLogo: {
    height: HEIGHT.h80,
    width: WIDTH.w100,
    alignSelf: 'center',
    marginTop: SPACING.v25,
    marginBottom: SPACING.v10,
  },
  bioBox: {
    height: HEIGHT.h80,
    borderWidth: 1,
    marginVertical: SPACING.v15,
    textAlignVertical: 'top',
    paddingHorizontal: SPACING.v15,
  },
  saveBioButton: {
    borderWidth: 1,
    width: WIDTH.w90,
    alignSelf: 'flex-end',
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: SPACING.v5,
  },
  saveBioButtonText: {
    fontSize: FONT_SIZE.f15,
    color: Colors.black,
    fontWeight: '600',
  },
  profileinstruction: {
    fontSize: SPACING.v12,
    color: Colors.blue,
    fontFamily: 'Roboto-Regular',
    textAlign: 'center',
  },
  boxHeading: {
    fontSize: FONT_SIZE.f15,
    color: Colors.black,
    fontWeight: '400',
  },
  radioButton: {
    height: 30,
    width: 30,
  },
  textViewStyle: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
    marginTop: SPACING.v20,
  },
  TextInput: {
    height: HEIGHT.h40,
    // margin: 12,
    borderBottomWidth: 1,
    padding: 10,
    color: Colors.black,
    fontSize: FONT_SIZE.f15,
    width: '40%',
  },
  fullTextInput: {
    height: HEIGHT.h40,
    marginVertical: SPACING.v15,
    borderBottomWidth: 1,
    padding: 10,
    color: Colors.black,
    fontSize: FONT_SIZE.f15,
  },
  genderText: {
    fontSize: FONT_SIZE.f15,
    color: Colors.txtDark,
  },
  iconView: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    textAlign: 'center',
  },
  genderBoxView: {
    alignItems: 'center',
  },
  genderIcon: {
    height: HEIGHT.h50,
    width: WIDTH.w50,
    alignItems: 'center',
  },
  selectGenderText: {
    fontSize: FONT_SIZE.f15,
    color: Colors.black,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  button: {
    backgroundColor: Colors.green,
    marginHorizontal: SPACING.v15,
    paddingVertical: SPACING.v8,
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
    borderRadius: SPACING.v8,
    marginTop: SPACING.v15,
  },
  buttonText: {
    fontSize: FONT_SIZE.f15,
    color: Colors.white,
    fontFamily: 'AkayaTelivigala-Regular',
  },
  bottomView: {
    height: SPACING.v100,
  },
});
