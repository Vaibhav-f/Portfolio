import React from 'react'
import Avtar1 from '../../assets/Avtar1.png'
const About = () => {
  return (
    <section id='About'>
    <div className='  flex '>
        <div className=' h-150 w-1/2 text-white px-30 py-25'>
       <h1 className=' rounded-xl bg-cyan-500 font-bold text-white text-2xl w-35 px-3 py-3'>
        About me
       </h1>
       <br /><br />
       <p className=' leading-loose tracking-wider'>
        "Hey there! I'm Vaibhav Kushwaha, an MCA student with a strong passion for frontend development. Even as a fresher, I've dived deep into building modern web experiences using HTML, CSS, JavaScript, React, and Tailwind CSS.
I enjoy turning ideas into real, interactive interfaces — whether it's a clean landing page or a dynamic React app with hooks. I believe great UI is not just about looks, but also about performance and user experience.
I'm currently looking for internship or freelance opportunities where I can grow, contribute, and learn from real-world projects."
       </p>
       </div>
<div>
  <img className='w-180 py-20  ' src={Avtar1} alt="" />

</div>
  

    </div>
    </section>
  )
}

export default About
