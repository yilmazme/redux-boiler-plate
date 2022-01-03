import { actionTypes } from "../actions";

const loginReducer = (initialState = false, action) => {
  switch (action.type) {
    case actionTypes.login:
      return (initialState = true);
    case actionTypes.logout:
      return (initialState = false);
    default:
      return initialState;
  }
};

export default loginReducer;
