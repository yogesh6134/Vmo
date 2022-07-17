import { View, Image } from "react-native";
import React from "react";
import { Text } from "react-native-ui-lib";

import { Images } from "@assets/";
import Row from "@common/Row";
import TextGradientWrapper from "@common/TextGradientWrapper";
import { styles } from "./styles";

const CardContent = ({ icon, text }) => {
  return (
    <Row style={styles.cardContent}>
      <Image source={icon} style={styles.icon} />
      <Text hr12 style={styles.descriptionText}>
        {text}
      </Text>
    </Row>
  );
};

const NextCard = ({ style }) => {
  return (
    <View style={[styles.container, { style }]}>
      <View style={styles.headingContainer}>
        <TextGradientWrapper>
          <Text hb14>What’s next?</Text>
        </TextGradientWrapper>
      </View>
      <CardContent
        icon={Images.locationIcon}
        text={
          "We’re looking for the most compatible people nearby to match you with."
        }
      />
      <CardContent
        icon={Images.group}
        text={
          "You’ll receive a notification within 24 hours when we find you a group."
        }
      />
      <CardContent
        icon={Images.groupPlan}
        text={"Make plans with your group and meet up IRL!"}
      />
    </View>
  );
};

export default NextCard;
