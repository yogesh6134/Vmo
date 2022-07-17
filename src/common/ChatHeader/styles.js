import Color from "@theme/colors";
import { HEIGHT, SPACING, WIDTH } from "@theme/constants";
import { StyleSheet } from "react-native";

export default StyleSheet.create({
  container: {
    justifyContent: "center",
    paddingHorizontal: SPACING.h10,
    paddingTop: HEIGHT.h45,
    paddingBottom: SPACING.v12,
  },
  itemArrange: {
    justifyContent: "space-between",
    alignItems: "center",
  },
  heading: {
    marginLeft: SPACING.v6,
  },
  groupHeader: {
    marginLeft: SPACING.v12,
    width: "65%",
  },
  crossIcon: {
    height: HEIGHT.h24,
    width: HEIGHT.h24,
    resizeMode: "contain",
  },
  back: {
    width: 30,
    height: 30,
    justifyContent: "center",
    alignItems: "center",
  },
  headerImage: {
    width: HEIGHT.h40,
    height: HEIGHT.h40,
    borderRadius: HEIGHT.h40 / 2,
    marginHorizontal: SPACING.h10,
  },
  leftIcon: {
    width: 16,
    height: 26,
    resizeMode: "contain",
  },
});
