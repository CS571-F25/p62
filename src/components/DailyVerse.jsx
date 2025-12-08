import React, { useEffect, useState } from 'react';

// Fetches a daily Bible verse. Primary source: API.Bible (requires API key).
// If no key is present or the request fails, falls back to OurManna's free daily verse API.
// To use API.Bible, add a .env file at the project root with:
// VITE_BIBLE_API_KEY=your_api_bible_key_here
// (Vite exposes env vars starting with VITE_ to the client via import.meta.env)

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

      // Use only OurManna's free daily verse API.
      const options = { method: 'GET', headers: { accept: 'application/json' } };
      try {
        const fbResp = await fetch('https://beta.ourmanna.com/api/v1/get?format=json&order=daily', options);
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
        setError('Unable to fetch verse. Please check your network or API key.');
        setLoading(false);
      }
    }

    fetchVerse();

    return () => {
      mounted = false;
    };
  }, []);

  return (
    <div style={{ textAlign: 'center', margin: '2rem 0' }}>
      <h4>Daily Bible Verse</h4>
      {loading && <p>Loading...</p>}
      {error && <p style={{ color: 'crimson' }}>{error}</p>}
      {!loading && !error && (
        <blockquote style={{ fontStyle: 'italic' }}>
          <p>{verseText}</p>
          {reference && <footer>- {reference}</footer>}
        </blockquote>
      )}
    </div>
  );
};

export default DailyVerse;