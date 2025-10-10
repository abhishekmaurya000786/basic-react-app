// src/components/ProductList.jsx
import React from "react";
import ProductCard from "./ProductCard";

function ProductList({ products, cart, addToCart }) {
  return (
    <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "10px" }}>
      {products.map(prod => (
        <ProductCard
          key={prod.id}
          product={prod}
          cart={cart}
          addToCart={addToCart}
        />
      ))}
    </div>
  );
}

export default ProductList;
