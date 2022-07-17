import { StyleSheet } from "react-native";
import { SPACING } from "@theme/constants";
import Color from "@theme/colors";

export const styles = StyleSheet.create({
  container: {
    borderRadius: 8,
    margin: 2,
  },
  label: {
    fontSize: 14,
    fontFamily: "Roboto-Bold",
    lineHeight: 16,
    color: Color.text_light3,
  },
  con: {
    borderWidth: 0,
  },
});
