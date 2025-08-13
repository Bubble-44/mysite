import logo from '../assets/logo.svg';
import techIcon from '../assets/react.svg';
import aboutIcon from '../assets/java.svg';
import projectsIcon from '../assets/HTML.svg';
import '../styles/nav-bar.scss';
import { useEffect, useState, useRef } from 'react';

function Navbar() {
  const [active, setActive] = useState('landing');
  const activeRef = useRef(active);
  const suppressUntilRef = useRef(0);
  useEffect(() => { activeRef.current = active; }, [active]);

  const instantScrollTo = (y) => {
    const root = document.documentElement;
    const prev = root.style.scrollBehavior;
    root.style.scrollBehavior = 'auto';
    window.scrollTo({ top: y, left: 0 });
    if (prev) root.style.scrollBehavior = prev;
    else root.style.removeProperty('scroll-behavior');
  };

  const scrollToSection = (id) => {
    const el = document.getElementById(id);
    if (!el) return;
    const navH = document.querySelector('.site-navbar')?.offsetHeight ?? 0;
    const y = el.getBoundingClientRect().top + window.pageYOffset - navH;
    suppressUntilRef.current = Date.now() + 700; // brief suppression to avoid flicker
    instantScrollTo(y);
    setActive(id);
  };

  useEffect(() => {
    const ids = ['landing', 'tech', 'about', 'projects'];
    const sections = ids.map(id => document.getElementById(id)).filter(Boolean);
    if (!sections.length) return;

    const navEl = () => document.querySelector('.site-navbar');
    const anchorY = () => (navEl()?.offsetHeight || 48) + 12; // 12px below navbar

    let ticking = false;
    const computeActive = () => {
      if (Date.now() < suppressUntilRef.current) return;

      const anchor = anchorY();

      // Pick the last section whose top has crossed the anchor
      let bestId = sections[0].id;
      let bestTop = -Infinity;

      for (const el of sections) {
        const top = el.getBoundingClientRect().top;
        if (top <= anchor && top > bestTop) {
          bestTop = top;
          bestId = el.id;
        }
      }

      // If none crossed yet (very top), keep first
      if (bestTop === -Infinity) bestId = sections[0].id;

      if (bestId !== activeRef.current) setActive(bestId);
    };

    const onScroll = () => {
      if (ticking) return;
      ticking = true;
      requestAnimationFrame(() => {
        ticking = false;
        computeActive();
      });
    };

    computeActive();
    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('resize', computeActive);
    window.addEventListener('orientationchange', computeActive);
    return () => {
      window.removeEventListener('scroll', onScroll);
      window.removeEventListener('resize', computeActive);
      window.removeEventListener('orientationchange', computeActive);
    };
  }, []);

  return (
    <nav className="site-navbar">
      <button
        className={`nav-btn logo-btn ${active === 'landing' ? 'active' : ''}`}
        onClick={() => scrollToSection('landing')}
        aria-label="Home"
      >
        <span className="navbar-src">src</span>
        <img src={logo} alt="Logo" className="site-logo main-logo" />
      </button>

      <button
        className={`nav-btn ${active === 'tech' ? 'active' : ''}`}
        onClick={() => scrollToSection('tech')}
      >
        <img src={techIcon} alt="Technology" className="nav-icon" />
        Technology
      </button>

      <button
        className={`nav-btn ${active === 'about' ? 'active' : ''}`}
        onClick={() => scrollToSection('about')}
      >
        <img src={aboutIcon} alt="About" className="nav-icon" />
        About
      </button>

      <button
        className={`nav-btn ${active === 'projects' ? 'active' : ''}`}
        onClick={() => scrollToSection('projects')}
      >
        <img src={projectsIcon} alt="Projects" className="nav-icon" />
        Projects
      </button>
    </nav>
  );
}

export default Navbar;