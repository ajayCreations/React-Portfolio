import React from 'react'
import './experience.css'
import {BsFillPatchCheckFill} from 'react-icons/bs'


const experience = () => {
  return (
   <section id="experience">
    <h5>The Skills I Have</h5>
     <h2>My Experience</h2>

     <div className="container experience__container">

       <div className="experience__frontend">
        <h3>Frontend Development</h3>
        <div className="experience__content">
          <article className="experience__details">
            <BsFillPatchCheckFill className="experience__details-icon" />
           <div>
           <h4>HTML 5</h4>
            <small className='text-light'>Experienced</small>
           </div>


          </article>

          <article className="experience__details">
            <BsFillPatchCheckFill className="experience__details-icon" />
            <div>
            <h4>CSS</h4>
            <small className='text-light'>Intermediate</small>

            </div>

          </article>

          <article className="experience__details">
            <BsFillPatchCheckFill className="experience__details-icon" />
            <div>
            <h4>Javascript</h4>
            <small className='text-light'>Experienced</small>

            </div>

          </article>

          <article className="experience__details">
           <BsFillPatchCheckFill className="experience__details-icon" />
           <div>
            <h4>Tailwind</h4>
            <small className='text-light'>Experienced</small>

           </div>

          </article>

          <article className="experience__details">
            <BsFillPatchCheckFill className="experience__details-icon" />
            <div>
            <h4>React</h4>
            <small className='text-light'>Experienced</small>

            </div>

          </article>

        </div>
       </div>

       <div className="experience__backend">
         
       <h3>Backend Development</h3>
        <div className="experience__content">
          <article className="experience__details">
            <BsFillPatchCheckFill className="experience__details-icon" />
            <div>
            <h4>Node.js</h4>
            <small className='text-light'>Experienced</small>

            </div>

          </article>

          <article className="experience__details">
           <BsFillPatchCheckFill className="experience__details-icon" />
           <div>
            <h4>MongoDB</h4>
            <small className='text-light'>Intermediate</small>
           </div>


          </article>

          <article className="experience__details">
            <BsFillPatchCheckFill className="experience__details-icon" />
            <div>
            <h4>MySQL</h4>
            <small className='text-light'>Experienced</small>


            </div>
          </article>

          <article className="experience__details">
            <BsFillPatchCheckFill className="experience__details-icon" />
            <div>
            <h4>PHP</h4>
            <small className='text-light'>Basic</small>
            </div>


          </article>

          <article className="experience__details">
            <BsFillPatchCheckFill className="experience__details-icon" />
            <div>
            <h4>Python</h4>
            <small className='text-light'>Basic</small>

            </div>

          </article>

        </div>
       </div>

     </div>
   </section>
  )
}

export default experience