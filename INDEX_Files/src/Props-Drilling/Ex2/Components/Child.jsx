import React from 'react'
import GrandChild from './GrandChild'

const Parent = ({user}) => {
  return (
    <div>
      <h2>Data recieved from Child..</h2>
      <GrandChild user={user} />
    </div>
  )
}

export default Parent
