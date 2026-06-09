import React from 'react'

const Left = () => {
  return (
    <div className='w-full md:w-1/2 text-center md:text-left '>
      <h1 className='font-bold text-3xl sm:text-4xl md:text-5xl leading-snug'>Hi,I'm Vaibhav</h1>
      <h1 className='text-cyan-500 font-semibold text-xl sm:text-2xl md:text-3xl leading-snug '>Frontend <span className='text-white '>Developer <br />& MCA Student</span></h1>
      <br />
      <br />
      <p className='text-sm sm:text-base md:text-lg text-gray-300'>
        I don't just build websites - I craft digital experience that are fast , intutuive , and visually engaging using react , javascipt , and modern web technologies
      </p>
      <br />
      <br />
      
     <div className='mt-8'>
        <a
          href="#Contact me"
          className='inline-block text-lg font-semibold bg-cyan-500 rounded-xl px-6 py-3 hover:scale-105 transition'
        >
          Contact Me
        </a>
      </div>
    </div>
  )
}

export default Left
