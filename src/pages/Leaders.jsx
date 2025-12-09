import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import InstagramEmbed from '../components/InstagramEmbed';
import './Leaders.css';

const Leaders = () => {
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
              <InstagramEmbed
                id="DNf7mApNPs_"          // Chapter Shepherd Team post
                className="leaders-embed-wrapper"
              />
            </Col>

            <Col md={6} className="leaders-instagram-col">
              <InstagramEmbed
                id="DOWAXCqDel7"         // Small Group Leaders post
                className="leaders-embed-wrapper"
              />
            </Col>
          </Row>
        </Container>
      </div>
    </section>
  );
};

export default Leaders;