import React from "react";
import { View } from "react-native";
import { Text, Image, FlatList } from "react-native-ui-lib";
import GroupListMessage from "@common/GroupListMessage";
import Avatarlist from "@common/avatarList";
import { Faces } from "@mock/faces";
import Color from "@theme/colors";
import styles from "./styles";

export default function GroupList(props) {
  const data = props.GroupListData;
  return (
    <FlatList
      data={data}
      renderItem={({ item }) => (
        <View style={styles.boxView}>
          <View style={styles.leftSideBoxView}>
            <Image source={item.groupImage} style={styles.icon} />
          </View>
          <View style={styles.rightSideBoxView}>
            <View style={styles.rightSideInsideView}>
              <View>
                <Text
                  numberOfLines={1}
                  h16
                  marginB-10
                  bold
                  style={styles.groupNameText}
                >
                  {item.groupName}
                </Text>
              </View>
              <View style={styles.avatarView}>
                <Avatarlist
                  data={Faces}
                  backgroundColor={Color.black_10}
                  numFaces={3}
                  circleSize={15}
                  overflowLabelStyle={styles.overflowLabelStyle}
                />
              </View>
            </View>
            <Text h12 textDark4>
              {item.activeDate}
            </Text>
            <View style={styles.buttonView}>
              <GroupListMessage
                icon={item.groupAdminIcon}
                heading={item.groupStatus}
              />
            </View>
          </View>
        </View>
      )}
      keyExtractor={(_item, index) => index.toString()}
    />
  );
}
