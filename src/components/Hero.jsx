import { useRef, useEffect } from 'react';
import Lottie from 'lottie-react';

import heroVideo from '../assets/heroVideo.mp4';
import heroText from '../assets/heroText.json';

function Hero() {
  const videoRef = useRef(null);
  const loopStart = 3.24; // 3 seconds and 6 frames at 25fps

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    let hasLooped = false;

    const handleEnded = () => {
      hasLooped = true;
      video.currentTime = loopStart;
      video.play();
    };

    video.addEventListener('ended', handleEnded);

    // Removed parallax scroll effect

    return () => {
      video.removeEventListener('ended', handleEnded);
      // Removed window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <section id="hero" className="hero position-relative d-flex align-items-center justify-content-center">
      <video
        ref={videoRef}
        className="hero-video"
        src={heroVideo}
        autoPlay
        loop={false}
        muted
        playsInline
      />
      <div className="hero-overlay" />
      <div className="herobox col-11 col-md-10 col-lg-7">
        <div className="row justify-content-center align-items-center">
          <div className="col-12 col-md-12 col-lg-12">
            <div className="hero-content text-center p-4">
              <Lottie
                animationData={heroText}
                loop={false}
                autoplay={true}
                style={{ width: '100%', height: 'auto', maxWidth: 400, margin: '0 auto' }}
              />
              <p className="text mt-3">
                Beyond just building websites, 
                I engineer custom, high-performing digital experiences. 
                Expect intuitive design, robust backend, and a flawless, 
                responsive site that looks great and performs perfectly 
                on any device.
              </p>
              <button
  className="primary-button mt-3"
  onClick={e => {
  const techSection = document.getElementById('tech');
  if (techSection) {
    techSection.scrollIntoView({ behavior: 'smooth' });
  }
  e.target.blur(); // Remove focus after click
}}
>
  LEARN MORE
</button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;