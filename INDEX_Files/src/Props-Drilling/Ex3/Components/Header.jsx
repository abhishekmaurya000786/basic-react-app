import React from 'react'

const Header = ({ cartCount }) => {
  return (
    <div>
        <header className='p-10 bg-gray-200 w-full flex justify-between items-center'>
            <h1>My Shop</h1>
            <div>Cart Items: {cartCount}</div>
        </header>
    </div>
  )
}

export default Header
