import { StyleSheet } from "react-native";
import { SPACING } from "@theme/constants";
import Color from "@theme/colors";

export const styles = StyleSheet.create({
  common: {
    flex: 1,
  },
  itemArrange: {
    flex: 1,
    marginTop: SPACING.v110,
    paddingHorizontal: SPACING.h15,
  },
  descriptionText: {
    color: Color.red2,
    textAlign: "center",
  },
  button: {
    position: "absolute",
    alignSelf: "center",
    bottom: SPACING.v110,
  },
});
