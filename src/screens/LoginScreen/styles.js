import { StyleSheet } from "react-native";
import { SPACING } from "@theme/constants";
import { Colors } from "@theme/";

export const styles = StyleSheet.create({
  common: {
    flex: 1,
  },
  descriptionText: {
    paddingHorizontal: SPACING.h15,
    marginRight: SPACING.h20,
    marginTop: SPACING.v8,
    marginBottom: SPACING.v35,
  },
  otpHeading: {
    paddingLeft: SPACING.h15,
    marginBottom: SPACING.v100,
  },
  validationText: {
    color: Colors.red2,
    marginTop: SPACING.v8,
  },
  itemArrange: {
    flex: 1,
    justifyContent: "space-between",
  },
});
