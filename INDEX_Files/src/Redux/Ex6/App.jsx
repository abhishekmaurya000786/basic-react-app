import React from "react";
import { increment, decrement, reset } from "./Features/Counter/counterSlice";
import { useDispatch,useSelector } from "react-redux";

const App = () => {
  const dispatch = useDispatch();

  const count = useSelector((state) => state.counter.value);


  const handleIncrement = () => {
    dispatch(increment());
  };

  const handleDecrement = () => {
    dispatch(decrement());
  };

  const handleReset = () => {
    dispatch(reset());
  };

  return (
    <div className="min-h-screen flex  items-center justify-center bg-gray-900 text-white">
      <div className="w-[360px] border border-amber-300 rounded-2xl p-8 shadow-lg text-center justify-center">
        <h1>Counter : {count}</h1>

        <div className="flex flex-col m-2 gap-4 text-center text-xl font-semibold mb-6">
          <button onClick={handleIncrement} className="btn">
            +
          </button>
          <button onClick={handleDecrement} className="btn">
            -
          </button>
          <button onClick={handleReset} className="btn">
            RESET
          </button>
        </div>
      </div>
    </div>
  );
};

export default App;