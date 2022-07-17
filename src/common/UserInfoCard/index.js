import { Image, Pressable } from "react-native";
import React from "react";
import { Text } from "react-native-ui-lib";
import Row from "@common/Row";
import { Images } from "@assets/";
import { styles } from "./styles";
import Color from "@theme/colors";

const UserInfoCard = ({ title, value, onPress, textColor }) => {
  return (
    <Pressable onPress={onPress}>
      <Row style={styles.container}>
        <Text h14 style={{ color: textColor ? textColor : Color.text_dark0 }}>
          {title}
        </Text>
        <Row>
          <Text h14 textDark3>
            {value}
          </Text>
          <Image source={Images.arrowRight} style={styles.photoContainer} />
        </Row>
      </Row>
    </Pressable>
  );
};

export default UserInfoCard;
