import React from 'react'
import { Link, Outlet } from 'react-router-dom'

const Home = () => {
  return (
    <div className='inline-flex'>
      <h1>Home</h1>
      <button className='border-amber-300 border-2 m-3 p-3 rounded-2xl'><Link to='/product/adult/men' >Men</Link></button><br />
      <button className='border-amber-300 border-2 m-3 p-3 rounded-2xl'><Link to='/product/adult/women' >Women</Link></button>
      
    </div>
  )
}

export default Home
