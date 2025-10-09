import React from 'react'

const GrandChild = ({user}) => {
  return (
    <div className='border-2 p-8 mt-8 border-blue-600'>
      <h2>Hi I am {user.username} from GrandChild..! agian</h2>
    </div>
  )
}

export default GrandChild