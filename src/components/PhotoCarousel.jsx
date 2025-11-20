import Carousel from 'react-bootstrap/Carousel';

// 2025 Senior Banquet Google Photos: https://photos.google.com/share/AF1QipN4b_rvldO8PYqLiM3G2TZPi2Yst7O9CcStHnLX2CQfablAn4FFp5p38jZGD4megw?key=ZDVUMUdMT0lrQWY3b0lFTzEtYzBCSjFSMDNHRmR3

const PhotoCarousel = () => {
  return (
    <Carousel>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://via.placeholder.com/800x400"
          alt="First slide"
        />
        <Carousel.Caption>
          <h3>First slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://via.placeholder.com/800x400"
          alt="Second slide"
        />
        <Carousel.Caption>
          <h3>Second slide label</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
};

export default PhotoCarousel;