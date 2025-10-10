// src/components/Header.jsx
import React from "react";

function Header({ cartCount }) {
  return (
    <header style={{ padding: "10px", background: "#eee" }}>
      <h1>My Shop</h1>
      <div>Cart Items: {cartCount}</div>
    </header>
  );
}

export default Header;
