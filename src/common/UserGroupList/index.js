import { FlatList, Image, TouchableOpacity } from "react-native";
import React from "react";
import { Text, View } from "react-native-ui-lib";
import styles from "./styles";
import { Images } from "@assets/";
import LinearGradientWrapper from "@common/LinearGradientWrapper";
import { Screens } from "@constants/";
import { GROUP_ID, SOURCE } from "@constants/amplitude";
import CustomFastImage from "@common/CustomFastImage";
import { logEvent } from "@utils/helper";

export default function UserGrouplist({ data, navigation, style }) {
  const renderItem = ({ item }) => {
    const uri = item?.groupIcon;
    return (
      <TouchableOpacity
        activeOpacity={0.8}
        onPress={() => {
          navigation.navigate(Screens.CHAT_SCREEN, {
            chatType: "group",
            chatId: item?.groupId,
            members: item?.groupMembers,
            friendName: item?.groupName,
            image: "",
            background: item?.groupIcon,
            groupName: item?.actualGroupName,
            activityName: item?.activityName,
          });
          logEvent("Group Chat - Open", {
            [GROUP_ID]: item?.groupId,
            [SOURCE]: "Groups page",
          });
        }}
      >
        <View style={styles.boxView}>
          <View style={styles.insideBoxLeftSide}>
            <CustomFastImage uri={uri} style={styles.groupIcon} />
            <View style={styles.userDetail}>
              <View style={styles.userDetailHeading}>
                <Text hb16 textDark0 marginB-2 numberOfLines={1}>
                  {item?.groupName}
                </Text>
                {item?.noOfMessage > 0 && (
                  <LinearGradientWrapper style={styles.gradientButton}>
                    <Text h10 white>
                      {item?.noOfMessage}
                    </Text>
                  </LinearGradientWrapper>
                )}
              </View>
              {item?.lastUser?.length > 0 ? (
                <Text numberOfLines={2} style={{ letterSpacing: 0.2 }}>
                  <Text h12 textDark0>
                    {item?.lastUser}:{" "}
                  </Text>
                  <Text hr12 textDark0>
                    {item?.groupMessage}
                  </Text>
                </Text>
              ) : (
                <Text h12 textDark0>
                  Be the first person to message
                </Text>
              )}
            </View>
          </View>
          <View style={styles.insideBoxRightSide}>
            <Image source={Images.nextIcon} style={styles.nextIcon} />
          </View>
        </View>
      </TouchableOpacity>
    );
  };

  return (
    <FlatList
      data={data}
      keyExtractor={(item) => item?.groupId?.toString()}
      renderItem={renderItem}
      contentContainerStyle={style}
    />
  );
}
