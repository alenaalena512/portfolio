import React from 'react'
import { Link } from 'react-router-dom'
import { Button } from 'react-bootstrap'
import '../styles.sass'

export const Header = () => {
  return (
    <div className='headerContainer'>
      <div className='nav'>
        <Link to='/' style={{ textDecoration: 'none' }}> <Button variant="warning">Home</Button> </Link>
        <Link to='/about' style={{ textDecoration: 'none' }}> <Button variant="warning">Resume</Button> </Link>
        <Link to='/projects' style={{ textDecoration: 'none' }}> <Button variant="warning">Projects</Button> </Link>
      </div>
    </div>
  )
}
