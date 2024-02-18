const middlewareFunc = (store) => (next) => (action) => {
  console.log("dispatching", action);
  let result = next(action);
  console.log("next state", store.getState());
  return result;
};

// 위와 아래는 같다
export default function myMiddleware(store) {
  console.log("store", store);
  return function (next) {
    console.log("next", next);
    // next는 dispatch함수입니다.

    return function (action) {
      // 처리할 작업
      console.log("action", action);
      return next(action);
    };
  };
}

/**
 * 액션을 { meta: { delay: N } }에 따라 N 밀리초만큼 지연시킵니다.
 * 이 경우 `dispatch`가 함수를 반환해서 취소할 수 있게 합니다.
 */
const timeoutScheduler = (store) => (next) => (action) => {
  if (!action.meta || !action.meta.delay) {
    return next(action);
  }

  let intervalId = setTimeout(() => next(action), action.meta.delay);

  return function cancel() {
    clearInterval(intervalId);
  };
};

/**
 * 액션에 promise를 보낼 수 있게 합니다.
 * promise가 해결되면, 그 결과가 액션으로써 보내집니다.
 * 약속은 `dispatch`에서 반환되므로 거부를 처리할 수 있습니다.
 */
const vanillaPromise = (store) => (next) => (action) => {
  if (typeof action.then !== "function") {
    return next(action);
  }

  return Promise.resolve(action).then(store.dispatch);
};

/**
 * { promise } 필드를 통해 특별한 액션들을 보낼 수 있게 합니다.
 *
 * 이 미들웨어는 처음에 액션들을 하나의 액션으로 바꾸고,
 * `promise`가 해결되면 하나의 성공(또는 실패) 액션을 보냅니다.
 *
 * 편의를 위해, `dispatch`는 호출자가 기다릴 수 있게 promise를 반환합니다.
 */
const readyStatePromise = (store) => (next) => (action) => {
  if (!action.promise) {
    return next(action);
  }

  function makeAction(ready, data) {
    let newAction = Object.assign({}, action, { ready }, data);
    delete newAction.promise;
    return newAction;
  }

  next(makeAction(false));
  return action.promise.then(
    (result) => next(makeAction(true, { result })),
    (error) => next(makeAction(true, { error }))
  );
};

/**
 * 액션 대신 함수를 보낼 수 있게 합니다.
 * 이 함수는 `dispatch`와 `getState`를 인수로 받습니다.
 *
 * (`getState()`의 조건에 따른) 이른 종료나
 * 비동기 흐름 제어에 유용합니다(다른것들을 `dispatch()`할 수 있습니다).
 *
 * `dispatch`는 보내진 함수의 반환값을 반환합니다.
 */
const thunk = (store) => (next) => (action) =>
  typeof action === "function"
    ? action(store.dispatch, store.getState)
    : next(action);
