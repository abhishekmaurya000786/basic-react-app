import React from "react";
import CounterBox from "./Components/CounterBox";
import ThemeButton from "./Components/ThemeButton";

import { increment, decrement, reset } from "./Features/Counter/counterSlice";
import { useDispatch, useSelector } from "react-redux";

const App = () => {
  const dispatch = useDispatch();
  const count = useSelector((state) => state.counter.value);
  const theme = useSelector((state) => state.theme.theme);

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
    <>
      <ThemeButton theme={theme} />
      <CounterBox
        count={count}
        handleIncrement={handleIncrement}
        handleDecrement={handleDecrement}
        handleReset={handleReset}
      />
    </>
  );
};

export default App;
