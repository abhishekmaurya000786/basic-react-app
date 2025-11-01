import React from 'react'
import { Link,Outlet } from 'react-router-dom'

const Adult = () => {
  return (
    <div className='border-4 border-emerald-400 m-4 p-4 rounded-2xl'>
      <h2>ADULT 18+ , don't click..</h2>
      <button><Link to='/product/adult/men'><h2 className='italic underline'>link for Men</h2></Link></button> <br />
      <button><Link to='/product/adult/women'><h2 className='italic underline'>link for Women</h2></Link></button>
      <Outlet />
    </div>
  );
}

export default Adult
