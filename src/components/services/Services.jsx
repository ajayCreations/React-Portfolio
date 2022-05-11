import React from 'react'
import './services.css'
import {BsFillCheckCircleFill} from 'react-icons/bs'

const Services = () => {
  return (
    <section id="services">
      <h5>What I Offer</h5>
      <h2>Services</h2>

      <div className="container services__container">
        <article className="service">
          <div className="service__head">
            <h3>UI/UX Design</h3>
          </div>

          <ul className="service__list">
            <li>
              <BsFillCheckCircleFill className='service__list-icon'/>
                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit.</p>
             </li>

             <li>
              <BsFillCheckCircleFill className='service__list-icon'/>
                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit.</p>
             </li>


             <li>
              <BsFillCheckCircleFill className='service__list-icon'/>
                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit.</p>
             </li>


             <li>
              <BsFillCheckCircleFill className='service__list-icon'/>
                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit.</p>
             </li>

             <li>
              <BsFillCheckCircleFill className='service__list-icon'/>
                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit.</p>
             </li>




          </ul>

        </article>


        {/* --------------------------- */}


        <article className="service">
          <div className="service__head">
            <h3>Web Development</h3>
          </div>

          <ul className="service__list">
            <li>
              <BsFillCheckCircleFill className='service__list-icon'/>
                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit.</p>
             </li>

             <li>
              <BsFillCheckCircleFill className='service__list-icon'/>
                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit.</p>
             </li>


             <li>
              <BsFillCheckCircleFill className='service__list-icon'/>
                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit.</p>
             </li>


             <li>
              <BsFillCheckCircleFill className='service__list-icon'/>
                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit.</p>
             </li>

             <li>
              <BsFillCheckCircleFill className='service__list-icon'/>
                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit.</p>
             </li>




          </ul>

        </article>


        {/* --------------------------------- */}
          <article className="service">
          <div className="service__head">
            <h3>Content creation</h3>
          </div>

          <ul className="service__list">
            <li>
              <BsFillCheckCircleFill className='service__list-icon'/>
                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit.</p>
             </li>

             <li>
              <BsFillCheckCircleFill className='service__list-icon'/>
                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit.</p>
             </li>


             <li>
              <BsFillCheckCircleFill className='service__list-icon'/>
                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit.</p>
             </li>


             <li>
              <BsFillCheckCircleFill className='service__list-icon'/>
                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit.</p>
             </li>

             <li>
              <BsFillCheckCircleFill className='service__list-icon'/>
                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit.</p>
             </li>




          </ul>

        </article>


      </div>
    </section>
  )
}

export default Services