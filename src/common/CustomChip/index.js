import React from "react";
import Row from "@common/Row";
import { Chip } from "react-native-ui-lib";
import LinearGradientWrapper from "@common/LinearGradientWrapper";
import { styles } from "./styles";

const CustomChip = ({ id, label }) => {
  return (
    <LinearGradientWrapper style={styles.container}>
      <Chip
        key={id}
        label={label}
        labelStyle={styles.label}
        containerStyle={styles.con}
      />
    </LinearGradientWrapper>
  );
};

export default CustomChip;
