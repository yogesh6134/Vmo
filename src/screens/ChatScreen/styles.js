import Color from "@theme/colors";
import { HEIGHT, SPACING, WIDTH } from "@theme/constants";
import { Platform, StyleSheet } from "react-native";

export default StyleSheet.create({
  imageBackground: {
    flex: 1,
  },
  blurBackground: {
    height: "100%",
    width: "100%",
    position: "absolute",
  },
  overlayView: {
    height: "100%",
    width: "100%",
    position: "absolute",
    backgroundColor: Color.overlay,
    opacity: 0.8,
  },
  textInput: {
    backgroundColor: Color.white,
    borderRadius: SPACING.v15,
    paddingHorizontal: SPACING.v15,
    color: Color.text_dark0,
  },
  containerStyle: {
    backgroundColor: "transparent",
    borderTopWidth: 0,
    justifyContent: "center",
    marginHorizontal: SPACING.v4,
    marginBottom: SPACING.v2,
  },
  sendIcon: {
    height: WIDTH.w35,
    width: WIDTH.w35,
    marginTop: SPACING.v12,
  },
  overflowLabelStyle: {
    fontSize: 15,
    color: Color.white,
  },
  rightIconStyle: {
    marginLeft: SPACING.v15,
    height: WIDTH.w16,
    width: WIDTH.w16,
  },
  bottomshortlistMessage: {
    width: WIDTH.w0 * 1.7,
    flexWrap: "wrap",
    position: "absolute",
    bottom: SPACING.v20,
    left: 0,
    right: 0,
  },
  flatlist: {
    flexWrap: "wrap",
    flexDirection: "column",
  },
  shortCutMessageView: {
    marginVertical: SPACING.v4,
    marginHorizontal: SPACING.v8,
    backgroundColor: Color.white,
    padding: SPACING.v8,
    borderRadius: SPACING.v12,
  },
  userAvatarIcon: {
    width: WIDTH.w24,
    height: WIDTH.w24,
    borderRadius: WIDTH.w24 / 2,
  },
  sheetBackgroundStyle: {
    borderTopLeftRadius: 14,
    borderTopRightRadius: 14,
    backgroundColor: Color.white,
  },
  sheetStyle: {
    flex: 1,
    borderTopLeftRadius: 14,
    borderTopRightRadius: 14,
    overflow: "hidden",
  },
  line: {
    height: 0.5,
    backgroundColor: Color.text_light2,
  },
  doneButton: {
    flex: 1,
    position: "absolute",
    alignSelf: "center",
    bottom: SPACING.v45,
  },
  typingContainer: {
    paddingHorizontal: SPACING.h10,
    paddingVertical: SPACING.v10,
  },
  typingAvatar: {
    width: HEIGHT.h24,
    height: HEIGHT.h24,
    marginRight: 4,
    borderRadius: 24,
  },
  typingText: {
    marginLeft: 4,
    opacity: 0.5,
  },
  customComposer: {
    paddingTop: Platform.OS === "ios" ? SPACING.v12 : 0,
    paddingHorizontal: SPACING.h15,
    backgroundColor: Color.white,
    borderRadius: 12,
  },
  modelBox: {
    backgroundColor: Color.transparent,
    paddingHorizontal: SPACING.v20,
    paddingVertical: SPACING.v8,
  },
  border: {
    height: 1,
    backgroundColor: Color.black_10,
  },
  alertContainer: {
    flexDirection: "row",
    justifyContent: "space-around",
    paddingBottom: 15,
  },
});
