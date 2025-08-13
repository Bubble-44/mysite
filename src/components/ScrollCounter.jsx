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

  // Estimate line height (kept fixed so count math remains correct)
  const lineHeight = 20;
  const count = Math.ceil(pageHeight / lineHeight);
  const numbers = Array.from({ length: count }, (_, i) => i + 1);

  // Responsive font size for the numbers
  const numberFontSize = 'clamp(0.65rem, 1.2vw, 0.9rem)';

  return (
    <div
      style={{
        position: 'absolute',
        left: 0,
        top: '60px', // adjust for navbar height
        width: '40px',
        height: pageHeight - 60 + 'px',
        overflow: 'hidden',
        color: 'black',
        opacity: 0.4,
        padding: '0.5rem',
        fontFamily: 'monospace',
        fontSize: numberFontSize,           // clamp applied
        zIndex: 5,
        pointerEvents: 'none',
      }}
    >
      <div>
        {numbers.map(n => (
          <div
            key={n}
            style={{
              height: lineHeight,
              lineHeight: `${lineHeight}px`, // keeps text vertically centered
            }}
          >
            {n}
          </div>
        ))}
      </div>
    </div>
  );
}

export default ScrollCounter;