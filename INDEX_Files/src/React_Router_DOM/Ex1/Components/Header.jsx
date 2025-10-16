import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
    return(
        <div className="px-10 py-7 bg-emerald-600 text-white w-full p-4 flex items-center justify-between">
            <h2 className="text-2xl">Abhishek Maurya. <input className="text-black" type="text" /></h2>
            <div className="flex gap-10 text-lg underline " >
                <Link to="/">Home</Link>
                <Link to="/about">About</Link>
                <Link to="/contact">Contact</Link>
                <Link to="/product">Product</Link>
            </div>
        </div>
    )
}

export default Header;