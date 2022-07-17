import Color from "@theme/colors";
import { SPACING, WIDTH } from "@theme/constants";
import { StyleSheet } from "react-native";

export default StyleSheet.create({
  container: {
    padding: SPACING.v15,
    backgroundColor: Color.white,
    marginHorizontal: SPACING.v4,
  },
  text: {
    flex: 1,
    color: Color.text_dark0,
    justifyContent: "space-between",
    fontSize: 16,
    fontFamily: "Roboto-Regular",
    lineHeight: 20,
  },
});
