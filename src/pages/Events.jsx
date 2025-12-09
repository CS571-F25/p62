import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap'
import './Events.css';

const Events = () => {
  return (
    <section className="events-page">
      <div className="events-hero">
        <h1 className="events-title">Events</h1>
        <p className="events-tagline">
          Weekly events where AAIV gathers to pray, learn, and grow together.
        </p>
      </div>

      
      <Container>
        <Row>
          <Col>
            <div className="events-content">
              <section className="events-section">
                <h2 className="events-section-title">Weekly Schedule</h2>
                <ul className="events-list">
                  <li>
                    <span className="events-day">Mondays 7-7:45pm:</span>
                    <span className="events-text">
                      NINJA (Nighttime Intercession to be Near Jesus Always) Prayer Meetings
                    </span>
                  </li>
                  <li>
                    <span className="events-day">Tuesdays–Thursday:</span>
                    <span className="events-text">
                      Daily Prayer Meetings
                    </span>
                  </li>
                  <li>
                    <span className="events-day">Tuesdays–Thursdays 7-9pm:</span>
                    <span className="events-text">
                      Small Group Bible Studies
                    </span>
                  </li>
                  <li>
                    <span className="events-day">Fridays 7-9pm:</span>
                    <span className="events-text">
                      Large Group
                    </span>
                  </li>
                </ul>
              </section>
            </div>
          </Col>
        </Row>
        <Row>
          <Col xs={12} md={6} lg={6} xl={6}>
            <Card>
              <Card.Title>Daily Prayer Meetings</Card.Title>
              <Card.Img src={"src/assets/daily_prayer.jpg"} alt="Daily Prayer Schedule"/>
              <Card.Body>
                <Card.Text>Are you feeling the stress of the semester and need some rest? Come get prayer and find rest at one of our weekly prayer meetings</Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col xs={12} md={6} lg={6} xl={6}>
            <Card>
              <Card.Title>Large Group</Card.Title>
              <Card.Img src={"/p62/assets/large_group.webp"} alt="Large Group Image"/>
              <Card.Body>
                <Card.Text>Come to Large Group for fellowship, music worship, and spiritual rest! Every Friday 7-9 pm, location posted on Insta @aaivuwmadison!</Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col xs={12} md={6} lg={6} xl={6}>
            <Card>
              <Card.Title>Small Group</Card.Title>
              <Card.Img src={"/p62/assets/small_group.webp"} alt="Small Group Image"/>
              <Card.Body>
                <Card.Text>Join a small group!</Card.Text>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Events;