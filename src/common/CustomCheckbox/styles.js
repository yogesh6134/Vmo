import Color from "@theme/colors";
import { SPACING } from "@theme/constants";
import { StyleSheet } from "react-native";

export default StyleSheet.create({
  container: {
    justifyContent: "space-between",
    padding: SPACING.v15,
    backgroundColor: Color.white,
    marginHorizontal: SPACING.v4,
  },
});
