import { SPACING, WIDTH, HEIGHT } from "@theme/constants";
import { StyleSheet } from "react-native";
import { Colors } from "@theme/";
import Color from "@theme/colors";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  itemArrange: {
    marginBottom: SPACING.v35,
    height: HEIGHT.h24,
    marginTop: SPACING.v25,
    paddingHorizontal: SPACING.h15,
  },
  text: {
    fontSize: 16,
    fontFamily: "Roboto-Bold",
    lineHeight: 24,
    textAlign: "center",
  },
  circle: {
    width: HEIGHT.h150,
    height: HEIGHT.h150,
    borderRadius: HEIGHT.h150 / 2,
    marginTop: SPACING.v8,
    justifyContent: "center",
    alignItems: "center",
  },
  userImage: {
    width: HEIGHT.h145,
    height: HEIGHT.h145,
    borderRadius: HEIGHT.h145 / 2,
  },
  linearGradient: {
    width: 32,
    height: 32,
    borderRadius: 16,
    justifyContent: "center",
    alignItems: "center",
    marginTop: -SPACING.v45,
    marginLeft: SPACING.v130,
  },
  plus: {
    width: 13,
    height: 14.78,
  },
  edit: {
    marginTop: SPACING.v20,
    paddingHorizontal: SPACING.h15,
  },
  editText: {
    fontSize: 16,
    fontFamily: "Roboto-Bold",
    lineHeight: 24,
  },
  chip: {
    flexWrap: "wrap",
    marginVertical: SPACING.v12,
  },
  editTextStyle: {
    height: HEIGHT.h24,
    width: WIDTH.w24,
  },
  line: {
    height: 0.5,
    backgroundColor: Color.black_10,
  },
  listWrapper: {
    shadowColor: Colors.black,
    shadowOffset: { width: 0.8, height: 0.5 },
    shadowOpacity: 0.2,
    shadowRadius: 2,
    borderRadius: 20,
    overflow: "hidden",
    elevation: 1.5,
    backgroundColor: Colors.text_dark4,
    marginVertical: SPACING.v8,
  },
  accountContainer: {
    shadowColor: Colors.black,
    shadowOffset: { width: 0.8, height: 0.5 },
    shadowOpacity: 0.2,
    shadowRadius: 2,
    borderRadius: 15,
    overflow: "hidden",
    elevation: 1.5,
    backgroundColor: Colors.text_dark4,
    marginTop: SPACING.v8,
    marginBottom: SPACING.v35,
    marginHorizontal: SPACING.h15,
  },
  bioText: {
    paddingRight: SPACING.h15,
  },
  deleteContainer: {
    marginBottom: SPACING.v100,
    height: HEIGHT.h24,
  },
  deleteText: {
    fontSize: 16,
    fontFamily: "Roboto-Medium",
    lineHeight: 24,
    textAlign: "center",
  },
});
