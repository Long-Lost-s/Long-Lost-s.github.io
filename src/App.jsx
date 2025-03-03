import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Route, Router } from 'react-router'

function App() {

  return (
    <Router>
      <Route index element={<div>Home</div>} />
      <Route path="/about" element={<div>About</div>} />
    </Router>
  )
}

export default App
