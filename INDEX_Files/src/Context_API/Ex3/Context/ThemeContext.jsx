import { createContext, useState, useEffect } from "react";

const ThemeContext = createContext();
export { ThemeContext };

export const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState(() => localStorage.getItem("theme") || "light");

  useEffect(() => {
    // document.querySelector("body").classList.toggle("dark", theme === "dark");
    document.documentElement.classList.toggle("dark", theme === "dark"); // Both the lines give same result.. It does not mean they are same.!
    localStorage.setItem("theme", theme);
  }, [theme]);

  const toggleTheme = () => setTheme((prev) => (prev === "light" ? "dark" : "light"));

  const themeClasses = `${ theme === "dark" ? "bg-gray-900 text-white" : "bg-white text-gray-900"} transition-colors duration-300`;

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme, themeClasses }}>
      {children}
    </ThemeContext.Provider>
  );
};
