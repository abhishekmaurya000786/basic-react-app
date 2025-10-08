import React from 'react'
import userData from "./data.js";
import Parent from './Components/Parent.jsx';

const App = () => {
  return (
    <div className='text-center'>
      <h2>Props Drlling Example..</h2>
      {/* sending data to props */}
      <Parent user={userData}/>
    </div>
  )
}

export default App
