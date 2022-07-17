import Color from "@theme/colors";
import { HEIGHT, SPACING } from "@theme/constants";
import { StyleSheet } from "react-native";

export default StyleSheet.create({
  container: {
    height: HEIGHT.h56,
    justifyContent: "center",
    paddingHorizontal: SPACING.h10,
  },
  itemArrange: {
    justifyContent: "space-between",
  },
  heading: {
    marginLeft: SPACING.h10,
  },
  crossIcon: {
    height: HEIGHT.h24,
    width: HEIGHT.h24,
    resizeMode: "contain",
  },
  leftIcon: {
    width: 16,
    height: 26,
    resizeMode: "contain",
  },
  pressableArea: {
    width: 30,
    height: 30,
    justifyContent: "center",
    alignItems: "center",
  },
});
