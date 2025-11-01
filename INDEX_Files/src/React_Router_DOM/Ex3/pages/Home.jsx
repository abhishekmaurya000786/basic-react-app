import React from 'react'
import { Link, Outlet } from 'react-router-dom'

const Home = () => {
  return (
    <div className='inline-flex'>
      <h2 >Home</h2>
      <div>
      <button className='border-amber-300 border-2 m-3 p-3 rounded-2xl'><Link to='/men' >Men</Link></button><br />
      </div>
      <button className='border-amber-300 border-2 m-3 p-3 rounded-2xl'><Link to='/women' >Women</Link></button>
      
      <Outlet />
    </div>
  )
}
export default Home