import React from "react";
import { LinearGradient } from "expo-linear-gradient";
import Color from "@theme/colors";

const LinearGradientWrapper = ({ children, style, highLight }) => (
  <LinearGradient
    colors={
      highLight
        ? [Color.transparent, Color.transparent]
        : [Color.gradientOrange3, Color.gradientOrange2]
    }
    start={{ x: 0, y: 0.4 }}
    end={{ x: 0.7, y: 1 }}
    style={style}
  >
    {children}
  </LinearGradient>
);

export default LinearGradientWrapper;
