import React, { useState, useCallback } from "react";
import { debounce, printFunction } from "./index";

export default function App() {

  const [text, setText] = useState("");

  const debouncedInput = useCallback(debounce(() => printFunction("Abhi"), 1000),[]);
  
  const handleChange = (e)=>{
    const value = e.target.value;
    setText(value);
  }

  return (
    <div className="min-h-screen flex justify-center items-center">
      <input type="text" onChange={handleChange} value={text} placeholder="Enter anything..." />
    </div>
  );
}