import { configureStore } from "@reduxjs/toolkit";
import todosReducer from "./reducers/todo";
import logger from "redux-logger";
import storage from "redux-persist/lib/storage";
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from "redux-persist";
import { combineReducers } from "redux";
import myMiddleware from "./middlewares/my-middleware";
import counterReducer from "./reducers/counter";
const myMiddlewares = [
  // logger,
  myMiddleware,
];

const rootReducer = combineReducers({
  todo: todosReducer,
  counter: counterReducer,
});
const persistConfig = {
  key: "root",
  storage,
  whitelist: ["todo"],
};
const persistedReducer = persistReducer(persistConfig, rootReducer);

const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) => {
    const middlewares = getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }).concat(myMiddlewares);
    console.log("middlewares", middlewares);
    return middlewares;
  },
  enhancers: (getDefaultEnhancers) => {
    const enhancers = getDefaultEnhancers();
    console.log("enhancers", enhancers);
    return enhancers;
  },
});

export const persistor = persistStore(store);

export default store;
