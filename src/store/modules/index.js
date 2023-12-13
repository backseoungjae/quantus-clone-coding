import { combineReducers } from "redux";
import { persistReducer } from "redux-persist";
import storageSession from "redux-persist/lib/storage/session";
import backTest from "./backTest";

const persistConfig = {
  key: "root",
  storage: storageSession,
  whitelist: ["alloc"],
};

const rootReducer = combineReducers({
  backTest,
});

export default persistReducer(persistConfig, rootReducer);
