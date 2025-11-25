import React from "react";

const App = () => {



const handleIncrement = () => {

}

  const handleDecrement = () => {
  };

  const handleReset = () => {
  };


  return (
    <div className="min-h-screen flex  items-center justify-center bg-gray-900 text-white">
      <div className="w-[360px] border border-amber-300 rounded-2xl p-8 shadow-lg text-center justify-center">
        <h1>Counter : 0</h1>

        <div className="flex flex-col m-2 gap-4 text-center text-xl font-semibold mb-6">
          <button onClick={handleIncrement} className="btn">+</button>
          <button onClick={handleDecrement} className="btn">-</button>
          <button onClick={handleReset} className="btn">RESET</button>
        </div>
      </div>
    </div>
  );
};

export default App;
