import React,{useContext} from 'react'
import { CounterContext } from '../Context/CounterContext';

const Counter = () => {
  const {count, setCount} = useContext(CounterContext);
  return (
    <div className='App gap-3 flex flex-col items-center justify-center'>
        <button onClick={() => setCount(count + 1)} className='m-10 p-5 rounded-r-3xl'>Increment</button>
        <button onClick={() => setCount(count - 1)} className='m-10 p-5 rounded-r-3xl'>Decrement</button>
    </div>
  )
}

export default Counter;
