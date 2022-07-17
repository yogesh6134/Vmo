import * as Location from "expo-location";
import * as Device from "expo-device";
import * as Notifications from "expo-notifications";
import uuid from "react-native-uuid";
import AsyncStorage from "@react-native-async-storage/async-storage";
import Constants from "expo-constants";

import { Linking } from "react-native";
import { ampInstance, identify } from "@libraries/amplitude";
var pointInPolygon = require("point-in-polygon");

export const checkGeofence = (area, userLocation) => {
  return pointInPolygon(userLocation, area);
};

export const sendFeedBack = () => {
  Linking.openURL("mailto:helloweekendteam@gmail.com?subject=&body=");
};

export const getCurrentLocation = async () => {
  try {
    let { status } = await Location.requestForegroundPermissionsAsync();
    if (status !== "granted") {
      alert("Permission to access location was denied");
      return null;
    }

    let location = await Location.getCurrentPositionAsync();
    const { latitude, longitude } = location.coords;

    return { latitude, longitude };
  } catch (error) {
    console.log(error);
  }
};

export const getPushNoticationToken = async () => {
  let token;
  if (Device.isDevice) {
    const { status: existingStatus } =
      await Notifications.getPermissionsAsync();
    let finalStatus = existingStatus;
    if (existingStatus !== "granted") {
      const { status } = await Notifications.requestPermissionsAsync();
      finalStatus = status;
    }
    if (finalStatus !== "granted") {
      alert("Failed to get push token for push notification!");
      return "";
    }
    token = (await Notifications.getExpoPushTokenAsync()).data;
  } else {
    alert("Must use physical device for Push Notifications");
    return "";
  }
  if (Platform.OS === "android") {
    Notifications.setNotificationChannelAsync("default", {
      name: "default",
      importance: Notifications.AndroidImportance.MAX,
      vibrationPattern: [0, 250, 250, 250],
      lightColor: "#FF231F7C",
    });
  }
  return token;
};

export const sendPushNotification = async (
  token,
  title,
  text,
  id,
  chatType,
  chatId,
  members,
  image,
  background
) => {
  const message = {
    to: token,
    priority: "normal",
    title: title,
    body: text,
    data: {
      experienceId: id,
      scopeKey: id,
      chatType: chatType,
      chatId: chatId,
      members: members,
      friendName: title,
      image: image,
      background: background,
    },
    sound: "default",
  };

  await fetch("https://exp.host/--/api/v2/push/send", {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify(message),
  });
};

export const getAge = (dateString) => {
  let currentDate = new Date();
  let currentYear = currentDate.getFullYear();
  let birthYear = dateString.getFullYear();
  return currentYear - birthYear;
};

export const getCacheKey = async (url) => {
  try {
    let cacheKey = await AsyncStorage.getItem(url);

    if (cacheKey === null) {
      const id = uuid.v4();
      await AsyncStorage.setItem(url, id);
      return id;
    }
    return cacheKey;
  } catch (e) {
    console.log(e);
  }
};

export const formatHeaderText = (headerText) => {
  if (headerText.length > 20) {
    return `${headerText.substring(0, 20)}...`;
  }
  return headerText;
};

export const logEvent = async (eventName, data) => {
  try {
    if (!eventName) {
      return;
    }

    if (Constants.appOwnership !== "expo") {
      ampInstance.logEvent(eventName, data);
    }
  } catch (error) {
    console.log(error);
  }
};

export const logUserIdentify = async (userId) => {
  try {
    if (Constants.appOwnership !== "expo") {
      ampInstance.setUserId(userId);
    }
  } catch (error) {
    console.log(error);
  }
};

export const logUserProperty = async (name, value) => {
  try {
    if (!name) {
      return;
    }

    if (Constants.appOwnership !== "expo") {
      identify.set(name, value);
      ampInstance.identify(identify);
    }
  } catch (error) {
    console.log(error);
  }
};

export const logUserProperties = async (properties) => {
  try {
    if (Constants.appOwnership !== "expo") {
      ampInstance.setUserProperties(properties);
    }
  } catch (error) {
    console.log(error);
  }
};

export const logReset = async () => {
  try {
    if (Constants.appOwnership !== "expo") {
      ampInstance.clearUserProperties();
    }
  } catch (error) {
    console.log(error);
  }
};
