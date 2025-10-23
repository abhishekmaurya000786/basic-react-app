
import Counter from './Components/Counter'
import { useContext } from 'react'
import { CounterContext } from './Context/CounterProvider'
import './index.css';

const App = () => {
  const counterState = useContext(CounterContext);
  // console.log(counterState);
  return (
    <div>
      <h1 className='flex flex-col my-15 items-center justify-center'>Count is {counterState.count}.</h1>
      <Counter />
      <Counter />
      <Counter />
      <Counter />
    </div>
  )
}

export default App
