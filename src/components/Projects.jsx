import React from 'react';
import '../styles/projects.css';

import lifeImg from '../assets/life.png';
import driggsImg from '../assets/driggs.png';
import creationsImg from '../assets/creations.png';

function Projects() {
  const projects = [
    {
      title: 'Life Meditation',
      desc: 'A calming, responsive meditation site built in Webflow with a guided-session library, class scheduling, and subtle animations; CMS-driven and SEO-optimized.',
      tags: ['Webflow', 'CMS', 'Interactions', 'SEO'],
      image: lifeImg,
      links: { demo: 'https://www.lifereroute.us/' },
    },
    {
      title: 'Driggs',
      desc: 'A clean, responsive single-page site for a musician, built in React with audio embeds, show dates, and a contact CTA.',
      tags: ['React', 'SPA', 'Responsive', 'UI'],
      image: driggsImg,
      links: { demo: 'https://www.kristinadriggsmusic.com/' },
    },
    {
      title: 'YouTube Channel',
      desc: 'Produced a YouTube channel end-to-end—editing, motion graphics/animation, sound polish, and channel branding; optimized titles, descriptions, and upload cadence.',
      tags: ['YouTube', 'Editing', 'Motion Graphics', 'Branding'],
      image: creationsImg,
      links: { demo: 'https://www.youtube.com/@joycemonsonfromthistothatc9628' },
    },
  ];

  return (
    <section id="projects" className="projects-section">
      <div className="container">
        <div className="row justify-content-start">
          <div className="col-12">
            <div className="projects-header">
              <div className="code-line dim">// projects</div>
              <h2 className="projects-title gradient-text">Selected Work</h2>
              <div className="projects-divider" aria-hidden="true" />
            </div>
          </div>

          {projects.map((p, i) => (
            <div key={i} className="col-12 col-md-6 col-lg-4 mb-4">
              <article className="project-card">
                <div className="project-media">
                  {p.image ? (
                    <img src={p.image} alt={`${p.title} preview`} />
                  ) : (
                    <div className="project-placeholder" aria-hidden="true">
                      <span>Preview</span>
                    </div>
                  )}
                </div>
                <div className="project-body">
                  <h3 className="project-title">{p.title}</h3>
                  <p className="project-desc">{p.desc}</p>
                  <div className="project-footer">
                    <ul className="project-tags">
                      {p.tags.map(t => <li key={t}>{t}</li>)}
                    </ul>
                    <div className="project-actions">
                      <a href={p.links.demo} className="btn btn-demo" target="_blank" rel="noopener noreferrer">View</a>
                    </div>
                  </div>
                </div>
              </article>
            </div>
          ))}

        </div>
      </div>
    </section>
  );
}

export default Projects;