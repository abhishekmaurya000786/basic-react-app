import React from "react";
import Reactdom from "react-dom/client";
import App from "./App";
import "./index.css";

Reactdom.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);