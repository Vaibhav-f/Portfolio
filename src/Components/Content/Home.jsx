import React from 'react'
import Left from './Left'
import Visual from './Visual'

const Home = () => {
  return (
    <section id='Home'>
    <div className='flex text-white justify-between p-30 py-45 h-screen bg-slate-900'>
      <Left/>
   <Visual/>
    </div>
    </section>
  )
}

export default Home
