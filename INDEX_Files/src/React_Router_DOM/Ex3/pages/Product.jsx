import React from 'react'
import { Link, Outlet } from 'react-router-dom'

const Product = () => {
  return (
    <div>
      <h1>Product</h1>

    
      <h2 className='flex'>Mango par <Link className='text-lg text-orange-400 font-bold' to="/product/items/mango"><h2 className='underline italic'>click</h2></Link> karo..!</h2>
      

      <h3><Link className='text-lg text-amber-300 font-bold' to="/product/kids">Kids Section</Link></h3>
      <Outlet />
      
      
    </div>
  )
}

export default Product