import React from "react";
import { Image as FastImage } from "react-native-expo-image-cache";

const CustomFastImage = ({ uri, style }) => {
  return <FastImage {...{ uri }} style={style} />;
};

export default CustomFastImage;
