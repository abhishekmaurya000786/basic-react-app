import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <div className='flex px-8 py-4 bg-cyan-900 blue-800 items-center justify-between'>
      <h2 className='text-xl font-bold' >Abhishek</h2>
      <div className="flex gap-10 ">
        <Link className='text-lg font-bold' to="/">Home1</Link>
        <Link className='text-lg font-bold' to="/about">About2</Link>
        <Link className='text-lg font-bold' to="/product">Products</Link>
        <Link className='text-lg font-bold' to="/product/kids">Kids Page</Link>
        
      </div>
    </div>
  )
}

export default Navbar