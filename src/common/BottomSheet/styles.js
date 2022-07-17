import Color from "@theme/colors";
import { SPACING } from "@theme/constants";
import { StyleSheet } from "react-native";
export default StyleSheet.create({
  bottomsheet: {
    borderTopLeftRadius: SPACING.v15,
    borderTopRightRadius: SPACING.v15,
    backgroundColor: Color.white,
  },
  sheetContentContainer: {
    flex: 1,
    borderTopLeftRadius: SPACING.v15,
    borderTopRightRadius: SPACING.v15,
    overflow: "hidden",
  },
});
