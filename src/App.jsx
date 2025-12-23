import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from './components/Header'
import ConsoleSection from './components/ConsoleSection'

function App() {
  return (
    <div className="app">
      <Header />
      <ConsoleSection />
    </div>
  )
}

export default App
