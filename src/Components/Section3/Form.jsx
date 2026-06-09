import { Target } from 'lucide-react'
import React, { useState } from 'react'

const Form = () => {
 


  return (
    <section id='Contact me'>
    <div className='py-8 px-4 md:px-10' >
        <div className='border-2 border-amber-100 rounded-xl p-6 md:p-8 text-white w-full max-w-md lg:w-xs mask-x-from-98% '>


          <form onSubmit={(e) => {
    setTimeout(() => {
      e.target.reset();
    }, 100);
  }} action="https://api.web3forms.com/submit" method="POST">

  <input type="hidden" name="access_key" value="5620aee7-cf10-4d6f-ac97-414e43b9d685"></input>


          <input 
         
          className='bg-gray-500 h-10 w-full rounded-xl p-3 '  type="text" name="name" id="" maxLength={20}  required placeholder='Enter Your Name '/>
<br /><br />


           <input
           
           className='bg-gray-500 h-10 w-full rounded-xl p-3' type="tel" name="phone" id="" maxLength={10} minLength={10} required placeholder='Enter Your Number'/><br />
           <br />


            <input

            
            className='bg-gray-500 h-10 w-full rounded-xl p-3' type="email" name="email" id=""   pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$" required placeholder='Enter Your E-mail'/><br />
           <br />


           <textarea 
          
           className='bg-gray-500 w-full rounded-xl p-3' placeholder='Message' name="message" id="" rows={5}>
           </textarea>
           <br />
           <br />

           <button className='bg-cyan-500 rounded-xl cursor-pointer active:scale-95 px-4 py-2 text-lg w-full' type='submit'>
            Submit
           </button>
           </form>
        </div>
     
    </div>
    </section>
  )
}

export default Form
