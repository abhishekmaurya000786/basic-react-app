import React from "react";
import { toggleTheme } from "../Features/Theme/themeSlice";
import { useDispatch, useSelector } from "react-redux";

const ThemeButton = () => {
  const theme = useSelector((state) => state.theme.value);
  const dispatch = useDispatch();
  return (
    <div>
      <button onClick={() => dispatch(toggleTheme())}>Change Theme</button>
    </div>
  );
};

export default ThemeButton;
