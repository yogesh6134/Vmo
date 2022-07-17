import { StyleSheet } from "react-native";
import { SPACING } from "@theme/constants";
import { Colors } from "@theme/";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  heading: {
    flex: 1,
    marginTop: SPACING.v35,
    marginRight: SPACING.h20,
  },
  itemArrange: {
    paddingTop: SPACING.v25,
    paddingBottom: SPACING.v100,
    paddingHorizontal: SPACING.h15,
    justifyContent: "space-between",
    flex: 1,
  },
  listWrapper: {
    shadowColor: Colors.black,
    shadowOffset: { width: 0.8, height: 0.5 },
    shadowOpacity: 0.2,
    shadowRadius: 2,
    borderRadius: 12,
    overflow: "hidden",
    elevation: 1.5,
  },
  line: {
    height: 0.5,
    backgroundColor: Colors.black_10,
  },
});
