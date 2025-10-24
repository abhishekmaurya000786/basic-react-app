import React from 'react'
import Item from './Components/Item'
import Cart from './Components/Cart'
import './index.css'

const App = () => {
  return (
    <div className='app-container'>
      <Item name="MacBook Pro" price={100000} />
      <Item name="iPhone 12" price={80000} />
      <Item name="AirPods" price={30000} />

      <h2>Your Cart</h2>
        <Cart />
    </div>
  )
}

export default App
