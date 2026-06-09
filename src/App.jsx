import React from 'react'
import Navbar from './Components/Content/Navbar'
import Home from './Components/Content/Home'
import Section1 from './Components/Section1/Section1'
import Section2 from './Components/Section2/Section2'
import Section3 from './Components/Section3/Section3'
import Section4 from './Components/Section4/Section4'



const App = () => {
  return (
    <div className='bg-slate-950  w-screen'>
      <Navbar/>
  <Home/>
      <Section4/>
    <Section1/>
    <Section2/>
    <Section3/>


    </div>
  )
}

export default App
