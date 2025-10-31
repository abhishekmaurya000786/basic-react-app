import React from 'react'
import { Link, Outlet } from 'react-router-dom'

const Product = () => {
  return (
    <div>
      {/* <h1>Product</h1> */}
      <br />
      <h4>You can use the below link to go to <Link className='text-lg text-amber-300 font-bold' to="/product/items">Items</Link></h4>
      <br /><br />
      
      <Link className='text-lg text-pink-400-300 font-bold' to="/product/items/mango">Mango par click karo..!</Link>

      {/* <h3><Link className='text-lg text-amber-300 font-bold' to="/product/kids">Kids Section</Link></h3> */}
      <Outlet />
      
      
    </div>
  )
}

export default Product