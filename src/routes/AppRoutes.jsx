import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import NavigationBar from '../components/NavigationBar';
import Footer from '../components/Footer';
import Home from '../pages/Home';
import About from '../pages/About';
import Leaders from '../pages/Leaders';
import Events from '../pages/Events';

const AppRoutes = () => {
  return (
    <Router basename="/p62/">
      <NavigationBar />
      {/* Remove padding so Home hero touches the navbar */}
      <div style={{ padding: 0 }}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/leaders" element={<Leaders />} />
          <Route path="/events" element={<Events />} />
        </Routes>
      </div>
      <Footer />
    </Router>
  );
};

export default AppRoutes;