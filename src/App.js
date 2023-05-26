import React from 'react'
import './App.css'
import { Brand, CTA, Navbar } from './components'
import {Blog, Footer, Header, Possibility, WhatGPT4, Features } from './containers'

const App = () => {
  return (
    <div className='App'>
      <div className='gradient__bg'>
        <Navbar />
        <Header />
      </div>
      <Brand />
      <WhatGPT4 />
      <Features />
      <Possibility />
      <CTA />
      <Blog />
      <Footer />
    </div>
  )
}

export default App