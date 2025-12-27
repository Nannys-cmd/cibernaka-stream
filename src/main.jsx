// src/main.jsx 
import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'

// Orden correcto: primero variables, luego base, luego específicos
import './styles/variables.css'
import './index.css'
import './styles/retro-effects.css'
import './App.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
)