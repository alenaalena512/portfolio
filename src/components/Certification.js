import React from 'react'
import '../styles.sass'

export const Certification = (props) => {
  return (
    <div className='certif'>
      <img src={props.url} alt={props.name} />
      <div className='description'>
        <div className='name'>{props.name}</div>
        <div className='cert-description'>
          <div>{props.org}</div>
          <div>{props.date}</div>
        </div>
      </div>

    </div>
  )
}
