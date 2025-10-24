import { createContext , useState} from "react";

const CartContext = createContext(null);

export { CartContext }; //here we are destucturing and exporting CartContext, we dtructured because we have to export multiple things from this file, If we console.log CartContext here we will get an object with Provider and Consumer properties. 

export const CartProvider = ({ children }) => {
    const [cartItems, setCartItems] = useState([]);

    return (
        <CartContext.Provider value={{ cartItems, setCartItems }} >
            {children}
        </CartContext.Provider>
    );
};
