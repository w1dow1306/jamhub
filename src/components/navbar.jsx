import React from 'react'
import '../static/css/navbar.css'
import { NavLink } from "react-router-dom";
import '../services/routes';
const Navbar = () => {
  return (
    <div className="nav">
      <ul>
        <li><NavLink className='link' to='/app/codespace' >Codespace</NavLink></li>
        <li><NavLink className='link' to='/app/gallery' >Gallery</NavLink></li>
        <li><NavLink className='link' to='/app/battle' >Battle</NavLink></li>
        <li><NavLink className='link' to='/app/chat' >Chat</NavLink></li>
        <li><NavLink className='link' to='/app/call' >Call</NavLink></li>
      </ul>
    </div>
  )
}

export default Navbar