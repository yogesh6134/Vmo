import { StyleSheet } from "react-native";
import Color from "@theme/colors";
import { SPACING } from "@theme/constants";

export const styles = StyleSheet.create({
  container: {
    padding: SPACING.v15,
    backgroundColor: Color.white,
    justifyContent: "space-between",
  },
  photoContainer: {
    height: 12,
    width: 7.41,
    marginLeft: SPACING.v12,
    tintColor: Color.text_dark4,
  },
});
