import { combineReducers } from 'redux';
import todoReducer from 'reducers/todoReducer';
import countReducer from 'reducers/countReducer';

// Combine Reducer
const rootReducer = combineReducers({
  todoReducer,
  countReducer,
});

export default rootReducer;
