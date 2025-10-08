import React from 'react'
import GrandChild from './GrandChild'

const Child = ({user}) => {
  console.log(user);
  return (
    <div className='border-2 m-3 p-3 mt-8 border-green-600'>
      <h2>Data received from Child..</h2>
      <GrandChild user={user} />
    </div>
  )
}

export default Child
