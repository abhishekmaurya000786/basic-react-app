import { useState,useEffect } from "react";


export const useFetchQuote = ()=>{
    const [quote, setQuote] = useState("");
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchQuote = async () => {
            try{
                const res = await fetch("https://api.quotable.io/random");
                if(!res.ok) throw new Error("Failed to fetch quote"); //
                const data = await res.json();
                setQuote(`${data.content} — ${data.author}`);
            } catch (err) {
                setError(err.message);
            } finally {
                console.log("Quote fetch completed..!!")
            }
        };
        fetchQuote();
    }, []);
     return {quote, error};
}; // It is a custom hook to fetch random quote, a custom hook always starts with 'use' and it always gives back some state or functionality in the form of object or array. A custom Hook is madeup of built-in hooks. It can be built using useState, useEffect etc. Some advance examples of custom hooks are useFetch, useLocalStorage etc. So the actual custom hook in this case is useFetchQuote which is made up of useState and useEffect.