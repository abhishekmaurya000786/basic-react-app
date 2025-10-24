
import Counter from './Components/Counter'
import { useContext } from 'react'
import { CounterContext } from './Context/CounterProvider'
import './index.css';

const App = () => {
  const counterData = useContext(CounterContext);
  // console.log(counterData);
  return (
    <div>
      <h1 className='flex flex-col my-15 items-center justify-center'>Count is {counterData.count}.</h1>
      <Counter />
      <Counter />
      <Counter />
      <Counter />
    </div>
  )
}

export default App
