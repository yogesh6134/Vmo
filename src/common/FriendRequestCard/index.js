import { View, Image, TouchableOpacity } from "react-native";
import React from "react";
import { Text } from "react-native-ui-lib";
import Row from "@common/Row";
import styles from "./styles";
import LinearGradientWrapper from "@common/LinearGradientWrapper";
import { Images } from "@assets/";
import CustomFastImage from "@common/CustomFastImage";

const FriendRequestCard = ({
  memberId,
  memberImage,
  memberFirstName,
  memberLastName,
  workingProfession,
  onPressRight,
  onPressLeft,
}) => {
  const uri = memberImage || Images.fallBackUrl;
  return (
    <Row style={styles.container}>
      <Row>
        <CustomFastImage uri={uri} style={styles.icon} />
        <View style={styles.textContainer}>
          <Text h14 textDark0>
            {memberFirstName} {memberLastName}
          </Text>
          {workingProfession?.length > 0 && (
            <Text h12 textDark3>
              {workingProfession}
            </Text>
          )}
        </View>
      </Row>
      <Row>
        <TouchableOpacity onPress={onPressLeft}>
          <View style={styles.activeIgnoreButton}>
            <Text h12 primary_main>
              Ignore
            </Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity onPress={onPressRight}>
          <LinearGradientWrapper style={styles.activeAddButton}>
            <Text h12 white>
              Add
            </Text>
          </LinearGradientWrapper>
        </TouchableOpacity>
      </Row>
    </Row>
  );
};

export default FriendRequestCard;
