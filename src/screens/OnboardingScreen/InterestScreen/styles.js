import Color from "@theme/colors";
import { SPACING } from "@theme/constants";
import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  itemArrange: {
    flex: 1,
    paddingHorizontal: SPACING.h15,
  },
  text: {
    fontSize: 28,
    fontFamily: "Roboto-Bold",
    lineHeight: 38,
  },
  button: {
    alignSelf: "center",
    bottom: SPACING.v110,
    position: "absolute",
  },
  list: {
    borderRadius: 20,
    marginTop: SPACING.v35,
    elevation: 2,
    backgroundColor: Color.white,
    overflow: "hidden",
    marginBottom: SPACING.v150,
  },
  errorText: {
    color: Color.red0,
    textAlign: "center",
    paddingVertical: SPACING.v15,
  },
  descriptionText: {
    marginTop: SPACING.v8,
  },
  line: {
    height: 0.5,
    backgroundColor: Color.black_10,
  },
  listWrapper: {
    shadowColor: Color.black,
    shadowOffset: { width: 0.8, height: 0.5 },
    shadowOpacity: 0.2,
    shadowRadius: 2,
  },
});
