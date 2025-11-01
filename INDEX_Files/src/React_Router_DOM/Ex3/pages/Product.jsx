import React from 'react'
import { Link, Outlet } from 'react-router-dom'

const Product = () => {
  return (
    <div>
      <h2 >Product</h2>

    
      <h2 className='flex'>Mango par <Link className='text-lg text-orange-400 font-bold' to="mango"><h2 className='underline italic'>click</h2></Link> karo..!</h2>
      <Outlet />
      
    </div>
  )
}

export default Product