// src/components/Layout.jsx
import React from "react";
import Header from "./Header";
import ProductPage from "./ProductPage";
import Cart from "./Cart";

function Layout({ products, cart, addToCart, removeFromCart }) {
  return (
    <div>
      <Header cartCount={cart.length} />
      <div style={{ display: "flex" }}>
        <div style={{ flex: 3, padding: "10px" }}>
          <ProductPage
            products={products}
            cart={cart}
            addToCart={addToCart}
          />
        </div>
        <div style={{ flex: 1, borderLeft: "1px solid gray", padding: "10px" }}>
          <Cart
            cart={cart}
            products={products}
            removeFromCart={removeFromCart}
          />
        </div>
      </div>
    </div>
  );
}

export default Layout;
