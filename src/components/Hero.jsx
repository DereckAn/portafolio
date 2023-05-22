import { motion } from 'framer-motion';
import { styles } from '../styles';
import { smile, resume, dereckRes } from '../assets';
import React, { useState }  from 'react';
import { SectionWrapper } from '../hoc';





const Hero = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
  <>
    <section className='relative w-auto h-screen mx-auto  '>
      <motion.div
      className={` flex justify-center absolute inset-0 top-[120px] flex-row items-start `}
    >
      {isOpen && (
        <motion.div
          className="w-[75%] mt-7 flex flex-col"
          onClick={() => setIsOpen(!isOpen)}
        >
          <img
            src={resume}
            alt="resume"
            className="w-full h-full object-cover rounded-2xl"
          />

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
        </motion.div>
      )}

      {!isOpen && (
        <motion.div
        className='overflow-auto '>
          <h1 className={`${styles.heroHeadText} text-white`}>
            Hi, I am <span className='text-[#070407]'>Dereck Angeles</span>
          </h1>
          <p className={`${styles.heroSubText} mt-2 text-white-100`}>
            I am a Full Stack Developer with a passion for creating beautiful and functional websites and applications.
            <br className='sm:block hidden' />
            I am also a self-taught photographer and a musician.
          </p>

          <motion.div className='flex justify-between mt-20 flex-wrap gap-10 inset-0 w-full'>
            <img src={smile} alt="yo" className=' sm:w-[250px] mt-7 xs:w-[250px] bg-center flex h-96 w-96 rounded-full' />

            <motion.div
              onClick={() => setIsOpen(!isOpen)}
              className='bg-transparent p-3 rounded-2xl sm:w-[250px] mt-7 xs:w-[250px]'
              style={{
                backdropFilter: 'blur(10px)',
                backgroundColor: 'rgba(128, 128, 128, 0.2)'
              }}
            >
              <motion.div className='relative w-full'>
                <img
                  src={resume}
                  alt="resume"
                  className='rounded-2xl w-full'
                />
                <h2 className='flex justify-center font-bold mt-4' style={{ fontSize: '24px' }}>
                  Resume
                </h2>
              </motion.div>
            </motion.div>
          </motion.div>
        </motion.div>
      )}
      </motion.div>

    </section>
    </>
  )
}

export default SectionWrapper(Hero, 'home');