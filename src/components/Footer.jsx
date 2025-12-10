import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

const Footer = () => {
  const containerStyle = {
    backgroundColor: '#f8f9fa',
    padding: '2rem 1rem',
    borderTop: '1px solid rgba(0,0,0,0.06)',
    marginTop: '2rem'
  };

  const socialsRow = {
    display: 'flex',
    gap: '0.75rem',
    alignItems: 'center',
    justifyContent: 'center'
  };

  const iconButton = {
    display: 'inline-flex',
    width: '44px',
    height: '44px',
    borderRadius: '50%',
    alignItems: 'center',
    justifyContent: 'center',
    background: '#fff',
    boxShadow: '0 1px 3px rgba(0,0,0,0.12)',
    border: '1px solid rgba(0,0,0,0.06)',
    textDecoration: 'none',
    color: '#111'
  };

  const linkStyle = { color: '#083f91ff', textDecoration: 'none' };

  return (
    <footer style={containerStyle}>
      <Container>
        <Row className="justify-content-center text-center mb-3">
          <Col md={8} lg={6}>
            <h1 style={{ margin: 0 }}>AAIV</h1>
            <p style={{ margin: '0.25rem 0 0.5rem', color: '#555' }}>
              Follow &amp; connect with us!
            </p>
          </Col>
        </Row>

        <Row className="justify-content-center mb-3">
          <Col xs="auto">
            <div style={socialsRow} aria-label="AAIV social links">
              <style>{`
                .aaiv-icon-button{ transition: transform .14s ease, box-shadow .14s ease; }
                .aaiv-icon-button:hover, .aaiv-icon-button:focus{ transform: scale(1.08); box-shadow: 0 6px 18px rgba(0,0,0,0.18); }
                .aaiv-link:hover, .aaiv-link:focus{ text-decoration: underline; }
              `}</style>

              <a
                href="https://www.instagram.com/aaivuwmadison/"
                target="_blank"
                rel="noopener noreferrer"
                style={iconButton}
                className="aaiv-icon-button"
                aria-label="Instagram"
                title="Instagram"
              >
                {/* Instagram SVG */}
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  aria-hidden
                >
                  <rect
                    x="2"
                    y="2"
                    width="20"
                    height="20"
                    rx="5"
                    stroke="#E1306C"
                    strokeWidth="1.5"
                    fill="none"
                  />
                  <path
                    d="M12 8.5a3.5 3.5 0 1 0 0 7 3.5 3.5 0 0 0 0-7z"
                    stroke="#E1306C"
                    strokeWidth="1.5"
                    fill="none"
                  />
                  <circle cx="17.5" cy="6.5" r="0.75" fill="#E1306C" />
                </svg>
              </a>

              <a
                href="https://www.facebook.com/aaivuwmadison"
                target="_blank"
                rel="noopener noreferrer"
                style={iconButton}
                className="aaiv-icon-button"
                aria-label="Facebook"
                title="Facebook"
              >
                {/* Facebook SVG */}
                <svg
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  aria-hidden
                >
                  <path
                    d="M18 2h-3a4 4 0 0 0-4 4v3H8v3h3v7h3v-7h2.5l.5-3H14V6a1 1 0 0 1 1-1h3V2z"
                    fill="#1877F2"
                  />
                </svg>
              </a>

              <a
                href="https://linktr.ee/aaivuwmadison?utm_source=ig&utm_medium=social&utm_content=link_in_bio"
                target="_blank"
                rel="noopener noreferrer"
                style={iconButton}
                className="aaiv-icon-button"
                aria-label="Linktree"
                title="Linktree"
              >
                <img
                  src="/p62/assets/linktreeicon.webp"
                  alt="Linktree"
                  width="24"
                  height="24"
                  style={{ objectFit: 'contain' }}
                />
              </a>

              <a
                href="https://win.wisc.edu/organization/aaiv"
                target="_blank"
                rel="noopener noreferrer"
                style={iconButton}
                className="aaiv-icon-button"
                aria-label="Wisconsin Involvement Network"
                title="WIN"
              >
                <img
                  src="/p62/assets/winicon.png"
                  alt="WIN"
                  width="24"
                  height="24"
                  style={{ objectFit: 'contain' }}
                />
              </a>
            </div>
          </Col>
        </Row>

        <Row className="justify-content-center text-center">
          <Col md={8} lg={6}>
            <p style={{ margin: 0 }}>
              Email:{' '}
              <a href="mailto:aaivuwmadison@gmail.com" style={linkStyle} className="aaiv-link">
                aaivuwmadison@gmail.com
              </a>
            </p>
            <address
              style={{ margin: '0.5rem 0 0', fontStyle: 'normal', color: '#555' }}
            >
              333 East Campus Mall (Student Activity Center) Office 35
              <br />
              Madison, WI 53706
              <br />
              United States
            </address>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;