import {useContext} from 'react'
import { CounterContext } from '../Context/CounterProvider'

const Counter = () => {
  const {count, setCount} = useContext(CounterContext);
  return (
    <div className='App flex items-center justify-center'>
        <button onClick={() => setCount(count + 1)} className='border-2 m-5 p-5 rounded-3xl'>Increment</button>
        <button onClick={() => setCount(count - 1)} className='border-2 m-5 p-5 rounded-3xl'>Decrement</button>
    </div>
  )
}

export default Counter;
