import React from 'react'
import { Feather} from 'lucide-react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div className='flex fixed top-0 left-0 justify-between px-30 py-5 bg-gray-800 text-neutral-100 text-xl items-center w-full '>
      <div className='flex  flex-wrap gap-3'>
        <h2 className='text-cyan-400'><Feather/></h2>
        <h1 className='text-xl md:text-2xl font-semibold leading-none '>Vaibhav</h1>
      </div>

      <div className=' hidden md:flex gap-6 lg:gap-10 text-base lg:text-lg'>
        <a href="#Home">Home</a>
        <a href="#Project">Project</a>
        <a href="#About">About</a>
        <a href="#Contact">Contact</a>


       
      </div>
    </div>
  )
}

export default Navbar
