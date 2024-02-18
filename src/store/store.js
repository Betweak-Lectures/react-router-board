import { combineReducers, createStore } from "redux";

import counterReducer from "./reducers/counter";

export const rootReducer = combineReducers({
  counter: counterReducer,
});

// Deprecated 되었지만 정확한 동작을 알기 위해 우선 사용한다.
const store = createStore(rootReducer);
console.log(store.getState());

export default store;
