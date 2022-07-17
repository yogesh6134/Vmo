import Color from "@theme/colors";
import { SPACING } from "@theme/constants";
import { StyleSheet } from "react-native";

export default StyleSheet.create({
  container: {
    paddingVertical: SPACING.v4,
    backgroundColor: Color.white,
    borderRadius: SPACING.v15,
    zIndex: 9,
  },
});
