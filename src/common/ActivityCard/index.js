import React from "react";
import { Image } from "react-native";
import { Text, View } from "react-native-ui-lib";
import styles from "./styles";
import Row from "@common/Row";
import CustomFastImage from "@common/CustomFastImage";

const ActivityCard = ({ icon, name, interested, friend }) => {
  return (
    <Row style={styles.container}>
      <Row>
        <CustomFastImage uri={icon} style={styles.icon} />
        <Text hb16 textDark0 style={styles.text}>
          {name}
        </Text>
      </Row>
      <View style={{ alignItems: "flex-end" }}>
        {interested && (
          <View style={styles.interestedButton}>
            <Text h10 green>
              {interested}
            </Text>
          </View>
        )}
      </View>
    </Row>
  );
};

export default ActivityCard;
