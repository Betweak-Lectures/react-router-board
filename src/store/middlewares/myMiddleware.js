const myMiddleware = (store) => (next) => (action) => {
  // 리듀서에 전달되기전 로직
  let result = next(action);
  // 리듀서에서 변경된 state를 활용한 로직
};

export function myMid(store) {
  console.log("store", store);
  return function (next) {
    console.log("next", next);
    return function (action) {
      console.log("action", action);
      return next(action);
    };
  };
}

/**
 * timeout
 */
export const timeoutScheduler = (store) => (next) => (action) => {
  if (!action.meta || !action.meta.delay) {
    return next(action);
  }
  let timeoutId = setTimeout(() => {
    return next(action);
  }, action.meta.delay);

  return () => {
    console.log("Cancel");
    clearTimeout(timeoutId);
  };
};
