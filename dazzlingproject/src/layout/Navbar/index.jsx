import React from 'react'
import "./navbar.css"
import { Link } from 'react-router-dom'
const Navbar = () => {
  return (
    
    <div className='navbar1'>
        
  <Link to={"/"}>Home</Link>
  <Link to={"/"}>Gallery</Link>
  <Link to={"/Shortcodes"}>Shortcodes</Link>
  <Link to={"/About"}>About</Link>
  <Link to={"/Languages"}>Languages</Link>


    </div>
  )
}

export default Navbar