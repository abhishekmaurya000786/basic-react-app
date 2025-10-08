import React from 'react'
import userData from "./data.js";
import Parent from './Components/Parent.jsx';
import './index.css'

const App = () => {
  console.log(userData);
  return (
    <>
      <div className='text-center border-black bg-gray-400 border-2 m-3 p-3'>
      <h2 className='text-3xl font-bold p-4'>Props Drlling Example..</h2>
      {/* sending data to props */}
      <Parent user={userData}/>
    </div>
    </>
  )
}

export default App
