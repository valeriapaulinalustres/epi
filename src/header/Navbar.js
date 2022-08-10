import React from 'react';
import { useEffect, useRef } from 'react';
import { NavLink } from 'react-router-dom';
import { gsap } from 'gsap';
import {AiOutlineClose} from 'react-icons/ai';
import './navbar.css'


function Navbar(props) {

  const { menu, setMenu } = props

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
        paddingLeft: 6,
        paddingRight: 6,
      }
      : {
        color: '#ffffff',
      }

  //-----------------------------NavBar animation------------------

  let linksContainer = useRef(null);
  let x = useRef(null);
  //let menuLayer = useRef(null);
  const menuTimeline = useRef();

  useEffect(() => {
    menuTimeline.current = gsap.timeline({ paused: true });
    menuTimeline.current.fromTo(
      [x, linksContainer],
      {
        duration: 0,
        y: 0,
        opacity: 0,
        

      },
      {
        duration: 0.5,
        y: 50,
        ease: 'power3.inOut',
        stagger: 0.3,
        opacity: 1
        // {
        // amount: 2
        //},

      },


    );
    menuTimeline.current.fromTo(".nav-links",
      {
        duration: 0,
        y: 0,
        opacity: 0

      },
      {
        duration: 0.5,
        
        ease: 'power3.inOut',
        stagger: 0.1,
        opacity: 1
        // {
        // amount: 2
        //},

      },
    )
  }, []);

  useEffect(() => {
    menu ? menuTimeline.current.play() : menuTimeline.current.reverse();
  }, [menu]);

  return (
    <div className='navbar-container'>
      <div
        className="x"
        ref={el => (x = el)}
        onClick={() => setMenu(false)}
      ><button className='xButton'><AiOutlineClose /></button></div>
      
      <nav className="linksContainer" ref={el => (linksContainer = el)}>
          <NavLink to="/" className="nav-links" onMouseEnter={mouseEnter} onMouseLeave={mouseLeave} style={styleLinks} onClick={() => setMenu(false)}>Home</NavLink>
          <NavLink to="/dengue" className="nav-links" onMouseEnter={mouseEnter} onMouseLeave={mouseLeave} style={styleLinks} onClick={() => setMenu(false)}>Dengue</NavLink>
          <NavLink to="/sifilis" className="nav-links" onMouseEnter={mouseEnter} onMouseLeave={mouseLeave} style={styleLinks} onClick={() => setMenu(false)}>Sífilis</NavLink>
          <NavLink to="/tbc" className="nav-links" onMouseEnter={mouseEnter} onMouseLeave={mouseLeave} style={styleLinks} onClick={() => setMenu(false)}>TBC</NavLink>
          <NavLink to="/hiv" className="nav-links" onMouseEnter={mouseEnter} onMouseLeave={mouseLeave} style={styleLinks} onClick={() => setMenu(false)}>HIV</NavLink>
          <NavLink to="/upload" className="nav-links" onMouseEnter={mouseEnter} onMouseLeave={mouseLeave} style={styleLinks} onClick={() => setMenu(false)}>Upload</NavLink>
        </nav>
    </div>
  )
}

export default Navbar

//<div className="menu-layer" ref={el => (menuLayer = el)}>.</div>