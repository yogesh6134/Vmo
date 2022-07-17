import { StyleSheet, Dimensions } from "react-native";
import { HEIGHT, SPACING, WIDTH } from "@theme/constants";

export const styles = StyleSheet.create({
  common: {
    flex: 1,
  },
  descriptionText: {
    paddingHorizontal: SPACING.h20,
    marginTop: SPACING.v8,
  },
  itemArrange: {
    flex: 1,
    justifyContent: "flex-end",
    marginTop: SPACING.v110,
    paddingHorizontal: SPACING.h15,
  },
  image: {
    height: HEIGHT.h260,
    width: WIDTH.w300,
    borderRadius: 16,
    marginTop: SPACING.v110,
    marginHorizontal: SPACING.h15,
    alignSelf: "center",
  },
  textButton: {
    marginTop: SPACING.v35,
    marginBottom: SPACING.v110,
    textAlign: "center",
    fontFamily: "Roboto-Medium",
    lineHeight: 24,
  },
});
