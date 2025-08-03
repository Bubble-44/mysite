import React, { useEffect, useState } from 'react';

function ScrollCounter() {
  const [pageHeight, setPageHeight] = useState(window.document.body.scrollHeight);

  useEffect(() => {
    const updateHeight = () => setPageHeight(window.document.body.scrollHeight);
    window.addEventListener('resize', updateHeight);
    window.addEventListener('scroll', updateHeight);
    updateHeight();
    return () => {
      window.removeEventListener('resize', updateHeight);
      window.removeEventListener('scroll', updateHeight);
    };
  }, []);

  // Estimate line height (adjust if needed)
  const lineHeight = 20;
  const count = Math.ceil(pageHeight / lineHeight);
  const numbers = Array.from({ length: count }, (_, i) => i + 1);

  return (
    <div
      style={{
        position: 'absolute',
        left: 0,
        top: '60px', // adjust for navbar height
        width: '40px',
        height: pageHeight - 60 + 'px',
        overflow: 'hidden',
        color: 'white',
        opacity: 0.2,
        padding: '0.5rem',
        fontFamily: 'monospace',
        zIndex: 1,
        pointerEvents: 'none'
      }}
    >
      <div>
        {numbers.map(n => (
          <div key={n} style={{ height: lineHeight }}>{n}</div>
        ))}
      </div>
    </div>
  );
}

export default ScrollCounter;