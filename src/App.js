import React, { Component } from 'react'
import './App.styles'

import Navigation from './components/navigation/Navigation'
import Home from './components/home/Home'
import About from './components/about/About'
import Resume from './components/resume/Resume'
class App extends Component {
  render() {
    return (
      <div>
        <Navigation />
        <Home />
        <About />
        <Resume />
      </div>
    )
  }
}

export default App
