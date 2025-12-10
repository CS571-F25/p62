import Carousel from 'react-bootstrap/Carousel';
import albumData from '/src/assets/SB2025.json';
import './GooglePhotosCarousel.css';

const GooglePhotosCarousel = () => {
  const { photos } = albumData;

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
        <h1 className="hero-title">WELCOME TO AAIV</h1>
        <h2 className="hero-subtitle">SENIOR BANQUET 2025</h2>
      </div>

      <Carousel
        interval={2000}
        prevLabel=""
        nextLabel=""
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

export default GooglePhotosCarousel;