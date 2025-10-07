import React from 'react'


const Card = (props) => {
  return (
    <div className='bg-white text-black inline-block px-3 py-3 text-center rounded mr-7 items-center'>
      <img className="ml-8 mr-8 h-32 w-32 rounded-full center" src={props.photo} alt="" />
      <h1 className='font-bold'>{props.name}</h1>
      <h4 className='text-blue-500 font-bold text-xl'>{props.profession}</h4>
      <h2 className='py-2'>{props.city}, {props.age}</h2>
      <button>Add friend</button>
    </div>
  )
}

export default Card
