import React from 'react';
import { Link, Outlet } from 'react-router-dom';

const Navbar = () => {
  return (
    <div className='flex px-8 py-4 bg-cyan-900 blue-800 items-center justify-between'>
      <h2 className='text-xl font-bold' >Abhishek</h2>
      <div className="flex gap-10 ">
        <Link className='text-lg font-bold' to="/">Home</Link>
        <Link className='text-lg font-bold' to="/about">About</Link>
        <Link className='text-lg font-bold' to="/product">Products</Link>
        {/* <Link className='text-lg font-bold' to="/product/items">Items</Link> */}
        <Link className='text-lg font-bold' to="/product/kids">Kids Page</Link>
        <Link className='text-lg font-bold' to="/product/popcorn">Popcorn PAGE</Link>
        
      </div>
      <Outlet />
    </div>
  )
}

export default Navbar