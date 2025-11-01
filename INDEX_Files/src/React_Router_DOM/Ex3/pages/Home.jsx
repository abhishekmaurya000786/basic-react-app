import React from 'react'
import { Link, Outlet } from 'react-router-dom'

const Home = () => {
  return (
    <div className='inline-flex'>
      <h2 className='border-green-400 border-4 m-4 p-4 w-5/6 h-3/5 items-center flex justify-center rounded-2xl'>Home</h2>

      <div>
      <button className='border-amber-300 border-2 m-3 p-3 rounded-2xl'><Link to='/product/adult' >Men</Link></button><br />
      <Outlet />
      </div>
      <button className='border-amber-300 border-2 m-3 p-3 rounded-2xl'><Link to='/product/adult' >Women</Link></button>
      
    </div>
  )
}

export default Home
