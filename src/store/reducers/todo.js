// 초기상태
const initialState = {
  todoList: [
    {
      id: "1",
      content: "todo 내용",
      color: "blue",
    },
  ],
};

// Action Types
const ADD_TODO = "todo/ADD_TODO";
const REMOVE_TODO = "todo/REMOVE_TODO";

// Action Creators
// Action은 주문서, Action Creator는 주문서를 만드는 함수!
function addTodo(todo) {
  // "Todo를 추가해주세요." 라는 Action(주문서) 생성
  // {id, content, color}
  return {
    type: ADD_TODO,
    payload: {
      todo: todo,
    },
  };
}
function removeTodo(todoId) {
  // "todoId에 해당하는 todo를 삭제해주세요." 라는 Action(주문서) 생성
  return {
    type: REMOVE_TODO,
    payload: {
      id: todoId,
    },
  };
}

// Reducer
function todoReducer(state = initialState, action) {
  switch (action.type) {
    case ADD_TODO:
      return {
        ...state,
        todoList: state.todoList.concat(action.payload.todo),
      };
    case REMOVE_TODO:
      return {
        ...state,
        todoList: state.todoList.filter((todo) => {
          return todo.id !== action.payload.id;
        }),
      };
    default:
      return state;
  }
}

export { addTodo, removeTodo };

export default todoReducer;
