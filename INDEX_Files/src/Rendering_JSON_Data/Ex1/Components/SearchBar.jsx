// src/components/SearchBar.jsx
import { useRef, useEffect } from "react";

function SearchBar({ onSearch }) {
  const inputRef = useRef();

  // Focus input after 1 second using setTimeout
  useEffect(() => {
    const timer = setTimeout(() => {
      inputRef.current.focus();
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <input
      ref={inputRef}
      placeholder="Search product..."
      onChange={(e) => onSearch(e.target.value)}
      style={{
        width: "300px",
        padding: "10px",
        margin: "10px",
        borderRadius: "8px",
      }}
    />
  );
}

export default SearchBar;
