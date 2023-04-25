import React from 'react'
import { motion } from 'framer-motion';
import { styles } from '../styles';
import { ComputersCanvas } from './canvas';
import { smile } from '../assets';

const Hero = () => {
  return (
    <section className='relative w-full h-screen mx-auto'>
      <div 
      className={`${styles.paddingX} 
      absolute inset-0 top-[120px] max-w-7xl mx-auto 
      flex flex-row items-start gap-5`}>

        <div className='flex flex-col justify-center items-center mt-5'>
        
          <div className='w-5 h-5 rounded-full bg-[#69ff5e]'/>
          <div className='w-1 sm:h-80 h-40 violet-gradient'/>


        </div>

        <div>
          <h1 className={`${styles.heroHeadText} text-white`}>Hi, I am <span className='text-[#ff5ef7]'>Dereck Angeles</span></h1>

          <p className={`${styles.heroSubText} mt-2 text-white-100`}> I am a Full Stack Developer with a passion for creating beautiful and functional websites and applications. <br className='sm:block hidden'/> 
          I am also a self-taught photographer and a musician.

          </p>
        </div>
      </div>
      <div className='absolute w-[300px] h-[200px] -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2
          xs:bottom-10
          '>
        <img src={smile} alt="yo" className='p-0 rounded-3xl sm:w-[360px] w-full   '/>
      </div>
      
    {/* <ComputersCanvas/> */}

    <div 
    className='absolute 
    xs:bottom-10 bottom-32 w-full 
    flex justify-center items-center'>

      <a href='#about'>
        <div className='w-[34px] h-[64px] rounded-3xl border-4 border-secondary
        flex justify-center items-start p-2'>

          <motion.dev 
          animate={{y: [0,30,0]}} 
          transition={{ duration: 1.5, repeat: Infinity, repeatType: 'loop'}}
          className='w-3 h-3 rounded-full bg-secondary mb-1'/>

        </div>
      </a>

    </div>
      
    </section>
  )
}

export default Hero