import React from "react";
import Modal from "react-native-modal";
import { Text, View } from "react-native";
import styles from "./styles";

export default function AlertBox({ isVisibleModal, children }) {
  return (
    <Modal
      isVisible={isVisibleModal}
      animationIn="zoomInDown"
      animationOut="zoomOutUp"
    >
      <View style={styles.container}>{children}</View>
    </Modal>
  );
}
