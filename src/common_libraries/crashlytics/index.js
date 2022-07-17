import Constants from "expo-constants";

let crashlytics;

if (Constants.appOwnership !== "expo") {
  crashlytics = require("@react-native-firebase/crashlytics").default;
}

export default crashlytics;
