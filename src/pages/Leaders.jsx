import React, { useEffect } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import './Leaders.css';

const Leaders = () => {
  // Instagram script loader
  useEffect(() => {
    // Look for an existing Instagram embed script by src
    const existingScript = document.querySelector(
      "script[src='https://www.instagram.com/embed.js']"
    );

    if (!existingScript) {
      const script = document.createElement('script');
      script.src = 'https://www.instagram.com/embed.js';
      script.async = true;
      document.body.appendChild(script);
    } else if (window.instgrm && window.instgrm.Embeds) {
      // Re-process embeds if script already loaded
      window.instgrm.Embeds.process();
    }
  }, []);

  return (
    <section className="leaders-page">
      <div className="leaders-hero">
        <h1 className="leaders-title">Meet Our Leaders</h1>
        <p className="leaders-tagline">
          The heart behind AAIV — our chapter shepherds, small group leaders, and small group apprentices.
        </p>
      </div>

      <div className="leaders-content">
        <Container>
          <Row className="gy-4">
            <Col md={6} className="leaders-instagram-col">
              <div className="leaders-embed-wrapper">
                <blockquote
                  className="instagram-media"
                  data-instgrm-captioned
                  data-instgrm-permalink="https://www.instagram.com/p/DNf7mApNPs_/?utm_source=ig_embed&utm_campaign=loading"
                  data-instgrm-version="14"
                ></blockquote>
              </div>
            </Col>

            <Col md={6} className="leaders-instagram-col">
              <div className="leaders-embed-wrapper">
                <blockquote
                  className="instagram-media"
                  data-instgrm-captioned
                  data-instgrm-permalink="https://www.instagram.com/p/DOWAXCqDel7/?utm_source=ig_embed&utm_campaign=loading"
                  data-instgrm-version="14"
                ></blockquote>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    </section>
  );
};

export default Leaders;