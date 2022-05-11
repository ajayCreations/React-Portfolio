import React from 'react'
import './header.css'
import CTA from './CTA'
import ME from '../../assets/task1.png'
import Socials from '../footer/Socials'


const Header = () => {
  return (
   <header>
     <div className="container header_container">
       <h5>Hello I'm</h5>
       <h1>Ajay Kumar Yadav</h1>
       <h5 className="text-light">
        Fullstack Developer
       </h5>
       <CTA />
       <Socials />

       <div className="me">
         <img src={ME} alt="me" />
       </div>

       <a href="#contact" className='scroll_down'>Scroll Down</a>

     </div>
   </header>
  )
}

export default Header