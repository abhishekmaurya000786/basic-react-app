import React from "react";
import Reactdom from "react-dom/client";
import App from "./App";
import { ThemeProvider } from "./Context/ThemeContext";


Reactdom.createRoot(document.querySelector("#root")).render(
  <ThemeProvider>
  <React.StrictMode>
    <App />
  </React.StrictMode>
  </ThemeProvider>
);
