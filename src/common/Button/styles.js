import Color from "@theme/colors";
import { StyleSheet } from "react-native";

import { WIDTH, HEIGHT } from "@theme/constants";

export const styles = StyleSheet.create({
  tiny: {
    alignSelf: "center",
    justifyContent: "center",
    alignItems: "center",
    width: WIDTH.w72,
    height: HEIGHT.h24,
  },
  small: {
    alignSelf: "center",
    justifyContent: "center",
    alignItems: "center",
    width: WIDTH.w100,
    height: HEIGHT.h24,
  },
  medium: {
    alignSelf: "center",
    justifyContent: "center",
    alignItems: "center",
    width: WIDTH.w170,
    height: HEIGHT.h56,
  },
  large: {
    alignSelf: "center",
    justifyContent: "center",
    alignItems: "center",
    width: WIDTH.w0 - 76,
    height: HEIGHT.h56,
  },
  block: {
    alignSelf: "center",
    justifyContent: "center",
    alignItems: "center",
    width: WIDTH.w200,
    height: HEIGHT.h40,
  },
  outlineButton: {
    borderColor: "red",
    borderWidth: 1,
  },
  tinyText: {
    fontSize: 12,
    fontFamily: "Roboto-Medium",
    lineHeight: 14,
  },
  mediumText: {
    fontSize: 16,
    fontFamily: "Roboto-Bold",
    lineHeight: 24,
  },
  largeText: {
    fontSize: 18,
    fontFamily: "Roboto-Medium",
    lineHeight: 24,
  },
  blockText: {
    fontSize: 16,
    fontFamily: "Roboto-Medium",
    lineHeight: 24,
  },
  primaryText: {
    color: Color.white,
  },
  outlineText: {
    color: Color.primary_main,
  },
  icon: {
    width: 18,
    height: 18,
    marginRight: 15,
    resizeMode: "contain",
  },
  buttonContainer: {
    shadowColor: Color.buttonShadow,
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.35,
    shadowRadius: 12,
  },
});
