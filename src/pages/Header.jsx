import React from 'react'
import {Link} from 'react-router-dom'
import './../style/style.css'

const Header = () => {
  return (
  
        <header className='header'>
          <a href='/'>
        <h1 className='logo'>Better</h1>
          </a>
        <Link to='/' className='name'>Home</Link>
        <Link to='/about-us'  className='name'>About us</Link>
        <Link to='/mortgage-calculator'  className='name'>Calculator</Link>
        <Link to='/start'  className='name'>Start</Link>
        </header>
    
  )
}

export default Header