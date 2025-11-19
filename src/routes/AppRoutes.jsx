import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import NavigationBar from '../components/NavigationBar';
import Footer from '../components/Footer';
import Home from '../pages/Home';
import About from '../pages/About';
import Leaders from '../pages/Leaders';

const AppRoutes = () => {
  return (
    <Router basename="/p62">
      <NavigationBar />
      <div style={{ padding: '1rem' }}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/about/leaders" element={<Leaders />} />
        </Routes>
      </div>
      <Footer />
    </Router>
  );
};

export default AppRoutes;