import { createContext, useEffect, useState } from "react";

const ThemeContext = createContext();
export {ThemeContext};

export const ThemeProvider = ({children}) => {
    
    const [theme, setTheme] = useState(()=>localStorage.getItem("theme") || "light");

    useEffect(()=>{
        document.documentElement.classList.toggle("dark", theme==="dark"); // This line actually adds/removes the class from the HTML element, how it actually happens is by checking the condition after the comma. document.documentElement refers to the <html> element. and the classList.toggle method adds the class if the second argument is true, else removes it,we chose documentElement instead of document.body because we want to apply the theme to the entire document, not just the body,also we avoid documentQuerySelector which is slower. document.documentElement actually refers to all the elements in the document. and classList means the list of classes applied to that element. and toggle is a method that adds or removes a class based on a condition. Here the condition is theme==="dark". Actually first we write the class name to be toggled, then the condition. So overall document.documentElement.classList.toggle("dark", theme==="dark") means if the theme is dark, add the class dark to the html element, else remove it. where "dark" is the class name we want to toggle and theme==="dark" is the condition to check.


        localStorage.setItem("theme", theme) // This line saves the current theme to localStorage whenever it changes. And we do this inside useEffect so that it runs whenever the theme state changes.
    },[theme])

    const toggleTheme = ()=> setTheme((prev)=>(prev==="light"?"dark":"light")); // And this function toggles the theme between light and dark. It is actually connected to a button in the component where we want to toggle the theme. It is actually a function therefore we define it here and pass it through context so that any component that consumes this context can use this function to toggle the theme. It is actually a function therefore we can define it anywhere and pass it through context.

    return (
        <ThemeContext.Provider value={{theme, toggleTheme}} >
            {children}
        </ThemeContext.Provider>
    );
};

export default ThemeContext