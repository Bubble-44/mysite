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

    // Parallax effect: video moves 0.75x slower than scroll
    const handleScroll = () => {
      const scrolled = window.scrollY;
      if (videoRef.current) {
        videoRef.current.style.transform = `translateY(${scrolled * 0.5}px)`; // 1 - 0.75 = 0.25
      }
    };
    window.addEventListener('scroll', handleScroll);

    return () => {
      video.removeEventListener('ended', handleEnded);
      window.removeEventListener('scroll', handleScroll);
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
              <button className="primary-button mt-3">LEARN MORE</button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;