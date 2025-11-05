import React from "react";
import { debounce,printFunction } from "./index";

export default function App() {
  document.querySelector("input").addEventListener("input", ()=>debounce(printFunction("Abhishek"),1000));
  return (
    <div className="min-h-screen flex justify-center items-center">
      <input type="text" />
    </div>
  );
}
