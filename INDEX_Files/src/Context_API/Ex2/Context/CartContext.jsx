import { createContext , useState} from "react";

const CartContext = createContext(null);

export { CartContext };

export const CartProvider = ({ children }) => {
    const [cartItems, setCartItems] = useState([]);

    return (
        <CartContext.Provider value={{ cartItems, setCartItems }} >
            {children}
        </CartContext.Provider>
    );
};
