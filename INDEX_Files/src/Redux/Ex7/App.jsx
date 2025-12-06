import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchUser, setMessage } from "./features/userSlice";

const App = () => {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.user);
  const settings = useSelector((state) => state.settings);

  return (
    <div className="">
      <h1>Redux learning app.</h1>
      <button onClick={() => dispatch(fetchUser())}>Get user.</button>
      <button onClick={() => dispatch(setMessage("custom message set."))}>
        Set message.
      </button>
      <button onClick={() => dispatch()}>Reset App.</button>
      <button onClick={() => dispatch()}>Force Layout.</button>
    </div>
  );
};

export default App;
