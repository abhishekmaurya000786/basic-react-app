import React from "react";
import "./index.css";

const App = () => {
  async function loadHeavyFunction() {
    let heavy = await import("./heavy.js");
    heavy.veryHeavy();
  }

  return (
    <div>
      <h1 className="m-4 p-4 text-4xl text-center">
        Code Splitting with Dynamic import.
      </h1>
      <button
        onClick={loadHeavyFunction}
        className="border-4 border-blue-500 rounded-2xl m-4 p-4"
      >
        Click to Load Heavy Module.
      </button>
    </div>
  );
};

export default App;
