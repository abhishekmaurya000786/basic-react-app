import React, {StrictMode} from 'react';
import ReactDOM from 'react-dom/client'
import { ThemeProvider } from './Context/ThemeContext';
import App from "./App";
import './index.css';

ReactDOM.createRoot(document.querySelector("#root")).render(    
    <ThemeProvider>
        <StrictMode>
            <App />
        </StrictMode>
    </ThemeProvider>
    
);
