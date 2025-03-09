import { useState } from 'react'
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Home from '../components/Home';
import About from '../components/About';
import Gallery from '../components/Gallery';
import Contact from '../components/Contact';
import Program from '../components/Program';
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
            <Route path="/gallery" element={<Gallery />} />
            <Route path="/program" element={<Program />} />
            <Route path="/contact" element={<Contact />} /> 
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
