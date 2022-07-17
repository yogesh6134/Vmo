import React, { useEffect, useState } from "react";
import { View, Text, TouchableOpacity, Image } from "react-native-ui-lib";
import { connect } from "react-redux";
import Color from "@theme/colors";
import { LinearGradient } from "expo-linear-gradient";
import styles from "./styles";
import { Images } from "@assets/";
import Button from "@common/Button";
import { ScrollView } from "react-native-gesture-handler";

import { auth } from "@libraries/firebase";
import { Services } from "@services/";
import { logEvent } from "@utils/helper";
import { GROUP_ID, SOURCE } from "@constants/amplitude";
import CustomFastImage from "@common/CustomFastImage";
import AlertBox from "@common/AlertBox";

const BottomSheetProfile = ({
  onClose,
  userName,
  userImage,
  profession,
  looking,
  bio,
  LookingOption,
  currentMemberId,
  userProfile,
  friendList,
  groupId,
  reportedUserList,
}) => {
  const [isVisible, setIsVisible] = useState(false);
  const [isVisibleBlockUser, setIsVisibleBlockUser] = useState(false);
  const [reportReason, setReportReason] = useState("");

  const uri = userImage || Images.fallBackUrl;
  const user = auth?.currentUser;

  const isReported = reportedUserList.some(
    (user) => user.reportedUserID === currentMemberId
  );

  const alreadySent = userProfile?.sentRequests?.some(
    (item) => item?.UserID === currentMemberId
  );

  const accepted = friendList.some(
    (item) => item?.friendId === currentMemberId
  );

  const isCurrentUser = user?.uid === currentMemberId;

  const handleFriendRequest = () => {
    if (alreadySent && !isCurrentUser) {
      Services.UserServices.undoSendFriendRequest(user?.uid, currentMemberId);
      logEvent("Social - Unsend Friend Request", {
        [SOURCE]: "Group User Profile",
      });
      return;
    }

    Services.UserServices.sendFriendRequest(
      user?.uid,
      currentMemberId,
      userProfile
    );
    logEvent("Group Chat - Add Friend", {
      [GROUP_ID]: groupId,
      [SOURCE]: "User Profile",
    });
    logEvent("Social - Add Friend", {
      [SOURCE]: "Group User Profile",
    });
  };

  if (userName === undefined) {
    return null;
  }

  const userReport = () => {
    setIsVisible(!isVisible);
  };

  const onBlockUser = ({ item }) => {
    setReportReason(item);
    setIsVisible(!isVisible);
    setTimeout(() => {
      setIsVisibleBlockUser(!isVisibleBlockUser);
    }, 500);
  };

  const blockuser = () => {
    Services.UserServices.reportUser(
      user.uid,
      currentMemberId,
      true,
      reportReason
    );
    logEvent("Group Chat - Report Profile", { [GROUP_ID]: groupId });
    setIsVisibleBlockUser(!isVisibleBlockUser);
  };

  const unblockUser = () => {
    Services.UserServices.updateReportUser(user.uid, currentMemberId, false);
    logEvent("Group Chat - Report Profile", { [GROUP_ID]: groupId });
  };

  return (
    <View style={styles.container}>
      <View style={styles.headerView}>
        {isReported ? (
          <TouchableOpacity style={styles.headerButton} onPress={unblockUser}>
            <Text h12 textDark1>
              Unblock User
            </Text>
          </TouchableOpacity>
        ) : (
          <TouchableOpacity style={styles.headerButton} onPress={userReport}>
            <Text h12 textDark1>
              Report user
            </Text>
          </TouchableOpacity>
        )}

        <AlertBox isVisibleModal={isVisible}>
          <TouchableOpacity
            style={styles.modelBox}
            onPress={() => onBlockUser({ item: "Rude or disruptive" })}
          >
            <Text h17 black>
              Rude or disruptive
            </Text>
          </TouchableOpacity>

          <View style={styles.border} />
          <TouchableOpacity
            style={styles.modelBox}
            onPress={() => onBlockUser({ item: "Inappropriate comments" })}
          >
            <Text h17 black>
              Inappropriate comments
            </Text>
          </TouchableOpacity>
          <View style={styles.border} />
          <TouchableOpacity
            style={styles.modelBox}
            onPress={() =>
              onBlockUser({ item: "Inappropriate profile or bio" })
            }
          >
            <Text h17 black>
              Inappropriate profile or bio
            </Text>
          </TouchableOpacity>
          <View style={styles.border} />
          <TouchableOpacity
            style={styles.modelBox}
            onPress={() => setIsVisible(!isVisible)}
          >
            <Text h17 primary_main>
              Cancel
            </Text>
          </TouchableOpacity>
        </AlertBox>

        <AlertBox isVisibleModal={isVisibleBlockUser}>
          <Text hb16 black center marginV-16>
            Block User?
          </Text>
          <Text h16 black center marginB-30>
            Do you also want to block this user?
          </Text>
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-around",
              paddingBottom: 15,
            }}
          >
            <TouchableOpacity
              onPress={() => setIsVisibleBlockUser(!isVisibleBlockUser)}
            >
              <Text h16 black>
                Don’t block
              </Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={blockuser}>
              <Text h16 primary_main>
                Block
              </Text>
            </TouchableOpacity>
          </View>
        </AlertBox>
        <TouchableOpacity onPress={onClose}>
          <Image source={Images.bottomSheetClose} style={styles.crossIcon} />
        </TouchableOpacity>
      </View>
      <ScrollView showsVerticalScrollIndicator={false}>
        <LinearGradient
          colors={[Color.gradientOrange3, Color.gradientOrange2]}
          start={{ x: 0.0, y: 1.0 }}
          end={{ x: 1.0, y: 1.0 }}
          style={styles.imageBorder}
        >
          <CustomFastImage uri={uri} style={styles.userIcon} />
        </LinearGradient>
        <Text h32 textDark0 center>
          {userName}
        </Text>
        <Text hb16 brown center>
          {profession}
        </Text>

        <View style={styles.buttonStyle}>
          {!accepted && !isReported && (
            <Button
              text={alreadySent ? "Request sent" : "Add friend"}
              size={"small"}
              type={alreadySent ? "outline" : "primary"}
              outlineColor={alreadySent ? Color.orange0 : ""}
              round={16}
              onPress={handleFriendRequest}
              style={styles.buttonStyle}
            />
          )}
          {accepted && !isReported && (
            <Button
              text={"Remove friend"}
              size={"small"}
              type={"outline"}
              outlineColor={Color.orange0}
              round={16}
              onPress={handleFriendRequest}
              style={styles.buttonStyle}
            />
          )}
          {isReported && (
            <View style={styles.removeButton}>
              <Text h12 textDark3>
                User is blocked
              </Text>
            </View>
          )}
        </View>
        {looking !== "" && !isReported && (
          <View style={styles.recentlySelectedBox}>
            <Text h14 green center>
              {looking}
            </Text>
          </View>
        )}

        {!isReported ? (
          <>
            <View style={styles.detailView}>
              <Text h16 textDark0 center>
                {bio}
              </Text>
            </View>

            <View style={styles.detailView}>
              {LookingOption?.map((item, index) => (
                <View key={index} style={styles.buttonView}>
                  <Text h14 primary_main>
                    {item}
                  </Text>
                </View>
              ))}
            </View>
          </>
        ) : null}
      </ScrollView>
    </View>
  );
};

const mapStateToProps = (state) => ({
  userProfile: state.userReducer.userProfile,
  friendList: state.userReducer.friendList,
  reports: state.userReducer.reports,
});

export default connect(mapStateToProps)(BottomSheetProfile);
