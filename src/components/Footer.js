import React from 'react'
import { GrLinkedin, GrGithub } from 'react-icons/gr'
import '../styles.sass'

export const Footer = () => {
  return (
    <div className='footer'>
      <div> <span>Contact me</span>
       <a href='https://github.com/alenaalena512' target='_blank'> <GrGithub /> </a>
       <a href='https://www.linkedin.com/in/alena-gusenko-102498183/' target='_blank'> <GrLinkedin /> </a>
      </div>
    </div>
  )
}
