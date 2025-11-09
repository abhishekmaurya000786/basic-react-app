import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App'
import './index.css';
import { document } from 'postcss';

ReactDOM.createRoot(document.querySelector("#root")).render(
    <App />
)