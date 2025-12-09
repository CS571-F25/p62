import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import './Events.css';

const Events = () => {
  return (
    <section className="events-page">
      {/* Hero */}
      <div className="events-hero">
        <h1 className="events-title">Events</h1>
        <p className="events-tagline">
          Weekly events where AAIV gathers to pray, learn, and grow together.
        </p>
      </div>

      <Container>
        <Row className="justify-content-center">
          {/* Make the column full width so .events-content can actually be wide */}
          <Col lg={12} xl={12}>
            {/* Weekly Schedule */}
            <div className="events-content">
              <section className="events-section">
                <h2 className="events-section-title">Weekly Schedule</h2>
                <ul className="events-list">
                  <li>
                    <span className="events-day">Mondays 7–7:45pm:</span>
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
                    <span className="events-day">Tuesdays–Thursdays 7–9pm:</span>
                    <span className="events-text">
                      Small Group Bible Studies
                    </span>
                  </li>
                  <li>
                    <span className="events-day">Fridays 7–9pm:</span>
                    <span className="events-text">
                      Large Group
                    </span>
                  </li>
                </ul>
              </section>
            </div>

            {/* Daily Prayer Meetings */}
            <div className="events-content">
              <section className="events-section">
                <h2 className="events-section-title">Daily Prayer Meetings</h2>
                <p className="events-text">
                  Feeling the stress of the semester and need some rest? Come get prayer and find
                  rest at one of our weekly prayer meetings.
                </p>
                <img
                  className="events-image"
                  src="/p62/assets/daily_prayer.jpg"
                  alt="Daily Prayer Meetings"
                />
              </section>
            </div>

            {/* Small Groups */}
            <div className="events-content">
              <section className="events-section">
                <h2 className="events-section-title">Small Group Bible Studies</h2>
                <p className="events-text">
                  Join a small group to study the Bible, build friendships, and grow in faith
                  together in a smaller, more personal setting.
                </p>
                <img
                  className="events-image"
                  src="/p62/assets/small_group.webp"
                  alt="Small Group"
                />
              </section>
            </div>

            {/* Large Group */}
            <div className="events-content">
                <section className="events-section">
                    <h2 className="events-section-title">Large Group</h2>
                    <p className="events-text">
                    Join us for fellowship, musical worship, and spiritual rest every Friday from
                    7–9pm. Location is posted weekly on Instagram{" "}
                    <a 
                        href="https://www.instagram.com/aaivuwmadison/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="events-instagram-link"
                    >
                        @aaivuwmadison
                    </a>.
                    </p>
                    <img
                    className="events-image"
                    src="/p62/assets/large_group.webp"
                    alt="Large Group gathering"
                    />
                </section>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Events;