import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchUser, setMessage } from "./features/userSlice";
import { forceLogout, resetApp } from "./Actions/globalActions";

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
      <button 
        className="" 
        onClick={() => dispatch(resetApp())}>
        Reset App.
      </button>
      <button 
        className="" 
        onClick={() => dispatch(forceLogout())}>
        Force Layout.
      </button>

      <pre>{JSON.stringify({user, settings},null,2)}</pre>
    </div>
  );
};

export default App;
