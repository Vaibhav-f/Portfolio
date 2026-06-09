import React from 'react'
import Avtar1 from '../../assets/Avtar1.png'
const About = () => {
  return (
    <section id='About'>
    <div className='  flex flex-col-reverse md:flex-row items-center justify-between px-6 md:px-16 lg:px-24 py-12'>
        <div className=' w-full md:w-1/2 text-white'>
       <h1 className=' inline-block rounded-xl bg-cyan-500 font-bold text-white text-xl md:text-2xl px-4 py-3'>
        About me
       </h1>
       <br /><br />
       <p className=' leading-8 tracking-wide text-sm md:text-base text-gray-300'>
        "Hey there! I'm Vaibhav Kushwaha, an MCA student with a strong passion for frontend development. Even as a fresher, I've dived deep into building modern web experiences using HTML, CSS, JavaScript, React, and Tailwind CSS.
I enjoy turning ideas into real, interactive interfaces — whether it's a clean landing page or a dynamic React app with hooks. I believe great UI is not just about looks, but also about performance and user experience.
I'm currently looking for internship or freelance opportunities where I can grow, contribute, and learn from real-world projects."
       </p>
       </div>
<div className='w-full md:w-1/2 flex justify-center mb-10 md:mb-0'>
  <img className='w-64 sm:w-80 md:w-md lg:w-max ' src={Avtar1} alt="" loading='lazy' />

</div>
  

    </div>
    </section>
  )
}

export default About
