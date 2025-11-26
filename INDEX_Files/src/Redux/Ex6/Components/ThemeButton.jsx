import React from "react";
import { toggleTheme } from "../Features/Theme/themeSlice";
import { useDispatch, useSelector } from "react-redux";

const ThemeButton = () => {
  const theme = useSelector((state) => state.theme.value);
  const dispatch = useDispatch();
  return (
    <div>
      <button
        onClick={() => dispatch(toggleTheme())}
        className={`btn fixed top-4 right-4 z-50 ${theme === "dark" ? "btn-dark" : "btn-light"} dark:bg-black dark:text-white bg-white text-black`}
      >
        Change Theme
      </button>
    </div>
  );
};

export default ThemeButton;
