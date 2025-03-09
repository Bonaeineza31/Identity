import { useState } from 'react'
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from '../components/Navbar';
// import Footer from './components/Footer';
import Home from '../components/Home';
import About from './pages/About';
// import Gallery from './pages/Gallery';
// import Contact from './pages/Contact';
// import Programs from './pages/Programs';
import './App.css';

function App() {
  return (
    <Router>
      <div className="app">
        <Navbar />
        <main className="main-content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            {/*<Route path="/gallery" element={<Gallery />} />
            <Route path="/programs" element={<Programs />} />
            <Route path="/contact" element={<Contact />} /> */}
          </Routes>
        </main>
        {/* <Footer /> */}
      </div>
    </Router>
  );
}

export default App;
