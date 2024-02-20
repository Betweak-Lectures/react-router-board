import { combineReducers, createStore } from "redux";
import todoReducer from "./reducers/todo";

const rootReducer = combineReducers({
  todo: todoReducer,
});

export default createStore(rootReducer);
