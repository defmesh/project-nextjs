
import React from 'react'

const Carr = (props) => {
  return (
    <div className='flex flex-col   items-center    py-12 px-8'>
    <div>
      <div className='bg-[#00d8ff] inline-flex items-center p-2 rounded-full'>
        {props.icon}
      </div>
      <h3 className='text-xl font-bold py-4'>{props.heading}</h3>
      <p>
        {props.text}
      </p>
    </div>
  </div>
  )
}

export default Carr;