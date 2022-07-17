import Color from "@theme/colors";
import { HEIGHT, SPACING, WIDTH } from "@theme/constants";
import { StyleSheet } from "react-native";

export default StyleSheet.create({
  boxView: {
    borderRadius: SPACING.v12,
    backgroundColor: Color.white,
    paddingVertical: SPACING.v12,
    marginVertical: SPACING.v4,
    flexDirection: "row",
    marginHorizontal: SPACING.v15,
    paddingHorizontal: SPACING.v8,
  },
  main: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  leftSideBoxView: {
    marginRight: SPACING.v8,
    width: WIDTH.w75,
    alignItems: "center",
    justifyContent: "center",
  },
  rightSideBoxView: {
    height: HEIGHT.h80,
  },
  groupNameText: {
    width: WIDTH.w75,
    fontWeight: "700",
  },
  rightSideInsideView: {
    width: WIDTH.w180,
  },
  buttonView: {
    position: "absolute",
    left: 0,
    bottom: 0,
  },
  avatarView: {
    position: "absolute",
    right: 0,
  },
  overflowLabelStyle: {
    fontSize: 15,
    color: Color.black,
  },
  icon: {
    height: HEIGHT.h72,
    width: WIDTH.w72,
  },
  button: {
    backgroundColor: Color.lightSkin,
    paddingVertical: SPACING.v4,
    flexDirection: "row",
    paddingHorizontal: SPACING.v8,
    width: WIDTH.w120,
  },
});
