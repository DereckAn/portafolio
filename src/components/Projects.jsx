import React from 'react';
import { Tilt } from 'react-tilt';
import { motion } from 'framer-motion';

import { styles } from '../styles';
import { github } from '../assets';
import { SectionWrapper } from '../hoc';
import { projects } from '../constants';
import { fadeIn, textVariant } from '../utils/motion'; 



const Projects = () => {
  return (
    <>
    <motion.div variants={textVariant()}>
      <p className={`${styles.sectionSubText} text-center`}>
          My practices
      </p>
      <h2 className={`${styles.sectionHeadText}`}>
        Projects.</h2>

    </motion.div>

    <div className='w-full flex '>
      <motion.p 
      variants={fadeIn('','', .1, 1)}
      className='mt-3 text-white text-[17px] max-w-3xl leading-[30px]'>
        Here are some of my projects that I have worked on. I am always looking for new opportunities to learn and grow as a developer.

      </motion.p>

    </div>

    <div className='  mt-20 flex   md:flex-wrap  md:gap-7 xxs:gap-x-0 xxs:gap-y-2 justify-evenly  '>
      {projects.map((project, index) => (
        <ProjectCard  key={`project-${index}`}
        index={index}
        {...project}/>
      ))}
    </div>

    </>
  )
}

export default  SectionWrapper( Projects, "")