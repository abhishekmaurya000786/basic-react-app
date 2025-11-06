// App.jsx
import React from "react";
import { debounce } from "./index"; // ✅ import debounce function

function printFunction(name) {
  console.log("Hello", name);
}

const debouncedPrint = debounce(printFunction, 1000);

export default function App() {
  return (
    <input
      type="text"
      placeholder="Type something..."
      onInput={(e) => debouncedPrint(e.target.value)} // ✅ debounced call
    />
  );
}
