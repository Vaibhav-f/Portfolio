import React from 'react'
import Contact from './Contact'
import Form from './Form'

const Section3 = () => {
  return (
    <section id='Contact'>
    <div  className=' bg-slate-900 flex flex-col md:flex-row gap-10'>
      <Contact/>
      <Form/>
    </div>
    </section>
  )
}

export default Section3
