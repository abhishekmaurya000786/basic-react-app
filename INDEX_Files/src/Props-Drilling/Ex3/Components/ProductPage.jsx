// src/components/ProductPage.jsx
import React from "react";
import ProductList from "./ProductList";

function ProductPage({ products, cart, addToCart }) {
  // destructuring props
  // products = [ { id, title, price, image }, ... ]
  return (
    <div>
      <h2>Products</h2>
      <ProductList
        products={products}
        cart={cart}
        addToCart={addToCart}
      />
    </div>
  );
}

export default ProductPage;
