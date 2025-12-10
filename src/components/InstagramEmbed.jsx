import React, { useEffect } from 'react';

/**
 * Simple reusable Instagram embed component.
 *
 * Props:
 *  - id: Instagram post "shortcode" (e.g., 'DNf7mApNPs_')
 *  - className (optional): extra class for the wrapper div
 *  - label (optional): accessible label for screen readers
 */
const InstagramEmbed = ({ id, className = '', label }) => {
  useEffect(() => {
    // Check if the Instagram embed script is already on the page
    const existingScript = document.querySelector(
      "script[src='https://www.instagram.com/embed.js']"
    );

    if (!existingScript) {
      const script = document.createElement('script');
      script.src = 'https://www.instagram.com/embed.js';
      script.async = true;
      document.body.appendChild(script);
    } else if (window.instgrm && window.instgrm.Embeds) {
      // If script already loaded, tell Instagram to re-scan the page
      window.instgrm.Embeds.process();
    }
  }, []);

  const permalink = `https://www.instagram.com/p/${id}/?utm_source=ig_embed&utm_campaign=loading`;

  return (
    <div
      className={className}
      aria-label={label || 'Embedded Instagram post'}
    >
      <blockquote
        className="instagram-media"
        data-instgrm-captioned
        data-instgrm-permalink={permalink}
        data-instgrm-version="14"
      />
    </div>
  );
};

export default InstagramEmbed;