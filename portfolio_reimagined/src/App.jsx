

import React from 'react'
import Hero from './components/Hero'
import Header from './components/Header'
import About from './components/About'
import Projects from './components/Projects'
import Techstack from './components/Techstack'
import Journey from './components/Journey'
import Contact from './components/Contact'

const App = () => {
  return (
    <div className='flex flex-col w-full min-h-screen justify-center items-center bg-gradient-custom'>
      <Header/>
      <Hero/>
      <About/>
      <Projects/>
      <Techstack/>
      <Journey/>
      <Contact/>
    </div>
  )
}

export default App