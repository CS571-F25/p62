import { useEffect, useState } from 'react';
import { Card, Spinner, Alert } from 'react-bootstrap';

const DailyVerse = () => {
  const [verseText, setVerseText] = useState('');
  const [reference, setReference] = useState('');
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    let mounted = true;

    async function fetchVerse() {
      setLoading(true);
      setError(null);

      const options = { method: 'GET', headers: { accept: 'application/json' } };

      try {
        const fbResp = await fetch(
          'https://beta.ourmanna.com/api/v1/get?format=json&order=daily',
          options
        );
        if (fbResp.ok) {
          const fb = await fbResp.json();
          const text = fb?.verse?.details?.text || '';
          const ref = fb?.verse?.details?.reference || '';
          if (text && mounted) {
            setVerseText(text);
            setReference(ref);
            setLoading(false);
            return;
          }
        } else {
          console.warn('OurManna request failed with status', fbResp.status);
        }
      } catch (err) {
        console.warn('OurManna request error:', err.message);
      }

      if (mounted) {
        setError('Unable to fetch verse. Please check your network or try again later.');
        setLoading(false);
      }
    }

    fetchVerse();

    return () => {
      mounted = false;
    };
  }, []);

  return (
    <Card className="daily-verse-card text-center my-4" border="0">
      <Card.Body>
        <Card.Title>Daily Bible Verse</Card.Title>

        {loading && (
          <div className="mt-3">
            <Spinner animation="border" size="sm" role="status" />
          </div>
        )}

        {error && (
          <Alert variant="danger" className="mt-3 mb-0">
            {error}
          </Alert>
        )}

        {!loading && !error && (
          <blockquote className="mt-3 mb-0" style={{ fontStyle: 'italic' }}>
            <p className="mb-2">{verseText}</p>
            {reference && <footer className="text-muted">— {reference}</footer>}
          </blockquote>
        )}
      </Card.Body>
    </Card>
  );
};

export default DailyVerse;