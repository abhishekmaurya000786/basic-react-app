import React, { useEffect,useState } from 'react'
import { fetchProducts } from './API/productApi';
import Layout from '../Ex3/Components/Layout';

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
              return prev.map(item => item.productId===product.id ? {...item , qty : item.qty + 1} : item);
            } else {
              return [...prev , {productId : product.id, qty : 1 , addedAt : Date.now()}]
            }
        });
    };

    const removeFromCart = (productId) => {
      setCart(prev=> prev.filter(item.productId !==product.id));
    };

  return (
    <div>
        <Layout 
          products={products}
          cart={cart}
          addToCart={addToCart}
          removeFromCart={removeFromCart}
        />
    </div>
  )
}
export default App
