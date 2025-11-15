import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { toggleTheme } from "../slices/themeSlice";

const ThemeToggle = () => {
  const { mode } = useSelector((state) => state.theme);
  const dispatch = useDispatch();
  return (
    <button
      onClick={() => dispatch(toggleTheme())}
      className="mb-4 px-4 py-2 bg-indigo-500 rounded"
    >
      Toggle Theme (Current: {mode})
    </button>
  );
};
export default ThemeToggle;
