import { useDispatch } from "react-redux";
import { increment, decrement, incrementByAmount } from "../slices/counterSlice";

export default function CounterButtons() {
  const dispatch = useDispatch();

  return (
    <div className="flex gap-4 justify-center mt-6">
      <button
        onClick={() => dispatch(increment())}
        className="px-6 py-3 bg-green-600 text-white rounded-xl shadow hover:bg-green-700"
      >
        Increment
      </button>

      <button
        onClick={() => dispatch(decrement())}
        className="px-6 py-3 bg-red-600 text-white rounded-xl shadow hover:bg-red-700"
      >
        Decrement
      </button>

      <button
        onClick={() => dispatch(incrementByAmount(5))}
        className="px-6 py-3 bg-purple-600 text-white rounded-xl shadow hover:bg-purple-700"
      >
        Add 5
      </button>
    </div>
  );
}