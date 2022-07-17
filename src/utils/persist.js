import AsyncStorage from "@react-native-async-storage/async-storage";

export const userReducerPersistConfig = {
  key: "userReducer",
  storage: AsyncStorage,
  whitelist: ["selectedActivities"],
};

export const contactListReducerPersistConfig = {
  key: "contactListReducer",
  storage: AsyncStorage,
};
