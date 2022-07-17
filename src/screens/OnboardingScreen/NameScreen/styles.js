import { StyleSheet } from "react-native";
import { SPACING } from "@theme/constants";

export const styles = StyleSheet.create({
  common: {
    flex: 1,
  },
  itemArrange: {
    flex: 1,
    justifyContent: "space-between",
  },
  inputRow: {
    paddingHorizontal: SPACING.h15,
    marginTop: SPACING.v110,
    justifyContent: "space-between",
  },
  row: {
    alignSelf: "center",
    textAlign: "center",
    paddingHorizontal: SPACING.h15,
  },
  text: {
    textAlign: "center",
  },
  button: {
    marginBottom: SPACING.v110,
    marginTop: SPACING.v25,
  },
});
