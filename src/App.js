import React from 'react'
import './App.css'
import Home from './Components/Home'
import Nav from './Components/Nav'
import About from './Components/About'
import Skills from './Components/Skills'
import Contact from './Components/Contact'
import Project from './Components/Project'

function App() {
  return (
    <div id='container'>
      <div id="left">
        <Nav />
      </div>
      <div id="right">
        <Home />
        <About/>
        <Skills/>
        <Project/>
        <Contact/>
      </div>
    </div>
  )
}

export default App
