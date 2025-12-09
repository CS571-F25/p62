import Carousel from 'react-bootstrap/Carousel';
import albumData from '../assets/SB2025.json'; 

const GooglePhotosCarousel = () => {
  const { photos, album_title } = albumData;
  
  return (
    <div>
      <h2>{album_title}</h2>
      <Carousel interval={2000}>
        {photos.map((photo, index) => (
          <Carousel.Item key={index}>
            <img
              className="d-block w-100"
              src={photo.url}
              alt={photo.caption}
              style={{ maxHeight: '400px', objectFit: 'contain' }} 
            />
          </Carousel.Item>
        ))}
      </Carousel>
    </div>
  );
};

export default GooglePhotosCarousel;