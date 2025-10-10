export async function fetchProducts() {

  const res = await fetch("https://fakestoreapi.com/products?limit=5");
  const data = await res.json();

  return data.map(p => ({
    id: p.id,
    title: p.title,
    price: p.price,
    image: p.image
  }));
}
