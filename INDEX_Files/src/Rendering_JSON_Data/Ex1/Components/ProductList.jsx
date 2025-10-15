// src/components/ProductList.jsx
import { useState, useEffect } from "react";
import { getProducts } from "../API/productApi";
import ProductItem from "./ProductItem";
import SearchBar from "./SearchBar";

function ProductList() {
  const [products, setProducts] = useState([]);
  const [search, setSearch] = useState("");
  const [loadingText, setLoadingText] = useState("Loading products");

  // Fetch products from API
  const fetchData = async () => {
    const data = await getProducts();
    setProducts(data);
  };

  // Fetch once on mount
  useEffect(() => {
    fetchData();
  }, []);

  // Refresh every 10 seconds using setInterval
  useEffect(() => {
    const interval = setInterval(() => {
      fetchData();
    }, 10000);
    return () => clearInterval(interval);
  }, []);

  // Animate loading text using setTimeout loop
  useEffect(() => {
    if (products.length === 0) {
      let dots = 0;
      const timer = setInterval(() => {
        dots = (dots + 1) % 4;
        setLoadingText("Loading products" + ".".repeat(dots));
      }, 500);
      return () => clearInterval(timer);
    }
  }, [products]);

  // Filtered products
  const filtered = products.filter((p) =>
    p.title.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div>
      <SearchBar onSearch={setSearch} />
      {products.length === 0 ? (
        <h3>{loadingText}</h3>
      ) : (
        <div style={{ display: "flex", flexWrap: "wrap" }}>
          {filtered.map((product) => (
            <ProductItem key={product.id} product={product} />
          ))}
        </div>
      )}
    </div>
  );
}

export default ProductList;
