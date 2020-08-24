import React from 'react'
import '../styles.sass'
import ReactTypingEffect from 'react-typing-effect';

export const Home = () => {
  return (
    <div className='homediv'>
      <h1 className='into'> <span>Hi!</span> I am Alena.</h1>
      {/* <h3>Software Developer based in London</h3> */}
      <ReactTypingEffect
      staticText="Software Developer"
      text="based in London" 
      className='typed'
      speed='100'
      />
      <img src='https://emojipedia-us.s3.dualstack.us-west-1.amazonaws.com/thumbs/320/apple/81/female-technologist-type-1-2_1f469-1f3fb-200d-1f4bb.png' alt='developer' />
    </div>
  )
}
