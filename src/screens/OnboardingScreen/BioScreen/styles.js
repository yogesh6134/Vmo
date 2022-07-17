import { StyleSheet } from "react-native";
import { HEIGHT, SPACING } from "@theme/constants";
import Color from "@theme/colors";

export const styles = StyleSheet.create({
  common: {
    flex: 1,
  },
  descriptionText: {
    paddingLeft: SPACING.h15,
    marginTop: SPACING.v8,
  },
  itemArrange: {
    flex: 1,
    justifyContent: "flex-start",
    marginTop: SPACING.v35,
    paddingHorizontal: SPACING.h15,
  },
  image: {
    marginTop: SPACING.v110,
    marginHorizontal: SPACING.h15,
  },
  textButton: {
    marginTop: SPACING.v35,
    marginBottom: SPACING.v110,
    textAlign: "center",
    fontFamily: "Roboto-Medium",
    lineHeight: 24,
  },
  input: {
    height: HEIGHT.h120,
    backgroundColor: Color.white,
    borderRadius: 12,
  },
  countText: {
    textAlign: "right",
    color: Color.text_dark3,
    marginTop: SPACING.v8,
  },
});
