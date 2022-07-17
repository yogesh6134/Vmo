import { Image, TouchableOpacity } from "react-native";
import React from "react";
import { Text } from "react-native-ui-lib";

import LinearGradientWrapper from "@common/LinearGradientWrapper";
import Row from "@common/Row";
import styles from "./styles";

const GradientHeader = ({
  leftIcon,
  leftOnPress,
  title,
  rightIcon,
  rightOnPress,
}) => {
  return (
    <LinearGradientWrapper style={styles.container}>
      <Row style={styles.itemArrange}>
        <Row>
          {leftIcon && (
            <TouchableOpacity
              onPress={leftOnPress}
              style={styles.pressableArea}
            >
              <Image source={leftIcon} style={styles.leftIcon} />
            </TouchableOpacity>
          )}
          <Text h20 white style={styles.heading}>
            {title}
          </Text>
        </Row>
        {rightIcon && (
          <TouchableOpacity onPress={rightOnPress}>
            <Image
              source={rightIcon}
              onPress={rightOnPress}
              style={styles.crossIcon}
            />
          </TouchableOpacity>
        )}
      </Row>
    </LinearGradientWrapper>
  );
};

export default GradientHeader;
