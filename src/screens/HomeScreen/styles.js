import Color from "@theme/colors";
import { HEIGHT, SPACING, WIDTH } from "@theme/constants";
import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  common: {
    flex: 1,
  },
  header: {
    marginTop: SPACING.v110,
    marginBottom: SPACING.v20,
    justifyContent: "space-between",
    marginHorizontal: SPACING.h15,
  },
  profile: {
    height: 42,
    width: 42,
    borderRadius: 21,
  },
  profileBorder: {
    width: 48,
    height: 48,
    borderRadius: 24,
    alignItems: "center",
    justifyContent: "center",
  },
  group: {
    flex: 1,
    justifyContent: "flex-end",
    marginBottom: SPACING.v110,
    marginTop: SPACING.v20,
  },
  groupSearch: {
    flex: 1,
    justifyContent: "space-between",
  },
  groupTextImage: {
    height: HEIGHT.h72,
    width: WIDTH.w300,
    resizeMode: "contain",
    alignSelf: "center",
  },
  findGroupText: {
    height: HEIGHT.h120,
    width: WIDTH.w310,
    resizeMode: "contain",
    alignSelf: "center",
  },
  downArrowImage: {
    height: HEIGHT.h80,
    width: WIDTH.w16,
    resizeMode: "contain",
    alignSelf: "center",
    marginVertical: SPACING.v12,
  },
  upArrowImage: {
    height: HEIGHT.h80,
    width: WIDTH.w100,
    resizeMode: "contain",
    alignSelf: "flex-end",
    marginRight: SPACING.h60,
    marginVertical: SPACING.v25,
  },
  people: {
    flex: 1,
    marginTop: SPACING.v25,
    marginBottom: SPACING.v12,
  },
  peopleCard: {
    width: WIDTH.w310,
    borderRadius: 12,
    backgroundColor: Color.white,
    alignItems: "center",
    alignSelf: "center",
    paddingBottom: SPACING.v10,
  },
  cardImage: {
    height: 120,
    width: 120,
    marginTop: SPACING.v12,
    marginBottom: SPACING.v8,
  },
  cardDescriptionText: {
    paddingHorizontal: SPACING.h60,
    textAlign: "center",
    marginTop: SPACING.v4,
    marginBottom: SPACING.v15,
  },
  peopleFancyText: {
    height: HEIGHT.h150,
    width: WIDTH.w200,
    alignSelf: "center",
    resizeMode: "contain",
  },
  bottomsheetText: {
    color: Color.text_dark3,
    textAlign: "center",
    paddingHorizontal: SPACING.h50,
    marginVertical: SPACING.v25,
  },
  searchGroupText: {
    color: Color.text_dark3,
    textAlign: "center",
    paddingHorizontal: SPACING.h60,
    marginBottom: SPACING.v25,
  },
  sheetStyle: {
    flex: 1,
    borderTopLeftRadius: 14,
    borderTopRightRadius: 14,
    overflow: "hidden",
  },
  sheetBackgroundStyle: {
    borderTopLeftRadius: 14,
    borderTopRightRadius: 14,
    backgroundColor: Color.white,
  },
  titleHeader: {
    height: SPACING.v50,
    paddingVertical: SPACING.v12,
    backgroundColor: Color.pink1,
    paddingLeft: SPACING.h15,
  },
  doneButton: {
    position: "absolute",
    alignSelf: "center",
    bottom: SPACING.v100,
  },
  gradientStyle: {
    height: HEIGHT.h72,
    paddingHorizontal: SPACING.h15,
    paddingVertical: SPACING.v15,
  },
  friendRequestContainer: {
    width: WIDTH.w310,
    alignSelf: "center",
    paddingHorizontal: SPACING.h15,
    paddingVertical: SPACING.v15,
    borderRadius: 12,
    marginBottom: SPACING.v25,
  },
  friendIcon: {
    width: HEIGHT.h24,
    height: HEIGHT.h24,
    resizeMode: "contain",
    marginRight: SPACING.h15,
  },
  arrowRightIcon: {
    width: 8,
    height: 12,
    resizeMode: "contain",
  },
  separator: {
    height: StyleSheet.hairlineWidth,
    backgroundColor: Color.black,
    opacity: 0.1,
  },
  whiteContainer: {
    width: WIDTH.w310,
    alignSelf: "center",
  },
  listContainer: {
    flexGrow: 1,
    borderRadius: 12,
    overflow: "hidden",
  },
  contactHeader: {
    marginBottom: SPACING.v15,
  },
  innerContainer: {
    width: WIDTH.w310,
    alignSelf: "center",
    borderRadius: 12,
    overflow: "hidden",
    marginBottom: SPACING.v25,
  },
  line: {
    height: StyleSheet.hairlineWidth,
    backgroundColor: Color.black_10,
  },
  searchGroupNextContainer: {
    flex: 1,
    marginVertical: SPACING.v20,
  },
  scrollContainer: {
    flexGrow: 1,
    paddingBottom: SPACING.v130,
  },
});
