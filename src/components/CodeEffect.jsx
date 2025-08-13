import React, { useState, useEffect } from 'react';
import Prism from 'prismjs';
import 'prismjs/components/prism-jsx';
import 'prismjs/components/prism-javascript';
import 'prismjs/themes/prism.css';
import { useInView } from './useInView';
import Lottie from 'lottie-react';

function escapeHtml(s = '') {
  return s.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
}

function highlight(text, language) {
  const lang = language && Prism.languages[language] ? language : null;
  return lang ? Prism.highlight(text, Prism.languages[lang], lang) : escapeHtml(text);
}

function CodeEffect({
  segments = [],
  speed = 50,
  className = '',
  style = {},
}) {
  const [started, setStarted] = useState(false);
  const [segmentIndex, setSegmentIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [revealed, setRevealed] = useState(() => new Set());
  const [ref, inView] = useInView({ threshold: 0.1 });

  // Reset/start when entering view
  useEffect(() => {
    if (!started && inView && segments.length > 0) {
      setStarted(true);
      setSegmentIndex(0);
      setCharIndex(0);
      setRevealed(new Set());
    }
  }, [inView, started, segments.length]);

  // Typing / reveal effect
  useEffect(() => {
    if (!started || segmentIndex >= segments.length) return;
    const seg = segments[segmentIndex];

    // Non-typed types: reveal and advance after a small delay
    if (seg && (seg.type === 'image' || seg.type === 'lottie' || seg.type === 'button')) {
      setRevealed(prev => {
        const next = new Set(prev);
        next.add(segmentIndex);
        return next;
      });
      const delay = typeof seg.delay === 'number' ? seg.delay : 400;
      const t = setTimeout(() => {
        setSegmentIndex(i => i + 1);
        setCharIndex(0);
      }, delay);
      return () => clearTimeout(t);
    }

    // Typed segments (string text)
    if (seg && typeof seg.text === 'string') {
      if (charIndex >= seg.text.length) {
        const t = setTimeout(() => {
          setSegmentIndex(i => i + 1);
          setCharIndex(0);
        }, speed * 2);
        return () => clearTimeout(t);
      } else {
        const t = setTimeout(() => {
          setCharIndex(c => c + 1);
        }, speed);
        return () => clearTimeout(t);
      }
    }
  }, [started, segmentIndex, charIndex, segments, speed]);

  return (
    <div ref={ref} className={className} style={style}>
      {segments.map((seg, idx) => {
        // Handle non-typed types (render only when revealed)
        if (seg.type === 'image') {
          if (!revealed.has(idx)) return null;
          const wrapperStyle = {
            opacity: 1,
            transition: 'opacity 1s',
            marginTop: '0rem',
            textAlign: 'center',
            ...(seg.wrapperStyle || {}),
          };
          const imgStyle = {
            display: 'block',
            width: '100%',
            height: 'auto',
            ...(seg.style || {}),
            ...(seg.imgStyle || {}),
          };
          return (
            <div key={idx} style={wrapperStyle} className={seg.wrapperClassName}>
              <img
                src={seg.src}
                alt={seg.alt || ''}
                style={imgStyle}
                className={seg.className}
              />
            </div>
          );
        }

        if (seg.type === 'lottie') {
          if (!revealed.has(idx)) return null;
          const wrapperStyle = {
            opacity: 1,
            transition: 'none',
            marginTop: '1rem',
            textAlign: 'center',
            ...(seg.wrapperStyle || {}),
          };
          return (
            <div key={idx} style={wrapperStyle} className={seg.wrapperClassName}>
              <Lottie
                animationData={seg.animationData}
                loop={seg.loop ?? false}
                style={seg.style}
              />
            </div>
          );
        }

        if (seg.type === 'button') {
          if (!revealed.has(idx)) return null;
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

        // Typed segments
        const fullText = typeof seg.text === 'string' ? seg.text : '';
        let visibleText = '';

        if (idx < segmentIndex) {
          visibleText = fullText;
        } else if (idx === segmentIndex) {
          visibleText = fullText.slice(0, charIndex);
        } else {
          visibleText = '';
        }

        if (!visibleText) return null;

        // Treat 'html' (and explicit render='block') as plain typed blocks, not code
        const renderAsBlock =
          seg.language === 'html' || seg.render === 'block' || seg.as === 'block';

        if (renderAsBlock) {
          return (
            <div key={idx} className={seg.className || ''} style={seg.style}>
              {visibleText}
            </div>
          );
        }

        const lang = seg.language && Prism.languages[seg.language] ? seg.language : 'none';
        const html = lang === 'none' ? escapeHtml(visibleText) : highlight(visibleText, lang);

        return (
          <pre
            key={idx}
            className={`language-${lang} ${seg.className || ''}`}
            style={seg.style || {}}
          >
            <code
              dangerouslySetInnerHTML={{ __html: html }}
            />
          </pre>
        );
      })}
    </div>
  );
}

export default CodeEffect;