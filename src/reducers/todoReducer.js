// action.type config
const ADD = 'add';
const DELETE = 'delete';
const COMPLETE = 'complete';

const initValue =
  JSON.parse(localStorage.getItem('TODO')) !== null
    ? JSON.parse(localStorage.getItem('TODO'))
    : [];

// dispatch action object
const addTodo = (text) => {
  return {
    type: ADD,
    id: Date.now(),
    finished: false,
    text,
  };
};

const deleteTodo = (id) => {
  return {
    type: DELETE,
    id,
  };
};

const completeTodo = (id) => {
  return {
    type: COMPLETE,
    id,
  };
};

const todoReducer = (state = initValue, action) => {
  switch (action.type) {
    case ADD:
      return [
        { id: action.id, text: action.text, finished: action.finished },
        ...state,
      ];
    case DELETE:
      return state.filter((todo) => todo.id !== action.id);
    case COMPLETE:
      return state.map((todo) => {
        return todo.id === action.id
          ? {
              ...todo,
              finished: true,
            }
          : { ...todo };
      });
    default:
      return state;
  }
};

export const actionTodo = {
  addTodo,
  deleteTodo,
  completeTodo,
};

export default todoReducer;
