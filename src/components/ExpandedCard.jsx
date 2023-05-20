import React from 'react'
import { smile } from '../assets';

const ExpandedCard = () => {
  return (
    <div
      className='bg-transparent p-3 rounded-2xl sm:w-[250px]  mt-7'
      style={{ 
        backdropFilter: 'blur(10px)',
        backgroundColor: 'rgba(128, 128, 128, 0.2)'
      }}>
        <div className='relative w-full '>
          
          <img 
          src={smile}
          alt={name}
          className='w-full h-full object-cover rounded-2xl '/>

          <h2 className=' flex  justify-center font-bold'
          style={{ fontSize: '24px' }}>Resume</h2>
        </div>

    </div>
  )
}

export default ExpandedCard
