import { createStore } from "redux";
import rootReducer from "store/modules";
import { persistStore } from "redux-persist";

const devTools =
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__();

export const store = createStore(rootReducer, devTools);

export const persistor = persistStore(store);
