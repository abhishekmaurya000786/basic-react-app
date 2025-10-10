// src/components/ProductCard.jsx
import React, { useEffect } from "react";

function ProductCard({ product, cart, addToCart }) {
  const { id, title, price, image } = product;

  // Timer example: auto-add to cart after 30 seconds if not added
  useEffect(() => {
    const timer = setTimeout(() => {
      const inCart = cart.some(item => item.productId === id);
      if (!inCart) {
        addToCart(product);
      }
    }, 30000); // 30 seconds

    return () => clearTimeout(timer);
  }, [cart, id, product, addToCart]);

  return (
    <div style={{ border: "1px solid #ccc", padding: "10px" }}>
      <img src={image} alt={title} style={{ width: "100px" }} />
      <h4>{title}</h4>
      <p>Price: ${price}</p>
      <button onClick={() => addToCart(product)}>Add to Cart</button>
    </div>
  );
}

export default ProductCard;
