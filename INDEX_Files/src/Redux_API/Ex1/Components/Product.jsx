import {
  useGetProductsQuery,
  useAddProductMutation,
} from "../Stores/API/productApi";

const Product = () => {
  const { data, isloading } = useGetProductsQuery();
  const [addProduct] = useAddProductMutation();

  if (isloading) return <p>Loading...</p>;

  return (
    <div className="p-6">
      <button
        onClick={() =>
          addProduct({
            title: "Apple",
            price: 150,
          })
        }
        className="bg-black text-white px-4 py-2 rounded mb-4"
      >
        {" "}
        Add Product
      </button>

      <ul>
        {data?.products?.slice(0, 5).map((p) => (
          <li key={p.id}>
            {p.title}:{p.price}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Product;
