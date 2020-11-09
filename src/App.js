import React, { Component } from 'react'
import './App.styles'

import Navigation from './components/navigation/Navigation'
import Home from './components/home/Home'
import Skill from './components/skill/Skill'
import Resume from './components/resume/Resume'
import Portfolio from './components/portfolio/Portfolio'

class App extends Component {
  render() {
    return (
      <section>
        <Navigation />
        <Home />
        <Skill />
        <Resume />
        <Portfolio />
      </section>
    )
  }
}

export default App
