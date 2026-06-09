import React from 'react'
import {Mail, MapPin} from 'lucide-react'
import {Phone} from 'lucide-react'

const Contact = () => {
  return (
    <div className='py-12 px-4 md:px-30 '>
        <div className='  text-center text-white'>

            <h1 className='text-3xl md:text-4xl font-bold text-cyan-400 mb-10 '>Contact Details</h1>

           

<div className='flex flex-col md:flex-row justify-center items-center gap-8 md:gap-16 '>
<div className='flex items-center gap-3 text-lg md:text-xl'>
<p> {<Mail/>}</p>
            <p className=''> vaibhavkushwaha@136gmail.com </p>
</div>
<div className='flex items-center gap-3 text-lg md:text-xl'>
<p> {<Phone/>}</p>
            <p> +91-7266069193</p>
            </div>


</div>
            <div className='flex justify-center items-center gap-3 mt-8 text-lg md:text-xl'>
                <p><MapPin/></p>
                <p>Kanpur , UttarPradesh</p>

  
            </div>

          
        </div>
      
    </div>
  )
}

export default Contact
