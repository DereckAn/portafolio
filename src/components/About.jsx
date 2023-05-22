import React from 'react';
import { Tilt } from 'react-tilt';
import { motion } from 'framer-motion';

import { styles } from '../styles';
import { services, technologies } from '../constants';
import { fadeIn, textVariant } from '../utils/motion';
import { SectionWrapper } from '../hoc';

const ServiceCard = ({ index, name, icon }) => (
    <Tilt className='xs:w-[250px] w-full'>
      <motion.div 
      variants={fadeIn('right',"spring", 0.5 * index, 0.75)}
      className='w-[200px] p-[0px] rounded-[50px] shadow-card '>
        
        <div 
        options={{
          max:45,
          scale:1,
          speed:450,
         }}
        className='bg-transparent rounded-[50px] py-5 px-12 min-h-[200px]  flex justify-evenly
        items-center flex-col '
        style={{ 
          backdropFilter: 'blur(10px)',
          backgroundColor: 'rgba(128, 128, 128, 0.2)'
        }}> 

        <img  src={icon} alt={name} 
        className='w-16 h-16 object-contain'/>

          <h3 className='text-white text-[20px] font-bold text-center'> {name} </h3>


        </div>

      </motion.div>
      
    </Tilt>
  )

const About = () => { 
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={`${styles.sectionSubText} text-center`}>
          About
        </p>
        <h2 className={`${styles.sectionHeadText}`}>Introduction.</h2>
      </motion.div>

      <motion.p 
      variants={fadeIn("", "", 0.1, 1)}
      className='mt-4 text-white text-[17px] max-w-3xl leading-[30px]'>
       I am a computer science student with a 
       strong background in mathematics. I have technical skills in programming and software 
       development and an analytical and logical mindset that allows me to solve complex problems and develop innovative computing solutions. 
       I am quick to adapt to new 
       technologies and trends in the computer science field. 

      </motion.p>
      <div className='mt-20 flex flex-wrap gap-10 '>
        {technologies.map((technologies, index) => (
          <ServiceCard key={technologies.name}
          index={index} {...technologies}/>
          
        ))}
        
      </div>
    </>
  );
};

export default SectionWrapper( About , 'about');