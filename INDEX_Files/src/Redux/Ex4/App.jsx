import CounterDisplay from "./Components/CounterDisplay";
import CounterButtons from "./Components/CounterButtons";
import './index.css';

export default function App() {
  return (
    <div className="p-10">
      <CounterDisplay />
      <CounterButtons />
    </div>
  );
}