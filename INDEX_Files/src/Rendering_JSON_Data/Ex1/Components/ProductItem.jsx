// src/components/ProductItem.jsx
function ProductItem({ product }) {
  return (
    <div
      style={{
        border: "1px solid #ddd",
        borderRadius: "10px",
        padding: "10px",
        margin: "10px",
        width: "200px",
      }}
    >
      <img src={product.image} alt={product.title} width="100%" />
      <h4>{product.title}</h4>
      <p>₹{product.price}</p>
    </div>
  );
}

export default ProductItem;
