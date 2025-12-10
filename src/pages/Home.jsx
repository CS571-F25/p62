import { Container } from 'react-bootstrap';
import PhotoCarousel from '../components/PhotoCarousel';
import DailyVerse from '../components/DailyVerse';
import './Home.css';

const Home = () => {
  return (
    <section className="home-page">
      <div className="home-hero">
        <PhotoCarousel />
      </div>

      <Container>
        <div className="home-content">
          <DailyVerse />
        </div>
      </Container>
    </section>
  );
};

export default Home;