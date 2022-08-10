import { useState, useEffect, useRef } from 'react';
import {TiThMenu} from 'react-icons/ti';
import './headerMenu.css'


function HeaderMenu(props) {

const {menu, setMenu} = props;

  return (
    
<button className="menu-button" onClick={()=>setMenu(!menu)}><TiThMenu className='menu-icon'/></button>
   
    
  )
}

export default HeaderMenu