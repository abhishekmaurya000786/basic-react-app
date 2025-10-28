import React from "react";
import Navbar from "./Components/Navbar";
import Journal from "./Components/Journal";
import Footer from "./Components/Footer";
import { ThemeProvider } from "./Context/ThemeContext";

function App() {
  return (
    <ThemeProvider>
      <div className="min-h-screen min-w-screen transition-colors duration-700 bg-white dark:bg-gray-900">
        <Navbar />
        <Journal />
        <Footer />
      </div>
    </ThemeProvider>
  );
}

export default App;
