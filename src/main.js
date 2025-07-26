import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './component/NavigationBar';
import ContactPage from './pages/ContactPage';
import IndexPage from './pages/IndexPage';
import PortfolioPage from './pages/PortfolioPage';
import About from './pages/about';
import Certificate from './pages/Certificate';
import Extras from './pages/Extras';

function Main() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<IndexPage />} />
        <Route path="/extras" element={<Extras />} />
        <Route path="/certificate" element={<Certificate />} />
        <Route path="/about" element={<About />} />
        <Route path="/portfolio" element={<PortfolioPage />} />
        <Route path="/contact" element={<ContactPage />} />
      </Routes>
    </Router>
  );
}

export default Main;
