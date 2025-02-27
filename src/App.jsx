import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/About'
import Calculator from './pages/calculator'
import Start from './pages/Start'
import Header from './pages/Header'

const App = () => {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path='/' element={<Home />}/>
        <Route path='/about-us' element={<About />}/>
        <Route path='/mortgage-calculator' element={<Calculator />}/>
        <Route path='/start' element={<Start />}/>
      </Routes>
    </Router>
  )
}

export default App