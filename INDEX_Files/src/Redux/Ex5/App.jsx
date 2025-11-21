import React from 'react';
import './App.css';
import { useDispatch, useSelector } from 'react-redux';
import {increment, decrement,reset, incrementByAmount} from './Features/Counter/counterSlice'

const App = () => {

  const count = useSelector((state)=> state.counter.value);
  const dispatch = useDispatch();

  function handleIncrement(){
    dispatch(increment());
  };
  
  function handleDecrement(){
    dispatch(decrement());
  };

  function handleReset(){
    dispatch(reset());
  };

  function handleSetAmount(){
    dispatch(incrementByAmount)
  }

  return (
    <div className='flex flex-col items-center justify-center'>
      <button 
        onClick={handleIncrement}
        className='btn'
      >+</button>
      <h1 className='text-white'>Count : ${count}</h1>
      <button onClick={handleDecrement} className='btn'>-</button>
      <button onClick={handleReset} className='btn'>RESET</button>
      <input type="number"  />
      <button onClick={handleSetAmount()}></button>
    </div>
  )
}

export default App;
