import React from 'react'
import { MyCard } from './Card'

const calculatorDescription={
  text: 'A full-stack calculator app. Stack: React, C#, ASP.Net Core',
  url: 'https://github.com/alenaalena512/calculator'
}

const serverlessToDoDescription={
  text: 'To-do list app. Stack: React, Node.js, OAuth, Serverless',
  url: 'https://github.com/alenaalena512/serverless-todo'
}

const catGameDescription={
  text: 'A to-do application with OAuth authorisation. Stack: React, JS, Node.js, Serverless',
  url: 'https://alenaalena512.github.io/cat-game/'
}
export const Projects = () => {
  return (
    <div className='projects'>
      <MyCard title='Cat Game' {...catGameDescription} />
      <MyCard title='Serverless' {...serverlessToDoDescription} />
      <MyCard title='Calculator' {...calculatorDescription} />
    </div>
  )
}
