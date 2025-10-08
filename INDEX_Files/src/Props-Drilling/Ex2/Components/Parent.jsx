import React from 'react';
import Child from './Child';

const Parent = ({user}) => {
  console.log(user);
  return (
    <div className='border-2 m-3 p-3 mt-7 border-red-600'>
      <h1>{user.username} in Parent Component..!</h1>
      <Child user={user} />
    </div>
  )
}

export default Parent;
