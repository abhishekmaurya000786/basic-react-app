import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { increment, decrement, addByAmount } from '../store/counterSlice';


const Counter = () => {
const count = useSelector((state) => state.counter.value);
const dispatch = useDispatch();
const [input, setInput] = useState(0);


return (
<div className="p-6 bg-gray-900 text-white rounded-2xl shadow-xl w-80 mx-auto space-y-4">
<h1 className="text-2xl font-bold">Redux Counter</h1>
<p className="text-lg">Value: {count}</p>


<div className="flex gap-4">
<button className="px-4 py-2 bg-green-600 rounded-lg" onClick={() => dispatch(increment())}>+1</button>
<button className="px-4 py-2 bg-red-600 rounded-lg" onClick={() => dispatch(decrement())}>-1</button>
</div>


<input
type="number"
className="w-full p-2 text-black rounded-lg"
value={input}
onChange={(e) => setInput(Number(e.target.value))}
/>


<button
className="w-full py-2 mt-2 bg-blue-600 rounded-lg"
onClick={() => dispatch(addByAmount(input))}
>Add Custom Amount</button>
</div>
);
};


export default Counter;