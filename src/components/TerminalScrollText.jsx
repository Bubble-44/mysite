import React, { useEffect, useState } from 'react';

const triangle = (
  <svg
    width="12"
    height="12"
    viewBox="0 0 12 12"
    style={{
      marginRight: 6,
      verticalAlign: 'middle',
      flexShrink: 0,
      transform: 'rotate(-90deg)',
    }}
    xmlns="http://www.w3.org/2000/svg"
  >
    <polygon points="2,4 10,4 6,10" fill="#888" />
  </svg>
);

const items = [
  { label: '<!doctype html>', depth: 0, triangle: false },
  { label: '<html lang="en">', depth: 0, triangle: true },
  { label: '<head>', depth: 1, triangle: true },
  { label: '<meta charset="UTF-8" />', depth: 2, triangle: false },
  { label: '<link rel="icon" type="image/svg+xml" href="/flavicon.svg" />', depth: 2, triangle: false },
  { label: '<meta name="viewport" content="width=device-width, initial-scale=1.0" />', depth: 2, triangle: false },
  { label: '<title>Isaac Monson</title>', depth: 2, triangle: false },
  { label: '</head>', depth: 1, triangle: false },
  { label: '<body>', depth: 1, triangle: true },
  { label: '<header><nav><ul><li>Home</li><li>About</li><li>Contact</li></ul></nav></header>', depth: 2, triangle: true },
  { label: '</header>', depth: 2, triangle: false },
  { label: '<main>', depth: 2, triangle: true },
  { label: '<section class="hero">', depth: 3, triangle: true },
  { label: '<h1>Welcome</h1>', depth: 4, triangle: false },
  { label: '<p>Intro text...</p>', depth: 4, triangle: false },
  { label: '</section>', depth: 3, triangle: false },
  { label: '<section class="features">', depth: 3, triangle: true },
  { label: '<div class="feature">', depth: 4, triangle: true },
  { label: '<h2>Fast</h2>', depth: 5, triangle: false },
  { label: '<p>Loads quickly.</p>', depth: 5, triangle: false },
  { label: '</div>', depth: 4, triangle: false },
  { label: '<div class="feature">', depth: 4, triangle: true },
  { label: '<h2>Responsive</h2>', depth: 5, triangle: false },
  { label: '<p>Works on any device.</p>', depth: 5, triangle: false },
  { label: '</div>', depth: 4, triangle: false },
  { label: '</section>', depth: 3, triangle: false },
  { label: '</main>', depth: 2, triangle: false },
  { label: '<footer>', depth: 2, triangle: true },
  { label: '<p>&copy; 2025 Isaac Monson</p>', depth: 3, triangle: false },
  { label: '</footer>', depth: 2, triangle: false },
  { label: '<script type="module" src="/src/main.jsx"></script>', depth: 2, triangle: false },
  { label: '</body>', depth: 1, triangle: false },
  { label: '</html>', depth: 0, triangle: false },
];

function TerminalScrollText() {
  const [top, setTop] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setTop(-window.scrollY * .2); // Parallax: slower than main scroll
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div
      style={{
        position: 'absolute',
        top: top,
        left: 0,
        width: '100%',
        minHeight: 120,
        fontSize: 'clamp(0.7rem, 2vw, 1rem)',
        fontFamily: 'Menlo, Monaco, Consolas, monospace',
        color: '#eee',
        opacity: 0.7,
        pointerEvents: 'none', // Prevents mouse events
      }}
    >
      {items.map((item, i) => (
        <div
          key={item.label + i}
          style={{
            display: 'flex',
            alignItems: 'center',
            cursor: item.triangle ? 'pointer' : 'default',
            padding: '2px 0',
            paddingLeft: `${item.depth * 18}px`
          }}
        >
          {item.triangle ? triangle : <span style={{ width: 18, display: 'inline-block' }} />}
          <span>{item.label}</span>
        </div>
      ))}
    </div>
  );
}

export default TerminalScrollText;