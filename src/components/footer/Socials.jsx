import React from 'react'
import {BsLinkedin,BsGithub,BsInstagram} from 'react-icons/bs'


const Socials = () => {
  return (
    <div className="header_socials">
        <a href="https://www.linkedin.com/in/ajay-kumar-yadav-029/" target="_blank"><BsLinkedin/></a>
        <a href="https://github.com/" target="_blank"><BsGithub/></a>
        <a href="https://www.instagram.com/?hl=en" target="_blank"><BsInstagram/></a>
    </div>
  )
}

export default Socials