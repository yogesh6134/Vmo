import { StyleSheet } from "react-native";
import Color from "@theme/colors";
import { SPACING, HEIGHT, WIDTH } from "@theme/constants";

export const styles = StyleSheet.create({
  container: {
    marginHorizontal: SPACING.h15,
    borderWidth: 1,
    borderRadius: 15,
    borderColor: Color.text_light2,
    paddingBottom: SPACING.v15,
  },
  headingContainer: {
    height: HEIGHT.h40,
    backgroundColor: Color.primaryOrange,
    borderTopLeftRadius: 15,
    borderTopRightRadius: 15,
    paddingVertical: SPACING.v12,
    paddingHorizontal: SPACING.h15,
  },
  cardContent: {
    marginTop: SPACING.v15,
    marginBottom: SPACING.v10,
  },
  icon: {
    height: 24,
    width: 24,
    resizeMode: "contain",
    marginHorizontal: SPACING.h15,
  },
  descriptionText: {
    width: WIDTH.w180,
  },
});
