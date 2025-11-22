import React,{useState} from "react";
import "./index.css";
import { useDispatch, useSelector } from "react-redux";
import {increment,decrement,reset,incrementByAmount} from "./Features/Counter/counterSlice";

const App = () => {
  const [amount, setAmount] = useState(0);

  const count = useSelector((state) => state.counter.value);
  const dispatch = useDispatch();

  console.log("Count : ",count);
  function handleIncrement() {
    dispatch(increment());
  }

  function handleDecrement() {
    dispatch(decrement());
  }

  function handleReset() {
    dispatch(reset());
  }

  function handleIncAmount() {
    dispatch(incrementByAmount(amount));
  }

  return (
    <div className="flex flex-col items-center justify-center">
      <button onClick={handleIncrement} className="btn">
        +
      </button>
      <h1 className="text-white">Count : ${count}</h1>
      <button onClick={handleDecrement} className="btn">
        -
      </button>
      <button onClick={handleReset} className="btn">
        RESET
      </button>
      <div>
        <input type="number" className="btn"
        onChange={(e) => setAmount(e.target.value)}
        />
        <button
          onClick={handleIncAmount}
          value={amount}
          placeholder="Enter Amount"
          className="btn"
        >
          Increment by Amount
        </button>
      </div>
    </div>
  );
};

export default App;
