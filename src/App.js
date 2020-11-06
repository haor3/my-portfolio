import React, { Component } from 'react'
import './App.styles'

import Navigation from './components/navigation/Navigation'
import Home from './components/home/Home'
import Skill from './components/skill/Skill'
import Resume from './components/resume/Resume'
import Portfolio from './components/portfolio/Portfolio'
import { Route } from 'react-router-dom'

class App extends Component {
  render() {
    return (
      <section>
        <Navigation />
        <Route to="/" component={Home} />
        <Route to="about" component={Skill} />
        <Route to="resume" component={Resume} />
        <Route to="portfolio" component={Portfolio} />
      </section>
    )
  }
}

export default App
