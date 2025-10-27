import React, { useContext, useState } from "react";
import { ThemeContext } from "../Context/ThemeContext";
import { setCookie, getCookie } from "../Utils/Cookie";

const Navbar = () => {
  const { darkMode, setDarkMode } = useContext(ThemeContext);
  const [username, setUsername] = useState(getCookie("username") || "");

  const handleUsername = (e) => {
    setUsername(e.target.value);
    setCookie("username", e.target.value);
  };

  return (
    <nav
      className={`flex justify-between items-center p-4 shadow-md transition-colors duration-500 ${
        darkMode ? "bg-gray-900 text-gray-50" : "bg-white text-gray-900"
      }`}
      onClickCapture={() => console.log("Navbar Capture Phase 🧠")}
      onClick={() => console.log("Navbar Bubble Phase 💧")}
    >
      <h1 className="text-2xl font-bold">MoodJournal 🪶</h1>

      <div className="flex items-center gap-4">
        <input
          type="text"
          placeholder="Enter name..."
          value={username}
          onChange={handleUsername}
          className="px-2 py-1 border rounded dark:bg-gray-800 dark:text-gray-50"
        />
        <button
          onClick={() => setDarkMode((prev) => !prev)}
          className="p-2 transition rounded-full hover:scale-110"
        >
          {darkMode ? "☀️" : "🌙"}
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
