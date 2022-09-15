import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { FaUserMd } from 'react-icons/fa';
import { FiUpload } from 'react-icons/fi';
import { GoCalendar } from 'react-icons/go'
import HeaderMenu from './HeaderMenu';
import Navbar from './Navbar';
import './header.css';
import { FiDownload } from 'react-icons/fi';
import { IoIosClose } from 'react-icons/io';
import { Link } from 'react-router-dom'

function Header() {

  const [menu, setMenu] = useState(false)
  const [modalCalendar, setModalCalendar] = useState(false)

  return (
    <div className='header-container'>
      <NavLink to="/" className='logo'></NavLink>
      <div className='menubar-container'>
        <NavLink to="/upload"  >
          <div className='menubar-buttons'>
            <FiUpload className='menubar-icons' />
          </div>
        </NavLink>
        <div className='menubar-buttons'>
          <FaUserMd className='menubar-icons' />
        </div>
        <button className='menubar-buttons' onClick={() => setModalCalendar(true)}>
          <GoCalendar className='menubar-icons' />
        </button>
        <HeaderMenu menu={menu} setMenu={setMenu} />
        <Navbar menu={menu} setMenu={setMenu} />
      </div>

      {modalCalendar && <div className='modal'>
        <div className='window'>
          <div className='window-header-fixed'>
          <div className='window-header'>
            <button className="download-btn">
              <Link
                to="./calendario-epidemiológico.pdf"
                target="_blank"
                rel="noopener noreferrer"
                download="calendario-epidemiológico-2022.pdf"
              >
                <FiDownload className='download-btn-icon' />
              </Link>
            </button>
            <button className="download-btn" onClick={() => setModalCalendar(false)}>
              <IoIosClose className='download-btn-icon' />
            </button>
          </div>
          </div>
          

          <p className='modal-text'>
            El calendario epidemiológico comprende 52 semanas epidemiológicas que dividen los 365 días del año. Su uso durante las actividades de vigilancia es importante porque el estandardizar la variable tiempo, permite la comparación de eventos epidemiológicos sucedidos en determinado año o período dentro de un año con los de años previos o de otros países. (www3.paho.org)
          </p>
          <div className='epiCalendar-container'>
            <img src="/calendario-epidemiológico.png" alt="calendario epidemiológico" width="100%"></img>
          </div>
        </div>
      </div>}
    </div>
  )
}

export default Header