import React from 'react'
import Left from './Left'
import Visual from './Visual'

const Home = () => {
  return (
    <section id='Home'>
    <div className='flex flex-col md:flex-row items-center justify-between min-h-screen bg-slate-900 text-white px-6 md:px-16 lg:px-24 py-24'>
      <Left/>
   <Visual/>
    </div>
    </section>
  )
}

export default Home
