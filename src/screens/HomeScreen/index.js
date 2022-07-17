import {
  View,
  ImageBackground,
  Image,
  TouchableOpacity,
  FlatList,
  Alert,
} from "react-native";
import React, {
  useState,
  useRef,
  useMemo,
  useCallback,
  useEffect,
} from "react";
import { Text } from "react-native-ui-lib";
import BottomSheet, {
  BottomSheetBackdrop,
  BottomSheetFlatList,
  BottomSheetScrollView,
} from "@gorhom/bottom-sheet";
import * as Contacts from "expo-contacts";

import TopTab from "@common/Tab";
import Button from "@common/Button";
import LinearGradientWrapper from "@common/LinearGradientWrapper";
import Row from "@common/Row";
import { Images } from "../../../../assets";
import { styles } from "./styles";
import { SPACING } from "@theme/constants";
import GradientHeader from "@common/GradientHeader";
import ActivityCard from "@common/ActivityCard";
import AddActivityCard from "@common/AddActivityCard";
import ActivityCheckbox from "@common/ActivityCheckbox";
import Color from "@theme/colors";
import { ActivityIndicator } from "react-native-paper";
import PersonalChatCard from "@common/PersonalChatCard";
import ContactCard from "@common/ContactCard";
import { Screens } from "@constants/";
import FriendRequestCard from "@common/FriendRequestCard";
import { connect } from "react-redux";
import UserGrouplist from "@common/UserGroupList";
import TextGradientWrapper from "@common/TextGradientWrapper";
import { Services } from "@services/";
import { auth } from "@libraries/firebase";
import CustomFastImage from "@common/CustomFastImage";
import {
  getCurrentLocation,
  getPushNoticationToken,
  logEvent,
  logUserProperties,
} from "@utils/helper";
import {
  setUserContacts,
  setSentRequestsUsersId,
  setReceivedFriendRequests,
  setFriendList,
  setUserGroupChats,
  setSelectedActivity,
  setUserLocation,
  setPushToken,
  getReportedUserList,
} from "@actions/User";
import { setContactsList } from "@actions/ContactList";
import NextCard from "@common/NextCard";
import { ACTIVITIES, SOURCE } from "@constants/amplitude";

const HomeScreen = ({
  navigation,
  userProfile,
  activities,
  friendRequestsList,
  friendList,
  groupChats,
  selectedActivities,
  contactList,
  setUserContacts,
  setSentRequestsUsersId,
  setReceivedFriendRequests,
  setFriendList,
  setUserGroupChats,
  setSelectedActivity,
  setContactsList,
  setUserLocation,
  getReportedUserList,
}) => {
  const [tab, setTab] = useState("my groups");
  const [index, setIndex] = useState(0);
  const [status, setStatus] = useState(false);
  const [undoSearch, setUndoSearch] = useState(true);
  const [isLoading, setIsLoading] = useState(false);
  const [contacts, setContacts] = useState([]);
  const [isImporting, setIsImporting] = useState(false);
  const findGroupRef = useRef(null);
  const findGroupSnapPoints = useMemo(() => ["77%"], []);
  const activitySheetRef = useRef(null);
  const activitySheetSnapPoints = useMemo(() => ["90%"], []);
  const friendRequestRef = useRef(null);
  const friendRequestSnapPoints = useMemo(() => ["90%"]);
  const searchGroupSnapPoints = useMemo(() => ["89%"], []);
  const user = auth?.currentUser;
  const notificationCount = friendList?.filter(
    (fItem) => fItem?.count > 0
  ).length;
  const activity = selectedActivities ?? [];
  const activityNames = activity?.map((aItem) => aItem.name);

  const filteredFriendRequest = friendRequestsList.filter((request) =>
    friendList.every((friend) => friend.friendId !== request.sid)
  );
  const filterContactList = contactList
    .filter((item) => item.id == user?.uid)
    .map((data) => data.data);
  const contactListVal = filterContactList[0];

  useEffect(() => {
    getReportedUserList(user?.uid);
    setUserContacts(user?.uid);
    setSentRequestsUsersId(user?.uid);
    setReceivedFriendRequests(user?.uid);
    setFriendList(user?.uid);
    setUserGroupChats(user?.uid);
    Services.GroupServices.alreadySearchingForGroup(
      user?.uid,
      setStatus,
      setUndoSearch,
      setIsLoading
    );
  }, []);

  useEffect(() => {
    logUserProperties({
      Groups: groupChats?.length,
      Friends: friendList?.length,
    });
  }, [friendList, groupChats]);

  useEffect(() => {
    const updateLocationNotification = async () => {
      const location = await getCurrentLocation();
      if (location !== null) {
        Services.UserServices.updateUserLocation(user.uid, location);
        setUserLocation(location);
      }
      const token = await getPushNoticationToken();
      setPushToken(token);

      Services.UserServices.updateUserPushToken(user.uid, token);
    };
    updateLocationNotification();
  }, []);

  const onExpand = () => {
    findGroupRef.current?.expand();
  };

  const closeSheet = () => {
    findGroupRef.current?.close();
  };

  const handleAddActivity = () => {
    if (status) {
      Alert.alert(
        "Change activities",
        "Do you really want to stop searching?",
        [
          {
            text: "No",
          },
          {
            text: "Yes",
            onPress: () => {
              Services.GroupServices.undoGroupChatRequest(
                user?.uid,
                userProfile,
                activity
              );
              logEvent("New Group - Stop Searching", {
                [ACTIVITIES]: activityNames,
              });
            },
          },
        ]
      );
    } else {
      activitySheetRef.current?.expand();
      logEvent("New Group - Enter Activity List");
    }
  };

  const closeActivitySheet = () => {
    activitySheetRef.current?.close();
    logEvent("New Group - Exit Activity List");
  };

  const enableSearchHandler = () => {
    setUndoSearch(false);
    setIsLoading(true);
    logEvent("New Group - Find Group", { [ACTIVITIES]: activityNames });
  };

  const handleMatchingGroup = async () => {
    if (!activity.length) {
      alert("Please select atleast 1 activity!");
      return;
    }
    enableSearchHandler();

    if (userProfile.token === "") {
      const token = await getPushNoticationToken();
      Services.UserServices.updateUserPushToken(user.uid, token);
      setPushToken(token);
    }

    if (userProfile.location === undefined || userProfile.location === null) {
      const location = await getCurrentLocation();

      if (location === undefined || location === null) {
        return;
      }

      setUserLocation(location);
      Services.GroupServices.createGroupChatRequest(
        user?.uid,
        userProfile,
        activity
      );
      Services.UserServices.updateUserLocation(user.uid, location);
      closeSheet();
      setStatus(true);
      setTimeout(() => {
        onExpand();
      }, 1000);
    } else {
      enableSearchHandler();
      Services.GroupServices.createGroupChatRequest(
        user?.uid,
        userProfile,
        activity
      );
      closeSheet();
      setStatus(true);
      setTimeout(() => {
        onExpand();
      }, 1000);
    }
  };

  const handleUndo = () => {
    logEvent("New Group - Undo");
  };

  const handleImportContacts = async () => {
    setIsImporting(true);
    logEvent("Social - Import Contacts");
    const { status } = await Contacts.requestPermissionsAsync();
    if (status === "granted") {
      const { data } = await Contacts.getContactsAsync({
        fields: [Contacts.Fields.PhoneNumbers],
      });

      if (data?.length > 0) {
        const savedContacts = data?.filter(
          (dItem) =>
            dItem?.phoneNumbers?.length && typeof dItem.name !== "undefined"
        );

        setContacts(savedContacts);
        setContactsList(savedContacts, user?.uid);
        Services.UserServices.saveContacts(user?.uid, savedContacts);
      } else {
        alert("You have no contacts to import!");
      }
      setIsImporting(false);
      return;
    }
    setIsImporting(false);
    alert("Permission to access contacts is required!");
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

  const renderGroupAndSearch = () => {
    return (
      <View
        style={[
          styles.groupSearch,
          {
            justifyContent:
              status || groupChats?.length ? "space-between" : "flex-end",
          },
        ]}
      >
        {groupChats?.length ? (
          <UserGrouplist
            data={groupChats?.filter((gItem) => gItem?.isLeft === false)}
            navigation={navigation}
            style={{ marginTop: SPACING.v20 }}
          />
        ) : status ? (
          <View>
            <Image source={Images.upArrow} style={styles.upArrowImage} />
            <Image source={Images.findGroupText} style={styles.findGroupText} />
          </View>
        ) : (
          <>
            <Image source={Images.groupText} style={styles.groupTextImage} />
            <Image source={Images.downArrow} style={styles.downArrowImage} />
          </>
        )}

        {status ? (
          <LinearGradientWrapper style={styles.gradientStyle}>
            <Row style={{ justifyContent: "space-between" }}>
              <Row>
                <ActivityIndicator
                  size={"small"}
                  animating={true}
                  color={Color.white}
                />
                <View style={{ marginLeft: SPACING.h12 }}>
                  <Text hb14 white>
                    SEARCHING FOR A GROUP
                  </Text>
                  <Text h12 white style={{ opacity: 0.6 }}>
                    We’re looking for your best matches
                  </Text>
                </View>
              </Row>
              <Button
                type={"outline"}
                size={"tiny"}
                text={"Manage"}
                round={15}
                onPress={() => {
                  onExpand();
                  logEvent("New Group - Manage", {
                    [ACTIVITIES]: activityNames,
                  });
                }}
              />
            </Row>
          </LinearGradientWrapper>
        ) : (
          <Button
            text={"Find a new group"}
            size={"medium"}
            type={"primary"}
            round={26}
            icon={Images.weekend}
            onPress={() => {
              onExpand();
              logEvent("New Group - Start");
            }}
            style={{ marginBottom: SPACING.v110 }}
          />
        )}
      </View>
    );
  };

  const renderFindGroup = () => {
    return (
      <View style={styles.doneButton}>
        <Text h12 style={styles.bottomsheetText}>
          We’ll match you with the most compatible people who are interested in
          one of these activities.
        </Text>
        <Button
          isLoading={isLoading}
          type={!undoSearch ? "outline" : "primary"}
          size={"large"}
          text={!undoSearch ? "Undo" : "Match me with a group"}
          round={12}
          onPress={!undoSearch ? handleUndo : handleMatchingGroup}
          outlineColor={!undoSearch ? Color.primary_main : Color.transparent}
        />
      </View>
    );
  };

  const renderSearchGroup = () => {
    return (
      <View style={styles.searchGroupNextContainer}>
        <NextCard />
      </View>
    );
  };

  const renderMyPeopleHeader = useMemo(() => {
    return (
      <>
        {filteredFriendRequest.length > 0 && (
          <TouchableOpacity
            onPress={() => {
              friendRequestRef?.current?.expand();
              logEvent("Social - View Friend Requests");
            }}
            activeOpacity={0.6}
          >
            <LinearGradientWrapper style={styles.friendRequestContainer}>
              <Row style={{ justifyContent: "space-between" }}>
                <Row>
                  <Image source={Images.friends} style={styles.friendIcon} />
                  <Text hb16 white>
                    {filteredFriendRequest.length} friend requests
                  </Text>
                </Row>
                <Image
                  source={Images.arrowRight}
                  style={styles.arrowRightIcon}
                />
              </Row>
            </LinearGradientWrapper>
          </TouchableOpacity>
        )}
        <View style={styles.innerContainer}>
          <FlatList
            data={friendList}
            renderItem={({ item }) => (
              <PersonalChatCard
                name={item?.peopleName}
                lastMessage={item?.content}
                image={item?.peopleImage}
                msgCount={item?.count}
                onPress={() => {
                  navigation.navigate(Screens.CHAT_SCREEN, {
                    chatType: "oneOnOne",
                    chatId: item.id,
                    friendName: item.peopleName,
                    image: item?.peopleImage,
                  });
                  logEvent("Private Chat - Open");
                }}
              />
            )}
            keyExtractor={(item) => item?.id.toString()}
            showsVerticalScrollIndicator={false}
            ItemSeparatorComponent={() => <View style={styles.separator} />}
            contentContainerStyle={styles.listContainer}
          />
        </View>
        {contactListVal?.length > 0 && (
          <Text hb16 black style={styles.contactHeader}>
            All Contacts
          </Text>
        )}
      </>
    );
  });

  return (
    <View style={styles.common}>
      <ImageBackground
        source={Images.background}
        resizeMode="cover"
        style={styles.common}
      >
        <Row style={styles.header}>
          <Text hb28>
            Welcome,{"\n"}
            {userProfile.firstName}
          </Text>
          <TouchableOpacity
            onPress={() => {
              navigation.navigate(Screens.PROFILE_SCREEN);
              logEvent("Go to - Profile Section");
            }}
          >
            <LinearGradientWrapper style={styles.profileBorder}>
              {userProfile.image ? (
                <CustomFastImage
                  uri={userProfile.image}
                  style={styles.profile}
                />
              ) : (
                <Image source={Images.userAvatar} style={styles.profile} />
              )}
            </LinearGradientWrapper>
          </TouchableOpacity>
        </Row>
        <TopTab
          tabNames={["My Groups", "My People"]}
          initialIndex={index}
          setIndex={setTab}
          style={{ alignSelf: "center" }}
          notificationCount={notificationCount}
        />
        {tab === "my groups" && renderGroupAndSearch()}
        {tab === "my people" && (
          <View style={styles.people}>
            <View style={styles.whiteContainer}>
              <FlatList
                data={contactListVal}
                renderItem={({ item, index }) => (
                  <ContactCard item={item} index={index} />
                )}
                keyExtractor={(item) => item.id.toString()}
                showsVerticalScrollIndicator={false}
                ItemSeparatorComponent={() => <View style={styles.separator} />}
                contentContainerStyle={styles.listContainer}
                ListEmptyComponent={() => (
                  <View style={styles.peopleCard}>
                    <Image
                      source={Images.textingPeople}
                      style={styles.cardImage}
                    />
                    <Text hb16>It’s always more fun with a +1</Text>
                    <Text h14 textDark3 style={styles.cardDescriptionText}>
                      4/5 people find it more fun to bring a friend along.
                    </Text>
                    <Button
                      text={isImporting ? "Importing" : "Import Contacts"}
                      size={"block"}
                      type={"primary"}
                      round={12}
                      style={{ marginBottom: SPACING.v12 }}
                      onPress={handleImportContacts}
                      isLoading={isImporting}
                    />
                  </View>
                )}
                ListHeaderComponent={renderMyPeopleHeader}
                initialNumToRender={7}
              />
            </View>
          </View>
        )}
      </ImageBackground>
      <BottomSheet
        ref={findGroupRef}
        index={-1}
        snapPoints={status ? searchGroupSnapPoints : findGroupSnapPoints}
        handleComponent={null}
        backdropComponent={renderBackdrop}
        backgroundStyle={styles.sheetBackgroundStyle}
      >
        <View style={styles.sheetStyle}>
          <GradientHeader
            title={status ? "Searching for a group..." : "Find a new group"}
            rightIcon={Images.cross}
            rightOnPress={closeSheet}
          />
          <BottomSheetScrollView
            contentContainerStyle={styles.scrollContainer}
            showsVerticalScrollIndicator={false}
          >
            <View style={styles.titleHeader}>
              <TextGradientWrapper>
                <Text hb14>I want to try one of these...</Text>
              </TextGradientWrapper>
            </View>
            {!activity[0] ? (
              isLoading ? null : (
                <AddActivityCard onPress={handleAddActivity} />
              )
            ) : (
              <TouchableOpacity onPress={handleAddActivity}>
                <ActivityCard
                  icon={activity[0].icon}
                  name={activity[0].name}
                  interested={activity[0].interested}
                  friend={activity[0].friend}
                />
              </TouchableOpacity>
            )}

            {!activity[1] ? (
              isLoading ? null : (
                <AddActivityCard onPress={handleAddActivity} />
              )
            ) : (
              <TouchableOpacity onPress={handleAddActivity}>
                <ActivityCard
                  icon={activity[1].icon}
                  name={activity[1].name}
                  interested={activity[1].interested}
                  friend={activity[1].friend}
                />
              </TouchableOpacity>
            )}

            {!activity[2] ? (
              isLoading ? null : (
                <AddActivityCard onPress={handleAddActivity} />
              )
            ) : (
              <TouchableOpacity onPress={handleAddActivity}>
                <ActivityCard
                  icon={activity[2].icon}
                  name={activity[2].name}
                  interested={activity[2].interested}
                  friend={activity[2].friend}
                />
              </TouchableOpacity>
            )}
            {status ? renderSearchGroup() : renderFindGroup()}
          </BottomSheetScrollView>
          {status && (
            <Button
              type={"primary"}
              size={"large"}
              text={"Done"}
              round={12}
              style={[styles.doneButton, { bottom: SPACING.v20 }]}
              onPress={closeSheet}
            />
          )}
        </View>
      </BottomSheet>
      <BottomSheet
        ref={activitySheetRef}
        index={-1}
        snapPoints={activitySheetSnapPoints}
        handleComponent={null}
        backdropComponent={renderBackdrop}
        backgroundStyle={styles.sheetBackgroundStyle}
      >
        <View style={styles.sheetStyle}>
          <GradientHeader
            title="Pick upto 3 activities"
            leftIcon={Images.backIcon}
            leftOnPress={closeActivitySheet}
          />
          <ActivityCheckbox data={activities} />
          <Button
            type={"primary"}
            size={"large"}
            text={"Done"}
            round={12}
            style={styles.doneButton}
            onPress={() => {
              const filteredActivity = activities.filter(
                (item) => item.isShow === true
              );
              setSelectedActivity(filteredActivity);
              closeActivitySheet();
            }}
          />
        </View>
      </BottomSheet>
      <BottomSheet
        ref={friendRequestRef}
        index={-1}
        handleComponent={null}
        snapPoints={friendRequestSnapPoints}
        backgroundStyle={styles.sheetBackgroundStyle}
      >
        <View style={styles.sheetStyle}>
          <GradientHeader
            title="Friend Requests"
            rightIcon={Images.cross}
            rightOnPress={() => friendRequestRef?.current?.close()}
          />
          <BottomSheetFlatList
            showsVerticalScrollIndicator={false}
            keyExtractor={(item) => item.id}
            data={filteredFriendRequest}
            renderItem={({ item }) => (
              <FriendRequestCard
                memberId={item.id}
                memberImage={item.memberImage}
                memberFirstName={item.memberFirstName}
                memberLastName={item.memberLastName}
                workingProfession={item.workingProfession}
                onPressRight={async () => {
                  await Services.UserServices.acceptFriendRequest(
                    user.uid,
                    item.id
                  );
                  logEvent("Social - Accept Friend Request", {
                    [SOURCE]: "Friend Requests List",
                  });
                }}
                onPressLeft={async () => {
                  await Services.UserServices.ignoreFriendRequest(
                    user.uid,
                    item.id
                  );
                  logEvent("Social - Ignore Friend Request", {
                    [SOURCE]: "Friend Requests List",
                  });
                }}
              />
            )}
            ItemSeparatorComponent={() => <View style={styles.line} />}
          />
          <Button
            text={"Done"}
            size={"large"}
            type={"primary"}
            round={12}
            style={styles.doneButton}
            onPress={() => friendRequestRef?.current?.close()}
          />
        </View>
      </BottomSheet>
    </View>
  );
};

const mapStateToProps = (state) => ({
  userProfile: state.userReducer.userProfile,
  activities: state.settingsReducer.activities,
  friendRequestsList: state.userReducer.friendRequests,
  friendList: state.userReducer.friendList,
  groupChats: state.userReducer.groupChats,
  selectedActivities: state.userReducer.selectedActivities,
  contactList: state.contactListReducer.contactList,
});

export default connect(mapStateToProps, {
  setUserContacts,
  setSentRequestsUsersId,
  setReceivedFriendRequests,
  setFriendList,
  setUserGroupChats,
  setSelectedActivity,
  setContactsList,
  setUserLocation,
  getReportedUserList,
})(HomeScreen);
