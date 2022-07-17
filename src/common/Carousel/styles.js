import { StyleSheet } from "react-native";
import Color from "@theme/colors";
import { HEIGHT, SPACING } from "@theme/constants";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    overflow: "hidden",
    backgroundColor: Color.black,
  },
  image: {
    flex: 1,
    justifyContent: "center",
  },
  itemArrange: {
    alignItems: "center",
    justifyContent: "center",
    top: SPACING.v150,
  },
  appLogo: {
    width: HEIGHT.h56,
    height: HEIGHT.h56,
    resizeMode: "contain",
    position: "absolute",
    alignSelf: "center",
    top: "56%",
    zIndex: 10,
  },
  button: {
    position: "absolute",
    alignSelf: "center",
    bottom: SPACING.v130,
    zIndex: 8,
  },
  text: {
    marginBottom: SPACING.h50,
    justifyContent: "space-between",
    marginHorizontal: SPACING.h50,
    opacity: 0.5,
  },
});
