import React from "react";
import Row from "@common/Row";
import { RadioButton } from "react-native-ui-lib";
import Color from "@theme/colors";
import styles from "./styles";
const CustomRadioButton = ({ selected, setSelected, value }) => {
  return (
    <Row style={styles.container}>
      <RadioButton
        label={value}
        labelStyle={styles.text}
        contentOnRight={true}
        onPress={setSelected}
        selected={selected ? true : false}
        color={selected ? Color.primary_main : Color.text_dark4}
      />
    </Row>
  );
};

export default CustomRadioButton;
