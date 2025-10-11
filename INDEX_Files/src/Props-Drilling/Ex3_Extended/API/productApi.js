export async function fetchProducts() {
    
    const res =  await fetch("https://fakestoreapi.com/products?limit=5");
    const data = await res.json()

    return data.map(prod=>({
        id: prod.id,
        title: prod.title,
        price:  prod.price,
        image: prod.image

    }));
    
}