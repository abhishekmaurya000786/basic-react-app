
import Counter from './Components/Counter'
import { useContext } from 'react'
import { CounterContext } from './Context/CounterProvider'

const App = () => {
  const counterState = useContext(CounterContext);
  // console.log(counterState);
  return (
    <div>
      <h1>Count is {counterState.count}.</h1>
      <Counter />
      <Counter />
      <Counter />
      <Counter />
    </div>
  )
}

export default App
