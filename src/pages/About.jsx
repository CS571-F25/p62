import './About.css';

const About = () => {
  return (
    <section className="about-page">
      <div className="about-hero">
        <h1 className="about-title">About AAIV</h1>
        <p className="about-tagline">
          Asian-American InterVarsity at UW–Madison
        </p>
        <p className="about-intro">
          A community of students exploring faith, culture, and identity together —
          welcoming people of every background.
        </p>
      </div>

      <div className="about-content">
        <section className="about-section">
          <h2 className="about-section-title">Who We Are</h2>
          <p>
            We are Asian-American InterVarsity, a ministry mainly of and for Asian American
            students dedicated to Biblically exploring, challenging, and celebrating Asian
            American culture and identity, though we welcome people of all backgrounds and
            ethnicities. We are pan-ethnic and seek to witness to Asian Americans and the
            Asian American community at the UW.
          </p>
        </section>

        <section className="about-section">
          <h2 className="about-section-title">InterVarsity</h2>
          <p>
            We are affiliated with InterVarsity Christian Fellowship/USA, an
            interdenominational national movement of similar student groups and a founding
            member of the International Fellowship of Evangelical Students. We affirm
            InterVarsity’s vision, purpose, and values alongside InterVarsity chapters at
            the UW and at over 500 other college and university campuses throughout the
            country.
          </p>
        </section>

        <section className="about-section">
          <h2 className="about-section-title">Christian Fellowship</h2>
          <p>
            As a community, we hope to grow together in seeking, following, and sharing
            Jesus Christ as revealed in the Holy Bible and expressed in InterVarsity’s
            doctrinal basis alongside our brothers and sisters in the global body of
            Christ.
          </p>
        </section>

        <section className="about-section">
          <h2 className="about-section-title">Everyone is Welcome!</h2>
          <p>
            Whether you’ve grown up in church, are exploring faith for the first time,
            or are just curious about community on campus — you have a place here.
          </p>
        </section>
      </div>
    </section>
  );
};

export default About;