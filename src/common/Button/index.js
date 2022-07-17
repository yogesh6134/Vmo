import React from "react";
import { Image, Text, TouchableOpacity, ActivityIndicator } from "react-native";
import { LinearGradient } from "expo-linear-gradient";

import { styles } from "./styles";
import Color from "@theme/colors";
import Row from "../Row";

const buttonSize = {
  tiny: styles.tiny,
  small: styles.small,
  medium: styles.medium,
  large: styles.large,
  block: styles.block,
};

const buttonText = {
  tiny: styles.tinyText,
  small: styles.tinyText,
  medium: styles.mediumText,
  large: styles.largeText,
  block: styles.blockText,
};

const buttonTextColor = {
  primary: styles.primaryText,
  outline: styles.outlineText,
  colored: styles.outlineText,
};

const buttonBackgroundColor = {
  primary: [Color.gradientOrange3, Color.gradientOrange2],
  outline: [Color.white, Color.white],
  colored: [Color.lightSkin, Color.lightSkin],
};

const Button = ({
  type,
  size,
  text,
  disabled,
  isLoading,
  onPress,
  style,
  icon,
  round,
  iconStyle,
  outlineColor,
  textColor,
}) => {
  return (
    <TouchableOpacity
      disabled={disabled}
      onPress={onPress}
      style={[type === "primary" ? styles.buttonContainer : null, style]}
    >
      <LinearGradient
        colors={buttonBackgroundColor[type]}
        start={{ x: 0, y: 0.4 }}
        end={{ x: 0.7, y: 1 }}
        style={[
          type === "outline" && styles.outlineButton,
          buttonSize[size],
          {
            borderRadius: round,
            borderColor: outlineColor ? outlineColor : Color.transparent,
            opacity: disabled ? 0.3 : 1,
          },
        ]}
      >
        <Row>
          {isLoading && (
            <ActivityIndicator
              animating={true}
              size="small"
              color={type === "primary" ? Color.white : Color.primary_main}
              style={{ marginRight: 15 }}
            />
          )}
          <Row>
            {icon && <Image source={icon} style={[styles.icon, iconStyle]} />}
            <Text style={[buttonTextColor[type], buttonText[size]]}>
              {text}
            </Text>
          </Row>
        </Row>
      </LinearGradient>
    </TouchableOpacity>
  );
};

export default Button;
