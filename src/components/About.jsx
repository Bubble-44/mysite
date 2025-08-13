import React from 'react';
import me from '../assets/me.jpg';
import CodeEffect from './CodeEffect';
import { aboutSegments } from './array';

function About() {
  return (
    <section id="about" className="about">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-12 col-md-6 py-3">
            <img src={me} alt="About Me" className="about-img img-fluid" />
          </div>
          <div className="col-12 col-md-6">
            {/* Reuse phone-content-box styles for consistent look */}
            <div className="phone-content-box about-text-box py-3">
              <CodeEffect segments={aboutSegments} speed={1} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;