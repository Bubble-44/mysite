import React, { useState, useRef } from 'react';

const triangle = (
  <svg width="12" height="12" style={{ marginRight: 6, verticalAlign: 'middle' }}>
    <polygon points="2,4 10,4 6,10" fill="#888" />
  </svg>
);

const propertyList = [
  "align-items: flex-start;",
  "box-sizing: border-box;",
  "border-box*, ::after, ::before",
  "color: rgb(33, 37, 41);",
  "display: flex;",
  "font-family: system-ui, sans-serif;",
  "font-size: 16px;",
  "font-weight: 400;",
  "height: 814.046875px;",
  "justify-content: center;",
  "line-height: 24px;",
  "min-height: 44px;",
  "overflow-x: auto;",
  "padding-bottom: 0px;",
  "padding-left: 16px;",
  "padding-right: 16px;",
  "padding-top: 0px;",
  "text-align: start;",
  "width: 1466px;",
  "--bs-black: #000;",
  "--bs-black-rgb: 0,0,0;",
  "--bs-blue: #0d6efd;",
  "--bs-body-bg: #fff;",
  "--bs-body-bg-rgb: 255,255,255;",
  "--bs-body-color: #212529;",
  "--bs-body-color-rgb: 33,37,41;",
  "--bs-body-font-family: system-ui,-apple-system,\"Segoe UI\",Roboto,\"Helvetica Neue\",\"Noto Sans\",\"Liberation Sans\",Arial,sans-serif,\"Apple Color Emoji\",\"Segoe UI Emoji\",\"Segoe UI Symbol\",\"Noto Color Emoji\";",
  "--bs-body-font-size: 1rem;",
  "--bs-body-font-weight: 400;",
];

function ContactButton() {
  const [open, setOpen] = useState(false);
  const prevVH = useRef(null);

  const handleClick = () => {
    const slide = document.querySelector('.contact-slide');
    if (!open) {
      prevVH.current = slide ? slide.style.height : '';
      if (slide) slide.style.height = '100vh';
    } else {
      if (slide) slide.style.height = prevVH.current || '';
    }
    setOpen(!open);
  };

  return (
    <div style={{
      position: 'relative',
      width: '100%',
      minWidth: 120,
      margin: '0',
      padding: 0,
      fontFamily: 'system-ui, sans-serif',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
    }}>
      {/* Outer margin box */}
      <div style={{
        border: '2px dashed #bbb',
        padding: '2.5%',
        position: 'relative',
        background: '#f8f9fa',
        overflow: 'hidden',
        width: '100%',
        boxSizing: 'border-box',
        flex: '0 0 auto',
      }}>
        {/* Crosshair marks spanning the margin box, underneath everything */}
        <div style={{
          position: 'absolute',
          left: 0,
          top: 0,
          width: '100%',
          height: '100%',
          pointerEvents: 'none',
          zIndex: 1,
        }}>
          <div style={{
            position: 'absolute', left: '50%', top: 0, width: 1, height: '100%', background: '#bbb', transform: 'translateX(-50%)'
          }} />
          <div style={{
            position: 'absolute', top: '50%', left: 0, height: 1, width: '100%', background: '#bbb', transform: 'translateY(-50%)'
          }} />
        </div>
        {/* Padding box */}
        <div style={{
          border: '2px dashed #6cf',
          padding: '2%',
          background: '#e9ecef',
          position: 'relative',
          zIndex: 2,
          width: '100%',
          boxSizing: 'border-box',
        }}>
          {/* Inner content box */}
          <div style={{
  border: '2px dashed #fa6',
  padding: '2%',                // smaller padding
  background: '#fff',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  minHeight: 40,                // smaller minHeight
  position: 'relative',
  zIndex: 3,
  width: '100%',
  boxSizing: 'border-box',
}}>
  <button
    onClick={handleClick}
    style={{
      width: '100%',
      maxWidth: 120,             // smaller maxWidth
      minWidth: 60,              // smaller minWidth
      padding: '0.35em 0.7em',   // smaller padding
      border: '2px solid #222',
      borderRadius: 8,
      background: open ? '#eee' : '#222',
      color: open ? '#222' : '#fff',
      fontWeight: 600,
      fontSize: 'clamp(0.7rem, 1.5vw, 0.95rem)', // smaller font size
      cursor: 'pointer',
      boxShadow: open ? '0 0 0 2px #bbb' : 'none',
      transition: 'all 0.2s',
      zIndex: 4,
      position: 'relative',
    }}
  >
    {open ? 'Close' : 'Contact'}
  </button>
</div>
        </div>
      </div>
      {/* Decorative property list */}
      <div style={{
        
        color: '#eee',
        borderRadius: 6,
        padding: '1rem',
        fontSize: 'clamp(0.45rem, 2vw, 0.95rem)',
        width: '100%',
        boxSizing: 'border-box',
      }}>
        {propertyList.map((prop, i) => (
          <div key={i} style={{ display: 'flex', alignItems: 'center', marginBottom: 2 }}>
            {triangle}
            <span style={{ opacity: 0.7 }}>{prop}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ContactButton;