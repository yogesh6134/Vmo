import { combineReducers } from "redux";
import { persistReducer } from "redux-persist";

import exampleReducer from "./ExampleRedux";
import userReducer from "./UserRedux";
import settingsReducer from "./SettingsRedux";
import chatReducer from "./ChatRedux";
import {
  userReducerPersistConfig,
  contactListReducerPersistConfig,
} from "@utils/persist";
import contactListReducer from "./contactListReducer";

export default combineReducers({
  exampleReducer,
  userReducer: persistReducer(userReducerPersistConfig, userReducer),
  settingsReducer,
  chatReducer,
  contactListReducer: persistReducer(
    contactListReducerPersistConfig,
    contactListReducer
  ),
});
