// ChannelDashboard.jsx
import React, { useState, useEffect } from "react";
import { Channel } from "./Channel";

const myChannel = new Channel("Symbio Studios");

export default function ChannelDashboard() {
  const [stats, setStats] = useState(myChannel.getStats());

  useEffect(() => {
    // Subscribe this component to channel updates
    myChannel.subscribe(setStats);
  }, []);

  return (
    <div className="p-6 bg-gray-100 rounded-2xl text-center">
      <h2 className="text-xl font-bold">{stats.name}</h2>
      <p>👍 Likes: {stats.likes}</p>
      <p>👎 Dislikes: {stats.dislikes}</p>

      <div className="flex justify-center gap-4 mt-4">
        <button
          onClick={() => myChannel.like()}
          className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-xl"
        >
          Like
        </button>
        <button
          onClick={() => myChannel.dislike()}
          className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-xl"
        >
          Dislike
        </button>
      </div>
    </div>
  );
}