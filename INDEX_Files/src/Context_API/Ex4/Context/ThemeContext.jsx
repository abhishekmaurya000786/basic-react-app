import { createContext,useState,useEffect } from "react";

const ThemeContext = createContext();
export default ThemeContext;

export const ThemeProvider = ({children})=>{
    const [darkMode, setDarkMode] = useState(() => localStorage.getItem("theme") || "light"); // localStorage.getItem("theme") || "dark" will actually set the initial theme to light if there is no theme present in local storage. And () => localStorage.getItem("theme") || "light") means that the function will only be called once during the initial render to set the initial state. If we just did localStorage.getItem("theme") || "light", it would be called on every render, which is not efficient.

    useEffect(() => {
        document.documentElement.classList.toggle(("dark",darkMode));
        localStorage.setItem("theme", darkMode ? "dark" :"light");
    },[darkMode]);

    const toggleTheme = () => setDarkMode(!darkMode);

    return (
        <ThemeContext.Provider value={{darkMode,toggleTheme}}>
            {children}
        </ThemeContext.Provider>
    )
};