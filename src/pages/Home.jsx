import React from 'react';
import { Container } from 'react-bootstrap';
import PhotoCarousel from '../components/PhotoCarousel';
import DailyVerse from '../components/DailyVerse';
import './Home.css';

const Home = () => {
  return (
    <section className="home-page">
      {/* Full-screen hero carousel */}
      <div className="home-hero">
        <PhotoCarousel />
      </div>

      {/* Daily Verse section in a Bootstrap container */}
      <Container>
        <div className="home-content">
          <DailyVerse />
        </div>
      </Container>
    </section>
  );
};

export default Home;