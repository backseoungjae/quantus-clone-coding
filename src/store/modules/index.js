import { combineReducers } from "redux";
import { persistReducer } from "redux-persist";
import storageSession from "redux-persist/lib/storage/session";
import backTest from "./backTest";
import purchase from "./purchase";

const persistConfig = {
  key: "root",
  storage: storageSession,
  whitelist: ["backTest", "purchase"],
};

const rootReducer = combineReducers({
  backTest,
  purchase,
});

export default persistReducer(persistConfig, rootReducer);
