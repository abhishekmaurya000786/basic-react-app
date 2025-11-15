import React from "react";
import { useDispatch } from "react-redux";
import { addItem } from "../slices/cartSlice";

const products = [
  { id: 1, name: "Laptop", price: 700 },
  { id: 2, name: "Keyboard", price: 50 },
  { id: 3, name: "Mouse", price: 30 },
];

const Products = () => {
  const dispatch = useDispatch();

  return (
    <div>
      <h2 className="text-xl font-bold">Products</h2>
      {products.map((p) => (
        <div key={p.id} className="flex justify-between border p-2 my-2">
          <span>
            {p.name} - ${p.price}
          </span>
          <button
            onClick={() => dispatch(addItem(p))}
            className="px-3 py-1 bg-blue-500 rounded"
          >
            Add
          </button>
        </div>
      ))}
    </div>
  );
};

export default Products;
