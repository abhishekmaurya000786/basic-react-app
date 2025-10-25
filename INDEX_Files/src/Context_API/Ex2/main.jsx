import {StrictMode} from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import { CartProvider } from './Context/CartContext'


ReactDOM.createRoot(document.querySelector("#root")).render(
    <StrictMode>
        <CartProvider>  
            <App /> 
        </CartProvider>
    </StrictMode>
)