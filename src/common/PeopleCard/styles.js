import { StyleSheet } from "react-native";
import Color from "@theme/colors";
import { SPACING, WIDTH } from "@theme/constants";

export const styles = StyleSheet.create({
  container: {
    paddingHorizontal: SPACING.v20,
    paddingVertical: SPACING.v4,
    backgroundColor: Color.white,
  },
  photoContainer: {
    height: 48,
    width: 48,
    borderRadius: 48,
  },
  textContainer: {
    marginLeft: SPACING.v12,
  },
  text: {
    width: WIDTH.w150,
  },
});
