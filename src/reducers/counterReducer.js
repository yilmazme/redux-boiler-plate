import { actionTypes } from "../actions";

const counterReducer = (state = 3, action) => {
  switch (action.type) {
    case actionTypes.increment:
      return (state = state + action.payload);
    case actionTypes.decrement:
      return (state = state - action.payload);
    case actionTypes.reset:
      return (state = 0);
    default:
      return state;
  }
};

export default counterReducer;
