import React from 'react';
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

      {/* Daily Verse card */}
      <div className="home-content">
        <DailyVerse />
      </div>
    </section>
  );
};

export default Home;