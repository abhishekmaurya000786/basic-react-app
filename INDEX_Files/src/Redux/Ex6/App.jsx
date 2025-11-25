import React from "react";

const App = () => {
  return (
    <div>
      <div className="border border-amber-200 m-7 p-7 flex flex-col items-center justify-center">
        <h1>Counter : 0</h1>

        <div className="flex flex-inline">
          <button className="border m-7 p-7 border-amber-300 rounded-2xl">+</button>
          <button className="border m-7 p-7 border-amber-300 rounded-2xl">-</button>
        </div>
      </div>
    </div>
  );
};

export default App;
