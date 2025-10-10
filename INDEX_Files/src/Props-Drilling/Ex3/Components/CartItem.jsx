// src/components/CartItem.jsx
import React, { useEffect } from "react";

function CartItem({ item, products, removeFromCart }) {
  const { productId, qty, addedAt } = item;
  const product = products.find(p => p.id === productId);

  if (!product) return null;

  const { title, price } = product;

  // Timer example: auto remove after 5 minutes
  useEffect(() => {
    const timer = setTimeout(() => {
      removeFromCart(productId);
    }, 5 * 60 * 1000); // 5 minutes

    return () => clearTimeout(timer);
  }, [productId, removeFromCart]);

  return (
    <div style={{ borderBottom: "1px solid #ddd", marginBottom: "5px", padding: "5px" }}>
      <h4>{title}</h4>
      <p>Qty: {qty}</p>
      <p>Total: ${(price * qty).toFixed(2)}</p>
      <button onClick={() => removeFromCart(productId)}>Remove</button>
    </div>
  );
}

export default CartItem;
