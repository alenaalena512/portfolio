import React from 'react'
import '../styles.sass'
import { Badge } from 'react-bootstrap'
import { Certification } from './Certification'
import { skills, certifications, education } from '../data'

export const About = () => {
  return (
    <div className='aboutdiv'>
      <div className='ab'>
        <h1 className='about'>Skills</h1>
        <div className='skill'>
          {
            skills.map(s => <Badge variant='dark'> {s} </Badge>)
          }
        </div>
      </div>
      <div className='ab'>
        <h1 className='background'>Courses</h1>
        {
          certifications.map(
            c => <Certification name={c.name} date={c.date} org={c.organisation} url={c.url} />
          )
        }
      </div>
      <div className='ab'>
        <h1 className='background'>Education</h1>
        {
          education.map(
            c => <Certification name={c.name} date={c.date} org={c.role} url={c.url} />
          )
        }
      </div>
    </div>
  )
}
