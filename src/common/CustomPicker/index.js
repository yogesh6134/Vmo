import { View, TouchableOpacity } from "react-native";
import React from "react";
import { Incubator, Modal, Text } from "react-native-ui-lib";

import { styles } from "./styles";
import Color from "@theme/colors";

const CustomPicker = ({
  visible,
  data,
  initialValue,
  numberOfVisibleRows,
  onCancelText,
  onCancel,
  onDoneText,
  onDone,
  style,
  backPress,
  onChange,
}) => {
  return (
    <Modal
      animationType="slide"
      visible={visible}
      overlayBackgroundColor={Color.blackOverlay}
      onBackgroundPress={backPress}
      transparent
    >
      <View style={styles.modalContainer}>
        <View style={styles.buttonContainer}>
          <TouchableOpacity style={styles.button} onPress={onCancel}>
            <Text hb16>{onCancelText}</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button} onPress={onDone}>
            <Text hb16>{onDoneText}</Text>
          </TouchableOpacity>
        </View>
        <Incubator.WheelPicker
          activeTextColor={Color.primary_main}
          inactiveTextColor={Color.primary_main}
          numberOfVisibleRows={numberOfVisibleRows}
          items={data}
          initialValue={initialValue}
          onChange={onChange}
          textStyle={styles.textStyle}
        />
      </View>
    </Modal>
  );
};

export default CustomPicker;
