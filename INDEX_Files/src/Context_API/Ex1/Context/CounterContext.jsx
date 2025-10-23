import {  createContext, useState } from "react";
export const CounterContext = createContext(null);

export const CounterProvider = ({ children }) =>{
    const [count, setCount] = useState(0);

    
    return (
        <CounterContext.Provider value={{ count, setCount }}>
            {/* The value prop of the Provider component is set to the count state, 
                allowing any child component to access and modify the count value. */}
            {/* The children prop allows any components wrapped by CounterProvider to access the context. */}
                {children}
        </CounterContext.Provider>
    );
};  