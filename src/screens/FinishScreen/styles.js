import Color from "@theme/colors";
import { SPACING } from "@theme/constants";
import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  itemArrange: {
    flex: 1,
    paddingHorizontal: SPACING.h15,
  },
  text: {
    fontSize: 28,
    fontFamily: "Roboto-Bold",
    lineHeight: 38,
  },
  button: {
    marginBottom: SPACING.v110,
  },
});
