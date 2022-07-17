import { Services } from "@services/";
import {
  SET_DOB,
  SET_HIGHLIGHT,
  SET_GENDER,
  SET_LIFE_JOURNEY,
  SET_PROFESSION,
  SET_PUSH_TOKEN,
  SET_USER_BIO,
  SET_USER_IMAGE,
  SET_USER_INTEREST,
  SET_USER_LOCATION,
  SET_USER_NAME,
  SET_USER_PROFILE,
  SET_USER_CONTACTS,
  SET_REQUESTED_USERS_ID,
  SET_FRIEND_REQUEST_LIST,
  SET_FRIEND_LIST,
  SET_USER_GROUP_CHATS,
  CLEAR_USER_PROFILE,
  SET_SELECTED_ACTIVITY,
  GET_REPORTED_USER_LIST,
} from "./Types";
import {
  collection,
  db,
  onSnapshot,
  query,
  where,
  doc,
  realDb,
  ref,
  onValue,
} from "@libraries/firebase";

import {
  FRIENDS,
  GROUPS,
  GROUP_CHATS,
  GROUP_CHAT_REF,
  ONE_ON_ONE,
  PROFILE,
  REPORTS,
  REQUEST_RECEIVED,
  USERS,
  USER_PUBLIC,
} from "@constants/collection";
import { formatGroupMembers, formatGroupName } from "@utils/formatting";
import { recordError } from "@utils/crashlytics";
import uuid from "react-native-uuid";

export const setUserProfile = (userId) => {
  return async (dispatch) => {
    const userInfo = await Services.UserServices.getUserInfo(userId);

    dispatch({ type: SET_USER_PROFILE, payload: userInfo });
  };
};

export const setUserName = (payload) => ({
  type: SET_USER_NAME,
  payload: payload,
});

export const setHighlight = (payload) => ({
  type: SET_HIGHLIGHT,
  payload: payload,
});

export const setDOB = (payload) => ({
  type: SET_DOB,
  payload: payload,
});

export const setGender = (payload) => ({
  type: SET_GENDER,
  payload: payload,
});

export const setUserProfession = (payload) => ({
  type: SET_PROFESSION,
  payload: payload,
});

export const setLifeJourney = (payload) => ({
  type: SET_LIFE_JOURNEY,
  payload: payload,
});

export const setUserInterest = (payload) => ({
  type: SET_USER_INTEREST,
  payload: payload,
});

export const setUserBio = (payload) => ({
  type: SET_USER_BIO,
  payload: payload,
});

export const setUserImage = (payload) => ({
  type: SET_USER_IMAGE,
  payload: payload,
});

export const setUserLocation = (payload) => ({
  type: SET_USER_LOCATION,
  payload: payload,
});

export const setSelectedActivity = (payload) => ({
  type: SET_SELECTED_ACTIVITY,
  payload: payload,
});

export const setUserContacts = (userId) => {
  return async (dispatch) => {
    const userContacts = await Services.UserServices.getContacts(userId);
    if (userContacts !== "failed") {
      let formattedContacts = [];
      Object.keys(userContacts).forEach((key, index) =>
        formattedContacts.push({
          id: index,
          name: key,
          phoneNumber: userContacts[key],
          activeTime: null,
        })
      );
      dispatch({ type: SET_USER_CONTACTS, payload: formattedContacts });
    }
  };
};

export const setPushToken = (payload) => ({
  type: SET_PUSH_TOKEN,
  payload: payload,
});

export const setSentRequestsUsersId = (userId) => {
  return async (dispatch) => {
    await Services.UserServices.getSentFriendRequests(userId, dispatch);
  };
};

export const setReceivedFriendRequests = (userId) => {
  return async (dispatch) => {
    const friendRequestQuery = query(
      collection(db, USERS, userId, REQUEST_RECEIVED),
      where("Accepted", "==", false)
    );

    onSnapshot(friendRequestQuery, (querySnapshot) => {
      const requestList = [];
      querySnapshot.forEach((snapShot) => {
        requestList.push({
          id: snapShot.data().requestId,
          memberFirstName: snapShot.data()["First Name"],
          memberLastName: snapShot.data()["Last Name"],
          memberImage: snapShot.data().image,
          sid: snapShot.data().sId,
        });
      });

      dispatch({ type: SET_FRIEND_REQUEST_LIST, payload: requestList });
    });
  };
};

export const setFriendList = (userId) => {
  return async (dispatch) => {
    const userFriendListRef = doc(db, USERS, userId, FRIENDS, FRIENDS);
    onSnapshot(userFriendListRef, (querySnapshot) => {
      const friendList = [];
      if (
        querySnapshot.exists() &&
        Object.keys(querySnapshot.data()).length > 0
      ) {
        Object.keys(querySnapshot.data()).forEach((key) => {
          const userChatQuery = query(
            collection(db, USERS, userId, ONE_ON_ONE),
            where("rId", "==", key.toString())
          );
          onSnapshot(userChatQuery, (snapShot) => {
            snapShot.forEach((res) => {
              const chatRef = ref(realDb, `${GROUP_CHAT_REF}/${res.data().id}`);
              let lastMessage = "";
              let msgCount = 0;
              let lastUpdated = 0;

              onValue(chatRef, (chatSnapshot) => {
                if (chatSnapshot.exists()) {
                  if (chatSnapshot.val()["lastMessage"]) {
                    lastMessage =
                      chatSnapshot.val()["lastMessage"]?.["message"];
                    lastUpdated = chatSnapshot.val()["lastMessage"]?.["ts"];
                  }
                  if (
                    chatSnapshot.val()["messages"] &&
                    chatSnapshot.val()["lastSeen"]
                  ) {
                    let myLastSeen =
                      chatSnapshot.val()["lastSeen"]?.[userId] ?? 0;
                    let unreadMessages = chatSnapshot.val()["messages"];
                    Object.keys(unreadMessages).forEach((key) => {
                      if (
                        myLastSeen < unreadMessages[key]?.["ts"] &&
                        userId !== unreadMessages[key]?.["sid"]
                      ) {
                        msgCount += 1;
                      }
                    });
                  }
                  const friendIndex = friendList.findIndex(
                    (fItem) => fItem?.id === res.data().id
                  );

                  if (friendIndex !== -1) {
                    friendList[friendIndex].content = lastMessage;
                    friendList[friendIndex].updated = lastUpdated;
                    friendList[friendIndex].count = msgCount;
                  } else {
                    friendList.push({
                      id: res.data().id,
                      peopleImage: querySnapshot.data()[key]["image"],
                      peopleName: querySnapshot.data()[key]["First Name"],
                      content: lastMessage,
                      count: msgCount,
                      friendId: res.data()["rId"],
                      updated: lastUpdated,
                    });
                  }

                  msgCount = 0;
                  if (friendList?.length > 1) {
                    friendList.sort((a, b) => b?.updated - a?.updated);
                  }
                  dispatch({ type: SET_FRIEND_LIST, payload: friendList });
                }
              });
            });
          });
        });
      } else {
        dispatch({ type: SET_FRIEND_LIST, payload: [] });
      }
    });
  };
};

export const setUserGroupChats = (userId) => {
  return async (dispatch) => {
    try {
      const userGroupListRef = collection(db, USERS, userId, GROUP_CHATS);

      onSnapshot(userGroupListRef, (querySnapshot) => {
        let userGroupIds = [];
        let userGroupList = [];

        querySnapshot.forEach((item) => {
          userGroupIds.push({
            id: item.id,
            isLeft: item.data()["isLeft"],
          });
        });

        userGroupIds?.forEach((uItem) => {
          const groupRef = doc(db, GROUPS, uItem?.id);
          const chatRef = ref(realDb, `${GROUP_CHAT_REF}/${uItem?.id}`);
          let lastMessage = "";
          let lastUserName = "";
          let msgCount = 0;
          let lastUpdated = 0;

          onSnapshot(groupRef, (groupSnapshot) => {
            onValue(chatRef, (snapshot) => {
              if (snapshot.exists()) {
                if (snapshot.val()["lastMessage"]) {
                  lastMessage = snapshot.val()["lastMessage"]?.["message"];
                  lastUserName = snapshot.val()["lastMessage"]?.["name"];
                  lastUpdated = snapshot.val()["lastMessage"]?.["ts"];
                }
                if (snapshot.val()["messages"] && snapshot.val()["lastSeen"]) {
                  let myLastSeen = snapshot.val()["lastSeen"]?.[userId] ?? 0;
                  let unreadMessages = snapshot.val()["messages"];
                  Object.keys(unreadMessages).forEach((key) => {
                    if (
                      myLastSeen < unreadMessages[key]?.["ts"] &&
                      userId !== unreadMessages[key]?.["sid"]
                    ) {
                      msgCount += 1;
                    }
                  });
                }

                const groupIndex = userGroupList.findIndex(
                  (userItem) => userItem?.groupId === uItem?.id
                );

                if (groupIndex !== -1) {
                  userGroupList[groupIndex].groupMessage = lastMessage;
                  userGroupList[groupIndex].lastUser = lastUserName;
                  userGroupList[groupIndex].updated = lastUpdated;
                  userGroupList[groupIndex].noOfMessage = msgCount;
                } else {
                  const actualGroupName = formatGroupName(
                    groupSnapshot.data()["groupName"]
                  );
                  userGroupList?.push({
                    groupId: groupSnapshot.id,
                    groupName: groupSnapshot.data()["groupName"],
                    actualGroupName: actualGroupName,
                    activityName: groupSnapshot.data()["groupInterest"],
                    groupMessage: lastMessage,
                    groupMembers: formatGroupMembers(
                      groupSnapshot.data()["groupMembers"]
                    ),
                    groupIcon: groupSnapshot.data()["groupPicture"],
                    lastUser: lastUserName,
                    noOfMessage: msgCount,
                    updated: lastUpdated,
                    isLeft: uItem?.isLeft,
                  });
                }
                msgCount = 0;
                if (userGroupList?.length > 1) {
                  userGroupList.sort((a, b) => b?.updated - a?.updated);
                }
                dispatch({
                  type: SET_USER_GROUP_CHATS,
                  payload: userGroupList,
                });
              }
            });
          });
        });
      });
    } catch (error) {
      recordError(error);
      console.log(error);
      return "failed";
    }
  };
};

export const setCurrentMemberData = (
  userId,
  setCurrentMember,
  bottomSheetRef
) => {
  return async () => {
    try {
      const userRef = doc(db, USERS, userId, USER_PUBLIC, PROFILE);

      onSnapshot(userRef, (querySnapshot) => {
        if (querySnapshot.exists()) {
          const userDeleted = querySnapshot.data()?.isDeleted ?? false;
          if (userDeleted) {
            alert("User no longer exists!");
            bottomSheetRef.current?.close();
            return;
          }

          setCurrentMember({
            id: userId,
            interest: querySnapshot.data()?.Interests,
            looking: querySnapshot.data()?.["Recent Activity"],
            name: querySnapshot.data()?.["First Name"],
            profession: querySnapshot.data()?.Profession?.where,
            bio: querySnapshot.data()?.Bio,
            age: querySnapshot.data()?.Age,
            image: querySnapshot.data()?.image,
          });
        }
      });
    } catch (error) {
      recordError(error);
      console.log(error);
      return "failed";
    }
  };
};

export const clearUserProfile = (payload) => ({
  type: CLEAR_USER_PROFILE,
  payload: payload,
});

export const getBlockedUserReport = (userId, profileID) => {
  return async (dispatch) => {
    await Services.UserServices.getReportedUser(userId, profileID, dispatch);
  };
};

export const getReportedUserList = (uid) => {
  return async (dispatch) => {
    const queryRef = collection(db, USERS, uid, REPORTS);
    const querySnapshot = query(queryRef, where("isBlocked", "==", true));

    onSnapshot(querySnapshot, (snapShot) => {
      let reportedUserList = [];
      snapShot.forEach((list) => {
        if (list.exists()) {
          reportedUserList.push({
            id: uuid.v4(),
            reportedUserID: list.data().reportedUserID,
          });
        }
      });
      dispatch({
        type: GET_REPORTED_USER_LIST,
        payload: reportedUserList,
      });
    });
  };
};
