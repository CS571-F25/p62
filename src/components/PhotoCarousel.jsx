import { useState } from 'react';
import Carousel from 'react-bootstrap/Carousel';
import sbAlbum from '../assets/SB2025.json';
import tbAlbum from '../assets/TB2025.json';
import './PhotoCarousel.css';

const PhotoCarousel = () => {
  // Randomly pick one album ONCE per mount
  const [albumData] = useState(() => {
    const albums = [sbAlbum, tbAlbum];
    const randomIndex = Math.floor(Math.random() * albums.length);
    return albums[randomIndex];
  });

  const { photos, album_title } = albumData;

  // Prefer landscape photos if metadata is available
  const landscapePhotos = photos.filter((p) => {
    if (p.width && p.height) return p.width >= p.height;
    if (p.aspectRatio) return p.aspectRatio >= 1;
    if (p.orientation) return p.orientation === 'landscape';
    return true;
  });

  return (
    <section className="hero-carousel hero-carousel--fullbleed">
      <div className="hero-overlay">
        {/* 👇 new inner box for stronger contrast */}
        <div className="hero-overlay-box">
          <h1 className="hero-title">WELCOME TO AAIV</h1>
          <h2 className="hero-subtitle">{album_title}</h2>
        </div>
      </div>

      <Carousel
        interval={2000}
        prevLabel="Previous photo"
        nextLabel="Next photo"
        className="hero-carousel-inner"
      >
        {landscapePhotos.map((photo, index) => (
          <Carousel.Item key={index} className="hero-carousel-item">
            <img
              className="hero-image"
              src={photo.url}
              alt={photo.caption}
            />
          </Carousel.Item>
        ))}
      </Carousel>
    </section>
  );
};

export default PhotoCarousel;