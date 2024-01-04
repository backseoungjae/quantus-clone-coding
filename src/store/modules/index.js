import { combineReducers } from "redux";
import { persistReducer } from "redux-persist";
import storageSession from "redux-persist/lib/storage/session";
import backTest from "./backTest";
import purchase from "./purchase";
import partner from "./partner";

const persistConfig = {
  key: "root",
  storage: storageSession,
  whitelist: ["backTest", "purchase", "partner"],
};

const rootReducer = combineReducers({
  backTest,
  purchase,
  partner,
});

export default persistReducer(persistConfig, rootReducer);
