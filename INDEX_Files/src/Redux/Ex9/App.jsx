import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchProfile, updateProfileName } from './features/profileSlice';
import { fetchTasks, addTaskOptimistic } from './features/taskSlice';
import { resetAll, logEverything } from './Actions/action';

export default function App() {
  const dispatch = useDispatch();

  const profile = useSelector((s) => s.profile);
  const tasks = useSelector((s) => s.tasks);
  const error = useSelector((s) => s.errors.message);

  return (
    <div className="p-6 bg-gray-100 min-h-screen space-y-6">

      <h1 className="text-3xl font-bold">Task Manager + Profile Center</h1>

      {error && (
        <div className="bg-red-500 text-white p-2 rounded">
          Error: {error}
        </div>
      )}

      <div className="space-y-3">

        <button
          className="px-4 py-2 bg-blue-600 text-white rounded"
          onClick={() => dispatch(fetchProfile())}
        >
          Fetch Profile
        </button>

        <div>
          <div>Name: {profile.name}</div>
          <div>Email: {profile.email}</div>
          <div>Status: {profile.status}</div>
        </div>

        <button
          className="px-4 py-2 bg-green-600 text-white rounded"
          onClick={() => dispatch(fetchTasks())}
        >
          Fetch Tasks
        </button>

        <ul className="list-disc pl-6">
          {tasks.items.map((t) => (
            <li key={t.id}>
              {t.title} {t.optimistic && '(optimistic)'}
            </li>
          ))}
        </ul>

        <button
          className="px-4 py-2 bg-purple-600 text-white rounded"
          onClick={() => dispatch(addTaskOptimistic('New Task'))}
        >
          Add Task (Optimistic)
        </button>

        <button
          className="px-4 py-2 bg-red-600 text-white rounded"
          onClick={() => dispatch(resetAll())}
        >
          Reset All
        </button>

        <button
          className="px-4 py-2 bg-gray-700 text-white rounded"
          onClick={() => dispatch(logEverything())}
        >
          Log Everything
        </button>
      </div>
    </div>
  );
}