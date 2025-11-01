import React from 'react'
import { Link, Outlet } from 'react-router-dom'

const Product = () => {
  return (
    <div>
      <h2 >Product</h2>

    
      <h2 className='flex'>Mango par <Link className='text-lg text-orange-400 font-bold' to="/product/items/mango"><h2 className='underline italic'>click</h2></Link> karo..!</h2>
      

    
      <div className='border-pink-400  m-6 p-6 '><div className='border-pink-400 border-4 m-4 p-4 '><div className='border-amber-300 border-4 m-4 p-4 rounded-2xl'> </div></div></div>
      
      <Outlet />
      
    </div>
  )
}

export default Product