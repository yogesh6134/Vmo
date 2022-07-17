import { StyleSheet } from "react-native";
import { HEIGHT, SPACING } from "@theme/constants";
import Color from "@theme/colors";

export const styles = StyleSheet.create({
  cardContainer: {
    justifyContent: "space-between",
    paddingHorizontal: SPACING.h15,
    paddingVertical: SPACING.v12,
    backgroundColor: Color.white,
  },
  profilePic: {
    width: HEIGHT.h36,
    height: HEIGHT.h36,
    borderRadius: HEIGHT.h36 / 2,
  },
  badgeCountContainer: {
    width: HEIGHT.h16,
    height: HEIGHT.h16,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: HEIGHT.h16 / 2,
    backgroundColor: Color.badge,
  },
  msgContainer: {
    flex: 1,
    marginHorizontal: SPACING.h10,
  },
});
