import React, { useEffect,useState } from 'react'
import { fetchProducts } from './API/productApi';

const App = () => {

    const [products, setProducts] = useState([]);
    const [cart, setCart] = useState([]);

    useEffect(()=>{
        fetchProducts().then(setProducts);
    },[]);

    const addToCart = (product) => {
        setCart(prev=>{
            const existing = prev.find(item => )
        })
    }
  return (
    <div>
        
    </div>
  )
}
export default App
