import React from 'react'
import { Link } from 'react-router-dom'

const Product = () => {
  return (
    <div>
      <h1>Product</h1>
      <br />
      <h4>You can use the below link to go to <Link className='text-lg text-amber-300 font-bold' to="/product/items">Items</Link></h4>

    
    </div>
  )
}

export default Product