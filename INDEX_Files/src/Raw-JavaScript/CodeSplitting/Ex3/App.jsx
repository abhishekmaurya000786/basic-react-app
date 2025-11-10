import React from "react";
import "./index.css";

export default function App() {
  async function loadFeature(featureName) {
    // Dynamically import when a button is clicked
    const module = await import("./heavy.js");

    switch (featureName) {
      case "heavy":
        module.veryHeavy();
        break;
      case "data":
        module.dataCrunching();
        break;
      case "ai":
        module.aiModelLoad();
        break;
      default:
        alert("Unknown feature requested!");
    }
  }

  return (
    <div className="min-h-screen flex flex-col justify-center items-center">
      <h1 className="text-3xl font-bold mb-6">
        🚀 Advanced Dynamic Import Demo
      </h1>

      <div className="flex gap-4">
        <button
          onClick={() => loadFeature("heavy")}
          className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-md"
        >
          Load Heavy Feature
        </button>

        <button
          onClick={() => loadFeature("data")}
          className="bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded-md"
        >
          Run Data Crunching
        </button>

        <button
          onClick={() => loadFeature("ai")}
          className="bg-purple-500 hover:bg-purple-600 text-white px-4 py-2 rounded-md"
        >
          Load AI Model
        </button>
      </div>
    </div>
  );
}
