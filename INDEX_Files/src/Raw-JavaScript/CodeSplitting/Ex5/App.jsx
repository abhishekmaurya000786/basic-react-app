import React, { Suspense, lazy, useState } from "react";

// Lazy load each component separately
const About = lazy(() => import("./Components/About"));
const Contact = lazy(() => import("./Components/Contact"));
const Dashboard = lazy(() => import("./Components/Dashboard"));

export default function App() {
  const [page, setPage] = useState("home");

  const renderPage = () => {
    switch (page) {
      case "about":
        return <About />;
      case "contact":
        return <Contact />;
      case "dashboard":
        return <Dashboard />;
      default:
        return <h2>Welcome Home 🏠</h2>;
    }
  };

  return (
    <div className="min-h-screen flex flex-col items-center p-8 gap-4">
      <h1 className="text-3xl font-bold mb-4">Code Splitting Example 🚀</h1>

      {/* Navigation Buttons */}
      <div className="flex gap-4">
        <button
          className="bg-blue-500 text-white px-4 py-2 rounded-xl"
          onClick={() => setPage("about")}
        >
          About
        </button>
        <button
          className="bg-green-500 text-white px-4 py-2 rounded-xl"
          onClick={() => setPage("contact")}
        >
          Contact
        </button>
        <button
          className="bg-purple-500 text-white px-4 py-2 rounded-xl"
          onClick={() => setPage("dashboard")}
        >
          Dashboard
        </button>
      </div>

      {/* Suspense Loader */}
      <Suspense fallback={<p className="text-gray-500">Loading module...</p>}>
        {renderPage()}
      </Suspense>
    </div>
  );
}
