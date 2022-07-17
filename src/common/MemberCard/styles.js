import { StyleSheet } from "react-native";
import Color from "@theme/colors";
import { SPACING } from "@theme/constants";

export const styles = StyleSheet.create({
  container: {
    paddingHorizontal: SPACING.v20,
    paddingVertical: SPACING.v8,
    backgroundColor: Color.white,
  },
  itemArrange: {
    justifyContent: "flex-start",
    alignItems: "center",
  },
  photoContainer: {
    height: 48,
    width: 48,
    borderRadius: 48,
  },
  textContainer: {
    marginLeft: SPACING.v8,
  },
  contactContainer: {
    flex: 1,
    justifyContent: "flex-end",
  },
});
