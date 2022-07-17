import {
  SET_GROUP_CHAT_MESSAGES,
  SET_GROUP_CHAT_TYPING,
  SET_GROUP_MEMBERS,
} from "./Types";
import { realDb, ref, onValue } from "@libraries/firebase";
import { GROUP_CHAT_REF } from "@constants/collection";
import { Images } from "@assets/";

export const setGroupChatMessages = (chatId) => {
  return async (dispatch) => {
    const messageRef = ref(realDb, `${GROUP_CHAT_REF}/${chatId}/messages`);
    onValue(messageRef, (snapshot) => {
      let messagesList = [];
      snapshot.forEach((documentSnapshot) => {
        if (documentSnapshot.val()["message"]) {
          const messageId = documentSnapshot.key;
          const unixTime = documentSnapshot.val()["ts"];
          const convertedDateTime = new Date(unixTime * 1000);

          messagesList.push({
            _id: Math.random(),
            messageId: messageId,
            text: documentSnapshot.val()["message"],
            createdAt: convertedDateTime,
            user: {
              _id: documentSnapshot.val()["sid"],
              name: documentSnapshot.val()["name"],
              avatar: documentSnapshot.val()["avatar"],
            },
            timestamp: documentSnapshot.val()["ts"],
          });
        }
      });
      dispatch({
        type: SET_GROUP_CHAT_MESSAGES,
        payload: messagesList.reverse(),
      });
    });
  };
};

export const setGroupChatWhoTyping = (chatId) => {
  return async (dispatch) => {
    const typingRef = ref(realDb, `${GROUP_CHAT_REF}/${chatId}/typing`);
    onValue(typingRef, (snapshot) => {
      let userTypingList = [];
      snapshot.forEach((documentSnapshot) => {
        userTypingList.push({
          id: documentSnapshot.key,
          typing: documentSnapshot.val(),
        });
      });
      dispatch({
        type: SET_GROUP_CHAT_TYPING,
        payload: userTypingList,
      });
    });
  };
};

export const setGroupChatMembers = (chatId) => {
  return async (dispatch) => {
    const groupRef = ref(realDb, `${GROUP_CHAT_REF}/${chatId}/UserList`);
    onValue(groupRef, (snapshot) => {
      let memberList = [];
      snapshot.forEach((documentSnapshot) => {
        memberList.push({
          id: documentSnapshot.val()["id"],
          token: documentSnapshot.val()["token"] ?? "",
        });
      });
      dispatch({
        type: SET_GROUP_MEMBERS,
        payload: memberList,
      });
    });
  };
};
