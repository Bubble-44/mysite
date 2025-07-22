import { useRef, useEffect, useState } from 'react';
import Lottie from 'lottie-react';
import phoneAnimation from '../assets/phone.json';

function Phone() {
  const lottieRef = useRef();
  const sectionRef = useRef();
  const [hasPlayedOnce, setHasPlayedOnce] = useState(false);
  const firstPlayTriggered = useRef(false);

useEffect(() => {
  if (hasPlayedOnce) return;
  const observer = new window.IntersectionObserver(
    ([entry]) => {
      if (
        entry.intersectionRatio >= 0.5 &&
        lottieRef.current &&
        !firstPlayTriggered.current
      ) {
        lottieRef.current.goToAndPlay(0, true);
        firstPlayTriggered.current = true;
      }
    },
    { threshold: [0, 0.5, 1] }
  );
  if (sectionRef.current) observer.observe(sectionRef.current);
  return () => observer.disconnect();
}, [hasPlayedOnce]);

  useEffect(() => {
    if (hasPlayedOnce && lottieRef.current) {
      lottieRef.current.play();
    }
  }, [hasPlayedOnce]);

  return (
    <section id="tech" className="phone-section" ref={sectionRef}>
      <div className="container">
        <div className="row align-items-center">
          <div className="col-12 col-md-6">
            <Lottie
              lottieRef={lottieRef}
          animationData={phoneAnimation}
          loop={hasPlayedOnce}
          autoplay={false}
          className="phone-animation"
          onComplete={() => setHasPlayedOnce(true)}
        />
      </div>
      <div className="phone-content-col col-12 col-md-6">
        <div className="phone-content-box">
          <h2>Bring Your Vision to Life</h2>
          <hr />
          <p>
            I believe in a truly collaborative approach.
            Your project begins with a deep dive into your goals,
            followed by a transparent development process.
            I will be your partner in bringing your unique vision
            to life, ensuring every pixel and every interaction
            serves your ultimate objective.
          </p>
        </div>
      </div>
    </div>
  </div>
</section>
  );
}

export default Phone;