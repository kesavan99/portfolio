import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './component/NavigationBar';
import BlogPage from './pages/BlogPage';
import ContactPage from './pages/ContactPage';
import IndexPage from './pages/IndexPage';

function Main() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/portfolio" element={<IndexPage />} />
        <Route path="/blog" element={<BlogPage />} />
        <Route path="/portfolio" element={<IndexPage />} />
        <Route path="/contact" element={<ContactPage />} />
      </Routes>
    </Router>
  );
}

export default Main;
