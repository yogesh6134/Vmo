import Color from "@theme/colors";
import { HEIGHT, SPACING, WIDTH } from "@theme/constants";
import { StyleSheet } from "react-native";

import { Colors } from "../../../themes";

export const styles = StyleSheet.create({
  tabContainer: {
    justifyContent: "space-between",
    width: WIDTH.w310,
    height: HEIGHT.h40,
    borderRadius: 100,
    backgroundColor: Color.pink,
    padding: SPACING.v4,
  },
  tabButton: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  notification: {
    height: HEIGHT.h16,
    width: WIDTH.w16,
    marginLeft: SPACING.v4,
    borderRadius: 16,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: Color.white,
  },
  notificationText: {
    fontSize: 12,
    lineHeight: 15,
    fontFamily: "Roboto-Medium",
    color: Color.primary_main,
  },
  tabButtonSelected: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    height: 32,
    borderRadius: 15,
  },
  text: {
    color: Color.primary_main,
  },
  selectedText: {
    color: Color.white,
  },
});
