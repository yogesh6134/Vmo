import { StyleSheet, Dimensions } from "react-native";

const { width } = Dimensions.get("window");

export const styles = StyleSheet.create({
  container: {
    alignSelf: "center",
  },
  floatingPlaceholderStyle: {
    fontFamily: "Roboto-Medium",
    fontSize: 16,
    lineHeight: 20,
  },
});
