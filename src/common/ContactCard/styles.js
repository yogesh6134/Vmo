import Color from "@theme/colors";
import { HEIGHT, SPACING } from "@theme/constants";
import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  contactCardContainer: {
    justifyContent: "space-between",
    paddingHorizontal: SPACING.h15,
    paddingVertical: SPACING.v12,
    backgroundColor: Color.white,
  },
  initialContainer: {
    width: HEIGHT.h36,
    height: HEIGHT.h36,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: HEIGHT.h36 / 2,
    backgroundColor: Color.avatarGrey,
  },
  nameText: {
    flex: 1,
    marginHorizontal: SPACING.h10,
  },
  buttonContainer: {
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: SPACING.h15,
    paddingVertical: SPACING.v6,
    borderRadius: 12,
    backgroundColor: Color.lightGreen,
  },
});
