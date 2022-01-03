import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { incrememt, decrement, reset, login, logout } from "../actions";

function Counter() {
  const count = useSelector((state) => state.counter);
  const isLogged = useSelector((state) => state.login);

  const dispatch = useDispatch();

  return (
    <div>
      <h3>Count: {count}</h3>
      <button onClick={() => dispatch(decrement())}>Decrease</button>
      <button onClick={() => dispatch(reset())}>Reset</button>
      <button onClick={() => dispatch(incrememt(6))}>Increase</button>

      {isLogged ? (
        <section>
          <h3>These are sensitive info, only looged user should see</h3>
          <button onClick={() => dispatch(logout())}>Logout</button>
        </section>
      ) : (
        <section>
          <h3>Login to see sensitive info</h3>
          <button onClick={() => dispatch(login())}>Login</button>
        </section>
      )}
    </div>
  );
}

export default Counter;
