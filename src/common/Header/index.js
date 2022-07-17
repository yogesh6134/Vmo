import { Image, TouchableOpacity, View } from "react-native";
import React from "react";
import { Images } from "../../../../assets";
import { styles } from "./styles";

const Header = ({ onPress, style }) => {
  return (
    <View style={[styles.container, style]}>
      <TouchableOpacity onPress={onPress}>
        <Image source={Images.backIcon} style={styles.backIcon} />
      </TouchableOpacity>
    </View>
  );
};

export default Header;
