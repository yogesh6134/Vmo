import React from "react";
import { Checkbox, Text } from "react-native-ui-lib";
import Color from "@theme/colors";
import Row from "@common/Row";
import styles from "./styles";

const CustomCheckbox = ({ value, handleChange, disabled }) => {
  return (
    <Row style={styles.container}>
      <Text h16>{value.name}</Text>
      <Checkbox
        value={value.isShow}
        onValueChange={() => handleChange(value)}
        size={25}
        color={value.isShow ? Color.primary_main : Color.text_dark4}
        style={{ borderRadius: 4 }}
        disabled={disabled}
      />
    </Row>
  );
};

export default CustomCheckbox;
