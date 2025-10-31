import React from 'react'
import { Link,Outlet } from 'react-router-dom'

const Items = () => {
  return (
    <div>
      <h3 className='m-5 p-5 flex '>Hello mai hu item..!</h3>
      <h2>You can go to Popcorn, Just click below link.</h2>
      <p><Link className='text-lg text-amber-300 font-bold' to="/product/items/mango">MANGO Page</Link></p>
      <Outlet />
    </div>
  )
}

export default Items