import { combineReducers, createStore } from "redux";
import todoReducer from "./reducers/todo";
import { configureStore } from "@reduxjs/toolkit";
import logger from "redux-logger";
import { myMid, timeoutScheduler } from "./middlewares/myMiddleware";

const myMiddlewares = [logger, myMid, timeoutScheduler];

const rootReducer = combineReducers({
  todo: todoReducer,
});

// export default createStore(rootReducer);
const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) => {
    const middlewares = getDefaultMiddleware().concat(myMiddlewares);
    console.log(middlewares);
    return middlewares;
  },
});
// console.log(store.getState());
// console.log(store.dispatch);
export default store;
