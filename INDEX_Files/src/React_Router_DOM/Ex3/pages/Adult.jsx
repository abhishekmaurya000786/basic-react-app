import React from 'react'
import { Link,Outlet } from 'react-router-dom'

const Adult = () => {
  return (
    <div>
      <h1>ADULT 18+ , don't click..</h1>
      <button><Link to='/product/adult'><h2 className='italic underline'>link</h2></Link></button>
      
    </div>
  );
}

export default Adult
