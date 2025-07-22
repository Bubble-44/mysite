import React, { useState, useEffect } from 'react';
import Prism from 'prismjs';
import 'prismjs/themes/prism.css';
import '../styles/prism-override.css';
import { useInView } from './useInView';

function Typewriter({ text, speed = 50, language = 'javascript', style = {}, className = '' }) {
  const [displayed, setDisplayed] = useState('');
  const [ref, inView] = useInView({ threshold: 0.1 });

  useEffect(() => {
    if (!inView) return;
    let i = 0;
    setDisplayed(''); // Reset when it comes into view
    const interval = setInterval(() => {
      setDisplayed(text.slice(0, i + 1));
      i++;
      if (i === text.length) clearInterval(interval);
    }, speed);
    return () => clearInterval(interval);
  }, [inView, text, speed]);

  const highlighted = Prism.highlight(displayed, Prism.languages[language], language);

  return (
    <pre ref={ref} className={`language-${language} ${className}`} style={style}>
      <code dangerouslySetInnerHTML={{ __html: highlighted }} />
    </pre>
  );
}

export default Typewriter;