import { Image } from "react-native";
import { Text, View } from "react-native-ui-lib";
import React from "react";
import styles from "./styles";

export default function GroupListMessage(props) {
  return (
    <View style={styles.button}>
      <Image source={props.icon} style={styles.icon} />
      <Text numberOfLines={1} h12 textDark0 style={styles.textStyle}>
        {props.heading}
      </Text>
    </View>
  );
}
