import React from 'react'
import { Link, Outlet } from 'react-router-dom'

const Home = () => {
  return (
    <div className='inline-flex'>
      <h1 className='border-green-400 border-4 m-4 p-4 w-5/6 h-3/5 items-center flex justify-center rounded-2xl'>Home</h1>
      <button className='border-amber-300 border-2 m-3 p-3 rounded-2xl'><Link to='/product/adult/men' >Men</Link></button><br />
      <button className='border-amber-300 border-2 m-3 p-3 rounded-2xl'><Link to='/product/adult/women' >Women</Link></button>
      <Outlet />
      
    </div>
  )
}

export default Home
