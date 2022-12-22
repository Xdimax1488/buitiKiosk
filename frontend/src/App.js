import React from 'react';
import { Route, Routes } from 'react-router-dom';

import Home from './pages/Home';
import { Navbar,Footer } from './components';

import './App.css';
import Profail from './components/Profail/Profail';

function App() {
  return (
    <>
      <Navbar/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/profail" element={<Profail/>} />
      </Routes>
      <Footer/>
    </>
  );
}

export default App;
