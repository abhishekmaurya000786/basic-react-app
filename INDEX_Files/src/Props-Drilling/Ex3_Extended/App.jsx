import React, { useEffect } from 'react'
import { fetchProducts } from './API/productApi';

const App = () => {

    const [products, setProducts] = useState([]);
    const [cart, setCart] = useState([]);

    useEffect(()=>{
        fetchProducts().then(setProducts);
    },[]);
  return (
    <div>
    
    </div>
  )
}
export default App
