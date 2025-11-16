import { useSelector } from "react-redux";

export default function CounterDisplay() {
  const count = useSelector((state) => state.counter.value); // reading from store

  return (
    <div className="text-center text-3xl font-bold p-4 bg-blue-100 rounded-xl shadow-md">
      Current Count: {count}
    </div>
  );
}