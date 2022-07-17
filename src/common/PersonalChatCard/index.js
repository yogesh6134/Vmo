import { TouchableOpacity, View } from "react-native";
import React from "react";
import { Text } from "react-native-ui-lib";
import CustomFastImage from "@common/CustomFastImage";

import { styles } from "./styles";
import Row from "@common/Row";
import { Images } from "@assets/";

const PersonalChatCard = ({ name, lastMessage, image, msgCount, onPress }) => {
  const uri = image || Images.fallBackUrl;
  return (
    <TouchableOpacity activeOpacity={0.7} onPress={onPress}>
      <Row style={styles.cardContainer}>
        <CustomFastImage uri={uri} style={styles.profilePic} />

        <View style={styles.msgContainer}>
          <Text hb14 textDark0>
            {name}
          </Text>
          {lastMessage?.length > 0 && (
            <Text h14 brown numberOfLines={1}>
              {lastMessage}
            </Text>
          )}
        </View>
        {msgCount > 0 && (
          <View style={styles.badgeCountContainer}>
            <Text h12 white>
              {msgCount}
            </Text>
          </View>
        )}
      </Row>
    </TouchableOpacity>
  );
};

export default PersonalChatCard;
