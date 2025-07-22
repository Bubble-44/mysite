import React from 'react';
import me from '../assets/me.jpg';

function About() {
  return (
    <section id="about" className="about">
      <div className="container">
      <div className="row align-items-center">
        <div className="col-12 col-md-6 py-3">
          <img src={me} alt="About Me" className="about-img img-fluid" />
        </div>
        <div className="col-12 col-md-6">
          <div className="about-text-box py-3">
            <h2>About Me</h2>
            <hr />
            <p>
              I am a dedicated, self-taught web developer driven 
              by a passion for crafting impactful digital experiences 
              and a commitment to continuous learning. Eager to bring 
              your ideas to life.
            </p>
          </div>
        </div>
      </div>
      </div>
    </section>
  );
}

export default About;