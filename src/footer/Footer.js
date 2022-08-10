import React from 'react';
import './footer.css';
import { NavLink } from 'react-router-dom';
import { gsap } from 'gsap';

function Footer() {

    //-----------------links hover and navlink style----------------------
  const mouseEnter = ({ currentTarget }) => {
    gsap.to(currentTarget, { color: "#000000" });
  };
  const mouseLeave = ({ currentTarget }) => {
    gsap.to(currentTarget, { color: "#ffffff" });
  };

  const styleLinks = ({ isActive }) =>
    isActive
      ? {
        color: '#ffffff',
        background: '#C8102D',
        borderRadius: 8,
        paddingLeft: 6,
        paddingRight: 6,
      }
      : {
        color: '#ffffff',
      }

  return (
    <div className='footer-container'>
        <div className='logoMail-container'>
        <div className='logo-blanco'></div>
        <p className='mail'>moronepidemiologia@gmail.com</p>
        </div>
        <nav className='navlinksFooter-container'>
          <NavLink to="/" className="nav-linksFooter" onMouseEnter={mouseEnter} onMouseLeave={mouseLeave} style={styleLinks} >Home</NavLink>
          <NavLink to="/dengue" className="nav-linksFooter" onMouseEnter={mouseEnter} onMouseLeave={mouseLeave} style={styleLinks} >Dengue</NavLink>
          <NavLink to="/sifilis" className="nav-linksFooter" onMouseEnter={mouseEnter} onMouseLeave={mouseLeave} style={styleLinks} >Sífilis</NavLink>
          <NavLink to="/tbc" className="nav-linksFooter" onMouseEnter={mouseEnter} onMouseLeave={mouseLeave} style={styleLinks} >TBC</NavLink>
          <NavLink to="/hiv" className="nav-linksFooter" onMouseEnter={mouseEnter} onMouseLeave={mouseLeave} style={styleLinks} >HIV</NavLink>
          <NavLink to="/upload" className="nav-linksFooter" onMouseEnter={mouseEnter} onMouseLeave={mouseLeave} style={styleLinks} >Upload</NavLink>
        </nav>
    </div>

  )
}

export default Footer