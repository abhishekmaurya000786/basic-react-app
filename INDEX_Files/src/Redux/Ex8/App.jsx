import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchUser, setMessage } from "./features/userSlice";
import { forceLogout, resetApp } from "./Actions/globalActions";

const App = () => {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.user);
  const settings = useSelector((state) => state.settings);

  return (
    <div className="p-6 max-w-xl  mx-auto">
      <h1>Redux learning app.</h1>
      <button
        className="bg-blue-600 text-white px-4 py-2 rounded mr-2" 
        onClick={() => dispatch(fetchUser())}>Get user.</button>
      <button className = "bg-yellow-600 text-white px-4 py-2 rounded mr-2" onClick={() => dispatch(setMessage("custom message set."))}>
        Set message.
      </button>
      <button 
        className="bg-gray-600 text-white px-4 py-2 rounded mr-2" 
        onClick={() => dispatch(resetApp())}>
        Reset App.
      </button>
      <button 
        className="bg-red-600 text-white px-4 py-2 rounded mr-2" 
        onClick={() => dispatch(forceLogout())}>
        Force Logout.
      </button>

      <pre className="bg-black text-white p-4 mt-4 rounded">{JSON.stringify({user, settings},null,2)}</pre>
    </div>
  );
};

export default App;
