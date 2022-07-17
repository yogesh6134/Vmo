import Color from "@theme/colors";
import { HEIGHT, SPACING } from "@theme/constants";
import { StyleSheet } from "react-native";

export default StyleSheet.create({
  container: {
    backgroundColor: Color.white,
    alignItems: "center",
    justifyContent: "space-between",
    height: HEIGHT.h80,
    paddingHorizontal: SPACING.h20,
    borderBottomWidth: 1,
    borderBottomColor: Color.text_light2,
  },
  interestedButton: {
    backgroundColor: Color.lightGreen,
    textAlign: "center",
    alignItems: "center",
    justifyContent: "center",
    paddingVertical: SPACING.v4,
    paddingHorizontal: SPACING.v8,
    borderRadius: 12,
  },
  activeFriendButton: {
    backgroundColor: Color.lightOrange,
    textAlign: "center",
    alignItems: "center",
    justifyContent: "center",
    paddingVertical: SPACING.v4,
    paddingHorizontal: SPACING.v8,
    borderRadius: 12,
    marginTop: SPACING.v4,
  },
  icon: {
    height: HEIGHT.h56,
    width: HEIGHT.h56,
    borderRadius: 15,
  },
  text: {
    paddingLeft: SPACING.h15,
    width: "55%",
  },
});
