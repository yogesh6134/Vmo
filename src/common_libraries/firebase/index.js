import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import {
  getFirestore,
  collection,
  doc,
  addDoc,
  setDoc,
  updateDoc,
  getDoc,
  getDocs,
  orderBy,
  query,
  limit,
  Timestamp,
  writeBatch,
  GeoPoint,
  onSnapshot,
  where,
  deleteDoc,
  initializeFirestore,
} from "firebase/firestore";
import {
  getStorage,
  ref as storageRef,
  uploadBytes,
  getDownloadURL,
} from "firebase/storage";
import {
  getDatabase,
  ref,
  push,
  onValue,
  update,
  set,
  orderByChild,
  orderByKey,
  orderByValue,
  startAt,
  get,
  child,
  onDisconnect,
} from "firebase/database";

import { firebaseConfig } from "../../../config";

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = initializeFirestore(app, {
  experimentalForceLongPolling: true,
});
const storage = getStorage(app);
const realDb = getDatabase(app);

export {
  auth,
  db,
  collection,
  doc,
  addDoc,
  setDoc,
  updateDoc,
  getDoc,
  getDocs,
  orderBy,
  where,
  query,
  limit,
  Timestamp,
  writeBatch,
  GeoPoint,
  onSnapshot,
  storage,
  storageRef,
  uploadBytes,
  getDownloadURL,
  realDb,
  ref,
  push,
  onValue,
  update,
  set,
  orderByChild,
  orderByKey,
  orderByValue,
  startAt,
  get,
  child,
  onDisconnect,
  deleteDoc,
};
