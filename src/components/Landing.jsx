import React from 'react';
import CodeEffect from './CodeEffect';
import '../styles/landing.scss';
import '../styles/code-effect.css';
import { landingSegments } from './array';

function Landing() {
  return (
    <div className="container-fluid landing-container">
      <div className="row justify-content-center hero-row">
        <div className="landing-box shadow-sm col-lg-8 col-md-8 col-sm-8 col-10">
          <CodeEffect
            segments={landingSegments}
            speed={3}
          />
        </div>
      </div>
    </div>
  );
}

export default Landing;