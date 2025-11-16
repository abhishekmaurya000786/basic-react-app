import CounterDisplay from "./Components/CounterDisplay";
import CounterButtons from "./Components/CounterButtons";

export default function App() {
  return (
    <div className="p-10">
      <CounterDisplay />
      <CounterButtons />
    </div>
  );
}