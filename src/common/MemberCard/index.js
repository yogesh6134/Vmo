import { Text } from "react-native-ui-lib";
import React from "react";
import { Image, View, TouchableOpacity } from "react-native";
import { connect } from "react-redux";
import CustomFastImage from "@common/CustomFastImage";

import { Images } from "@assets/";
import { styles } from "./styles";
import Row from "@common/Row";
import Color from "@theme/colors";
import Button from "@common/Button";
import { Services } from "@services/";
import { auth } from "@libraries/firebase";
import { logEvent } from "@utils/helper";
import { GROUP_ID, SOURCE } from "@constants/amplitude";

const MemberCard = ({
  memberId,
  memberImage,
  memberFirstName,
  memberLastName,
  workingProfession,
  userProfile,
  friendList,
  onPress,
  groupId,
  reportedUserList,
}) => {
  const uri = memberImage || Images.fallBackUrl;
  const user = auth?.currentUser;
  const alreadySent = userProfile?.sentRequests?.some(
    (item) => item?.UserID === memberId
  );
  const isReported = reportedUserList.some(
    (user) => user.reportedUserID === memberId
  );
  const accepted = friendList.some((item) => item?.friendId === memberId);
  const isCurrentUser = user?.uid === memberId;

  const handleAddFriend = () => {
    if (alreadySent || isCurrentUser) {
      return;
    }

    Services.UserServices.sendFriendRequest(user?.uid, memberId, userProfile);
    logEvent("Group Chat - Add Friend", {
      [GROUP_ID]: groupId,
      [SOURCE]: "Member List",
    });
    logEvent("Social - Add Friend", {
      [SOURCE]: "Group Members List",
    });
  };

  return (
    <Row style={styles.container}>
      <Row style={styles.itemArrange}>
        <TouchableOpacity onPress={onPress}>
          <CustomFastImage uri={uri} style={styles.photoContainer} />
        </TouchableOpacity>

        <View style={styles.textContainer}>
          <Text h14 color={Color.text_dark0}>
            {memberFirstName} {memberLastName}
          </Text>
          {workingProfession?.length > 0 && (
            <Text h12 color={Color.text_dark3}>
              {workingProfession}
            </Text>
          )}
        </View>
      </Row>
      <Row style={styles.contactContainer}>
        {!accepted && !isReported && (
          <Button
            text={
              isCurrentUser
                ? "You"
                : alreadySent
                ? "Request sent"
                : "Add friend"
            }
            size="small"
            type={isCurrentUser || alreadySent ? "colored" : "primary"}
            icon={isCurrentUser || alreadySent ? null : Images.plusSign}
            round={14}
            iconStyle={{ width: 10, marginRight: 5 }}
            onPress={handleAddFriend}
          />
        )}
      </Row>
    </Row>
  );
};

const mapStateToProps = (state) => ({
  userProfile: state.userReducer.userProfile,
  friendList: state.userReducer.friendList,
});

export default connect(mapStateToProps)(MemberCard);
