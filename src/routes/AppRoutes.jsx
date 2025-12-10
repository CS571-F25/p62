import { HashRouter, Routes, Route } from 'react-router-dom';
import NavigationBar from '../components/NavigationBar';
import Footer from '../components/Footer';
import Home from '../pages/Home';
import About from '../pages/About';
import Leaders from '../pages/Leaders';
import Events from '../pages/Events';
import SGSignUp from '../pages/SGSignUp';
import Worship from '../pages/Worship';

const AppRoutes = () => {
  return (
    <HashRouter>
      <NavigationBar />
      <div style={{ paddingTop: '62px' }}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/leaders" element={<Leaders />} />
          <Route path="/events" element={<Events />} />
          <Route path="/sgsignup" element={<SGSignUp />} />
          <Route path="/worship" element={<Worship />} />
        </Routes>
      </div>
      <Footer />
    </HashRouter>
  );
};

export default AppRoutes;