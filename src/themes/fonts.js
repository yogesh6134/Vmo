import { Typography, Colors } from "react-native-ui-lib";
import Color from "./colors";

export const configureDesignSystem = () => {
  Colors.loadColors({
    black: Color.black,
    textDark0: Color.text_dark0,
    textDark1: Color.text_dark1,
    textDark2: Color.text_dark2,
    textDark3: Color.text_dark3,
    textDark4: Color.text_dark4,
    white: Color.white,
    Secondary_Black: Color.Secondary_Black,
    primary_main: Color.primary_main,
    green: Color.darkGreen,
    brown: Color.brown,
    gradientOrange: Color.gradientOrange,
    blue: Color.blue0,
  });
  Typography.loadTypographies({
    h12: { fontSize: 12, fontFamily: "Roboto-Medium", lineHeight: 14 },
    hr12: { fontSize: 12, fontFamily: "Roboto-Regular", lineHeight: 14 },
    hb12: { fontSize: 12, fontFamily: "Roboto-Bold", lineHeight: 14 },
    h13: { fontSize: 13, fontFamily: "SFProText-Regular", lineHeight: 18 },
    h10: { fontSize: 10, fontFamily: "Roboto-Medium", lineHeight: 12 },
    h14: { fontSize: 14, fontFamily: "Roboto-Regular", lineHeight: 16 },
    hb14: { fontSize: 14, fontFamily: "Roboto-Bold", lineHeight: 16 },
    hm14: { fontSize: 14, fontFamily: "Roboto-Medium", lineHeight: 16 },
    h16: { fontSize: 16, fontFamily: "Roboto-Regular", lineHeight: 20 },
    hb16: { fontSize: 16, fontFamily: "Roboto-Bold", lineHeight: 22 },
    h17: { fontSize: 17, fontFamily: "SFProText-Regular", lineHeight: 22 },
    hb17: { fontSize: 17, fontFamily: "Roboto-Bold", lineHeight: 22 },
    h18: { fontSize: 18, fontFamily: "AvenirLTStd-Black", lineHeight: 22 },
    hb18: { fontSize: 18, fontFamily: "Roboto-Medium", lineHeight: 22 },
    hr18: { fontSize: 18, fontFamily: "Roboto-Regular", lineHeight: 25 },
    h20: { fontSize: 20, fontFamily: "Roboto-Bold", lineHeight: 28 },
    h24: { fontSize: 24, fontFamily: "AvenirLTStd-Black", lineHeight: 100 },
    h28: { fontSize: 28, fontFamily: "Roboto-Regular", lineHeight: 38 },
    hb28: { fontSize: 28, fontFamily: "Roboto-Bold", lineHeight: 38 },
    h32: {
      fontSize: 32,
      fontFamily: "Roboto-Bold",
      lineHeight: 44,
    },
    h44: {
      fontSize: 44,
      fontFamily: "AvenirLTStd-Black",
      lineHeight: 100,
    },

    f24: { fontSize: 24, fontFamily: "SF-Pro-Display-Bold", lineHeight: 24 },
  });
};
