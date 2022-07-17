import { View, Image, Pressable, ImageBackground } from "react-native";
import React from "react";
import { Text } from "react-native-ui-lib";

import styles from "./styles";
import { Images } from "@assets/";
import Row from "@common/Row";
import TextGradientWrapper from "@common/TextGradientWrapper";
import LinearGradientWrapper from "@common/LinearGradientWrapper";
import { SPACING } from "@theme/constants";

const HighLightCard = ({ onPress, title, image, status }) => {
  return (
    <View style={styles.container}>
      <LinearGradientWrapper
        style={[styles.card, { marginTop: status ? SPACING.v8 : SPACING.v4 }]}
        highLight={status ? false : true}
      >
        <Pressable onPress={onPress}>
          <View style={styles.photoContainer1}>
            <ImageBackground source={image} style={styles.photoContainer1}>
              {!status ? (
                <Text h20 white style={styles.text}>
                  {title}
                </Text>
              ) : (
                <Row style={styles.text}>
                  <TextGradientWrapper>
                    <Text h20>{title}</Text>
                  </TextGradientWrapper>

                  <Image source={Images.check_circle} style={styles.circle} />
                </Row>
              )}
            </ImageBackground>
          </View>
        </Pressable>
      </LinearGradientWrapper>
    </View>
  );
};

export default HighLightCard;
