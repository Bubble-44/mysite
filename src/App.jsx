import { useEffect, useState } from 'react';
import './App.scss';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Phone from './components/Phone';
import Tech from './components/Tech';
import About from './components/About';
import Contact from './components/Contact';

function App() {
  useEffect(() => {
    const handleScroll = () => {
      const video = document.querySelector('.hero-video');
      if (!video) return;
      // Hide video if scrolled past the document
      if (window.scrollY + window.innerHeight >= document.body.scrollHeight - 1) {
        video.style.visibility = 'hidden';
      } else {
        video.style.visibility = 'visible';
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <Hero />
      <Navbar />
      <div className="App">
        <Phone />
        <Tech />
        <About />
        <Contact />
      </div>
    </>
  );
}

export default App;