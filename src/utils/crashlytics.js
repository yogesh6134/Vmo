import Constants from "expo-constants";
import crashlytics from "@libraries/crashlytics";

export const recordError = (error) => {
  if (Constants.appOwnership !== "expo") {
    crashlytics().recordError(error);
  }
};

export const logCrashlyticsEvent = (eventName) => {
  if (Constants.appOwnership !== "expo") {
    crashlytics().log(eventName);
  }
};

export const testingCrash = () => {
  if (Constants.appOwnership !== "expo") {
    crashlytics().crash();
  }
};
