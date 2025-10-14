import React, { useEffect,useState } from 'react'
import { fetchProducts } from './API/productApi';

const App = () => {

    const [products, setProducts] = useState([]);
    const [cart, setCart] = useState([]); // cart is an array of { productId, qty, addedAt }

    useEffect(()=>{
        fetchProducts().then(setProducts);
    },[]);

    const addToCart = (product) => {
        setCart(prev=>{
            const existing = prev.find(item => item.productId===product.id);
            if (existing) {
              
            } else {
              
            }
        })
    }
  return (
    <div>
        
    </div>
  )
}
export default App
