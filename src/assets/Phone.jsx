import { useRef, useEffect, useState } from 'react';
import Lottie from 'lottie-react';
import phoneAnimation from '../assets/phone.json';
import '../styles/tech-phone.scss';
import CodeEffect from './CodeEffect';
import { phoneSegments } from './array';

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
              <CodeEffect segments={phoneSegments} speed={1} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Phone;