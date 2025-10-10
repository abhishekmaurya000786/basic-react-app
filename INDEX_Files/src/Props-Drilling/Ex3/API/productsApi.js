// src/api/productsApi.js

export async function fetchProducts() {
  // dummy API using jsonplaceholder or similar
  const res = await fetch("https://fakestoreapi.com/products?limit=5");
  const data = await res.json();
  // Return only minimal fields we care about
  return data.map(prod => ({
    id: prod.id,
    title: prod.title,
    price: prod.price,
    image: prod.image,
    description: prod.description,
    category: prod.category
  }));
}
