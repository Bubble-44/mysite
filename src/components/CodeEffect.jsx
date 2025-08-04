import React, { useState, useEffect } from 'react';
import Prism from 'prismjs';
import 'prismjs/components/prism-jsx';
import 'prismjs/themes/prism.css';
import 'prismjs/components/prism-javascript';
import { useInView } from './useInView';
import Lottie from 'lottie-react';

function CodeEffect({
  segments,
  speed = 50,
  className = '',
  style = {},
}) {
  const [displayed, setDisplayed] = useState(['']);
  const [segmentIndex, setSegmentIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [hasTyped, setHasTyped] = useState(false);
  const [hasStarted, setHasStarted] = useState(false);
  const [shownImages, setShownImages] = useState([]);
  const [ref, inView] = useInView({ threshold: 0.1 });

  useEffect(() => {
    if (!hasStarted && inView && segments && segments.length > 0) {
      setDisplayed(Array(segments.length).fill(''));
      setSegmentIndex(0);
      setCharIndex(0);
      setHasStarted(true);
      setShownImages([]);
    }
  }, [inView, segments, hasStarted]);

  useEffect(() => {
    if (!hasStarted || hasTyped || !segments || segments.length === 0) return;
    if (segmentIndex >= segments.length) return;

    const current = segments[segmentIndex];

    if (current.type === 'image' || current.type === 'lottie' || current.type === 'button') {
  setShownImages(prev => [...prev, segmentIndex]);
  setTimeout(() => {
    if (segmentIndex < segments.length - 1) {
      setSegmentIndex(segmentIndex + 1);
      setCharIndex(0);
    } else {
      setHasTyped(true);
    }
  }, 400);
  return;
}

    if (typeof current.text === 'string') {
      if (charIndex > current.text.length) {
        if (segmentIndex < segments.length - 1) {
          setTimeout(() => {
            setSegmentIndex(segmentIndex + 1);
            setCharIndex(0);
          }, speed * 2);
        } else {
          setHasTyped(true);
        }
        return;
      }

      const interval = setInterval(() => {
        setDisplayed(prev => {
          const updated = [...prev];
          updated[segmentIndex] = current.text.slice(0, charIndex);
          return updated;
        });
        setCharIndex(c => c + 1);
      }, speed);

      if (charIndex > current.text.length) clearInterval(interval);
      return () => clearInterval(interval);
    }
  }, [charIndex, segmentIndex, segments, speed, hasStarted, hasTyped]);

  // Only this return should exist!
  return (
    <div ref={ref} className={className} style={style}>
      {segments.map((seg, idx) => {
        if (!shownImages.includes(idx)) {
          if (typeof seg.text === 'string') {
            return (
              <pre
                key={idx}
                className={`language-${seg.language || 'javascript'} ${seg.className || ''}`}
                style={seg.style || {}}
              >
                <code
                  dangerouslySetInnerHTML={{
                    __html:
                      seg.language === 'none'
                        ? (displayed[idx] || '').replace(/</g, '&lt;').replace(/>/g, '&gt;')
                        : Prism.highlight(
                          displayed[idx] || '',
                          Prism.languages[seg.language || 'javascript'],
                          seg.language || 'javascript'
                        ),
                  }}
                />
              </pre>
            );
          }
          return null;
        }

        if (seg.type === 'image') {
          return (
            <div
              key={idx}
              style={{
                opacity: 1,
                transition: 'opacity 1s',
                marginTop: '1rem',
                textAlign: 'center',
                ...seg.style,
              }}
            >
              <img
                src={seg.src}
                alt={seg.alt || ''}
                style={{
                  maxWidth: '100%',
                  ...seg.imgStyle,
                }}
              />
            </div>
          );
        }

        if (seg.language === 'html') {
          console.log('HTML segment detected:', seg);
          return (
            <div
              key={idx}
              className={seg.className || ''}
              style={seg.style}
            >
              {seg.text}
            </div>
          );
        }

        if (seg.type === 'lottie') {
          return (
            <div
              key={idx}
              style={{
                opacity: 1,
                transition: 'none',
                marginTop: '1rem',
                textAlign: 'center',
                ...seg.style,
              }}
            >
              <Lottie
                animationData={seg.animationData}
                loop={seg.loop ?? false}
                style={seg.style}
              />
            </div>
          );
        }

        if (seg.type === 'button') {
  return (
    <button
      key={idx}
      style={seg.style}
      onClick={seg.onClick}
      className={seg.className || ''}
    >
      {seg.text}
    </button>
  );
}

        if (typeof seg.text === 'string') {
          return (
            <pre
              key={idx}
              className={`language-${seg.language || 'javascript'} ${seg.className || ''}`}
              style={seg.style || {}}
            >
              <code
                dangerouslySetInnerHTML={{
                  __html:
                    seg.language === 'none'
                      ? (displayed[idx] || '').replace(/</g, '&lt;').replace(/>/g, '&gt;')
                      : Prism.highlight(
                        displayed[idx] || '',
                        Prism.languages[seg.language || 'javascript'],
                        seg.language || 'javascript'
                      ),
                }}
              />
            </pre>
          );
        }

        return null;
      })}
    </div>
  );
}

export default CodeEffect;