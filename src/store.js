import { createStore } from 'redux';
import rootReducer from 'reducers/rootReducer';

// Create Store
const store = createStore(rootReducer);

export default store;
