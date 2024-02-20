import { combineReducers, createStore } from "redux";
import todoReducer from "./reducers/todo";
import { configureStore } from "@reduxjs/toolkit";

const rootReducer = combineReducers({
  todo: todoReducer,
});

// export default createStore(rootReducer);
export default configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) => {
    const middlewares = getDefaultMiddleware();
    console.log(middlewares);
    return middlewares;
  },
});
