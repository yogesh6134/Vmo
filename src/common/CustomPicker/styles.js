import Color from "@theme/colors";
import { SPACING } from "@theme/constants";
import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  modalContainer: {
    height: "30%",
    backgroundColor: Color.white,
    position: "absolute",
    bottom: 0,
    right: 0,
    left: 0,
    padding: SPACING.h10,
  },
  buttonContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  textStyle: {
    fontFamily: "Roboto-Regular",
  },
  button: {
    paddingHorizontal: SPACING.h10,
    paddingVertical: SPACING.v4,
  },
});
