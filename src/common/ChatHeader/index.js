import { Image, TouchableOpacity } from "react-native";
import React from "react";
import { Text, View } from "react-native-ui-lib";

import LinearGradientWrapper from "@common/LinearGradientWrapper";
import Row from "@common/Row";
import styles from "./styles";
import { formatHeaderText } from "@utils/helper";
import { Images } from "@assets/";
import CustomFastImage from "@common/CustomFastImage";
import { SPACING } from "@theme/constants";

const ChatHeader = ({
  leftIcon,
  onBackPress,
  title,
  rightIcon,
  onMemuBar,
  avatar,
  rightIconStyle,
  chatType,
  headerImage,
  groupName,
  activityName,
}) => {
  const uri = headerImage || Images.fallBackUrl;
  return (
    <LinearGradientWrapper style={styles.container}>
      <Row style={styles.itemArrange}>
        <Row>
          <TouchableOpacity onPress={onBackPress} style={styles.back}>
            <Image source={leftIcon} style={styles.leftIcon} />
          </TouchableOpacity>
          {chatType === "oneOnOne" && (
            <>
              <CustomFastImage uri={uri} style={styles.headerImage} />
              <Text h20 white style={styles.heading}>
                {title}
              </Text>
            </>
          )}
          {chatType === "group" && (
            <View style={styles.groupHeader}>
              <Text hb16 white numberOfLines={1}>
                {groupName}
              </Text>
              <Text h14 white>
                {activityName}
              </Text>
            </View>
          )}
        </Row>
        <Row style={{ marginRight: SPACING.v4 }}>
          <View>{avatar}</View>
          <TouchableOpacity onPress={onMemuBar} activeOpacity={0.8}>
            {rightIcon && <Image source={rightIcon} style={rightIconStyle} />}
          </TouchableOpacity>
        </Row>
      </Row>
    </LinearGradientWrapper>
  );
};

export default ChatHeader;
