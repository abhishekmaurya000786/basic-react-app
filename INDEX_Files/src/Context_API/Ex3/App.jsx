import { ThemeProvider } from "./Context/ThemeContext";
import { UserProvider } from "./Context/UserContext";
import Navbar from "./Components/Navbar";
import Dashboard from "./Components/Dashboard";

export default function App() {
  return (
    <ThemeProvider>
      <UserProvider>
        <div className="min-h-screen bg-white dark:bg-gray-900 transition-colors duration-300">
          <Navbar />
          <Dashboard />
        </div>
      </UserProvider>
    </ThemeProvider>
  );
}
