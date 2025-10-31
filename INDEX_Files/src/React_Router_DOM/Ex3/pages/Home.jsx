import React from 'react'
import { Link } from 'react-router-dom'

const Home = () => {
  return (
    <div>
      <h1>Home</h1>
      <button><Link to='/product/adult/men' >Men</Link></button><br />
      <button><Link to='/product/adult/women' >Women</Link></button>
    </div>
  )
}

export default Home
