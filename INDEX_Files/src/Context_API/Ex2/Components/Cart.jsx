import { useContext } from "react"
import { CartContext } from "../Context/CartContext"


const Cart = () => {
    const {cartItems} = useContext(CartContext);
  return (
    <div className="cart">
      <li>Name : {cartItems.map(item => <l>{item.name}</l>)} </li>

      <h5>Total Bill : ${cartItems.reduce((total, item) => total + item.price, 0)}</h5>
    </div>
  )
}

export default Cart
