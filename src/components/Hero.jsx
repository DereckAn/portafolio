import { motion } from 'framer-motion';
import { styles } from '../styles';
import { smile, resume } from '../assets';
import React, { useState }  from 'react';



const Hero = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <section className='relative w-full h-screen mx-auto'>
      <motion.div 
      className={`${styles.paddingX} 
      absolute inset-0 top-[120px] max-w-7xl mx-auto 
      flex flex-row items-start gap-5`}>

        <motion.div>
          {isOpen && (
            <motion.div
            className='w-[75%]  mt-7 flex flex-col'
            onClick={() => setIsOpen(!isOpen)}
            layout='position'
            transition={{ duration: 1, type: 'spring', bounce: 0.5 }}>
              <img 
              src={resume}
              alt='resume'
              className='w-full h-full object-cover rounded-2xl'/>
              <button className='  top-0 right-0 p-2  rounded-2xl items-center border'
              style={{ backdropFilter: 'blur(10px)',
              backgroundColor: 'rgba(128, 128, 128, 0.2)'}}>Download</button>
              </motion.div>
            )}


          {!isOpen && (
          <>
          <motion.div>
            <h1 className={`${styles.heroHeadText} text-white`}>Hi, I am <span className='text-[#070407]'>Dereck Angeles</span></h1>
            <p className={`${styles.heroSubText} mt-2 text-white-100`}> I am a Full Stack Developer with a passion for creating beautiful and functional websites and applications. <br className='sm:block hidden' />
              I am also a self-taught photographer and a musician.
            </p>

            <motion.div className='flex justify-between mt-10 '>
              <img src={smile} alt="yo" className=' sm:w-[250px] mt-7 xs:w-[250px] bg-center' />
              <motion.div
              onClick={() => setIsOpen(!isOpen)}
             
              className='bg-transparent p-3 rounded-2xl sm:w-[250px]  mt-7 xs:w-[250px] '
              style={{
                backdropFilter: 'blur(10px)',
                backgroundColor: 'rgba(128, 128, 128, 0.2)'
              }}>

              <motion.div className='relative w-full '>
                <img
                  src={resume}
                  alt="resume"
                  className='w-full h-full object-cover rounded-2xl ' />
                <h2 className=' flex  justify-center font-bold mt-3'
                  style={{ fontSize: '24px' }}>Resume</h2>
              </motion.div>

            </motion.div>
            
            </motion.div>
          </motion.div>
          
          
            </>
                )}


            </motion.div>
      </motion.div>
    </section>
  )
}

export default Hero