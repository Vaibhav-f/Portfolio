import React from 'react'
import {Mail, MapPin} from 'lucide-react'
import {Phone} from 'lucide-react'

const Contact = () => {
  return (
    <div className='h-130  '>
        <div className='  text-center text-white'>

            <h1 className='text-4xl font-bold text-cyan-400 py-8 '>Contact Details</h1>

           

<div className='flex gap-20 j px-30 py-15 '>
<div className='flex gap-4 leading-none text-xl'>
<p> {<Mail/>}</p>
            <p className=''> vaibhavkushwaha@136gmail.com </p>
</div>
<div className='flex gap-4 leading-none text-xl'>
<p> {<Phone/>}</p>
            <p> +91-7266069193</p>
            </div>


</div>
            <div className='flex gap-4 leading-none text-xl px-80'>
                <p><MapPin/></p>
                <p>Kanpur , UttarPradesh</p>

  
            </div>

          
        </div>
      
    </div>
  )
}

export default Contact
