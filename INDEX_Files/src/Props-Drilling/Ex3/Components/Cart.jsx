// src/components/Cart.jsx
import React from "react";
import CartItem from "./CartItem";

function Cart({ cart, products, removeFromCart }) {
  return (
    <div>
      <h3>Your Cart</h3>
      {cart.length === 0 && <p>Cart is empty</p>}
      {cart.map(item => (
        <CartItem
          key={item.productId}
          item={item}
          products={products}
          removeFromCart={removeFromCart}
        />
      ))}
    </div>
  );
}

export default Cart;
