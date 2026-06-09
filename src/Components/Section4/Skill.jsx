import React from 'react'
import html from '../../assets/html.png'
import css from '../../assets/css.png'
import react from '../../assets/react.png'
import js from '../../assets/js.png'
import tail from '../../assets/tail.png'

const Skill = () => {
  return (
    <div className='h-100 px-30 py-5'>

      <h1 className='text-3xl   font- semibold text-white tracking-wider  px-140 py-1'> My Skills</h1>
<br />

<div className='flex gap-15'>


   <div className='text-amber-50 py-5 h-50 w-50 rounded-xl gap-5 border-amber-100 bg-gray-800 flex flex-col items-center justify-center hover:scale-108'>
     <img  className='h-30 w-30 rounded-full items-center object-cover' src={html} alt="nhg" />
     <p className='text-xl font-medium tracking-wider '>HTML</p>
     
   </div>
   
   <div className='text-amber-50 py-5 h-50 w-50 rounded-xl gap-5 border-amber-100 bg-gray-800 flex flex-col items-center justify-center hover:scale-108'>
     <img  className='h-30 w-30 rounded-full  object-cover' src={css} alt="nhg" />
       <p className='text-xl font-medium tracking-wider'>CSS</p>
   </div>
   

   <div className='text-amber-50 py-5 h-50 w-50 rounded-xl gap-5 border-amber-100 bg-gray-800 flex flex-col items-center justify-center hover:scale-108'>
     <img  className='h-30 w-30 rounded-full  object-cover' src={react} alt="nhg" />
       <p className='text-xl font-medium tracking-wider'>REACT</p>
   </div>

  <div className='text-amber-50 py-5 h-50 w-50 rounded-xl gap-5 border-amber-100 bg-gray-800 flex flex-col items-center justify-center hover:scale-108'>
     <img  className='h-30 w-30 rounded-full  object-cover' src={js} alt="nhg" />
      <p className='text-xl font-medium tracking-wider'>JAVA-SCRIPT</p>
   </div>

     <div className='text-amber-50 py-5 h-50 w-50 rounded-xl gap-5 border-amber-100 bg-gray-800 flex flex-col items-center justify-center hover:scale-108 '>
     <img  className='h-30 w-30 rounded-full  object-cover' src={tail} alt="nhg" />
       <p className='text-xl font-medium tracking-wider'>TAILWIND-CSS</p>
   </div>

   </div>
    </div>
  )
}

export default Skill
