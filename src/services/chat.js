import moment from "moment";

import {
  realDb,
  ref,
  push,
  update,
  onDisconnect,
  Timestamp,
  set,
} from "@libraries/firebase";
import { GROUP_CHAT_REF } from "@constants/collection";
import { recordError } from "@utils/crashlytics";

export const sendGroupMessage = (chatId, messages, userId, userData) => {
  try {
    const chatRef = ref(realDb, `${GROUP_CHAT_REF}/${chatId}/messages`);

    push(chatRef, {
      avatar: userData?.image,
      message: messages[0].text,
      name: userData?.firstName,
      sid: userId,
      ts: moment().unix(),
    });
  } catch (error) {
    recordError(error);
    console.log(error);
    return "failed";
  }
};

export const toggleTypingStatus = async (chatId, userId, value) => {
  try {
    const typingRef = ref(realDb, `${GROUP_CHAT_REF}/${chatId}/typing`);

    update(typingRef, {
      [userId]: value,
    });
  } catch (error) {
    recordError(error);
    console.log(error);
    return "failed";
  }
};

export const updateTypingWhenOffline = async (chatId, userId) => {
  try {
    const typingRef = ref(realDb, `${GROUP_CHAT_REF}/${chatId}/typing`);
    onDisconnect(typingRef).update({
      [userId]: false,
    });
  } catch (error) {
    recordError(error);
    console.log(error);
    return "failed";
  }
};

export const updateLastSeenWhenOffline = async (chatId, userId) => {
  try {
    const seenRef = ref(realDb, `${GROUP_CHAT_REF}/${chatId}/lastSeen`);

    onDisconnect(seenRef).update({
      [userId]: moment().unix(),
    });
  } catch (error) {
    recordError(error);
    console.log(error);
    return "failed";
  }
};

export const updateLastSeenWhenLeaving = async (chatId, userId) => {
  try {
    const seenRef = ref(realDb, `${GROUP_CHAT_REF}/${chatId}/lastSeen`);

    update(seenRef, {
      [userId]: moment().unix(),
    });
  } catch (error) {
    recordError(error);
    console.log(error);
    return "failed";
  }
};

export const updateLastMessage = async (chatId, messages, userId, name) => {
  try {
    const lastMsgRef = ref(realDb, `${GROUP_CHAT_REF}/${chatId}/lastMessage`);

    update(lastMsgRef, {
      message: messages[0].text,
      name: name,
      sid: userId,
      ts: moment().unix(),
    });
  } catch (error) {
    recordError(error);
    console.log(error);
    return "failed";
  }
};

export const updateReportMessage = async (
  userId,
  messageId,
  chatId,
  messages,
  senderID
) => {
  try {
    const lastReportRef = ref(
      realDb,
      `${GROUP_CHAT_REF}/${chatId}/reports/${userId}/${messageId}`
    );
    set(lastReportRef, {
      message: messages,
      Reason: "Spam",
      sid: senderID,
    });
  } catch (error) {
    recordError(error);
    console.log(error);
    return "failed";
  }
};
