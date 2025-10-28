import { useContext } from "react";
import { ThemeContext } from "./Context/ThemeContext";
import Journal from "./Components/Journal";
import QuoteBox from "./Components/QuoteBox";
import Notification from "./Components/Notification";

const App = () => {
  const { darkMode, toggleTheme } = useContext(ThemeContext);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen min-w-screen gap-6 transition-all duration-500 bg-gray-100 dark:bg-gray-600">
      <button
        onClick={toggleTheme}
        className="px-4 py-2 text-white bg-blue-500 hover:bg-blue-600 rounded-xl"
      >
        Toggle {darkMode ? "Light" : "Dark"} Mode
      </button>

      <Notification />
      <QuoteBox />
      <Journal />

      <footer className="mt-4 text-sm text-gray-500 dark:text-gray-400">
        Made with 💙 + ☕ by ChatGPT
      </footer>
    </div>
  );
};

export default App;


