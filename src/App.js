import React from 'react'
import NavigationBar from './components/NavigationBar'
import Hero from './components/Hero'
import DataSection from './components/DataSection'

class App extends React.Component {
  render() {
    return (
      <div className="app-container">
        <NavigationBar />

        <Hero />

        <DataSection />
      </div>
    )
  }
}

export default App
