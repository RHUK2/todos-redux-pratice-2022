const ADD = 'add';
const DELETE = 'delete';

const addTodo = (text) => {
  return {
    type: ADD,
    id: Date.now(),
    text,
  };
};

const deleteTodo = () => {
  return {
    type: DELETE,
  };
};

const todoReducer = (state = [], action) => {
  switch (action.type) {
    case ADD:
      return [{ id: action.id, text: action.text }, ...state];
    case DELETE:
      return [];
    default:
      return state;
  }
};

export const actionTodo = {
  addTodo,
  deleteTodo,
};

export default todoReducer;
