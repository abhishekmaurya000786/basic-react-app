import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { CounterProvider } from './Context/CounterProvider';

// Render the App component wrapped in CounterProvider to provide context
// to all components within the application.

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <CounterProvider>
      <App />
    </CounterProvider>
  </React.StrictMode>
);