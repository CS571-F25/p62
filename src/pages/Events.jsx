import React from 'react';
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

      {/* Main card */}
      <div className="events-content">
        <section className="events-section">
          <h2 className="events-section-title">Weekly Schedule</h2>
          <ul className="events-list">
            <li>
              <span className="events-day">Mondays:</span>
              <span className="events-text">
                NINJA (Nighttime Intercession to be Near Jesus Always) Prayer Meetings
              </span>
            </li>
            <li>
              <span className="events-day">Tuesdays–Fridays:</span>
              <span className="events-text">
                Daily Prayer Meetings
              </span>
            </li>
            <li>
              <span className="events-day">Tuesdays–Thursdays:</span>
              <span className="events-text">
                Small Group Bible Studies
              </span>
            </li>
            <li>
              <span className="events-day">Fridays:</span>
              <span className="events-text">
                Large Group Gatherings
              </span>
            </li>
          </ul>
        </section>
      </div>
    </section>
  );
};

export default Events;