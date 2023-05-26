import React from 'react'
import './navbar.css'
import { RiMenu3Line, RiCloseLin } from 'react-icons'
import logo from '../../assets/cdnlogo.com_ChatGPT.svg'
const Navbar = () => {
  return (
    <div className='gpt4__navbar'>
        <div className='gpt4__navbar-links'>
          <div className='gpt4__navbar-links_logo'>
              <img src={logo} alt ="logo" class='fill-white' />
          </div>
        </div>
    </div>
  )
}

export default Navbar