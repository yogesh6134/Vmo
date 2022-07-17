import React, {
  useEffect,
  useCallback,
  useState,
  useRef,
  useMemo,
} from "react";
import {
  ImageBackground,
  Image,
  Keyboard,
  TouchableOpacity,
  ScrollView,
  Platform,
} from "react-native";
import { Text, View } from "react-native-ui-lib";
import { StatusBar } from "expo-status-bar";
import BottomSheet, {
  BottomSheetBackdrop,
  BottomSheetFlatList,
} from "@gorhom/bottom-sheet";
import { connect } from "react-redux";

import styles from "./styles";
import { Images } from "@assets/";
import {
  GiftedChat,
  InputToolbar,
  Bubble,
  Send,
  Composer,
} from "react-native-gifted-chat";
import { HEIGHT, SPACING } from "@theme/constants";
import Color from "@theme/colors";
import ChatHeader from "@common/ChatHeader";
import Avatarlist from "@common/avatarList";
import GradientHeader from "@common/GradientHeader";
import MemberCard from "@common/MemberCard";
import Button from "@common/Button";
import { ShortcutMessages } from "@mock/shortcutMessages";
import { sendPushNotification, logEvent } from "@utils/helper";
import {
  setGroupChatMembers,
  setGroupChatMessages,
  setGroupChatWhoTyping,
} from "@actions/Chat";
import { setCurrentMemberData } from "@actions/User";
import { Services } from "@services/";
import { auth } from "@libraries/firebase";
import Row from "@common/Row";
import BottomSheetProfile from "@common/BottomSheetProfile";
import { Screens } from "@constants/";
import { CONTENT, GROUP_ID, MESSAGE, SOURCE } from "@constants/amplitude";
import CustomPicker from "@common/CustomPicker";
import TextGradientWrapper from "@common/TextGradientWrapper";
import { leaveGroupOptions } from "@mock/leaveGroupOptions";
import CustomFastImage from "@common/CustomFastImage";
import AlertBox from "@common/AlertBox";

const ChatScreen = ({
  navigation,
  messages,
  currentMembers,
  reportedUserList,
  setGroupChatMessages,
  setGroupChatWhoTyping,
  setCurrentMemberData,
  setGroupChatMembers,
  userProfile,
  typingStatus,
  route,
}) => {
  const {
    chatType,
    chatId,
    friendName,
    members = [],
    image = "",
    background,
    groupName = "",
    activityName = "",
  } = route.params;

  const [userMessage, setUserMessage] = useState("");
  const groupMemberRef = useRef(null);
  const bottomSheetRef = useRef(null);

  const [currentMember, setCurrentMember] = useState();
  const groupMemberSnapPoints = useMemo(() => ["72% "], []);
  const snapPoints = useMemo(() => ["80% "], []);
  const [isVisibleBlockUser, setisVisibleBlockUser] = useState(false);
  const user = auth?.currentUser;
  const typingUsers = typingStatus?.filter(
    (t) => t.typing === true && t.id !== user?.uid
  );
  const [visible, setVisible] = useState(false);
  const [option, setOption] = useState([]);
  const [isVisible, setIsVisible] = useState(false);
  const [isVisibleReport, setIsVisibleReport] = useState(false);
  const [reportMsg, setReportMsg] = useState("");
  const [senderID, setSenderID] = useState("");
  const [messageId, setMessageId] = useState("");

  const typingIds = typingUsers?.map((tItem) => tItem.id);
  const typingCount = typingUsers?.length;
  const typingMessage =
    chatType === "oneOnOne"
      ? `${friendName} is typing...`
      : typingCount === 1
      ? `${typingCount} person is typing...`
      : `${typingCount} people are typing...`;

  const typingAvatars = members?.filter((memberItem) =>
    typingIds?.includes(memberItem.id)
  );
  const Faces = members?.map((faceItem) => ({
    id: faceItem?.id,
    imageUrl: faceItem?.avatar || Images.fallBackUrl,
  }));
  const isGroupChat = chatType === "group";

  useEffect(() => {
    setGroupChatMessages(chatId);
    setGroupChatWhoTyping(chatId);
    setGroupChatMembers(chatId);
  }, [reportedUserList]);

  useEffect(() => {
    const showSubscription = Keyboard.addListener("keyboardDidShow", () =>
      Services.ChatServices.toggleTypingStatus(chatId, user?.uid, true)
    );
    const hideSubscription = Keyboard.addListener("keyboardDidHide", () =>
      Services.ChatServices.toggleTypingStatus(chatId, user?.uid, false)
    );
    Services.ChatServices.updateTypingWhenOffline(chatId, user?.uid);
    Services.ChatServices.updateLastSeenWhenOffline(chatId, user?.uid);

    return () => {
      showSubscription.remove();
      hideSubscription.remove();
      Services.ChatServices.updateLastSeenWhenLeaving(chatId, user?.uid);
    };
  }, []);

  const closeModal = () => {
    setVisible(false);
  };
  const renderBackdrop = useCallback(
    (props) => (
      <BottomSheetBackdrop
        {...props}
        disappearsOnIndex={-1}
        appearsOnIndex={0}
        pressBehavior={"none"}
        opacity={0.6}
      />
    ),
    []
  );

  const onSend = useCallback(
    (newMessages = []) => {
      if (messages?.length === 0) {
        if (isGroupChat) {
          logEvent("Group Chat - First Message", {
            [GROUP_ID]: chatId,
            [MESSAGE]: newMessages[0].text,
          });
        } else {
          logEvent("Private Chat - Create");
        }
      }

      Services.ChatServices.sendGroupMessage(
        chatId,
        newMessages,
        user?.uid,
        userProfile
      );
      Services.ChatServices.updateLastMessage(
        chatId,
        newMessages,
        user?.uid,
        userProfile?.firstName
      );
      Keyboard.dismiss();

      currentMembers.forEach((member) => {
        const senderName = isGroupChat ? friendName : userProfile.firstName;
        const chatBg = background ?? Images.defaultBackground;
        const currentUserMessage = isGroupChat
          ? `${newMessages[0].user.name}: ${newMessages[0].text}`
          : `${newMessages[0].text}`;
        if (member.id !== user.uid) {
          sendPushNotification(
            member.token,
            senderName,
            currentUserMessage,
            newMessages[0]._id,
            chatType,
            chatId,
            members,
            image,
            chatBg
          );
        }
      });
      if (isGroupChat) {
        logEvent("Group Chat - Message", { [GROUP_ID]: chatId });
      } else {
        logEvent("Private Chat - Message");
      }
    },
    [currentMembers, messages, userMessage]
  );

  const onLongPressOut = useCallback(
    (props) => {
      if (props.currentMessage.user._id !== user?.uid) {
        setIsVisible(!isVisible);
        setReportMsg(props.currentMessage.text);
        setSenderID(props.currentMessage.user._id);
        setMessageId(props.currentMessage.messageId);
      } else {
        return null;
      }
    },
    [isVisible]
  );
  const renderBubble = (props) => {
    return (
      <Bubble
        {...props}
        onLongPress={() => onLongPressOut(props)}
        wrapperStyle={{
          right: {
            backgroundColor: Color.Secondary_main,
            borderTopRightRadius: SPACING.v15,
            borderTopLeftRadius: SPACING.v15,
            borderBottomLeftRadius: SPACING.v15,
            borderBottomEndRadius: 0,
          },
          left: {
            backgroundColor: Color.white,
            borderTopRightRadius: SPACING.v15,
            borderTopLeftRadius: SPACING.v15,
            borderBottomLeftRadius: 0,
            borderBottomEndRadius: SPACING.v15,
          },
        }}
        textStyle={{
          right: {
            color: Color.white,
          },
          left: {
            color: Color.text_dark0,
          },
        }}
      />
    );
  };

  const renderSend = (props) => {
    return (
      <Send {...props}>
        <Image source={Images.sendMessage} style={styles.sendIcon} />
      </Send>
    );
  };

  const renderInputToolbar = (props) => {
    return <InputToolbar {...props} containerStyle={styles.containerStyle} />;
  };

  const addMessageToTextInput = useCallback(
    ({ msg }) => {
      setUserMessage(msg);
      if (isGroupChat) {
        logEvent("Group Chat - Icebreaker Tapped", {
          [GROUP_ID]: chatId,
          [CONTENT]: msg,
        });
      } else {
        logEvent("Private Chat - Icebreaker Tapped", {
          [GROUP_ID]: chatId,
          [CONTENT]: msg,
        });
      }
    },
    [userMessage]
  );

  const handleMemberProfile = (profileId) => {
    if (profileId !== user.uid) {
      bottomSheetRef.current?.expand();
      setCurrentMemberData(profileId, setCurrentMember, bottomSheetRef);
    }
  };

  const renderChatFooter = () => {
    return messages.length < 1 ? (
      <ScrollView
        horizontal={true}
        contentContainerStyle={styles.bottomshortlistMessage}
        showsHorizontalScrollIndicator={false}
      >
        {ShortcutMessages?.map((item, index) => (
          <TouchableOpacity
            onPress={() => addMessageToTextInput({ msg: item.msg })}
            style={styles.shortCutMessageView}
            key={index}
          >
            <Text h12 textDark1>
              {item.msg}
            </Text>
          </TouchableOpacity>
        ))}
      </ScrollView>
    ) : (
      <ScrollView
        horizontal={true}
        contentContainerStyle={styles.bottomshortlistMessage}
        showsHorizontalScrollIndicator={false}
      />
    );
  };

  const renderComposer = (props) => {
    return (
      <Composer
        {...props}
        textInputStyle={styles.customComposer}
        text={userMessage}
        placeholder="Enter your message"
      />
    );
  };

  const renderAvatar = (props) => {
    const uri = props.currentMessage.user.avatar || Images.fallBackUrl;

    return (
      <TouchableOpacity
        onPress={() => {
          handleMemberProfile(props.currentMessage.user._id);
          logEvent("Group Chat - View Profile", {
            [GROUP_ID]: chatId,
            [SOURCE]: "Profile Photo",
          });
        }}
        activeOpacity={0.8}
      >
        <CustomFastImage
          uri={uri}
          style={styles.userAvatarIcon} // your custom style object
        />
      </TouchableOpacity>
    );
  };

  const onReportMessage = () => {
    setIsVisible(!isVisible);
    Services.ChatServices.updateReportMessage(
      user?.uid,
      messageId,
      chatId,
      reportMsg,
      senderID
    );
    setTimeout(() => {
      setIsVisibleReport(!isVisibleReport);
    }, 500);
  };
  const unBlockFriend = useCallback(() => {
    Services.UserServices.updateReportUser(user.uid, blockFriendId.id, false);
    logEvent("Private Chat - Create");
    setisVisibleBlockUser(!isVisibleBlockUser);
  });

  return (
    <View style={styles.imageBackground}>
      <CustomFastImage
        uri={background ?? Images.defaultBackground}
        style={styles.blurBackground}
      />
      <View style={styles.overlayView} />
      <StatusBar style="light" />
      <ChatHeader
        leftIcon={Images.backIcon}
        onBackPress={() => navigation.navigate(Screens.HOME_SCREEN)}
        headerImage={image}
        chatType={chatType}
        title={friendName}
        groupName={groupName}
        activityName={activityName}
        avatar={
          isGroupChat && (
            <Avatarlist
              data={Faces}
              numFaces={2}
              circleSize={13}
              backgroundColor={Color.black_20}
              overflowLabelStyle={styles.overflowLabelStyle}
              onAvatarPress={() => {
                groupMemberRef?.current?.expand();
                logEvent("Group Chat - View Members", { [GROUP_ID]: chatId });
              }}
            />
          )
        }
      />

      <GiftedChat
        messages={messages}
        onSend={(msg) => onSend(msg)}
        user={{
          _id: user?.uid,
          name: userProfile?.firstName,
          avatar: userProfile?.image,
        }}
        onInputTextChanged={(text) => setUserMessage(text)}
        renderBubble={renderBubble}
        renderSend={renderSend}
        scrollToBottom
        minInputToolbarHeight={HEIGHT.h56}
        maxComposerHeight={HEIGHT.h120}
        minComposerHeight={HEIGHT.h40}
        alignTop
        renderInputToolbar={renderInputToolbar}
        text={userMessage}
        renderUsernameOnMessage={isGroupChat}
        keyboardShouldPersistTaps="never"
        textInputStyle={styles.textInput}
        placeholderTextColor={Color.text_dark4}
        style={{ flex: 1 }}
        renderChatFooter={renderChatFooter}
        renderComposer={renderComposer}
        alwaysShowSend={true}
        renderAvatar={renderAvatar}
        showUserAvatar={true}
        forceGetKeyboardHeight={false}
        onLongPress={() => onReportAdd()}
        renderFooter={() => {
          return typingCount > 0 ? (
            <Row style={styles.typingContainer}>
              {typingAvatars?.map((avatarItem) => {
                const uri = avatarItem?.avatar || Images.fallBackUrl;
                return (
                  <CustomFastImage
                    key={avatarItem?.id}
                    uri={uri}
                    style={styles.typingAvatar}
                  />
                );
              })}
              <Text hb12 black style={styles.typingText}>
                {typingMessage}
              </Text>
            </Row>
          ) : null;
        }}
      />
      <AlertBox isVisibleModal={isVisible}>
        <TouchableOpacity style={styles.modelBox} onPress={onReportMessage}>
          <Text h17 black>
            Report Message
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
      <AlertBox isVisibleModal={isVisibleReport}>
        <Text hb17 black center marginB-5 marginT-16>
          Message Reported
        </Text>
        <Text h13 black center marginB-16>
          Your report has been sent. We’ll look into the matter within 24 hours.
        </Text>
        <View style={styles.border} />
        <TouchableOpacity
          style={styles.modelBox}
          onPress={() => setIsVisibleReport(!isVisibleReport)}
        >
          <Text hb17 blue center>
            OK
          </Text>
        </TouchableOpacity>
      </AlertBox>
      <BottomSheet
        ref={groupMemberRef}
        index={-1}
        snapPoints={groupMemberSnapPoints}
        handleComponent={null}
        backdropComponent={renderBackdrop}
        backgroundStyle={styles.sheetBackgroundStyle}
      >
        <View style={styles.sheetStyle}>
          <GradientHeader
            title="Group Members"
            rightIcon={Images.cross}
            rightOnPress={() => groupMemberRef.current?.close()}
          />
          <BottomSheetFlatList
            showsVerticalScrollIndicator={false}
            keyExtractor={(item) => item.id}
            data={members}
            renderItem={({ item }) => (
              <MemberCard
                memberId={item?.id}
                memberImage={item?.avatar}
                memberFirstName={item?.name}
                memberLastName={item?.memberLastName ?? ""}
                workingProfession={item?.profession}
                onPress={() => {
                  handleMemberProfile(item?.id);
                  logEvent("Group Chat - View Profile", {
                    [GROUP_ID]: chatId,
                    [SOURCE]: "Member List",
                  });
                }}
                groupId={chatId}
                reportedUserList={reportedUserList}
              />
            )}
            ItemSeparatorComponent={() => <View style={styles.line} />}
            ListFooterComponent={() => <View style={{ height: HEIGHT.h120 }} />}
          />
          <View style={styles.doneButton}>
            <TouchableOpacity
              onPress={() => {
                setVisible(true);
              }}
            >
              <TextGradientWrapper style={{ height: SPACING.h50 }}>
                <Text hb16 style={{ textAlign: "center" }}>
                  Leave Group
                </Text>
              </TextGradientWrapper>
            </TouchableOpacity>

            <Button
              type={"primary"}
              size={"large"}
              text={"Done"}
              round={12}
              onPress={() => groupMemberRef.current?.close()}
            />
          </View>
        </View>
      </BottomSheet>
      <BottomSheet
        ref={bottomSheetRef}
        index={-1}
        snapPoints={snapPoints}
        enablePanDownToClose={true}
        style={{ paddingBottom: 200 }}
        handleComponent={null}
        backgroundStyle={styles.sheetBackgroundStyle}
        backdropComponent={renderBackdrop}
      >
        <BottomSheetProfile
          onClose={() => {
            bottomSheetRef.current?.close();
          }}
          userName={currentMember?.name}
          userImage={currentMember?.image}
          profession={`${currentMember?.profession}${
            currentMember?.profession && currentMember?.age && ","
          } ${currentMember?.age}`}
          looking={currentMember?.looking.toString()}
          bio={currentMember?.bio}
          LookingOption={currentMember?.interest}
          currentMemberId={currentMember?.id}
          groupId={chatId}
          reportedUserList={reportedUserList}
        />
      </BottomSheet>
      <CustomPicker
        visible={visible}
        data={leaveGroupOptions}
        initialValue={option}
        numberOfVisibleRows={3}
        onCancelText={"Cancel"}
        onCancel={closeModal}
        backPress={closeModal}
        onDoneText={"Done"}
        onDone={async () => {
          closeModal();
          const res = await Services.GroupServices.leaveGroup(
            user.uid,
            chatId,
            option
          );
          if (res !== "failed") {
            navigation.goBack();
          }
        }}
        onChange={(value) => {
          setOption(value);
        }}
      />
      <AlertBox isVisibleModal={isVisibleBlockUser}>
        <Text hb16 black center marginV-16>
          User is Blocked
        </Text>
        <Text h16 black center marginB-30>
          Unblock {friendName} to send a message
        </Text>
        <View style={styles.alertContainer}>
          <TouchableOpacity
            onPress={() => setisVisibleBlockUser(!isVisibleBlockUser)}
          >
            <Text h16 black>
              Cancel
            </Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={unBlockFriend}>
            <Text h16 primary_main>
              Unblock
            </Text>
          </TouchableOpacity>
        </View>
      </AlertBox>
    </View>
  );
};

const mapStateToProps = (state) => ({
  messages: state.chatReducer.messages,
  currentMembers: state.chatReducer.members,
  typingStatus: state.chatReducer.typingStatus,
  userProfile: state.userReducer.userProfile,
  reportedUserList: state.userReducer.reportedUserList,
});

export default connect(mapStateToProps, {
  setGroupChatMessages,
  setGroupChatWhoTyping,
  setCurrentMemberData,
  setGroupChatMembers,
})(ChatScreen);
