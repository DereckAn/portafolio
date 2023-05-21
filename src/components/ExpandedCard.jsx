import React, { useState }  from 'react'
import { resume } from '../assets';
import { motion } from 'framer-motion';

const ExpandedCard = () => {

  const [isOpen, setIsOpen] = useState(false);


  return (
    <motion.div 
    layout='position'
    transition={{ duration: 1, type: 'spring', bounce: 0.5 }}
    onClick={() => setIsOpen(!isOpen)}>
        {isOpen && (
            <img 
            src={resume}
            alt='resume'
            className='rounded-2xl'/>
          )}


       {!isOpen && (<motion.div
    layout='position'

      className='bg-transparent p-3 rounded-2xl sm:w-[250px]  mt-7 xs:w-[250px]'
      style={{ 
        backdropFilter: 'blur(10px)',
        backgroundColor: 'rgba(128, 128, 128, 0.2)'
      }}>
          
          
         
        <motion.div className='relative w-full '>
          
          <img 
          src={resume}
          alt="resume"
          className='w-full h-full object-cover rounded-2xl '/>

          <h2 className=' flex  justify-center font-bold'
          style={{ fontSize: '24px' }}>Resume</h2>
        </motion.div>

      </motion.div>)}
    </motion.div>
  )
}

export default ExpandedCard
