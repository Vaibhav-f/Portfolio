import React from 'react'
import html from '../../assets/html.webp'
import css from '../../assets/css.webp'
import react from '../../assets/react.webp'
import js from '../../assets/js.webp'
import tail from '../../assets/tail.webp'

const Skill = () => {
  return (
    <div className='px-4 md:px-10 lg:px-20 py-10'>

      <h1 className='text-3xl md:text-4xl font-semibold text-white text-center tracking-wider mb-10'> My Skills</h1>
<br />

<div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6'>


   <div className='text-white bg-gray-800 rounded-xl flex flex-col items-center justify-center p-5 hover:scale-108 transition'>
     <img  className='h-20 w-20 md:h-24 md:w-24 rounded-full object-cover' src={html} alt="nhg" />
     <p className='mt-4 font-medium tracking-wider '>HTML</p>
     
   </div>
   
   <div className='text-white bg-gray-800 rounded-xl flex flex-col items-center justify-center p-5 hover:scale-108 transition'>
     <img  className='h-20 w-20 md:h-24 md:w-24 rounded-full object-cover' src={css} alt="nhg" />
       <p className='mt-4 font-medium tracking-wider'>CSS</p>
   </div>
   

   <div className='text-white bg-gray-800 rounded-xl flex flex-col items-center justify-center p-5 hover:scale-105 transition'>
     <img  className='h-20 w-20 md:h-24 md:w-24 rounded-full object-cover' src={react} alt="nhg" />
       <p className='mt-4 font-medium tracking-wider'>REACT</p>
   </div>

  <div className='text-white bg-gray-800 rounded-xl flex flex-col items-center justify-center p-5 hover:scale-105 transition'>
     <img  className='h-20 w-20 md:h-24 md:w-24 rounded-full object-cover' src={js} alt="nhg" />
      <p className='mt-4 font-medium tracking-wider'>JAVA-SCRIPT</p>
   </div>

     <div className=' text-white bg-gray-800 rounded-xl flex flex-col items-center justify-center p-5 hover:scale-105 transition'>
     <img  className='h-20 w-20 md:h-24 md:w-24 rounded-full object-cover' src={tail} alt="nhg" />
       <p className='mt-4 font-medium tracking-wider'>TAILWIND-CSS</p>
   </div>

   </div>
    </div>
  )
}

export default Skill
