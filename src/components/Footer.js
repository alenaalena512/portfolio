import React from 'react'
import { GrLinkedin, GrGithub } from 'react-icons/gr'
import '../styles.sass'

export const Footer = () => {
  return (
    <div className='footer'>
      <div>Contact me
       <a href='https://github.com/alenaalena512'> <GrGithub /> </a>
       <a href='https://www.linkedin.com/in/alena-gusenko-102498183/'> <GrLinkedin /> </a>
      </div>
    </div>
  )
}
