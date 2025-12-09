import { useState } from 'react'
import './App.css'
import { HashRouter, Route, Routes } from 'react-router'
import Home from './components/Home'
import About from './components/About'
import Leaders from './components/Leaders'
import Events from './components/Events'

function App() {

  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/about" element={<About/>}/>
        <Route path="/leaders" element={<Leaders />} />
        <Route path="/events" element={<Events />} />
      </Routes>
    </HashRouter>
  )
}

export default App
