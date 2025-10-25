import { useContext } from 'react'
import { CartContext } from '../Context/CartContext';


const Item = (props) => {

    const {cartItems,setCartItems} = useContext(CartContext);
  return (
    <div className='item-card '>
        <h4>Item Name : {props.name}</h4>
        <p>Price : ${props.price}</p>
        <button onClick={()=>setCartItems([...cartItems, {name:props.name, price : props.price}])}>Add to Cart</button>
    </div>
  )
}

export default Item
