import React from 'react'
import { Link, NavLink } from 'react-router-dom'
import './Header.css'
function Header() {
  return (
    <div >
        <div className='header-top'>
            <a href="#">Sign In/Guest</a>
            <a href="#">Create account</a>
        </div>
        <div className='header-bottom'>
        <div className="header-logo">
            <a href="#">C</a>
        </div>
        <nav className='header-nav'>
           <NavLink to={'/'}>Home</NavLink>
           <NavLink to={'/about'}>About</NavLink>
           <NavLink to={'/products'}>Products</NavLink>
           <NavLink to={'/cart'}>Cart</NavLink>
        </nav>

    <div className='header-icon'>
    <i class="fa-solid fa-moon"></i>
    <i class="fa-solid fa-cart-shopping"></i>
    </div>
        </div>
    </div>
  )
}

export default Header