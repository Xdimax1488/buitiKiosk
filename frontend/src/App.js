import React from 'react';
import { Route, Routes } from 'react-router-dom';

import { Footer, Navbar } from './components';
import Home from './pages/Home';
import Store from './pages/Store/Store';

import './App.css';
import Profail from './pages/Profail/Profail';

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/profail" element={<Profail />} />
        <Route path="/store" element={<Store />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
