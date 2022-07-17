import uuid from "react-native-uuid";
import moment from "moment";
import { formatUserInterest, formatUserJourney } from "@utils/formatting";
import {
  db,
  doc,
  addDoc,
  updateDoc,
  collection,
  setDoc,
  auth,
  getDoc,
  getDocs,
  writeBatch,
  Timestamp,
  GeoPoint,
  onSnapshot,
  where,
  query,
  deleteDoc,
} from "../libraries/firebase";
import {
  USERS,
  USER_PRIVATE,
  USER_PUBLIC,
  PROFILE,
  CONTACTS,
  REQUEST_SENT,
  REPORTS,
  REQUEST_RECEIVED,
} from "@constants/collection";
import { SET_REQUESTED_USERS_ID, GET_REPORTED_USER } from "@actions/Types";
import { recordError } from "@utils/crashlytics";
import { logUserProperties, logUserProperty } from "@utils/helper";
import { async } from "@firebase/util";

export const checkUserExist = async (userId) => {
  try {
    const publicUserDocRef = doc(db, USERS, userId, USER_PUBLIC, PROFILE);
    const privateUserDocRef = doc(db, USERS, userId, USER_PRIVATE, PROFILE);

    const res1 = await getDoc(publicUserDocRef);
    const res2 = await getDoc(privateUserDocRef);

    return res1.exists() && res2.exists();
  } catch (error) {
    recordError(error);
    console.log(error);
    return "failed";
  }
};

export const getUserInfo = async (userId) => {
  try {
    const publicUserDocRef = doc(db, USERS, userId, USER_PUBLIC, PROFILE);
    const privateUserDocRef = doc(db, USERS, userId, USER_PRIVATE, PROFILE);

    const res1 = await getDoc(publicUserDocRef);
    const res2 = await getDoc(privateUserDocRef);

    const publicUserData = res1.data();
    const privateUserData = res2.data();
    // const timestampConvered = new Date(privateUserData["DOB"]);

    return {
      firstName: publicUserData["First Name"],
      lastName: publicUserData["Last Name"],
      // dob: timestampConvered,
      dob: privateUserData["DOB"].toDate(),
      age: publicUserData["Age"],
      gender: privateUserData["Gender"],
      bio: publicUserData["Bio"],
      image: publicUserData["image"],
      professionData: {
        profession: publicUserData["Profession"]["what"],
        description: publicUserData["Profession"]["where"],
      },
      lifeJourneyData: formatUserJourney(privateUserData["Life Journey"]),
      userInterest: formatUserInterest(publicUserData["Interests"]),
      location: privateUserData.Location,
      token: privateUserData.PushToken,
    };
  } catch (error) {
    recordError(error);
    console.log(error);
    return "failed";
  }
};

export const saveUserProfile = async (user, userData, imageUrl) => {
  try {
    const timestamp = Timestamp.now();
    const batch = writeBatch(db);
    const publicUserDocRef = doc(db, USERS, user.uid, USER_PUBLIC, PROFILE);
    const privateUserDocRef = doc(db, USERS, user.uid, USER_PRIVATE, PROFILE);

    const filteredJourneyData = userData.lifeJourneyData.map(
      (data) => data.label
    );
    const filteredUserInterest = userData.userInterest.map(
      (data) => data.label
    );
    const filteredHighlightData = userData.highlightData.map(
      (data) => data.title
    );
    //saving user public info..

    batch.set(publicUserDocRef, {
      "First Name": userData.firstName,
      "Last Name": userData.lastName,
      Age: userData.age,
      Profession: {
        what: userData.professionData.profession,
        where: userData.professionData.description,
      },
      Interests: filteredUserInterest,
      Bio: userData.bio,
      image: imageUrl,
      Updatedat: timestamp,
      "Recent Activity": "",
    });

    //saving user private info..

    batch.set(privateUserDocRef, {
      "First Name": userData.firstName,
      "Last Name": userData.lastName,
      Purpose: filteredHighlightData,
      Age: userData.age,
      Profession: {
        what: userData.professionData.profession,
        where: userData.professionData.description,
      },
      Interests: filteredUserInterest,
      Bio: userData.bio,
      image: imageUrl,
      Phone: user.phoneNumber,
      DOB: userData.dob,
      Gender: userData.gender,
      "Life Journey": filteredJourneyData,
      Updatedat: timestamp,
      Location:
        userData.location === null
          ? null
          : new GeoPoint(
              userData.location.latitude,
              userData.location.longitude
            ),
      PushToken: userData.token,
    });

    await batch.commit();

    const userProperties = {
      Birthday: moment(userData.dob).format("MM/DD/YYYY"),
      "Phone Number": user.phoneNumber,
      Interests: filteredUserInterest,
      "Life Journey": filteredJourneyData,
      Location:
        userData.location === null
          ? []
          : [userData.location.latitude, userData.location.longitude],
      City: "",
      "Completed Signup": true,
      Groups: 0,
      Friends: 0,
      Notifications: userData.token.length > 0,
      Purpose: filteredHighlightData,
    };
    logUserProperties(userProperties);
  } catch (error) {
    recordError(error);
    console.log(error);
    return "failed";
  }
};

export const updateBio = async (userId, bio) => {
  try {
    const timestamp = Timestamp.now();
    const userBioBatch = writeBatch(db);
    const publicUserDocRef = doc(db, USERS, userId, USER_PUBLIC, PROFILE);
    const privateUserDocRef = doc(db, USERS, userId, USER_PRIVATE, PROFILE);

    userBioBatch.update(publicUserDocRef, {
      Bio: bio,
      Updatedat: timestamp,
    });

    userBioBatch.update(privateUserDocRef, {
      Bio: bio,
      Updatedat: timestamp,
    });

    await userBioBatch.commit();
    logUserProperty("Bio Text", bio);
  } catch (error) {
    recordError(error);
    console.log(error);
    return "failed";
  }
};

export const updateUserInterest = async (userId, interest) => {
  try {
    const timestamp = Timestamp.now();
    const userInterestBatch = writeBatch(db);
    const publicUserDocRef = doc(db, USERS, userId, USER_PUBLIC, PROFILE);
    const privateUserDocRef = doc(db, USERS, userId, USER_PRIVATE, PROFILE);

    let filteredInterest = interest.filter((item) => item.isShow === true);
    filteredInterest = filteredInterest.map((item) => item.label);

    userInterestBatch.update(publicUserDocRef, {
      Interests: filteredInterest,
      Updatedat: timestamp,
    });
    userInterestBatch.update(privateUserDocRef, {
      Interests: filteredInterest,
      Updatedat: timestamp,
    });

    await userInterestBatch.commit();
    logUserProperty("Interests", filteredInterest);
  } catch (error) {
    recordError(error);
    console.log(error);
    return "failed";
  }
};

export const updateGender = async (userId, gender) => {
  try {
    const timestamp = Timestamp.now();
    const privateUserDocRef = doc(db, USERS, userId, USER_PRIVATE, PROFILE);
    await updateDoc(privateUserDocRef, {
      Gender: gender,
      Updatedat: timestamp,
    });
    logUserProperty("Gender", gender);
  } catch (error) {
    recordError(error);
    console.log(error);
    return "failed";
  }
};

export const updateDob = async (userId, userProfile) => {
  try {
    const timestamp = Timestamp.now();
    const privateUserDocRef = doc(db, USERS, userId, USER_PRIVATE, PROFILE);
    const publicUserDocRef = doc(db, USERS, userId, USER_PUBLIC, PROFILE);

    await updateDoc(privateUserDocRef, {
      DOB: userProfile.dob,
      Age: userProfile.age,
      Updatedat: timestamp,
    });

    await updateDoc(publicUserDocRef, {
      Age: userProfile.age,
      Updatedat: timestamp,
    });
  } catch (error) {
    recordError(error);
    console.log(error);
    return "failed";
  }
};
export const updateLifeJourney = async (userId, lifeJourney) => {
  try {
    const timestamp = Timestamp.now();
    const privateUserDocRef = doc(db, USERS, userId, USER_PRIVATE, PROFILE);
    const updatedLifeJourney = lifeJourney.map((item) => item.label);

    await updateDoc(privateUserDocRef, {
      "Life Journey": updatedLifeJourney,
      Updatedat: timestamp,
    });
    logUserProperty("Life Journey", updatedLifeJourney);
  } catch (error) {
    recordError(error);
    console.log(error);
    return "failed";
  }
};

export const updateProfession = async (userId, selected, study, profession) => {
  try {
    const timestamp = Timestamp.now();
    const userProfessionBatch = writeBatch(db);
    const publicUserDocRef = doc(db, USERS, userId, USER_PUBLIC, PROFILE);
    const privateUserDocRef = doc(db, USERS, userId, USER_PRIVATE, PROFILE);

    userProfessionBatch.update(publicUserDocRef, {
      Profession: {
        what: selected,
        where:
          selected === "Employed"
            ? profession
            : selected === "Student"
            ? study
            : "",
      },
      Updatedat: timestamp,
    });

    userProfessionBatch.update(privateUserDocRef, {
      Profession: {
        what: selected,
        where:
          selected === "Employed"
            ? profession
            : selected === "Student"
            ? study
            : "",
      },
      Updatedat: timestamp,
    });

    await userProfessionBatch.commit();
    logUserProperty("Career", selected);
    logUserProperty(
      "Career Text",
      selected === "Employed" ? profession : selected === "Student" ? study : ""
    );
  } catch (error) {
    recordError(error);
    console.log(error);
    return "failed";
  }
};

export const updateName = async (userId, firstName, lastName) => {
  try {
    const timestamp = Timestamp.now();
    const userNameBatch = writeBatch(db);
    const publicUserDocRef = doc(db, USERS, userId, USER_PUBLIC, PROFILE);
    const privateUserDocRef = doc(db, USERS, userId, USER_PRIVATE, PROFILE);

    userNameBatch.update(publicUserDocRef, {
      ["First Name"]: firstName,
      ["Last Name"]: lastName,
      Updatedat: timestamp,
    });

    userNameBatch.update(privateUserDocRef, {
      ["First Name"]: firstName,
      ["Last Name"]: lastName,
      Updatedat: timestamp,
    });

    await userNameBatch.commit();
  } catch (error) {
    recordError(error);
    console.log(error);
    return "failed";
  }
};

export const updateUserImage = async (userId, imageUrl) => {
  try {
    const timestamp = Timestamp.now();
    const userPictureBatch = writeBatch(db);
    const publicUserDocRef = doc(db, USERS, userId, USER_PUBLIC, PROFILE);
    const privateUserDocRef = doc(db, USERS, userId, USER_PRIVATE, PROFILE);

    userPictureBatch.update(publicUserDocRef, {
      image: imageUrl,
      Updatedat: timestamp,
    });

    userPictureBatch.update(privateUserDocRef, {
      image: imageUrl,
      Updatedat: timestamp,
    });

    await userPictureBatch.commit();
  } catch (error) {
    recordError(error);
    console.log(error);
    return "failed";
  }
};

export const saveContacts = async (userId, userContacts) => {
  try {
    const batch = writeBatch(db);
    const contactRef = doc(db, USERS, userId, CONTACTS, "contacts");
    userContacts?.forEach((contactItem) => {
      if (!contactItem?.phoneNumbers?.length) {
        return;
      }

      const phoneNo =
        contactItem?.phoneNumbers[0]?.digits ??
        contactItem?.phoneNumbers[0]?.number;

      batch.set(
        contactRef,
        {
          [contactItem?.name]: phoneNo,
        },
        { merge: true }
      );
    });
    await batch.commit();
  } catch (error) {
    recordError(error);
    console.log(error);
    return "failed";
  }
};

export const getContacts = async (userId) => {
  try {
    const contactRef = doc(db, USERS, userId, CONTACTS, "contacts");
    const res = await getDoc(contactRef);

    if (res.exists()) {
      return res.data();
    }
    return "failed";
  } catch (error) {
    recordError(error);
    console.log(error);
    return "failed";
  }
};

export const sendFriendRequest = async (userId, receiverId, userData) => {
  try {
    const friendRef = doc(db, USERS, userId, REQUEST_SENT, uuid.v4());

    await setDoc(friendRef, {
      rId: receiverId,
      sId: userId,
      "First Name": userData?.firstName,
      "Last Name": userData?.lastName,
      image: userData?.image,
      "Received At": Timestamp.now(),
      Accepted: false,
      "Updated At": Timestamp.now(),
      requestId: friendRef?.id,
    });
  } catch (error) {
    recordError(error);
    console.log(error);
    return "failed";
  }
};

export const undoSendFriendRequest = async (userId, receiverId) => {
  try {
    const batch = writeBatch(db);
    const friendRef = collection(db, USERS, userId, REQUEST_SENT);
    const q = query(friendRef, where("rId", "==", receiverId));

    const querySnapshot = await getDocs(q);
    querySnapshot.forEach(async (snapShot) => {
      if (snapShot.exists()) {
        const friendRef1 = doc(
          db,
          USERS,
          userId,
          REQUEST_SENT,
          snapShot.data().requestId
        );
        const friendRef2 = doc(
          db,
          USERS,
          receiverId,
          REQUEST_RECEIVED,
          snapShot.data().requestId
        );

        batch.delete(friendRef2);
        batch.delete(friendRef1);

        await batch.commit();
      }
    });
  } catch (error) {
    recordError(error);
    console.log(error);
  }
};

export const getSentFriendRequests = async (userId, dispatch) => {
  try {
    const friendRef = collection(db, USERS, userId, REQUEST_SENT);
    const res = onSnapshot(friendRef, (querySnapshot) => {
      let formattedIds = [];
      querySnapshot.forEach((idItem) => {
        formattedIds.push({
          UserID: idItem.data()["rId"],
          Accepted: idItem.data()["Accepted"],
        });
      });
      dispatch({ type: SET_REQUESTED_USERS_ID, payload: formattedIds });
    });

    return res;
  } catch (error) {
    recordError(error);
    console.log(error);
    return "failed";
  }
};

export const reportUser = async (
  userId,
  reportedUserID,
  isBlocked,
  reportReason,
  reportType
) => {
  try {
    const timestamp = Timestamp.now();
    await addDoc(collection(db, USERS, userId, REPORTS), {
      user: userId,
      reportedUserID: reportedUserID,
      reportType: "",
      reportReason: reportReason,
      timestamp: timestamp,
      isBlocked: isBlocked,
    });
    return "success";
  } catch (error) {
    recordError(error);
    console.log(error);
    return "failed";
  }
};

export const updateReportUser = async (userId, profileID, isBlocked) => {
  try {
    const timestamp = Timestamp.now();
    const blockedRef = collection(db, USERS, userId, REPORTS);
    const blockedUser = query(
      blockedRef,
      where("reportedUserID", "==", profileID),
      where("isBlocked", "==", true)
    );
    const querySnapshot = await getDocs(blockedUser);
    querySnapshot.forEach(async (idItem) => {
      const updateRef = doc(db, USERS, userId, REPORTS, idItem.id);
      await setDoc(
        updateRef,
        {
          timestamp: timestamp,
          isBlocked: isBlocked,
        },
        { merge: true }
      );
    });

    return "success";
  } catch (error) {
    recordError(error);
    console.log(error);
    return "failed";
  }
};

export const getReportedUser = async (userId, profileID, dispatch) => {
  try {
    const reportRef = collection(db, USERS, userId, REPORTS);
    const blockedUser = query(
      reportRef,
      where("reportedUserID", "==", profileID),
      where("isBlocked", "==", true)
    );
    return onSnapshot(blockedUser, (querySnapshot) => {
      let formattedIds = [];
      querySnapshot.forEach((idItem) => {
        formattedIds.push(idItem.data());
      });
      dispatch({ type: GET_REPORTED_USER, payload: formattedIds });
    });
  } catch (error) {
    recordError(error);
    console.log(error);
    return "failed";
  }
};

export const acceptFriendRequest = async (userId, requestId) => {
  try {
    const timestamp = Timestamp.now();
    const docRef = doc(db, USERS, userId, REQUEST_RECEIVED, requestId);
    await updateDoc(docRef, {
      Accepted: true,
      "Updated At": timestamp,
    });
  } catch (error) {
    recordError(error);
    console.log(error);
  }
};

export const ignoreFriendRequest = async (userId, requestId) => {
  try {
    const timestamp = Timestamp.now();
    const docRef = doc(db, USERS, userId, REQUEST_RECEIVED, requestId);
    await updateDoc(docRef, {
      "Updated At": timestamp,
    });
  } catch (error) {
    recordError(error);
    console.log(error);
  }
};

export const updateUserLocation = async (userId, location) => {
  try {
    const privateUserDocRef = doc(db, USERS, userId, USER_PRIVATE, PROFILE);
    await updateDoc(privateUserDocRef, {
      Location: new GeoPoint(location.latitude, location.longitude),
    });
  } catch (error) {
    recordError(error);
    console.log(error);
  }
};

export const updateUserPushToken = async (userId, token) => {
  try {
    const privateUserDocRef = doc(db, USERS, userId, USER_PRIVATE, PROFILE);
    await updateDoc(privateUserDocRef, {
      PushToken: token,
    });
  } catch (error) {
    recordError(error);
    console.log(error);
  }
};

export const deleteUserAccount = async (userId) => {
  try {
    const userDocRef = doc(db, USERS, userId);
    await setDoc(
      userDocRef,
      {
        isDeleted: true,
      },
      { merge: true }
    );

    return "success";
  } catch (error) {
    recordError(error);
    console.log(error);
  }
};
