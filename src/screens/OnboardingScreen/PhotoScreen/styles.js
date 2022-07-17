import Color from "@theme/colors";
import { SPACING, WIDTH, HEIGHT } from "@theme/constants";
import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  itemArrange: {
    flex: 1,
    paddingHorizontal: SPACING.h15,
  },
  button: {
    marginBottom: SPACING.v110,
  },
  descriptionText: {
    marginTop: SPACING.v8,
  },
  circle: {
    width: HEIGHT.h250,
    height: HEIGHT.h250,
    borderRadius: HEIGHT.h250 / 2,
    marginTop: SPACING.v110,
    justifyContent: "center",
    alignItems: "center",
  },
  userImage: {
    width: HEIGHT.h230,
    height: HEIGHT.h230,
    borderRadius: HEIGHT.h230 / 2,
  },
  linearGradient: {
    width: 64,
    height: 64,
    borderRadius: 32,
    justifyContent: "center",
    alignItems: "center",
    marginTop: -SPACING.v35,
  },
  plus: {
    width: 22,
    height: 22,
    resizeMode: "contain",
  },
});
