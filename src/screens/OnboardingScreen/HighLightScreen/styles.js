import Color from "@theme/colors";
import { SPACING } from "@theme/constants";
import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  text: {
    paddingLeft: SPACING.h15,
  },
  button: {
    alignSelf: "center",
    bottom: SPACING.v110,
    position: "absolute",
  },
  descriptionText: {
    paddingLeft: SPACING.h15,
    marginTop: SPACING.v8,
  },
  listContainer: {
    flex: 1,
    marginTop: SPACING.v25,
    alignItems: "center",
  },
});
