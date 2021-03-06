import { Dimensions } from "react-native";

export const DIMENSIONS = {
  WINDOW_HEIGHT: Dimensions.get("window").height,
  WINDOW_WIDTH: Dimensions.get("window").width,
};

export const SPACING = {
  h10: DIMENSIONS.WINDOW_WIDTH / 37.5,
  h12: DIMENSIONS.WINDOW_WIDTH / 32.5,
  h15: DIMENSIONS.WINDOW_WIDTH / 25,
  h20: DIMENSIONS.WINDOW_WIDTH / 19,
  h30: DIMENSIONS.WINDOW_WIDTH / 8,
  h50: DIMENSIONS.WINDOW_WIDTH / 7,
  h60: DIMENSIONS.WINDOW_WIDTH / 6,
  h80: DIMENSIONS.WINDOW_WIDTH / 4,
  h100: DIMENSIONS.WINDOW_WIDTH / 3,
  v2: DIMENSIONS.WINDOW_HEIGHT / 250,
  v4: DIMENSIONS.WINDOW_HEIGHT / 170,
  v6: DIMENSIONS.WINDOW_HEIGHT / 120,
  v8: DIMENSIONS.WINDOW_HEIGHT / 80,
  v10: DIMENSIONS.WINDOW_HEIGHT / 80,
  v12: DIMENSIONS.WINDOW_HEIGHT / 65,
  v15: DIMENSIONS.WINDOW_HEIGHT / 54,
  v20: DIMENSIONS.WINDOW_HEIGHT / 40,
  v25: DIMENSIONS.WINDOW_HEIGHT / 32,
  v35: DIMENSIONS.WINDOW_HEIGHT / 25,
  v45: DIMENSIONS.WINDOW_HEIGHT / 20,
  v50: DIMENSIONS.WINDOW_HEIGHT / 19,
  v100: DIMENSIONS.WINDOW_HEIGHT / 15,
  v110: DIMENSIONS.WINDOW_HEIGHT / 14,
  v130: DIMENSIONS.WINDOW_HEIGHT / 7,
  v150: DIMENSIONS.WINDOW_HEIGHT / 4.5,
};

export const WIDTH = {
  w0: DIMENSIONS.WINDOW_WIDTH,
  w7: DIMENSIONS.WINDOW_WIDTH / 60,
  w16: DIMENSIONS.WINDOW_WIDTH / 18,
  w24: DIMENSIONS.WINDOW_WIDTH / 13,
  w30: DIMENSIONS.WINDOW_WIDTH / 8,
  w35: DIMENSIONS.WINDOW_WIDTH / 6.5,
  w40: DIMENSIONS.WINDOW_WIDTH / 6,
  w50: DIMENSIONS.WINDOW_WIDTH / 7,
  w70: DIMENSIONS.WINDOW_HEIGHT / 9.5,
  w72: DIMENSIONS.WINDOW_HEIGHT / 9,
  w75: DIMENSIONS.WINDOW_HEIGHT / 8,
  w80: DIMENSIONS.WINDOW_WIDTH / 3,
  w100: DIMENSIONS.WINDOW_WIDTH / 3.75,
  w117: DIMENSIONS.WINDOW_WIDTH / 3.2,
  w120: DIMENSIONS.WINDOW_WIDTH / 3.3,
  w150: DIMENSIONS.WINDOW_WIDTH / 2.3,
  w155: DIMENSIONS.WINDOW_WIDTH / 2.2,
  w170: DIMENSIONS.WINDOW_WIDTH / 1.7,
  w180: DIMENSIONS.WINDOW_WIDTH / 1.65,
  w200: DIMENSIONS.WINDOW_WIDTH / 1.5,
  w300: DIMENSIONS.WINDOW_WIDTH / 1.15,
  w305: DIMENSIONS.WINDOW_WIDTH / 1.13,
  w310: DIMENSIONS.WINDOW_WIDTH / 1.1,
};

export const HEIGHT = {
  h0: DIMENSIONS.WINDOW_HEIGHT,
  h12: DIMENSIONS.WINDOW_HEIGHT / 75,
  h16: DIMENSIONS.WINDOW_HEIGHT / 35,
  h24: DIMENSIONS.WINDOW_HEIGHT / 26,
  h36: DIMENSIONS.WINDOW_HEIGHT / 23,
  h40: DIMENSIONS.WINDOW_HEIGHT / 20,
  h45: DIMENSIONS.WINDOW_HEIGHT / 17,
  h56: DIMENSIONS.WINDOW_HEIGHT / 14,
  h72: DIMENSIONS.WINDOW_HEIGHT / 9,
  h80: DIMENSIONS.WINDOW_HEIGHT / 8.5,
  h120: DIMENSIONS.WINDOW_HEIGHT / 7,
  h130: DIMENSIONS.WINDOW_HEIGHT / 6.3,
  h145: DIMENSIONS.WINDOW_HEIGHT / 4.5,
  h150: DIMENSIONS.WINDOW_HEIGHT / 4.2,
  h230: DIMENSIONS.WINDOW_HEIGHT / 3.4,
  h250: DIMENSIONS.WINDOW_HEIGHT / 3.2,
  h260: DIMENSIONS.WINDOW_HEIGHT / 3,
  h270: DIMENSIONS.WINDOW_HEIGHT / 2.8,
  h300: DIMENSIONS.WINDOW_HEIGHT / 2.1,
  h550: DIMENSIONS.WINDOW_HEIGHT / 1.3,
};
