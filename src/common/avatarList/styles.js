import Color from "@theme/colors";
import { HEIGHT, SPACING, WIDTH } from "@theme/constants";
import { StyleSheet } from "react-native";

export default StyleSheet.create({
  avatarView: {
    paddingHorizontal: SPACING.v6,
    paddingVertical: SPACING.v4,
    alignItems: "center",
    maxWidth: WIDTH.w80,
    borderRadius: SPACING.v100,
  },
  avatar: {
    width: WIDTH.w24,
    height: WIDTH.w24,
    borderRadius: WIDTH.w24 / 2,
  },
  count: { marginHorizontal: 5, color: Color.white },
});
