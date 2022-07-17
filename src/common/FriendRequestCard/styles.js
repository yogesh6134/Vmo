import Color from "@theme/colors";
import { HEIGHT, SPACING } from "@theme/constants";
import { StyleSheet } from "react-native";

export default StyleSheet.create({
  container: {
    backgroundColor: Color.white,
    alignItems: "center",
    justifyContent: "space-between",
    paddingVertical: SPACING.v12,
    paddingHorizontal: SPACING.h20,
  },
  interestedButton: {
    backgroundColor: Color.lightGreen,
    textAlign: "center",
    alignItems: "center",
    justifyContent: "center",
    paddingVertical: SPACING.v4,
    paddingHorizontal: SPACING.h10,
    borderRadius: 12,
    marginRight: SPACING.v4,
  },
  activeIgnoreButton: {
    backgroundColor: Color.lightOrange,
    textAlign: "center",
    alignItems: "center",
    justifyContent: "center",
    paddingVertical: SPACING.v6,
    paddingHorizontal: SPACING.h15,
    borderRadius: 12,
    marginTop: SPACING.v12,
  },
  activeAddButton: {
    textAlign: "center",
    alignItems: "center",
    justifyContent: "center",
    paddingVertical: SPACING.v6,
    paddingHorizontal: SPACING.h15,
    borderRadius: 12,
    marginTop: SPACING.v12,
    marginLeft: SPACING.h10,
  },
  icon: {
    height: HEIGHT.h56,
    width: HEIGHT.h56,
    borderRadius: HEIGHT.h56 / 2,
  },
  text: {
    paddingLeft: SPACING.h15,
  },
  textContainer: {
    marginLeft: SPACING.h10,
  },
});
