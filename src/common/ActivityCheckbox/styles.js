import Color from "@theme/colors";
import { HEIGHT, SPACING, WIDTH } from "@theme/constants";
import { StyleSheet } from "react-native";

export default StyleSheet.create({
  boxView: {
    flexGrow: 1,
    backgroundColor: Color.white,
  },
  insideBox: {
    backgroundColor: Color.white,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: SPACING.v15,
    paddingVertical: SPACING.v12,
  },
  insideRightSideBox: {
    flex: 1,
    backgroundColor: Color.white,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingVertical: SPACING.v12,
    marginLeft: SPACING.h10,
  },
  border: {
    height: 0.5,
    backgroundColor: Color.black_10,
  },
  insideBoxButton: {
    flexDirection: "row",
    marginTop: 5,
  },
  intrestedButton: {
    backgroundColor: Color.lightGreen,
    textAlign: "center",
    alignItems: "center",
    justifyContent: "center",
    paddingVertical: SPACING.v4,
    paddingHorizontal: SPACING.v8,
    borderRadius: SPACING.v8,
    marginRight: SPACING.v4,
  },
  activeFriendButton: {
    backgroundColor: Color.lightOrange,
    textAlign: "center",
    alignItems: "center",
    justifyContent: "center",
    paddingVertical: SPACING.v4,
    paddingHorizontal: SPACING.v8,
    borderRadius: SPACING.v8,
  },
  icon: {
    height: WIDTH.w40,
    width: WIDTH.w40,
    borderRadius: 15,
  },
  footerView: {
    height: HEIGHT.h150,
  },
  headingContainer: {
    height: SPACING.v50,
    paddingVertical: SPACING.v12,
    backgroundColor: Color.pink1,
    paddingLeft: SPACING.h15,
  },
  checkbox: { borderRadius: 4 },
});
