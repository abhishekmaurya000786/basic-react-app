import { useContext } from "react"
import { CartContext } from "../Context/CartContext"


const Cart = () => {
    const {cartItems} = useContext(CartContext);
    return (
        <div className="cart">
        {cartItems.length > 0 ? cartItems.map((item, idx) => <li key={idx}>{item.name} - {item.price}</li>) : <p>No items in cart</p>}

        <h5>Total Bill : ${cartItems.reduce((total, item) => total + item.price, 0)}</h5>
        </div>
    )
}

export default Cart
