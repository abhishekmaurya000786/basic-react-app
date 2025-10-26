import {useContext} from "react";
import { UserProvider } from "./Context/UserContext";
import Navbar from "./Components/Navbar";
import Dashboard from "./Components/Dashboard";
import { ThemeContext } from "./Context/ThemeContext";
import './index.css';

export default function App() {
  const { themeClasses } = useContext(ThemeContext);
  return (
    <UserProvider>
      <div className={`min-h-screen min-w-screen ${ themeClasses } p-7`}>
          <Navbar />
          <Dashboard /> 
      </div>
    </UserProvider>
    
  );
}
