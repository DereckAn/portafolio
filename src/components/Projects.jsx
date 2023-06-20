import React from 'react';
import { Tilt } from 'react-tilt';
import { motion } from 'framer-motion';

import { styles } from '../styles';
import { github } from '../assets';
import { SectionWrapper } from '../hoc';
import { projects } from '../constants';
import { fadeIn, textVariant } from '../utils/motion'; 



const ProjectsCard2 = ({ index, name, description, tags, image, source_code_link }) => {
  return (
    <motion.div 
    className=''
    variants={fadeIn('up', 'spring', index * 0.5, 0.75)}>
      <Tilt options={{
        max: 45,
        scale: 1,
        speed: 450
      }}
      className='bg-transparent rounded-2xl lg:w-[360px]  h-full p-4 '
      style={{ 
        backdropFilter: 'blur(10px)',
        backgroundColor: 'rgba(128, 128, 128, 0.2)'
      }}>
        <div className='relative md:h-[49%] xxs:h-auto '>
          
          <img 
          src={image}
          alt={name}
          className='w-full md:h-full xxs:h-1/2 object-cover rounded-2xl'/>

          <div 
          className='absolute inset-0 flex justify-end  card-img_hover'>
            <div 
            onClick={()=> window.open(source_code_link, '_blank')}
            className='black-gradient w-10 h-10 rounded-full 
            flex justify-center items-center cursor-pointer'>

              <img 
              src={github} 
              alt='github' 
              className='w-1/2 h-1/2 object-cover'/>

            </div>
          </div>
        </div>

        <div className='mt-5'>
          <h3 className='text-white font-bold md:text-[24px] xxs:text-[14px] '>
            {name}
          </h3>
          <p className='mt-2 text-white md:text-[14px]  xxs:text-[10px] '>{description}</p>
        </div>

        <div className='mt-4  flex flex-wrap gap-2 '> 
          {tags.map((tag) => (
            <p key={tag.name} 
            className={`${tag.color} text-[14px]`}>#{tag.name}</p>
          ))}

        </div>



      </Tilt>
    </motion.div>
  )
}

export default  ProjectsCard2;