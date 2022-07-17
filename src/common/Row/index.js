import React from "react";
import { View } from "react-native";

import { styles } from "./styles";

const Row = ({ children, style }) => (
  <View style={[styles.container, style]}>{children}</View>
);

export default Row;
