import { Container, Row, Col } from 'react-bootstrap';
import './SGSignUp.css';

const SGSignUp = () => {
  return (
    <section className="sg-page">
      <Container>
        <Row className="justify-content-center">
          <Col lg={12} xl={12}>
            {/* Hero section (matches About/Events/Worship style) */}
            <div className="sg-hero">
              <h1 className="sg-title">Small Group Sign-Up</h1>
              <p className="sg-tagline">
                Get connected to an AAIV small group this semester.
              </p>
              <p className="sg-intro">
                Small groups are where we study Scripture, ask honest questions,
                and build friendships in a smaller community. Fill out the form
                below and we&apos;ll follow up with a group that fits your schedule.
              </p>
            </div>

            {/* Main content card */}
            <div className="sg-content">
              <section className="sg-section">
                <h2 className="sg-section-title">Sign-Up Form</h2>
                <p className="sg-text">
                  Please complete the form below to let us know your availability
                  and preferences. Our leaders will reach out with next steps.
                </p>

                <div className="sg-iframe-wrapper">
                  <iframe
                    title="AAIV Small Group sign-up form"
                    src="https://docs.google.com/forms/d/e/1FAIpQLScMHqYWyU5IgkZqjkddFktHguAcESut6LEyrhSxqV11qhZIhQ/viewform?embedded=true"
                    width="100%"
                    height="3600"
                    frameBorder="0"
                    marginHeight="0"
                    marginWidth="0"
                    style={{ border: 0 }}
                    loading="lazy"
                  >
                    Loading…
                  </iframe>
                </div>
              </section>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default SGSignUp;