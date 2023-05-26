import React, { useState }  from 'react';
import { motion } from 'framer-motion';
import { resume, dereckRes, smile2 } from '../assets';
import { fadeIn, textVariant } from '../utils/motion';
import { styles } from '../styles';
import { SectionWrapper } from '../hoc';



const ExpandedCard = () => {
    const [isOpen, setIsOpen] = useState(false);

    return (
       <><motion.div 
      layout='position'
      transition={{ duration: 1, type: 'spring', bounce: .6 }}
      onClick={() => setIsOpen(!isOpen)}>
          
        {isOpen && (
           
                <div
                    className=" mt-7 flex flex-col">
                    <img
                        src={resume}
                        alt='resume'
                        className='rounded-2xl' />
                        <a
                            href={dereckRes}
                            download
                            className="top-0 right-0 p-2 rounded-2xl border"
                            style={{
                                backdropFilter: 'blur(10px)',
                                backgroundColor: 'rgba(128, 128, 128, 0.2)',
                                textAlign: "center"
                            }}
                            >
                                    Download
                        </a>
                </div>
            
        )}
  
  
         {!isOpen && (
    
    <div className='flex justify-evenly mt-20 flex-wrap gap-10 inset-0 w-full '>

    <img src={smile2} alt="yo" className=' sm:w-[250px] mt-7 xs:w-[250px]  h-96 rounded-2xl' />
    <motion.div
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
                            className='w-full h-full object-cover rounded-2xl ' />

                        <h2 className=' flex  justify-center font-bold mt-5'
                            style={{ fontSize: '24px' }}>Resume</h2>
                    </motion.div>

                </motion.div>
            </div>
            )}
      </motion.div></>
    )
}

const Hero2 = () => {
  return (
    <>
    <motion.div variants={textVariant()}>
        <h1 className={`${styles.heroHeadText} text-gray-400 `}>
            Hi, I am <span className='text-[#070407]'>Dereck Angeles</span>
          </h1>
    </motion.div>

    <motion.p 
    variants={fadeIn("", "", 0.1, 1)}
    className='mt-4 text-white text-[17px] max-w-3xl leading-[30px]'>
        I am a Full Stack Developer with a passion for creating 
        beautiful and functional websites and applications.
        <br className='sm:block hidden' />
        I am also a self-taught photographer and a musician. 
    </motion.p>
    <ExpandedCard/>
   </> 
  )
}

export default SectionWrapper(Hero2, 'home');
