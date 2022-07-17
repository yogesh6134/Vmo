import { HEIGHT, SPACING, WIDTH } from "@theme/constants";
import { StyleSheet } from "react-native";

export default StyleSheet.create({
  text: {
    marginHorizontal: SPACING.h20,
    marginBottom: SPACING.v8,
  },
  photoContainer1: {
    width: WIDTH.w0 - 30,
    resizeMode: "contain",
    height: HEIGHT.h120,
    alignSelf: "center",
    borderRadius: 20,
    overflow: "hidden",
    justifyContent: "flex-end",
  },
  circle: {
    width: WIDTH.w24,
    height: WIDTH.w24,
    resizeMode: "contain",
  },
  card: {
    width: WIDTH.w0 - 20,
    height: HEIGHT.h120 + 10,
    borderRadius: 24,
    justifyContent: "center",
  },
});
