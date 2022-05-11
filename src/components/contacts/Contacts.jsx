import React from 'react'
import './contacts.css'

import {HiOutlineMail} from 'react-icons/hi'
import {BsMessenger,BsWhatsapp} from 'react-icons/bs'

const Contacts = () => {
  return (
  <section id="contact">
    <h5>Get In Touch</h5>
    <h2>Contact Me</h2>

    <div className="container contact__container">
      <div className="contact__options">

      <article className="contact__option">
         <HiOutlineMail className='contact__option-icon'/>
        <h4>Email</h4>
        <h5>ajatesting@gmail.com</h5>
        <a href="mailto:ajacreats@gmail.com">Send a message</a>

      </article>

      <article className="contact__option">
         <BsMessenger className='contact__option-icon'/>
        <h4>Messenger</h4>
        <h5>creats wonder</h5>
        <a href="https://fb.com" target={'_blank'}>Send a message</a>

      </article>

      <article className="contact__option">
         <BsWhatsapp className='contact__option-icon'/>
        <h4>WhatsApp</h4>
        <h5></h5>
        <a href="https://api.whatsapp.com/send?phone=+123456789" target={'_blank'}>Send a message</a>

      </article>

      </div>
      

    <form action={alert('Message send successfully')}>
      <input type="text" name='name' placeholder='Your Full Name' required />
      <input type="email" name='email' placeholder='Your Email' required />
      <textarea name="message" rows="7" placeholder='Your Message' required></textarea>
      <button className='btn btn-primary' type='submit'>Send Message</button>
    </form>

    </div>
  </section>
  ) 
}

export default Contacts