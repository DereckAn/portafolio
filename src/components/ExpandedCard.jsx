import React from 'react'

const ExpandedCard = () => {
  return (
    <div
      className='bg-transparent p-5 rounded-2xl sm:w-[360px] w-full  '
      style={{ 
        backdropFilter: 'blur(10px)',
        backgroundColor: 'rgba(128, 128, 128, 0.2)'
      }}>
        <div className='relative w-full h-[230px]'>
          
          <img 
          src={smile}
          alt={name}
          className='w-full h-full object-cover rounded-2xl'/>

          <div 
          className='absolute inset-0 flex justify-end m-3 card-img_hover'>
            <div 
            onClick={()=> window.open(source_code_link, '_blank')}
            className='black-gradient w-10 h-10 rounded-full 
            flex justify-center items-center cursor-pointer'>

              <img 
              src={smile} 
              alt='github' 
              className='w-1/2 h-1/2 object-contain'/>

            </div>
          </div>
        </div>

    </div>
  )
}

export default ExpandedCard
