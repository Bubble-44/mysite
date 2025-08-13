import React from 'react';
import CodeEffect from './CodeEffect';
import { techSectionsSegments } from './array';
import '../styles/tech-card.scss';
import htmlLogo from '../assets/HTML.svg';
import javaLogo from '../assets/java.svg';
import reactLogo from '../assets/react.svg';
import sassLogo from '../assets/sass.svg';
import webflowLogo from '../assets/webFlow.svg';
import wixLogo from '../assets/wix.svg';
import wordpressLogo from '../assets/wordPress.svg';

function NewTech() {
  const stack = [
    { src: reactLogo, label: 'React' },
    { src: sassLogo, label: 'Sass' },
    { src: htmlLogo, label: 'HTML' },
    { src: javaLogo, label: 'Java' },
    { src: webflowLogo, label: 'Webflow' },
    { src: wixLogo, label: 'Wix' },
    { src: wordpressLogo, label: 'WordPress' },
  ];

  return (
    <section className="new-tech">
      <div className="container">
        <div className="row justify-content-center">
          {techSectionsSegments.map((segments, idx) => (
            <div key={idx} className="col-12 col-lg-8 mb-4">
              <div className="phone-content-box">
                <CodeEffect segments={segments} speed={3} />
              </div>
            </div>
          ))}
        </div>

        <div className="row mt-2">
          <div className="col-12">
            <div className="tech-logos-wrap">
              <div className="code-line dim">// stack</div>
              <ul className="tech-logos">
                {stack.map((l) => (
                  <li key={l.label} className="tech-logo-item">
                    <img src={l.src} alt={l.label} />
                    <span>{l.label}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}

export default NewTech;