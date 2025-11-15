import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { removeItem, clearCart } from "../slices/cartSlice";

const Cart = () => {
  const { items, total } = useSelector((state) => state.cart);
  const dispatch = useDispatch();

  return (
    <div className="mt-6">
      <h2 className="text-xl font-bold">Cart</h2>
      {items.map((item) => (
        <div key={item.id} className="flex justify-between border p-2 my-2">
          <span>
            {item.name} - ${item.price}
          </span>
          <button
            onClick={() => dispatch(removeItem(item.id))}
            className="px-3 py-1 bg-red-500 rounded"
          >
            Remove
          </button>
        </div>
      ))}
      <div className="mt-4 font-semibold">Total: ${total}</div>
      <button
        onClick={() => dispatch(clearCart())}
        className="mt-2 px-4 py-2 bg-gray-700 rounded"
      >
        Clear Cart
      </button>
    </div>
  );
};

export default Cart;
