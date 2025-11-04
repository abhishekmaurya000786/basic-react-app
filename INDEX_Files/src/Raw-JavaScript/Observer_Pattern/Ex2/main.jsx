import React, { StrictMode } from "react";
import App from "./app.jsx";
import ReactDOM from 'react-dom/client'


ReactDOM.createRoot(document.querySelector("#root")).render(
    <StrictMode>
        <App />
    </StrictMode>
)