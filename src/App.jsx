// src/App.jsx
import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Header from './components/Header'
import Navigation from './components/Navigation'
import ConsoleSection from './components/ConsoleSection'
import './App.css'

function App() {
  return (
    <div className="app">
      <Navigation />
      <Header />
      <main className="main-content">
        <ConsoleSection />
      </main>
    </div>
  )
}

export default App