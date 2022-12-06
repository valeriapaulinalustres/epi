import React, { useState } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Sifilis from './pages/sifilis/Sifilis';
import Tbc from './pages/tbc/Tbc';
import './app.css'


// styles
//import './style.scss';

// components
import Home from './pages/home/Home';
import HeaderMenu from './header/HeaderMenu';
import Navbar from './header/Navbar';
import Header from './header/Header'
import Dengue from './pages/dengue/Dengue';
import Hiv from './pages/hiv/Hiv';
import Footer from './footer/Footer';
import Upload from './pages/upload/Upload';
import Covid from './pages/covid/Covid';
import { DataProvider } from './context/DataContext';

const App = () => {

  return (
    <DataProvider>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/dengue" element={<Dengue />} />
          <Route path="/hiv" element={<Hiv />} />
          <Route path="/sifilis" element={<Sifilis />} />
          <Route path="/tbc" element={<Tbc />} />
          <Route path="/upload" element={<Upload />} />
          <Route path="/covid" element={<Covid />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </DataProvider>
  );
};

export default App;
