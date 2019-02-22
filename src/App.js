import React, { Component } from 'react'
import logo from './logo.svg'
import './App.css'
import Grid from './components/side-bar/Grid'

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <Grid />
        </header>
      </div>
    )
  }
}

export default App
