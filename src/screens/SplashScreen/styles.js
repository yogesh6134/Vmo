import { StyleSheet } from "react-native";
import { HEIGHT } from "@theme/constants";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  image: {
    flex: 1,
    justifyContent: "center",
  },
  itemArrange: {
    alignItems: "center",
  },
  appLogo: {
    width: HEIGHT.h130,
    height: HEIGHT.h130,
    resizeMode: "contain",
  },
});
