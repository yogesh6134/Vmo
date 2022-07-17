import { ACTIVITIES, SETTINGS } from "@constants/collection";
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
} from "../libraries/firebase";
import { recordError } from "@utils/crashlytics";

export const getGeofenceData = async () => {
  try {
    const docRef = collection(db, "settings", "geofence", "fences");
    const querySnapshot = await getDocs(docRef);
    let geofenceAreaList = [];

    querySnapshot.forEach((snapshot) => {
      geofenceAreaList.push({
        area: snapshot.id,
        coords: snapshot.data().fence,
      });
    });
    console.log(geofenceAreaList);
  } catch (error) {
    recordError(error);
    console.log(error);
  }
};

export const getActivity = async () => {
  try {
    const activityRef = doc(db, SETTINGS, ACTIVITIES);
    const res = await getDoc(activityRef);

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
