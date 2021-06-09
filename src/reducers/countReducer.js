const INCREASE = 'increase';
const DECREASE = 'decrease';

const increaseCount = () => {
  return {
    type: INCREASE,
  };
};

const decreaseCount = () => {
  return {
    type: DECREASE,
  };
};

const countReducer = (state = 0, action) => {
  switch (action.type) {
    case INCREASE:
      return state + 1;
    case DECREASE:
      return state - 1;
    default:
      return state;
  }
};

export const actionCount = {
  increaseCount,
  decreaseCount,
};

export default countReducer;
