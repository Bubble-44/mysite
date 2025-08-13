import React from 'react';

const triangle = (
  <svg width="12" height="12" style={{ marginRight: 6, verticalAlign: 'middle' }}>
    <polygon points="2,4 10,4 6,10" fill="#888" />
  </svg>
);

const propertyList = [
  'align-items: flex-start;',
  'box-sizing: border-box;',
  'border-box*, ::after, ::before',
  'color: rgb(33, 37, 41);',
  'display: flex;',
  'font-family: system-ui, sans-serif;',
  'font-size: 16px;',
  'font-weight: 400;',
  'height: 814.046875px;',
  'justify-content: center;',
  'line-height: 24px;',
  'min-height: 44px;',
  'overflow-x: auto;',
  'padding-bottom: 0px;',
  'padding-left: 16px;',
  'padding-right: 16px;',
  'padding-top: 0px;',
  'text-align: start;',
  'width: 1466px;',
  '--bs-black: #000;',
  '--bs-black-rgb: 0,0,0;',
  '--bs-blue: #0d6efd;',
  '--bs-body-bg: #fff;',
  '--bs-body-bg-rgb: 255,255,255;',
  '--bs-body-color: #212529;',
  '--bs-body-color-rgb: 33,37,41;',
  '--bs-body-font-family: system-ui,-apple-system,"Segoe UI",Roboto,"Helvetica Neue","Noto Sans","Liberation Sans",Arial,sans-serif,"Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol","Noto Color Emoji";',
  '--bs-body-font-size: 1rem;',
  '--bs-body-font-weight: 400;',
];

function ContactButton({ open, onClick }) {
  return (
    <div>
      {/* Framed button area sits above the form overlay */}
      <div style={{ position: 'relative', zIndex: 4 }}>
        <div
          style={{
            border: '1px dashed #7c7c7c',
            padding: '2.5%',
            background: '#383838',
            width: '100%',
            boxSizing: 'border-box',
          }}
        >
          <div
            style={{
              border: '1px dashed #a6a6a6',
              padding: '2%',
              background: '#6b6b6b',
              boxSizing: 'border-box',
            }}
          >
            <div
              style={{
                border: '1px dashed #fff',
                padding: '2%',
                background: '#a8a8a8',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                minHeight: 40,
                position: 'relative',
                boxSizing: 'border-box',
                overflow: 'hidden',
              }}
            >
              

              <button
                onClick={onClick}
                aria-pressed={open}
                style={{
                  position: 'relative',
                  zIndex: 1,
                  width: '100%',
                  maxWidth: 120,
                  minWidth: 60,
                  padding: '0.35em 0.7em',
                  border: '1px solid #222',
                  borderRadius: 8,
                  background: open ? '#eee' : '#222',
                  color: open ? '#222' : '#fff',
                  fontWeight: 600,
                  fontSize: 'clamp(0.7rem, 1.5vw, 0.95rem)',
                  cursor: 'pointer',
                  transition: 'all 0.2s',
                }}
              >
                {open ? 'Close' : 'Contact'}
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Decorative list stays below the overlay (lower z-index), clipped, non-interactive */}
      <div
        style={{
          zIndex: 1,
          color: '#eee',
          borderRadius: 6,
          padding: '1rem',
          fontSize: 'clamp(0.35rem, 1vw, 0.5rem)',
          width: '100%',
          boxSizing: 'border-box',
          overflow: 'hidden',
          pointerEvents: 'none',
        }}
      >
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