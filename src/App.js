import React, { Component } from 'react'
import './App.css'

import Navigation from './components/navigation/Navigation'
import Home from './components/home/Home'
import About from './components/about/About'

class App extends Component {
  render() {
    return (
      <div>
        <Navigation />
        <Home />
        <About />
      </div>
    )
  }
}

export default App
