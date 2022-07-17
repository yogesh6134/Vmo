import { Text } from "react-native-ui-lib";
import React from "react";
import { Image, View } from "react-native";
import { styles } from "./styles";
import Row from "@common/Row";
import Color from "@theme/colors";

const PeopleCard = ({ peopleImage, peopleName, content }) => {
  return (
    <Row style={styles.container}>
      <Row style={styles.itemArrange}>
        <Image source={peopleImage} style={styles.photoContainer} />
        <View style={styles.textContainer}>
          <Text h14 color={Color.text_dark0}>
            {peopleName}
          </Text>
          <Text
            h12
            color={Color.text_dark3}
            numberOfLines={1}
            style={styles.text}
          >
            {content}
          </Text>
        </View>
      </Row>
    </Row>
  );
};

export default PeopleCard;
