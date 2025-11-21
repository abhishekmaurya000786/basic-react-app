import React from 'react';
import './App.css';
import { useDispatch, useSelector } from 'react-redux';
import {increment, decrement} from './Features/Counter/counterSlice'

const App = () => {

  const count = useSelector((state)=> state.counter.value);
  const dispatch = useDispatch();

  function handleIncrement(){
    dispatch(increment());
  };
  
  function handleDecrement(){
    dispatch(decrement());
  };

  return (
    <div>
      <button onClick={handleIncrement}>+</button>
      <h1>Count : ${count}</h1>
      <button onClick={handleDecrement}>-</button>
    </div>
  )
}

export default App;
