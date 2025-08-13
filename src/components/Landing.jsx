import React from 'react';
import CodeEffect from './CodeEffect';
import '../styles/landing.scss';
import '../styles/code-effect.css';
import { landingSegments } from './array';


function Landing() {
  return (
    <div className="landing-container container-fluid" id="landing">
      <div className="row justify-content-center align-items-center landing-row">
        <div className="landing-box col-10 col-sm-10 col-md-8 col-lg-7 col-xl-6">
          <CodeEffect segments={landingSegments} speed={1} />
        </div>
      </div>
    </div>
  );
}
export default Landing;