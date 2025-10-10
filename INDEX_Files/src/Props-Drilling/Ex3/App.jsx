// src/App.jsx
import React, { useEffect, useState } from "react";
import Layout from "./Components/Layout";
import { fetchProducts } from "./API/productsApi";

function App() {
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState([]); // cart is an array of { productId, qty, addedAt }

  useEffect(() => {
    fetchProducts().then(setProducts);
  }, []);

  // function to add item to cart
  const addToCart = (product) => {
    setCart(prev => {
      // if exists, increase qty else push new
      const existing = prev.find(item => item.productId === product.id);
      if (existing) {
        return prev.map(item =>
          item.productId === product.id
            ? { ...item, qty: item.qty + 1 }
            : item
        );
      } else {
        return [...prev, { productId: product.id, qty: 1, addedAt: Date.now() }];
      }
    });
  };

  // function to remove item
  const removeFromCart = (productId) => {
    setCart(prev => prev.filter(item => item.productId !== productId));
  };

  return (
    <Layout
      products={products}
      cart={cart}
      addToCart={addToCart}
      removeFromCart={removeFromCart}
    />
  );
}

export default App;
