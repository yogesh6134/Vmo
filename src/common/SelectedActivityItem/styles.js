import Color from "@theme/colors";
import { HEIGHT, SPACING, WIDTH } from "@theme/constants";
import { StyleSheet } from "react-native";

export default StyleSheet.create({
  flatlist: {
    flexWrap: "wrap",
    paddingVertical: SPACING.v10,
  },
  activityBox: {
    backgroundColor: Color.white,
  },
  emptyBox: {
    backgroundColor: Color.white,
    paddingVertical: SPACING.v15,
  },
  activeButton: {
    backgroundColor: Color.primaryOrange,
    marginHorizontal: SPACING.v4,
    marginVertical: SPACING.v4,
    paddingVertical: SPACING.v4,
    paddingLeft: SPACING.v12,
    paddingRight: SPACING.v4,
    borderRadius: 24,
    flexDirection: "row",
    alignItems: "center",
  },

  emptyBoxInside: {
    marginHorizontal: SPACING.v4,
    marginVertical: SPACING.v4,
    paddingVertical: SPACING.v4,
    paddingHorizontal: SPACING.v12,
    textAlign: "center",
  },
  icon: {
    width: WIDTH.w16,
    height: HEIGHT.h16,
    marginLeft: SPACING.v4,
  },
});
