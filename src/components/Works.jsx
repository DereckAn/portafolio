import { Tilt } from 'react-tilt';
import { motion } from 'framer-motion';

import { styles } from '../styles';
import { github } from '../assets';
import { SectionWrapper } from '../hoc';
import { projects } from '../constants';
import { fadeIn, textVariant } from '../utils/motion'; 
// import { Projects } from './Projects';


//https://www.ensign.edu/favicon-32x32.png  este es icono de la escuela ensign college 

const ProjectCard = ({ index, name, description, tags, image, source_code_link }) => {
  return (
    <div 
    // className='xs:w-full'
    
      className='bg-transparent rounded-2xl lg:w-[360px]  h-full p-4  xs:w-[250px]  '
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



      
    </div>
  )
}

const Works = () => {
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

    <div className='  mt-20 flex   flex-wrap  md:gap-7 xxs:gap-x-0 xxs:gap-y-2 justify-evenly  '>
      {projects.map((project, index) => (
        <ProjectCard key={`project-${index}`}
        index={index}
        {...project}/>
      ))}
    </div>

    </>
  )
}

export default  SectionWrapper( Works, "")