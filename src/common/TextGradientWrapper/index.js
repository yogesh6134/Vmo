import React from "react";
import MaskedView from "@react-native-masked-view/masked-view";
import { LinearGradient } from "expo-linear-gradient";
import Color from "@theme/colors";

const TextGradientWrapper = ({ children, style }) => {
  return (
    <MaskedView
      style={[
        {
          flexGrow: 1,
        },
        style,
      ]}
      maskElement={children}
    >
      <LinearGradient
        colors={[Color.gradientOrange3, Color.gradientOrange2]}
        style={{ flex: 1 }}
        locations={[0, 1]}
        start={{ x: 0, y: 0.5 }}
        end={{ x: 1, y: 0 }}
      />
    </MaskedView>
  );
};

export default TextGradientWrapper;
