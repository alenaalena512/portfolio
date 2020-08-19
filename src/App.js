import React from 'react'
import { Header } from './components/Header'
import { Home } from './components/Home'
import { About } from './components/About'
import { Projects } from './components/Projects'
import './App.sass'
import { BrowserRouter as HashRouter, Redirect, Switch, Route } from 'react-router-dom'
import { Footer } from './components/Footer'

const App = () => {
  return (
    <HashRouter basename='/portfolio'>
      <Header />
        <Redirect from='/home' to='/' />
        <Route exact path='/' component={Home} />
        <Route path='/about' component={About} />
        <Route path='/projects' component={Projects} />
      <Footer />
    </HashRouter>
  )
}
export default App
