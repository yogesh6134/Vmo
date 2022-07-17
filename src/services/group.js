import uuid from "react-native-uuid";
import {
  db,
  doc,
  setDoc,
  Timestamp,
  GeoPoint,
  onSnapshot,
  writeBatch,
} from "@libraries/firebase";
import {
  GROUP_CHATS,
  GROUP_CHAT_REQUESTS,
  GROUP_CHAT_REQUESTS_UPDATED,
  USERS,
} from "@constants/collection";
import { getCurrentLocation } from "@utils/helper";
import { recordError } from "@utils/crashlytics";

export const createGroupChatRequest = async (userId, userData, interests) => {
  try {
    const groupRef = doc(db, GROUP_CHAT_REQUESTS, userId);
    const filteredGroupInterest = interests.map((data) => data.name);
    const filteredUserInterest = userData.userInterest.map(
      (data) => data.label
    );
    const currentLocation = userData?.location;

    await setDoc(groupRef, {
      groupInterests: filteredGroupInterest,
      UserInterest: filteredUserInterest,
      Timestamp: Timestamp.now(),
      Location: new GeoPoint(
        currentLocation.latitude,
        currentLocation.longitude
      ),
      Age: userData.age,
      Name: userData?.firstName,
    });

    return "success";
  } catch (error) {
    recordError(error);
    console.log(error);
    return "failed";
  }
};

export const alreadySearchingForGroup = async (
  userId,
  setStatus,
  setUndoSearch,
  setIsLoading
) => {
  try {
    const groupRef = doc(db, GROUP_CHAT_REQUESTS, userId);

    onSnapshot(groupRef, (querySnapshot) => {
      if (querySnapshot.exists()) {
        setStatus(true);
        setIsLoading(true);
      } else {
        setStatus(false);
        setUndoSearch(true);
        setIsLoading(false);
      }
    });
  } catch (error) {
    recordError(error);
    console.log(error);
    return "failed";
  }
};

export const undoGroupChatRequest = async (userId, userData, interests) => {
  try {
    const batch = writeBatch(db);
    const groupRef = doc(db, GROUP_CHAT_REQUESTS, userId);
    const groupUpdatedRef = doc(db, GROUP_CHAT_REQUESTS_UPDATED, uuid.v4());
    const filteredGroupInterest = interests.map((data) => data.name);
    const filteredUserInterest = userData.userInterest.map(
      (data) => data.label
    );
    const currentLocation = userData?.location;

    batch.set(groupUpdatedRef, {
      userId: userId,
      groupInterests: filteredGroupInterest,
      UserInterest: filteredUserInterest,
      Timestamp: Timestamp.now(),
      Location: new GeoPoint(
        currentLocation.latitude,
        currentLocation.longitude
      ),
      Age: userData.age,
      Name: userData?.firstName,
    });

    batch.delete(groupRef);

    await batch.commit();
  } catch (error) {
    recordError(error);
    console.log(error);
    return "failed";
  }
};

export const leaveGroup = async (userId, chatId, reason) => {
  try {
    const groupDocRef = doc(db, USERS, userId, GROUP_CHATS, chatId);
    await setDoc(
      groupDocRef,
      {
        isLeft: true,
        reason: reason,
      },
      { merge: true }
    );
  } catch (error) {
    recordError(error);
    console.log(error);
    return "failed";
  }
};
