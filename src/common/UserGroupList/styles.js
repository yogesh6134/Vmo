import Color from "@theme/colors";
import { HEIGHT, SPACING, WIDTH } from "@theme/constants";
import { StyleSheet } from "react-native";

export default StyleSheet.create({
  boxView: {
    backgroundColor: Color.white,
    padding: SPACING.v15,
    borderBottomWidth: 0.5,
    borderBottomColor: Color.text_light0,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  insideBoxLeftSide: {
    flexDirection: "row",
    width: "90%",
  },
  groupIcon: {
    height: WIDTH.w50,
    width: WIDTH.w50,
    borderRadius: 12,
    marginRight: SPACING.v15,
  },
  userDetail: { width: "75%" },
  userDetailHeading: {
    flexDirection: "row",
    alignItems: "center",
  },
  insideBoxRightSide: {
    width: "10%",
    alignItems: "flex-end",
    paddingVertical: SPACING.v4,
  },
  nextIcon: {
    width: WIDTH.w7,
    height: HEIGHT.h12,
  },
  gradientButton: {
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: SPACING.v6,
    paddingVertical: SPACING.v2,
    borderRadius: 9,
    marginLeft: SPACING.v6,
  },
});
