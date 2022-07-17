import { StyleSheet } from "react-native";
import { SPACING } from "@theme/constants";
import Color from "@theme/colors";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Color.white,
  },

  heading: {
    flex: 1,
    textAlign: "center",
    marginTop: SPACING.v35,
    marginRight: SPACING.h20,
  },
});
