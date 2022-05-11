import React from 'react'
import './about.css'
import ME from '../../assets/me.png'
import {FiAward,FiUsers,FiFolder} from 'react-icons/fi'

const About = () => {
  return (
    <section id="about">
      <h5>Get To Know</h5>
      <h2>About Me</h2>

      <div className="container about_container">
        <div className="about_me">
          <div className="about_me-image">
            <img src={ME} alt="" />
          </div>
        </div>
      
        <div className="about_content">

          <div className="about_cards">
            <article className='about_card'>
              <FiAward className='about_icon'/>
              <h5>Experience</h5>
              <small>3+ Years experience</small>
            </article>

            <article className='about_card'>
              <FiUsers className='about_icon'/>
              <h5>Clients</h5>
              <small>100+ Worldwide</small>
            </article>

            <article className='about_card'>
              <FiFolder className='about_icon'/>
              <h5>Projects</h5>
              <small>50+ Completed</small>
            </article>
          </div>

          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta eaque reprehenderit porro ipsum facere 
            expedita soluta voluptate,incidunt enim, at, saepe voluptates impedit eligendi debitis odit natus.
           Animi, reiciendis nihil.</p>

          <a href="#contact" className='btn btn-primary'>Let's Talk</a>

        </div>
      </div>
    
    </section>
  )
}

export default About