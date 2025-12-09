import { Navbar, Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './NavigationBar.css';

const NavigationBar = () => {
  return (
    <Navbar bg="dark" variant="dark" expand="lg" className="aaiv-navbar">
      <Navbar.Brand as={Link} to="/" className="aaiv-brand ms-3">
        <img
          src="/p62/assets/logo.png"
          width="36"
          height="36"
          alt="AAIV logo"
          className="aaiv-logo"
        />
        <span className="aaiv-title">AAIV</span>
      </Navbar.Brand>

      <Navbar.Toggle aria-controls="basic-navbar-nav" />

      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="ms-auto aaiv-nav-links">
          <Nav.Link as={Link} to="/about" className="aaiv-link">About</Nav.Link>
          <Nav.Link as={Link} to="/leaders" className="aaiv-link">Leaders</Nav.Link>
          <Nav.Link as={Link} to="/events" className="aaiv-link">Events</Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default NavigationBar;