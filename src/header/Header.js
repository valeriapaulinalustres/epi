import React, { useState }  from 'react';
import { NavLink } from 'react-router-dom';
import {FaUserMd} from 'react-icons/fa';
import {FiUpload} from 'react-icons/fi';
import HeaderMenu from './HeaderMenu';
import Navbar from './Navbar';
import './header.css'

function Header() {

  const [menu, setMenu] = useState(false)

  return (
    <div className='header-container'>
       <NavLink to="/" className='logo'></NavLink>
        
        <div className='menubar-container'>
        
        <NavLink to="/upload"  ><div className='menubar-buttons'><FiUpload className='menubar-icons'/></div></NavLink>
            <div className='menubar-buttons'><FaUserMd className='menubar-icons'/></div>
            
            <HeaderMenu menu={menu} setMenu={setMenu}/>
            <Navbar menu={menu} setMenu={setMenu}/>
           
        </div>
    </div>
  )
}

export default Header