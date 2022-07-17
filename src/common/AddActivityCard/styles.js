import Color from "@theme/colors";
import { HEIGHT, SPACING } from "@theme/constants";
import { StyleSheet } from "react-native";

export default StyleSheet.create({
  container: {
    height: HEIGHT.h80,
    backgroundColor: Color.text_light2,
    justifyContent: "center",
    paddingHorizontal: SPACING.h20,
  },
  plusContainer: {
    height: HEIGHT.h56,
    width: HEIGHT.h56,
    borderRadius: 12,
    backgroundColor: Color.text_dark4,
    alignItems: "center",
    justifyContent: "center",
  },
  descriptionText: {
    fontFamily: "Roboto-Regular",
    color: Color.brown,
    marginTop: SPACING.v4,
    marginRight: SPACING.h80,
  },
});
