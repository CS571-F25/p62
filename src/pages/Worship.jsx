import { useMemo } from "react";
import { Container, Row, Col } from "react-bootstrap";
import YoutubeEmbed from "../components/YoutubeEmbed";
import songs from "../assets/worship_songs.json";
import "./Worship.css";

const Worship = () => {
  const songList = songs.songs || [];

  // Date-based "Song of the Day"
  const { todaysSong, todayIndex } = useMemo(() => {
    if (songList.length === 0) {
      return { todaysSong: null, todayIndex: -1 };
    }

    // Start date for rotation (Dec 9, 2025 — month is 0-indexed)
    const startDate = new Date(2025, 11, 9);
    let today = new Date();
    today = new Date(today.getFullYear(), today.getMonth(), today.getDate());

    const dayOffset = Math.floor(
      (today - startDate) / (1000 * 60 * 60 * 24)
    );

    // Safe positive index
    const idx =
      ((dayOffset % songList.length) + songList.length) % songList.length;

    return {
      todaysSong: songList[idx],
      todayIndex: idx,
    };
  }, [songList]);

  return (
    <section className="worship-page">
      <Container>
        <Row className="justify-content-center">
          <Col lg={12} xl={12}>
            <div className="worship-hero">
              <h1 className="worship-title">Worship</h1>
              <p className="worship-tagline">2025 Large Group Worship Playlist</p>
              <p className="worship-intro">
                A rotating set of worship songs we’ll be singing together at Large
                Group throughout the year. Come ready to worship and sing along!
              </p>
            </div>

            <div className="worship-content">
              <section className="worship-section">
                <h2 className="worship-section-title">Song of the Day</h2>
                {todaysSong ? (
                  <>
                    <p className="worship-text">
                      Today&apos;s featured song from our playlist:
                      <span className="worship-song-title">
                        {" "}
                        {todaysSong.title}
                      </span>
                    </p>
                    <div className="worship-embed-wrapper">
                      <YoutubeEmbed
                        embedId={todaysSong.embed_id}
                        title={`Worship song of the day: ${todaysSong.title}`}
                      />
                    </div>
                  </>
                ) : (
                  <p className="worship-text">
                    The worship playlist is not loaded yet. Check back soon!
                  </p>
                )}
              </section>

              <section className="worship-section">
                <h2 className="worship-section-title">Full Playlist</h2>
                {songList.length > 0 ? (
                  <ul className="worship-list">
                    {songList.map((song, index) => (
                      <li key={song.title} className="worship-list-item">
                        <span>{song.title}</span>
                        {index === todayIndex && (
                          <span className="worship-badge-today">Today</span>
                        )}
                      </li>
                    ))}
                  </ul>
                ) : (
                  <p className="worship-text">
                    No songs added yet. Once the playlist is set, you&apos;ll see
                    it here.
                  </p>
                )}
              </section>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Worship;