import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchUser, changeName } from './features/userSlice';
import { increment } from './features/scoreSlice';
import { resetAll } from './Actions/globalActions';

export default function App() {
  const dispatch = useDispatch();

  const user = useSelector((state) => state.user);

  const score = useSelector((state) => state.score);

  return (
    <div className="p-6 bg-gray-100 min-h-screen text-center">
      <h1 className="text-3xl font-bold mb-4">Redux Full Example</h1>

      <div className="space-y-4">
        
        <button 
          onClick={() => dispatch(fetchUser())}
          className="px-4 py-2 bg-blue-500 text-white rounded"
        >
          Fetch User (Thunk)
        </button>

        <div className="text-lg">
          User: {user.name || 'No user'} <br />
          Status: {user.status}
        </div>

        <button
          onClick={() => dispatch(increment())}
          className="px-4 py-2 bg-green-600 text-white rounded"
        >
          Increment Score
        </button>

        <div className="text-lg">
          Score: {score.value}
        </div>

        <button
          onClick={() => dispatch(resetAll())}
          className="px-4 py-2 bg-red-600 text-white rounded"
        >
          Reset All (external action)
        </button>
      </div>
    </div>
  );
}