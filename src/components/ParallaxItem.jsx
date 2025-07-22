// ParallaxItem.jsx
import React, { useEffect, useRef } from 'react';

function ParallaxItem({ speed = 0.05, children, style = {}, className = '' }) {
  const itemRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      const scrolled = window.scrollY;
      if (itemRef.current) {
        itemRef.current.style.transform = `translateY(${scrolled * speed}px)`;
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [speed]);

  return (
    <div ref={itemRef} className={className} style={{ position: 'absolute', zIndex: 2, ...style }}>
    {children}
  </div>
  );
}

export default ParallaxItem;