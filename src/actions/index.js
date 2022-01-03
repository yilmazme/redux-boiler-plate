// action types should be hard coded only once, than use in actions and reducers

export const actionTypes = {
  //for  counter reducer
  increment: "INCREMENT",
  decrement: "DECREMENT",
  reset: "RESET",
  //for  user reducer
  login: "LOGIN",
  logout: "LOGOUT",
};

// actions, should be imported in component to use in dispatch

export const incrememt = (amount = 1) => ({
  type: actionTypes.increment,
  payload: amount,
});

export const decrement = (amount = 1) => ({
  type: actionTypes.decrement,
  payload: amount,
});

export const reset = () => ({
  type: actionTypes.reset,
  payload: 1,
});

export const login = () => ({
  type: actionTypes.login,
  payload: 1,
});
export const logout = () => ({
  type: actionTypes.logout,
  payload: 1,
});
